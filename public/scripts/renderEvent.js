function renderEvent(poolDiv, element){
  // append event data to events div
  let eventDay = element.dayOfWeek.toLowerCase();
  console.log("event day is: ", eventDay);

  $(poolDiv).find(`.${eventDay}`).children().last().append(
    `
      <div class='event row' id='${element._id}'>
        <div class="col-xs-5 col-xs-offset-1">${element.title}:</div>
        <div class="col-xs-4"> ${element.startTime} - ${element.endTime}</div>
        <div class="col-xs-2">
          <button class='delete-event'>
            <span class='glyphicon glyphicon-remove'>
            </span>
          </button>
        </div>
      </div>
    `
  );
}
