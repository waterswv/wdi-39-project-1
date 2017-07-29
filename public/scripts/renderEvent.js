function renderEvent(eventsDiv, element){
  // append event data to events div
  $(eventsDiv).append(
    `<div class="row">
      <p class="col-sm-10">${element.dayOfWeek}: ${element.title} from ${element.startTime} to ${element.endTime}</p>
      <button class='delete-event col-sm-2' id='${element._id}'><span class='glyphicon glyphicon-remove'></span></button>
    </div>`);
}
