console.log(`sanity check app.js connected`);

$(document).ready(function(){

  // Get index of all pools
  $.ajax({
    method: 'GET',
    url: 'api/pools/',
    success: handleIndexSuccess,
    error: handleError
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
