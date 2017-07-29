function renderEvent(eventsDiv, element){
  // append event data to events div
  $('#monday').append(
    `
    <div col-sm-12>
      <div class="row">
        <p class="col-sm-6">${element.title}:</p>
        <p class="col-sm-4"> ${element.startTime} - ${element.endTime}</p>
        <button class='delete-event col-sm-2' id='${element._id}'><span class='glyphicon glyphicon-remove'></span></button>
      </div>
    </div>
    `);
}
