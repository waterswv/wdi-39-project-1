function renderEvent(eventsDiv, element){
  // console.log("eventsDiv", eventsDiv, "element", element);
  // append event data to events div
  $(eventsDiv).append(`<p>${element.dayOfWeek}: ${element.title} from ${element.startTime} to ${element.endTime} <button class='delete-event' id='${element._id}'>Delete Event</button></p>`);
}
