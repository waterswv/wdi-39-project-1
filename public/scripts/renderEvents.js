function renderEvents(pool){

  let eventsDiv = `[data-pool-events-id=${pool._id}]`;
  console.log("eventsDiv", eventsDiv );
  // for each event in the pool
  pool.events.forEach(function(element){
    // append events data to events div
    $(eventsDiv).append(`<p>${element.dayOfWeek}: ${element.title} from ${element.startTime} to ${element.endTime}</p>`);
  });
}
