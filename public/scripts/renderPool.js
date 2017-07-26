console.log("renderPool.js is connected");

function renderPool(pool){
  console.log(pool.name, pool.monday);

  let poolHTML = `
          <!--Beginning of Pool Data-->
          <div class="pool row" data-pool-id="${pool._id}">

            <!--Pool Info Column Begin-->
            <div class="col-sm-6 col-md-4">

              <h2>${pool.name}</h2>
              <button class="pool-delete-btn">Delete Pool</button>

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

                  <!-- <div class="add-event">
                </div> -->
              </section>
            </div>
            <!--Pool Info Column End-->

            <!-- Pool Info Column Begin-->
            <div class="col-sm-6 col-md-4">

              <section class="contact">
                <p>${pool.address}</p>
                <p>${pool.phoneNumber}</p>
                <p>${pool.contactEmail}</p>
              </section>

              <section class="events">
                <h3>Events and Schedule Alerts</h3>
                <p>${pool.special}</p>
                <!-- <div class="add-event">
              </div> -->
              </section>
            </div>
          <!-- Pool Info Column End -->
          <!--
          <section class="map">
            <div id="dummy-map">
              <div>MAP</div>
            </div>
          </section> -->
        </div>
        <!--Pool Info End -->`;

  $('.main').prepend(poolHTML);
}
