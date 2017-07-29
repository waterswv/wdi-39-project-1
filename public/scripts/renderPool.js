console.log("renderPool.js is connected");

function renderPool(pool){
  console.log(pool.name, pool.monday);

  let poolHTML = `

  <!--Beginning of Pool Data-->
  <div class="pool col-xs-12" data-pool-id="${pool._id}">
    <div class="row">
      <!--Pool Info Column 1 Begin-->
      <div class="col-sm-6 col-md-4">
        <div class="pool-header clearfix">
          <button class="pool-delete-btn btn btn-default">Delete Pool</button>
          <h2>${pool.name}</h2>
        </div>
        <section class="contact">
          <p>${pool.address}</p>
          <p>${pool.phoneNumber}</p>
          <p>${pool.contactEmail}</p>
        </section>
        <section class="op-hours">
          <h3>Hours of Operation</h3>

          <div id="monday">
            <div class="row">
              <p class="col-sm-6">Monday</p>
              <p class="col-sm-6">${pool.monday}</p>
            </div>
          </div>

          <div id="tuesday">
            <div class="row">
              <p class="col-sm-6">Tuesday</p>
              <p class="col-sm-6">${pool.tuesday}</p>
            </div>
          </div>

          <div id="wednesday">
            <div class="row">
              <p class="col-sm-6">Wednesday</p>
              <p class="col-sm-6">${pool.wednesday}</p>
            </div>
          </div>

          <div id="thursday">
            <div class="row">
              <p class="col-sm-6">Thursday</p>
              <p class="col-sm-6">${pool.thursday}</p>
            </div>
          </div>

          <div id="friday">
            <div class="row">
              <p class="col-sm-6">Friday</p>
              <p class="col-sm-6">${pool.friday}</p>
            </div>
          </div>

          <div id="saturday">
            <div class="row">
              <p class="col-sm-6">Saturday</p>
              <p class="col-sm-6">${pool.saturday}</p>
            </div>
          </div>

          <div id="sunday">
            <div class="row">
              <p class="col-sm-6">Sunday</p>
              <p class="col-sm-6">${pool.sunday}</p>
            </div>
          </div>

        </section>
      </div> <!--Pool Info Column 1 End-->

      <div class="col-sm-6 col-md-4"> <!--Pool Info Column 2 Begin-->
        <section class="events">
          <!--
          <div data-pool-events-id='${pool._id}' class="clearfix">
          </div>
          -->

          <!-- ADD EVENT SECTION-->
          <div class="add-event">
            <h4>Add an Event</h4>
            <form action="index.html" method="post">
              <div class="row">
                <div class="col-sm-6"><input class="form-control" type="text" name="dayOfWeek" value="" placeholder="Day of Week" required></div>
                <div class="col-sm-6"><input class="form-control" type="text" name="title"  value="" placeholder="Title" required></div>
              </div>
              <div class="row">
                <div class="col-sm-6"><input class="form-control" type="text" name="startTime" value="" placeholder="Start Time"></div>
                <div class="col-sm-6"><input class="form-control" type="text" name="endTime" value="" placeholder="End Time"></div>
              </div>
              <div class="row">
                <div class="col-sm-6"><input class="form-control" type="text" name="description" value="" placeholder="Description"></div>
                <div class="col-sm-6"><input class="form-control submit" class="btn btn-default" type="submit" name="submit" value="Submit"></div>
              </div>
            </form>
          </div>
        </section>
      </div>
      <!-- Pool Info Column 2 End -->
      <!--Pool Info Map Section Begin-->
      <div class="col-sm-6 col-md-4">
        <section class="map">
          <div id="dummy-map">
          </div>
        </section>
      </div><!-- Pool Info Map Section End-->
    </div>
  </div><!--Pool Info End -->

  `;

  $('#insert-pool').prepend(poolHTML);
}
