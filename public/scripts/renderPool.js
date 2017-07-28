console.log("renderPool.js is connected");

function renderPool(pool){
  console.log(pool.name, pool.monday);

  let poolHTML = `
          <!--Beginning of Pool Data-->
          <div class="pool row" data-pool-id="${pool._id}">

            <!--Pool Info Column Begin-->
            <div class="col-sm-6 col-md-4">

              <div class="pool-header clearfix">
              <button class="pool-delete-btn">Delete Pool</button>
              <h2>${pool.name}</h2>
              </div>

              <section class="contact">
                <p>${pool.address}</p>
                <p>${pool.phoneNumber}</p>
                <p>${pool.contactEmail}</p>
              </section>

              <section class="op-hours">
                  <h3>Hours of Operation</h3>

                  <div class="row">
                    <p class="col-sm-6">Monday</p>
                    <p class="col-sm-6">${pool.monday}</p>
                  </div>
                  <div class="row">
                    <p class="col-sm-6">Tuesday</p>
                    <p class="col-sm-6">${pool.tuesday}</p>
                  </div>
                  <div class="row">
                    <p class="col-sm-6">Wednesday</p>
                    <p class="col-sm-6">${pool.wednesday}</p>
                  </div>
                  <div class="row">
                    <p class="col-sm-6">Thursday</p>
                    <p class="col-sm-6">${pool.thursday}</p>
                  </div>
                  <div class="row">
                    <p class="col-sm-6">Friday</p>
                    <p class="col-sm-6">${pool.friday}</p>
                  </div>
                  <div class="row">
                    <p class="col-sm-6">Saturday</p>
                    <p class="col-sm-6">${pool.saturday}</p>
                  </div>
                  <div class="row">
                    <p class="col-sm-6">Sunday</p>
                    <p class="col-sm-6">${pool.sunday}</p>
                  </div>
              </section>
            </div>
            <!--Pool Info Column End-->

            <!-- Pool Info Column Begin-->
            <div class="col-sm-6 col-md-4">

              <section class="events">
                <h3>Events and Schedule Alerts</h3>
                <div data-pool-events-id='${pool._id}'>
                </div>

                <!-- ADD EVENT FORM-->
                <div class="add-event">
                  <h4>Add an Event</h4>

                  <form action="index.html" method="post">

                    <div class="row">
                      <div class="col-sm-6"><input type="text" name="dayOfWeek" value="" placeholder="Day of Week"></div>
                      <div class="col-sm-6"><input type="text" name="title"  value="" placeholder="Title"></div>
                    </div>

                    <div class="row">
                      <div class="col-sm-6"><input type="text" name="startTime" value="" placeholder="Start Time"></div>
                      <div class="col-sm-6"><input type="text" name="endTime" value="" placeholder="End Time"></div>
                    </div>

                    <div class="row">
                      <div class="col-sm-6"><input type="text" name="description" value="" placeholder="Description"></div>
                      <div class="col-sm-6"><input type="submit" name="submit" value="Submit"></div>
                    </div>
                  </form>

                </div>

              </section>
            </div>
          <!-- Pool Info Column End -->


          <!--Pool Info Map Section Begin-->
            <div class="col-sm-6 col-md-4">
              <section class="map">
                <div id="dummy-map">

                </div>
              </section>
            </div>
          <!-- Pool Info Map Section End-->

        </div>
        <!--Pool Info End -->`;

  $('.main').prepend(poolHTML);
}
