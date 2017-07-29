function renderEvent(eventsDiv, element){
  // append event data to events div
  $('#saturday').append(
    `
      <div class="row event">
        <p class="col-sm-6">${element.title}:</p>
        <p class="col-sm-4"> ${element.startTime} - ${element.endTime}</p>
        <button class='delete-event col-sm-2' id='${element._id}'><span class='glyphicon glyphicon-remove'></span></button>
      </div>
    `);
}
