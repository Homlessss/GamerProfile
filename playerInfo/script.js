var field;
$(document).ready(function() {
  // $(".player-info").click(function(event){
  //     event.preventDefault();

  $("#search").click(function(event) {
    event.preventDefault();
    document.getElementById("hide").style.display = "none";
    $("#player-list").html("");
    let inputVal = $("#keyword").val();
    console.log("here");
    inputVal = inputVal.toLowerCase();
    getTeam(inputVal);
    getPlayer(inputVal);
  });
});
function getTeam(inputVal) {
  console.log(`${field}`);
  console.log(`${inputVal}`);
  $.ajax({
    type: "GET",
    url: `http://localhost:3000/api/player?team=${inputVal}`,
    success: function(data) {
      console.log(data);
      if (data && data.data) {
        for (var i = 0; i < data.data.length; i++) {
          if (data.data[i].team === inputVal) {
            $("#player-list").append(`
                      <div class="col-12 mt-3 mb-3">
                          <div class="row">
                              <div class="col-3">
                                  <h3 class="text-success">${data.data[i].name}</h3>
                                  <img class="image-placeholder" src="${data.data[i].image} "></img>
                                  // them src img
                                  <h4>Background Information</h4>
                                  <table>
                                      <tr>
                                          <th>Team</th>
                                          <td>${data.data[i].team}</td>
                                      </tr>
                                      <tr>
                                          <th>Natiionality</th>
                                          <td>${data.data[i].nationality}</td>
                                      </tr>
                              </div>
                              <div class="col-9">
                                  <h3>Lane</h3>
                                  <p>${data.data[i].lane}</p>
                              </div>
                          </div>
                          `);
          }
        }
      }
    },
    error: function(err) {
      console.log(err);
    }
  });
}
function getPlayer(inputVal) {
  console.log(`${field}`);
  console.log(`${inputVal}`);
  $.ajax({
    type: "GET",
    url: `http://localhost:3000/api/player?name=${inputVal}`,
    success: function(data) {
      console.log(data);
      if (data && data.data) {
        for (var i = 0; i < data.data.length; i++) {
          if (data.data[i].name === inputVal) {
            $("#player-list").append(`
                      <div class="col-12 mt-3 mb-3">
                          <div class="row">
                              <div class="col-3">
                                  <h3 class="text-success">${data.data[i].name}</h3>
                                  <img class="image-placeholder" src="${data.data[i].image}"></img>
                                  // them src img
                                  <h4>Background Information</h4>
                                  <table>
                                      <tr>
                                          <th>Team</th>
                                          <td>${data.data[i].team}</td>
                                      </tr>
                                      <tr>
                                          <th>Nationality:</th>
                                          <td>${data.data[i].nationality}</td>
                                      </tr>
                              </div>
                              <div class="col-9">
                                  <h3>Lane</h3>
                                  <p>${data.data[i].lane}</p>
                              </div>
                          </div>
                          `);
          }
        }
      }
    },
    error: function(err) {
      console.log(err);
    }
  });
}
