var field;
$(document).ready(function() {
  // $(".player-info").click(function(event){
  //     event.preventDefault();

  $("#search").click(function(event) {
    event.preventDefault();
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
          strName = data.data[i].name;
          str1 = strName.slice(0, 1);
          str2 = strName.slice(1);
          strName = str1.toUpperCase() + str2;

          strTeam = data.data[i].team;
          str1 = strTeam.slice(0, 1);
          str2 = strTeam.slice(1);
          strTeam = str1.toUpperCase() + str2;

          strLane = data.data[i].name;
          str1 = strLane.slice(0, 1);
          str2 = strLane.slice(1);
          strLane = str1.toUpperCase() + str2;

          strNationality = data.data[i].name;
          str1 = strNationality.slice(0, 1);
          str2 = strNationality.slice(1);
          strNationality = str1.toUpperCase() + str2;
          if (data.data[i].team === inputVal) {
            $("#player-list").append(`
            <div class="content">
            <div class="info">
              <p id="infoName">${strName}</p>
              <p id="infoLane">${strLane}</p>
              <p id="infoTeam">Team: ${strTeam}</p>
              <p id="infoNation">Nationality: ${strNationality}</p>
              
            </div>
            <div class="imgContent">
              <img class="image-placeholder imgProfile" src="${data.data[i].image}"></img>
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
          strName = data.data[i].name;
          str1 = strName.slice(0, 1);
          str2 = strName.slice(1);
          strName = str1.toUpperCase() + str2;

          strTeam = data.data[i].team;
          str1 = strTeam.slice(0, 1);
          str2 = strTeam.slice(1);
          strTeam = str1.toUpperCase() + str2;

          strLane = data.data[i].name;
          str1 = strLane.slice(0, 1);
          str2 = strLane.slice(1);
          strLane = str1.toUpperCase() + str2;

          strNationality = data.data[i].name;
          str1 = strNationality.slice(0, 1);
          str2 = strNationality.slice(1);
          strNationality = str1.toUpperCase() + str2;
          if (data.data[i].name === inputVal) {
            $("#player-list").append(`
          <div class="content">
                <div class="info">
                  <p id="infoName">${strName}</p>
                  <p id="infoLane">${strLane}</p>
                  <p id="infoTeam">Team: ${strTeam}</p>
                  <p id="infoNation">Nationality: ${strNationality}</p>
                  
                </div>
                <div class="imgContent">
                  <img class="image-placeholder imgProfile" src="${data.data[i].image}"></img>
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
