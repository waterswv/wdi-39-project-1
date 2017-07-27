function renderEvent(eventsDiv, element){
  console.log("eventsDiv", eventsDiv);
  // append event data to events div
  $(eventsDiv).append(`<p>${element.dayOfWeek}: ${element.title} from ${element.startTime} to ${element.endTime}</p>`);
}
