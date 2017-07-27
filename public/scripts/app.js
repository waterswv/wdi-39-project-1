console.log(`sanity check app.js connected`);

$(document).ready(function(){

  // Get index of all pools
  $.ajax({
    method: 'GET',
    url: 'api/pools/',
    success: handleIndexSuccess,
    error: handleError
  });

  // add Pool event listener and ajax call
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

function handleIndexSuccess(poolsData){
  poolsData.forEach(function(pool){
    renderPool(pool);
    renderEvents(pool);
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

}

function handleNewPoolSuccess(newPool){
  console.log("new pool success", newPool);
  renderPool(newPool);
  renderEvents(newPool);
}

function handlePoolDeleteSuccess(deletedPool){
  let poolDiv = `[data-pool-id=${deletedPool._id}]`;
  $(poolDiv).hide('slow', function(){
    $(poolDiv).remove;
  });
  console.log("deleted a pool from db", deletedPool._id);
}

function handleError(err){
  console.log(err);
}
