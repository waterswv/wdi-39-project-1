console.log("renderPool.js is connected");

function renderPool(pool){
  console.log(pool.name, pool.monday);

  let poolHTML = `
          <!--Beginning of Pool Data-->
          <div class="pool row">

            <!--Pool Info Column Begin-->
            <div class="col-sm-3">

              <h2>${pool.name}</h2>

              <section class="op-hours">
                  <h3>Hours of Operation</h3>

                  <div class="row">
                    <p class="col-sm-6 col-xs-12">Monday</p>
                    <p class="col-sm-6 col-xs-12">${pool.monday}</p>
                  </div>
                  <div class="row">
                    <p class="col-sm-6 col-xs-12">Tuesday</p>
                    <p class="col-sm-6 col-xs-12">${pool.tuesday}</p>
                  </div>
                  <div class="row">
                    <p class="col-sm-6 col-xs-12">Wednesday</p>
                    <p class="col-sm-6 col-xs-12">${pool.wednesday}</p>
                  </div>
                  <div class="row">
                    <p class="col-sm-6 col-xs-12">Thursday</p>
                    <p class="col-sm-6 col-xs-12">${pool.thursday}</p>
                  </div>
                  <div class="row">
                    <p class="col-sm-6 col-xs-12">Friday</p>
                    <p class="col-sm-6 col-xs-12">${pool.friday}</p>
                  </div>
                  <div class="row">
                    <p class="col-sm-6 col-xs-12">Saturday</p>
                    <p class="col-sm-6 col-xs-12">${pool.saturday}</p>
                  </div>
                  <div class="row">
                    <p class="col-sm-6 col-xs-12">Sunday</p>
                    <p class="col-sm-6 col-xs-12">${pool.sunday}</p>
                  </div>

                  <!-- <div class="add-event">
                </div> -->
              </section>
            </div>
            <!--Pool Info Column End-->

            <!-- Pool Info Column Begin-->
            <div class="col-sm-3">

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

  $('.main').append(poolHTML);
}
