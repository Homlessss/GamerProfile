$(document).ready(function() {
  // $(".player-info").click(function(event){
  //     event.preventDefault();
  $(".main-body").html("");
  $(".main-body").append(`
            <div class="row">
                <div class="col-md-12 text-center">
                    <form id="search" method="POST">
                        <div class="form-group">
                            <input type="text" name="name" id="keyword" class="form-control" required>
                            <br>
                            <input type="submit" class="btn btn-primary form-control" value="Submit"/>
                        </div>
                    </form>
                </div>
            </div>
    <div class="row">
        <div class="col-md-12" id="player-list">
          
        </div>
    </div>`);
  $("#search").submit(function(event) {
    event.preventDefault();
    $("#player-list").html("");
    let inputVal = $("#keyword").val();
    str1 = inputVal.slice(0, 1);
    str2 = inputVal.slice(1);
    inputVal = str1.toUpperCase() + str2.toLowerCase();
    console.log(inputVal);
    $.ajax({
      type: "GET",
      url: `http://localhost:3000/api/player?name=${inputVal}`,
      success: function(data) {
        if (data && data.data) {
          for (var i = 0; i < data.data.length; i++) {
            if (data.data[i].name === inputVal) {
              $("#player-list").append(`
                        <div class="col-12 mt-3 mb-3">
                            <div class="row">
                                <div class="col-3">
                                    <h3 class="text-success">${data.data[i].name}</h3>
                                    <img class="image-placeholder" src=" "></img>
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
                                    <h3>Biography</h3>
                                    <p>${data.data[i].biography}</p>
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
  });
});
