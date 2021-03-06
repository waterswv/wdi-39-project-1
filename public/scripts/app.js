console.log(`sanity check app.js connected`);

$(document).ready(function(){

  // Get index of all pools in the database
  $.ajax({
    method: 'GET',
    url: 'api/pools/',
    success: handleIndexSuccess,
    error: handleError
  });

  // Add pool event listener and ajax call
  $('#add-pool form').on('submit', function(e){
    e.preventDefault();
    let data = $(this).serialize();
    $.ajax({
      method: 'POST',
      url: '/api/pools/',
      data: data,
      success: handleNewPoolSuccess,
      error: handleError
    });
    $(this).trigger('reset');
  });

  // Admin Log In to toggle admin controls in and out of view
  $('#admin').on('click', function(){
    toggleAdmin();
  });

});

// Any time there's an ajax call, re-attach all the event listeners
//  Event listeners are removed at the end of each handleSuccess function
//  They are re-attached here when ajax calls are complete
//  This process is to ensure that the listeners are always applied to elements added to the page (add pool, add event), but not applied multiple times resulting in functions being run more times than intended

$(document).ajaxComplete(listenDeletePool);
$(document).ajaxComplete(listenAddEvent);
$(document).ajaxComplete(listenDeleteEvent);
$(document).ajaxComplete(listenDayClick);

function handleIndexSuccess(poolsData){
  // Render pool data to page
  poolsData.forEach(function(pool){
    renderPool(pool);
    let poolDiv = `[data-pool-id=${pool._id}]`;
    // For each pool, render the events for that pool
    pool.events.forEach(function(element){
      console.log("(1)EVENT load element is: ", element);
      renderEvent(poolDiv, element);
    });

    renderTags(poolDiv, pool);

    console.log('(3)the lat is ', pool.maps.lat);

    let theLocation = {
      lat: pool.maps.lat,
      lng: pool.maps.long
    };
    let map = new google.maps.Map(document.getElementById('dummy-map'), {
      zoom: 12,
      center: theLocation
    });
    let marker = new google.maps.Marker({
        position: theLocation,
        map: map,
      });
  });
  // After indexing all the pools, hide admin and show only the current day
  hideAdmin();
  // For now this simply shows Monday (Later it will show the current day of week on which the site is visited)
  showCurrentDay();
}

function listenDeletePool(){
  $('.pool-delete-btn').on('click', function(e){
    e.preventDefault();
    let id = $(this).closest('.pool').data('pool-id');
    $.ajax({
      method: 'DELETE',
      url: `/api/pools/${id}`,
      success: handlePoolDeleteSuccess,
      error: handleError
    });
  });
}

function listenAddEvent(){
  $('.add-event form').on('submit', function(e){
    e.preventDefault();
    let data = $(this).serialize();
    let id = $(this).closest('.pool').data('pool-id');
    $.ajax({
      method: 'POST',
      url: `/api/pools/${id}/events`,
      data: data,
      success: handleNewEventSuccess,
      error: handleError
    });
    $(this).trigger('reset');
  });
}

// Event listener for deleting an event
function listenDeleteEvent(){
  $('.delete-event').on('click', function(e){
    e.preventDefault();
    let eventId = $(this).parent().parent().attr('id');
    let poolId = $(this).closest('.pool').data('pool-id');
    $.ajax({
      method: 'DELETE',
      url: `/api/pools/${poolId}/events/${eventId}`,
      success: handleEventDeleteSuccess,
      error: handleError
    });
  })
}

function handleNewPoolSuccess(newPool){
  renderPool(newPool);
  // get the div for the pool where we'll put events
  let poolDiv = `[data-pool-id=${newPool._id}]`;
  newPool.events.forEach(function(element){
    renderEvent(poolDiv, element);
  });
  // remove event listeners such that adding event listeners accross page on ajax complete does not duplicate event listeners
  removeEventListeners();
}

function handlePoolDeleteSuccess(deletedPool){
  let poolDiv = `[data-pool-id=${deletedPool._id}]`;
  $(poolDiv).hide('slow', function(){
    $(poolDiv).remove;
  });
  removeEventListeners();
}

function handleNewEventSuccess(pool){
  // create the target for where we're going to place the new event
  let poolDiv = `[data-pool-id=${pool._id}]`;
  // set event to add to be the last event listed in the pool response
  let eventToAdd = pool.events[pool.events.length-1];
  renderEvent(poolDiv, eventToAdd);
  removeEventListeners();
}

function handleEventDeleteSuccess(eventDeleted){
    $(`#${eventDeleted._id}`).hide('slow', function(){
      $(`#${eventDeleted._id}`).remove();
    });
  removeEventListeners();
}

function handleError(err){
  console.log(err);
}

function listenDayClick(){
  // toggle events for a day of the week clicked
  $('.day-of-week').on('click', function(e){
    e.preventDefault();
    console.log('clicked a day of week div');
    $(this).next().toggle(200);
    // toggle the show and hide glyphicons
    $(this).find('.glyphicon').toggle();
  });
}

function toggleAdmin(){
  $('.pool-header button').toggle();
  $('.delete-event').toggle();
  $('#add-pool').toggle();
  $('.add-event').toggle();
}

function hideAdmin(){
  $('.pool-header button').hide();
  $('.delete-event').hide();
  $('#add-pool').hide();
  $('.add-event').hide();
}

function showCurrentDay(){
  $('.event-holder').hide();
  $('.monday .event-holder').show();
  $('.monday').find('.glyphicon-plus').toggle();
  $('.monday').find('.glyphicon-minus').toggle();
}

// remove event listeners such that adding event listeners accross whole page on ajax complete does not duplicate event listeners
function removeEventListeners(){
  $('.pool-delete-btn').off();
  $('.add-event form').off();
  $('.delete-event').off();
  $('.day-of-week').off();
}
