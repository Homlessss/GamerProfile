const LOGIN_API_URL = "http://localhost:3000/api/auth/login";

const url = "https://gamer-profile.herokuapp.com/index.html";
const url2 = "https://gamer-profile.herokuapp.com/admin.html";
$(document).ready(function() {
  $(".buttonLog").click(function(e) {
    e.preventDefault();
    console.log("w");
    $.ajax({
      type: "POST",
      url: `https://gamer-profile.herokuapp.com/api/auth/login`,
      contentType: "application/json",
      data: JSON.stringify({
        email: $("#emailLog").val(),
        password: $("#passwordLog").val()
      }),
      success: function(data) {
        $.ajax({
          type: "GET",
          url: `https://gamer-profile.herokuapp.com/api/user?email=${$(
            "#emailLog"
          ).val()}`,
          success: function(data) {
            console.log(data);
            console.log(data[0].role);
            if (data[0].role === "user") {
              window.location.href = url;
            }
            if (data[0].role === "admin") {
              window.location.href = url2;
            }
          },
          error: function(err) {
            console.log("e", err);
            alert(err.responseJSON.error);
          }
        });
        createCookie(data);
        console.log(data);
      },
      error: function(err) {
        console.log("e", err);
        alert(err.responseJSON.error);
      }
    });
  });
  $(".buttonReg").click(function(e) {
    e.preventDefault();
    console.log("q");
    $.ajax({
      type: "POST",
      url: `https://gamer-profile.herokuapp.com/api/auth/register`,
      contentType: "application/json",
      data: JSON.stringify({
        email: $("#emailReg").val(),
        phone: $("#phoneReg").val(),
        password: $("#passReg").val(),
        confPassword: $("#confPassReg").val()
      }),
      success: function(data) {
        console.log(data);
      },
      error: function(err) {
        console.log("e", err);
        alert(err.responseJSON.error);
      }
    });
  });
});

function createCookie(data) {
  try {
    document.cookie = "token" + "=" + data;
  } catch (error) {
    // deal with errors
    alert(error);
  }
}

function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(";");
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function logout() {
  try {
    document.cookie = "token= ;expires= 01 Jan 1970 00:00:00 UTC";
  } catch (error) {
    // deal with errors
    alert(error);
  }
  window.location.href = "https://gamer-profile.herokuapp.com/index.html";
}

function checkCookie() {
  var username = getCookie("token");
  if (username != "") {
    alert("Welcome again " + username);
  }
}
