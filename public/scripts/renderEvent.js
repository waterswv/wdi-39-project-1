function renderEvent(poolDiv, element){
  // append event data to events div
  let eventDay = element.dayOfWeek.toLowerCase();
  console.log("event day is: ", eventDay);

  $(poolDiv).append(
    `
      <div class="row event">
        <p class="col-sm-6">${element.title}:</p>
        <p class="col-sm-4"> ${element.startTime} - ${element.endTime}</p>
        <button class='delete-event col-sm-2' id='${element._id}'><span class='glyphicon glyphicon-remove'></span></button>
      </div>
    `);
}
