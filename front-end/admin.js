var n = 0;
var id = new Array();

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
            <tr class="row  all-content" id="row${id[i]}">

            <td class="col-lg-3" id="nameData${id[i]}">${data.data[i].name}</td>
            <td class="col-lg-2" id="teamData${id[i]}">${data.data[i].team}</td>
            <td class="col-lg-2" id="nationalityData${id[i]}">${data.data[i].nationality}</td>
            <td class="col-lg-3" id="imageData${id[i]}"><img src="${data.data[i].image}" alt="Avatar" height="90"></td>
            <td class="col-lg-1" id="laneData${id[i]}">${data.data[i].lane}</td>
            <td class="col-lg-1" id="td-btn">
              <button class="btn btn-outline-secondary btn-edit" id="btn-edit${id[i]}" onclick="editData('${id[i]}')"
              data-toggle="modal"
              data-target="#editModal">Edit</button>

              <button class="btn btn-outline-secondary btn-delete" id="btn-delete${id[i]}" onclick="deleteData('${id[i]}')" 
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
          console.log("POST", data);
          id.push(data.data._id);
          $("#list-content").append(`
            <tr class="row all-content" id="row${data.data._id}">
            <td class="col-lg-3" id="nameData${data.data._id}">${$(
            "#add-name"
          ).val()}</td>
            <td class="col-lg-2" id="teamData${data.data._id}">${$(
            "#add-team"
          ).val()}</td>
            <td class="col-lg-2" id="nationalityData${data.data._id}">${$(
            "#add-nationality"
          ).val()}</td>
            <td class="col-lg-3" id="imageData${data.data._id}"><img src="${$(
            "#add-img"
          ).val()}" alt="Avatar" height="90"></td>
            <td class="col-lg-1" id="laneData${data.data._id}">${$(
            "#add-lane"
          ).val()}</td>
            <td class="col-lg-1 " id="td-btn">
              <button class="btn btn-outline-secondary btn-edit" id="btn-edit${
                data.data._id
              }" onclick="editData('${data.data._id}')"
              data-toggle="modal"
              data-target="#editModal">Edit</button>

              <button class="btn btn-outline-secondary btn-delete" id="btn-delete${
                data.data._id
              }" onclick="deleteData('${data.data._id}')"
              data-toggle="modal"
              data-target="#deleteModal"
              >Delete</button>
            </td>
            </tr>
            `);
          n++;
        },
        error: function(err) {
          console.log("e", err);
        }
      });
      n++;
      document.elementFromPoint(0, 0).click();
    }
  });

  $("#editModal").on("show.bs.modal", function(event) {
    var button = $(event.relatedTarget); // Button that triggered the modal
    var recipient = button.data("whatever"); // Extract info from data-* attributes
    // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
    // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
    var modal = $(this);
    modal.find(".modal-title").text("Edit");
  });
});
var btn_id;
var btn_id2;
var selectedId;

function deleteData(btn_id) {
  selectedId = btn_id;
  btn_id = 0;
}

function deleteFunc(id) {
  if (!id) return;
  $.ajax({
    type: "DELETE",
    url: `http://localhost:3000/api/player/${id}`,
    contentType: "application/json",
    success: function(data) {
      $("tr").remove(`#row${id}`);
    },
    error: console.log("e", error)
  });
  document.elementFromPoint(0, 0).click();
}

function editData(btn_id2) {
  selectedId = btn_id2;
  btn_id2 = 0;
}

function updateData(id) {
  if (!id) return;
  $.ajax({
    type: "PUT",
    url: `http://localhost:3000/api/player/${id}`,
    contentType: "application/json",
    data: JSON.stringify({
      name: $("#update-name").val(),
      team: $("#update-team").val(),
      nationality: $("#update-nationality").val(),
      lane: $("#update-lane").val(),
      image: $("#update-img").val()
    }),
    success: function(data) {
      if ($("#update-name").val()) {
        document.getElementById(`nameData${id}`).innerHTML = $(
          "#update-name"
        ).val();
      }
      if ($("#update-team").val()) {
        document.getElementById(`teamData${id}`).innerHTML = $(
          "#update-team"
        ).val();
      }
      if ($("#update-nationality").val()) {
        document.getElementById(`nationalityData${id}`).innerHTML = $(
          "#update-nationality"
        ).val();
      }
      if ($("#update-lane").val()) {
        document.getElementById(`laneData${id}`).innerHTML = $(
          "#update-lane"
        ).val();
      }
      if ($("#update-img").val()) {
        document.getElementById(`imageData${id}`).innerHTML = $(
          "#update-img"
        ).val();
      }
      document.elementFromPoint(0, 0).click();
      selectedId = undefined;
    },
    error: function(err) {
      console.log("e", err);
      document.elementFromPoint(0, 0).click();
      selectedId = undefined;
    }
  });
}
