var db = require("./models");

var poolList =[];

poolList.push({
  name: 'UCSF Bakar Fitness Center',
  address: '1675 Owens St. San Francisco, CA 94158',
  phoneNumber: '415-514-4545',
  contactEmail: 'info@ucsf.edu',
  monday: '8AM - 7PM',
  tuesday: '8AM - 7PM',
  wednesday: '8AM - 7PM',
  thursday: '8AM - 7PM',
  friday: '8AM - 7PM',
  saturday: '10AM - 5PM',
  sunday: '10AM - 5PM',
  map: 'https://www.google.com/maps/place/Bakar+Fitness+%26+Recreation+Center+at+UCSF+Mission+Bay/@37.7682497,-122.3954389,17z/data=!3m1!4b1!4m5!3m4!1s0x808f7fcef9a8173f:0x1d557fc43e915386!8m2!3d37.7682497!4d-122.3932502',
  special: 'Swim Practice Tuesdays 5:30PM - 7PM'
});

poolList.push({
  name: ' Pomeroy Rec & Rehab Pool',
  address: '207 Skyline Blvd San Francisco, CA 94132',
  phoneNumber: '415-665-4241',
  contactEmail: 'info@prrcsf.org',
  monday: '8AM - 7PM',
  tuesday: '8AM - 7PM',
  wednesday: '8AM - 7PM',
  thursday: '8AM - 7PM',
  friday: '8AM - 7PM',
  saturday: '10AM - 5PM',
  sunday: '10AM - 5PM',
  map: 'https://www.google.com/maps/place/Pomeroy+Recreation+%26+Rehabilitation+Center/@37.7300593,-122.5039161,17z/data=!3m1!4b1!4m5!3m4!1s0x808f7d725580bfe1:0xcc686f35d12e9a9d!8m2!3d37.7300624!4d-122.5014317',
  special: 'Swim Practice Tuesdays 5:30PM - 7PM'
});

poolList.push({
  name: 'Garfield Swimming Pool',
  address: '1271 Treat St San Francisco, CA 94110',
  phoneNumber: '415-695-5001',
  contactEmail: 'info@sfrecpark.org',
  monday: '8AM - 7PM',
  tuesday: '8AM - 7PM',
  wednesday: '8AM - 7PM',
  thursday: '8AM - 7PM',
  friday: '8AM - 7PM',
  saturday: '10AM - 5PM',
  sunday: '10AM - 5PM',
  map: 'https://google.com/maps/place/Garfield+Pool/@37.7500704,-122.4141837,17z/data=!3m1!4b1!4m5!3m4!1s0x808f7e4f57d753cd:0x961382f699804bc6!8m2!3d37.7500704!4d-122.411995',
  special: 'Swim Practice Tuesdays 5:30PM - 7PM'
});

poolList.push({
  name: 'Mission Pool',
  address: '101 Linda St San Francisco, CA 94110',
  phoneNumber: '415-641-2841',
  contactEmail: 'info@sfrecpark.org',
  monday: '8AM - 7PM',
  tuesday: '8AM - 7PM',
  wednesday: '8AM - 7PM',
  thursday: '8AM - 7PM',
  friday: '8AM - 7PM',
  saturday: '10AM - 5PM',
  sunday: '10AM - 5PM',
  map: 'https://www.google.com/maps/place/Mission+Pool/@37.7594696,-122.424856,17z/data=!3m1!4b1!4m5!3m4!1s0x808f7e22b49293c9:0x4220f652e9211f5f!8m2!3d37.7594696!4d-122.4226673',
  special: 'Swim Practice Tuesdays 5:30PM - 7PM'
});

var eventList = [];

eventList.push({
  dayOfWeek: 'Monday',
  title: 'Swim Team Practice',
  description: 'U-17 Boys & Girls Practice',
  startTime: '4PM',
  endTime: '5PM',
  isRecurring: true
});

eventList.push({
  dayOfWeek: 'Tuesday',
  title: 'Swim Meets',
  description: 'City Meet Invitational, all qualifiers',
  startTime: '3PM',
  endTime: '7PM',
  isRecurring: true
});

eventList.push({
  dayOfWeek: 'Friday',
  title: 'Adult Lessons',
  description: '3 Swim lanes set aside for Adult lessons',
  startTime: '6PM',
  endTime: '8PM',
  isRecurring: true
});

poolList.forEach(function(pool){
  pool.events = eventList;
});

// Empty Pools DB & then add seed list pools data via create method.
db.Pool.remove({}, function(err, pools){

  db.Pool.create(poolList, function(err, pools){
    if (err) { return console.log('ERROR', err); }
    console.log("all pools:", pools);
    console.log("created", pools.length, "pools");
    process.exit();
  });
});
