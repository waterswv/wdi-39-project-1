function renderTags(eventsDiv, element){
  // append event data to events div
  for (let i = 0; i < element.tags.length; i++){
    console.log('(2)the pool tag is: ', element.tags.length);
    $('.pool-tags').append(`<button type="button" class="btn btn-info btn-sm">
    <span class="glyphicon glyphicon-tag" aria-hidden="true"></span>` + element.tags[i] + " </button>" + `<span> </span>`);
  }
}
