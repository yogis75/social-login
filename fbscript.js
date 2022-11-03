function statusChangeCallback(response) {
  if (response.status === "connected") {
    // Logged into your webpage and Facebook.
    testAPI();
    document.querySelector(".buttons-wrapper").style.display = "none";
    document.querySelector(".user-wrapper").style.display = "block";
  }
}

function checkLoginState() {
  // Called when a person is finished with the Login Button.
  FB.getLoginStatus(function (response) {
    // See the onlogin handler
    statusChangeCallback(response);
  });
}

window.fbAsyncInit = function () {
  FB.init({
    appId: "1322699568548542",
    xfbml: true,
    version: "v15.0",
  });

  FB.getLoginStatus(function (response) {
    // Called after the JS SDK has been initialized.
    statusChangeCallback(response); // Returns the login status.
  });
};

function testAPI() {
  // Testing Graph API after login.  See statusChangeCallback() for when this call is made.
  console.log("Welcome!  Fetching your information.... ");
  FB.api("/me", function (response) {
    console.log("Successful login for: " + response.name);
    document.querySelector(".user-info").innerHTML = `
    <p>Welcome ${response.name}!</p>
    <button onclick="FB.logout(function () {
        location.reload();
      })">Sign Out</button>
    `;
  });
}
