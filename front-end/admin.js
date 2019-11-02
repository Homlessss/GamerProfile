var n = 0;
var id = new Array();
var btn_id;
var btn_id2;

$(document).ready(function() {
  var $loading = $(".spinner-border").hide();
  $(document)
    .ajaxStart(function() {
      $loading.show();
    })
    .ajaxStop(function() {
      $loading.hide();
    });
  $.ajax({
    type: "GET",
    url: `http://localhost:3000/api/player`,
    success: function(data) {
      if (data && data.data) {
        console.log(data);
        n = data.data.length;
        console.log(n);

        for (let i = 0; i < data.data.length; i++) {
          id[i] = data.data[i]._id;

          $("#list-content").append(`
            <tr class="row  all-content" id="row${i}">

            <td class="col-lg-3" id="nameData">${data.data[i].name}</td>
            <td class="col-lg-2" id="teamData">${data.data[i].team}</td>
            <td class="col-lg-2" id="nationalityData">${data.data[i].nationality}</td>
            <td class="col-lg-3" id="imageData"><img src="${data.data[i].image}" alt="Avatar" height="90"></td>
            <td class="col-lg-1" id="laneData">${data.data[i].lane}</td>
            <td class="col-lg-1" id="td-btn">
              <button class="btn btn-outline-secondary btn-edit" id="btn-edit${i}" onclick="editData(this.id)"
              data-toggle="modal"
              data-target="#editModal">Edit</button>

              <button class="btn btn-outline-secondary btn-delete" id="btn-delete${i}" onclick="deleteData(this.id)" 
              data-toggle="modal"
              data-target="#deleteModal">Delete</button>
            </td>
            </tr>
            
            `);
        }
        console.log(id);
      }
    }
  });
  $("#addModal").on("show.bs.modal", function(event) {
    var button = $(event.relatedTarget); // Button that triggered the modal
    var recipient = button.data("whatever"); // Extract info from data-* attributes
    // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
    // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
    var modal = $(this);
    modal.find(".modal-title").text("Information");
  });
  $("#addPlayer").click(function() {
    if (!$("#add-name").val() && !$("#add-team").val()) {
      alert("Missing input!");
    } else {
      $.ajax({
        type: "POST",
        url: `http://localhost:3000/api/player`,
        contentType: "application/json",
        data: JSON.stringify({
          name: $("#add-name").val(),
          team: $("#add-team").val(),
          nationality: $("#add-nationality").val(),
          lane: $("#add-lane").val(),
          image: $("#add-img").val()
        }),
        success: function(data) {
          console.log(data);
        },
        error: function(err) {
          console.log("e", err);
        }
      });
      $("#list-content").append(`
            <tr class="row all-content" id="row${n}">
            <td class="col-lg-3 hover-data">${$("#add-name").val()}</td>
            <td class="col-lg-2">${$("#add-team").val()}</td>
            <td class="col-lg-2">${$("#add-nationality").val()}</td>
            <td class="col-lg-3"><img src="${$(
              "#add-img"
            ).val()}" alt="Avatar" height="90"></td>
            <td class="col-lg-1">${$("#add-lane").val()}</td>
            <td class="col-lg-1 " id="td-btn">
              <button class="btn btn-outline-secondary btn-edit" id="btn-edit${n}" onclick="editData(this.id)"
              data-toggle="modal"
              data-target="#editModal">Edit</button>

              <button class="btn btn-outline-secondary btn-delete" id="btn-delete${n}" onclick="deleteData(this.id)"
              data-toggle="modal"
              data-target="#deleteModal">Delete</button>
            </td>
            </tr>
            `);
      n++;
      document.elementFromPoint(0, 0).click();
    }
  });
  // for chạy từ btn-edit1 -> hết
  // nếu bằng id lấy dc từ nút delete thì dừng và lấy i, rồi xóa id

  $("#exampleModal").on("show.bs.modal", function(event) {
    var button = $(event.relatedTarget); // Button that triggered the modal
    var recipient = button.data("whatever"); // Extract info from data-* attributes
    // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
    // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
    var modal = $(this);
    modal.find(".modal-title").text("Information");
  });
  function test() {
    var t1 = document.getElementsByClassName("btn-delete");
  }
});
function deleteData(btn_id) {
  for (let i = 0; i < n; i++) {
    if (btn_id === `btn-delete${i}`) {
      $("#deleteConf").click(function() {
        {
          // $.ajax({
          //   type: "DELETE",
          //   url: `http://localhost:3000/api/player/${id[i]}`,
          //   contentType: "application/json",
          //   success: console.log("done"),
          //   error: console.log("e")
          // });
          $("tr").remove(`#row${i}`);
          document.elementFromPoint(0, 0).click();
        }
      });
    }
  }
}
function editData(btn_id2) {
  for (let i = 0; i < n; i++) {
    if (btn_id2 === `btn-edit${i}`) {
      $("#updatePlayer").click(function() {
        console.log(`${id[i]}`);
        // $.ajax({
        //   type: "PUT",
        //   url: `http://localhost:3000/api/player/${id[i]}`,
        //   contentType: "application/json",
        //   data: JSON.stringify({
        //     name: $("#update-name").val(),
        //     team: $("#update-team").val(),
        //     nationality: $("#update-nationality").val(),
        //     lane: $("#update-lane").val(),
        //     image: $("#update-img").val()
        //   }),
        //   success: function(data) {
        //     console.log(data);
        //   },
        //   error: function(err) {
        //     console.log("e", err);
        //   }
        // });
        if ($("#update-name").val()) {
          document.getElementById("nameData").innerHTML = $(
            "#update-name"
          ).val();
        }
        if ($("#update-team").val()) {
          document.getElementById("teamData").innerHTML = $(
            "#update-team"
          ).val();
        }
        if ($("#update-nationality").val()) {
          document.getElementById("nationalityData").innerHTML = $(
            "#update-nationality"
          ).val();
        }
        if ($("#update-lane").val()) {
          document.getElementById("laneData").innerHTML = $(
            "#update-lane"
          ).val();
        }
        if ($("#update-img").val()) {
          document.getElementById("imageData").innerHTML = $(
            "#update-img"
          ).val();
        }
        document.elementFromPoint(0, 0).click();
      });
    }
  }
}
