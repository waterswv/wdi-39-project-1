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

});

// any time there's an ajax call, re-attach listeners on all the delete pool btns
$(document).ajaxComplete(listenDeletePool);
$(document).ajaxComplete(listenAddEvent);


function handleIndexSuccess(poolsData){
  poolsData.forEach(function(pool){
    renderPool(pool);
    let eventsDiv = `[data-pool-events-id=${pool._id}]`;
    pool.events.forEach(function(element){
      console.log("EVENT load");
      renderEvent(eventsDiv, element);
    });
  });
  // delete Pool event listener and ajax call
  // must load AFTER initial rendering of pools or there is nothing to bind to
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

function handleNewPoolSuccess(newPool){
  console.log("new pool success", newPool);
  renderPool(newPool);
  // get the div for the pool where we'll put events
  let eventsDiv = `[data-pool-events-id=${newPool._id}]`;
  newPool.events.forEach(function(element){
    console.log("new pool success event");
    renderEvent(eventsDiv, element);
  });
  // remove event listeners such that adding event listeners accross page on ajax complete does not duplicate event listeners
  $('.pool-delete-btn').off();
  $('.add-event form').off();
}

function handlePoolDeleteSuccess(deletedPool){
  let poolDiv = `[data-pool-id=${deletedPool._id}]`;
  $(poolDiv).hide('slow', function(){
    $(poolDiv).remove;
  });
  console.log("deleted a pool from db", deletedPool._id);
  // remove event listeners such that adding event listeners accross page on ajax complete does not duplicate event listeners
  $('.pool-delete-btn').off();
  $('.add-event form').off();
}

function handleNewEventSuccess(pool){
  let id = pool._id;
  console.log("new event stored in pool with id: ", id)
  let eventsDiv = `[data-pool-events-id=${pool._id}]`;
  console.log("new event to put in eventsDiv", eventsDiv);
  // let event to add be the last event listed in the pool response
  let eventToAdd = pool.events[pool.events.length-1];
  renderEvent(eventsDiv, eventToAdd);
  // remove event listeners such that adding event listeners accross page on ajax complete does not duplicate event listeners
  $('.pool-delete-btn').off();
  $('.add-event form').off();
}

function handleError(err){
  console.log(err);
}
