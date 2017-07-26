console.log(`sanity check app.js connected`);

$(document).ready(function(){

  // Get index of all pools
  $.ajax({
    method: 'GET',
    url: 'api/pools/',
    success: handleIndexSuccess,
    error: handleError
  });

  $('#add-pool form').on('submit', function(e){
    e.preventDefault();
    console.log("add-pool form submitted");
    let data = $(this).serialize();
    console.log(data);
    // Add new pool
    // $.ajax({
    //   method: 'POST',
    //   url: 'api/pools/',
    //   data: $('this').serialize,
    //   success: handleNewPoolSuccess,
    //   error: handleError
    // });
  });

});

function handleIndexSuccess(poolsData){
  poolsData.forEach(function(pool){
    renderPool(pool);
  });
}

function handleError(err){
  console.log(err);
}
