console.log(`sanity check app.js connected`);

$(document).ready(function(){

  // GET INDEX OF ALL POOLS
  $.ajax({
    method: 'GET',
    url: 'api/pools/',
    success: handleIndexSuccess,
    error: handleError
  });

  // ADD POOL FORM EVENT LISTENER AND AJAX CALL
  $('#add-pool form').on('submit', function(e){
    e.preventDefault();
    console.log("add-pool form submitted");
    let data = $(this).serialize();
    console.log(data);
    $.ajax({
      method: 'POST',
      url: '/api/pools/',
      data: data,
      success: handleNewPoolSuccess,
      error: handleError
    });
    $(this).trigger('reset');
  });

  // "Admin Log In" to toggle admin controls in and out of view
  $('#admin').on('click', function(){
    toggleAdmin();
  });

});

// any time there's an ajax call, re-attach listeners on all the delete pool btns
$(document).ajaxComplete(listenDeletePool);
$(document).ajaxComplete(listenAddEvent);
$(document).ajaxComplete(listenDeleteEvent);
$(document).ajaxComplete(listenDayClick);


function handleIndexSuccess(poolsData){
  // Render Pool data to page
  poolsData.forEach(function(pool){
    renderPool(pool);
    let poolDiv = `[data-pool-id=${pool._id}]`;
    pool.events.forEach(function(element){
      // console.log("EVENT load");
      // console.log(pool);
      renderEvent(poolDiv, element);
    });
    console.log('the lat is ', pool.maps.lat);

    // Insert Google Map
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
  // After indexing all the pools, show only the current day
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
    console.log("add-event form submitted");
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
    console.log("id of btn: ", eventId, "poolId", poolId);
    $.ajax({
      method: 'DELETE',
      url: `/api/pools/${poolId}/events/${eventId}`,
      success: handleEventDeleteSuccess,
      error: handleError
    });
  })
}

function handleNewPoolSuccess(newPool){
  console.log("new pool success", newPool);
  renderPool(newPool);
  // get the div for the pool where we'll put events
  let poolDiv = `[data-pool-id=${newPool._id}]`;
  newPool.events.forEach(function(element){
    console.log("new pool success event");
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
  // console.log("deleted a pool from db", deletedPool._id);
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
  console.log("id of Deleted event: ", eventDeleted._id);

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
  });
}
// remove event listeners such that adding event listeners accross page on ajax complete does not duplicate event listeners
function removeEventListeners(){
  $('.pool-delete-btn').off();
  $('.add-event form').off();
  $('.delete-event').off();
  $('.day-of-week').off();
}

function toggleAdmin(){
  $('.pool-header button').toggle();
  $('.delete-event').toggle();
  $('#add-pool').toggle();
  $('.add-event').parent().parent().toggle();
}

function showCurrentDay(){
  $('.day-of-week').next().hide();
  // $('.monday').children().last().show();
}
