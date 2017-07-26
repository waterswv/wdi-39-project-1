let mongoose = require('mongoose'),
  Schema = mongoose.Schema;

  let EventsSchema = new Schema ({
    dayOfWeek: String,
    date: Date,
    title: String,
    description: String,
    startTime: String,
    endTime: String,
    isRecurring: Boolean

  })

let Events = mongoose.model('Events', EventsSchema);

module.exports = Events;
