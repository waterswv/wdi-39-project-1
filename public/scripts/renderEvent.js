function renderEvent(poolDiv, element){
  // append event data to events div
  let eventDay = element.dayOfWeek.toLowerCase();
  console.log("event day is: ", eventDay);

  $(poolDiv).find(`.${eventDay}`).append(
    `
      <div class="row event">
        <div class="col-xs-5 col-xs-offset-1">${element.title}:</div>
        <div class="col-xs-4"> ${element.startTime} - ${element.endTime}</div>
        <div class="col-xs-2">
          <button class='delete-event' id='${element._id}'>
            <span class='glyphicon glyphicon-remove'>
            </span>
          </button>
        </div>
      </div>
    `);
}
