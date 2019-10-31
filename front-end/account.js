const LOGIN_API_URL = "http://localhost:3000/api/auth/login";

const url = "./page.html";
$(document).ready(function() {
  $(".buttonLog").click(function(e) {
    e.preventDefault();
    console.log("w");
    $.ajax({
      type: "POST",
      url: `http://localhost:3000/api/auth/login`,
      contentType: "application/json",
      data: JSON.stringify({
        email: $("#emailLog").val(),
        password: $("#passwordLog").val()
      }),
      success: function(data) {
        // setCookie("token", data, 0.2);
        // getCookie("token");
        // checkCookie();
        createCookie(data);
        console.log(data);
      },
      error: function(err) {
        console.log("e", err);
      }
    });
  });
  $(".buttonReg").click(function(e) {
    e.preventDefault();
    console.log("q");
    $.ajax({
      type: "POST",
      url: `http://localhost:3000/api/auth/register`,
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

function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  var expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires;
  console.log(cname + " = " + cvalue + " ; " + expires);
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
}

function checkCookie() {
  var username = getCookie("token");
  if (username != "") {
    alert("Welcome again " + username);
  }
}
