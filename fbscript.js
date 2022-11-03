fbButton = document.getElementById("fb-login");

window.onload = function () {
  fbButton.addEventListener("click", makeRequest);
};

function makeRequest() {
  var AUTH_ENDPOINT = "https://www.facebook.com/dialog/oauth";
  var RESPONSE_TYPE = "token";
  var CLIENT_ID = "1322699568548542";
  var REDIRECT_URI = "https://yogis75.github.io/social-login/";
  var SCOPE = "public_profile";

  var requestEndpoint =
    AUTH_ENDPOINT +
    "?" +
    "response_type=" +
    encodeURIComponent(RESPONSE_TYPE) +
    "&" +
    "client_id=" +
    encodeURIComponent(CLIENT_ID) +
    "&" +
    "redirect_uri=" +
    encodeURIComponent(REDIRECT_URI) +
    "&" +
    "scope=" +
    encodeURIComponent(SCOPE);

  window.location.href = requestEndpoint;
}

// window.fbAsyncInit = function () {
//   FB.init({
//     appId: "{your-app-id}",
//     cookie: true,
//     xfbml: true,
//     version: "{api-version}",
//   });

//   FB.AppEvents.logPageView();
// };

// (function (d, s, id) {
//   var js,
//     fjs = d.getElementsByTagName(s)[0];
//   if (d.getElementById(id)) {
//     return;
//   }
//   js = d.createElement(s);
//   js.id = id;
//   js.src = "https://connect.facebook.net/en_US/sdk.js";
//   fjs.parentNode.insertBefore(js, fjs);
// })(document, "script", "facebook-jssdk");

// FB.getLoginStatus(function (response) {
//   statusChangeCallback(response);
// });

// function checkLoginState() {
//     FB.getLoginStatus(function(response) {
//       statusChangeCallback(response);
//     });
//   }

// FB.login();

// FB.logout();

// {
//     status: 'connected',
//     authResponse: {
//         accessToken: '...',
//         expiresIn:'...',
//         signedRequest:'...',
//         userID:'...'
//     }
// }
