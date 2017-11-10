//Facebook Login Code

//Comments from FB: Insert the following code snippet directly after
//the opening `<body>` tag on each page you want to use Facebook
//Analytics. Replace `{your-app-id}` with the App ID and `{latest-api-
//version}` with the SDK version:
<script>
window.fbAsyncInit = function() {
    FB.init({
        appId: '{281809968979704}',
        cookie: true,
        xfbml: true,
        version: '{2.5}'
    });

    FB.AppEvents.logPageView();

};

(function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) { return; }
    js = d.createElement(s);
    js.id = id;
    js.src = "https://connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));
</script>

//Comments from FB: The first step when loading your web page is figuring out
//if a person is already logged into your app with Facebook login. You start
//that process with a call to FB.getLoginStatus. That function will trigger a
//call to Facebook to get the login status and call your callback function
//with the results. Taken from the sample code above, here's some of the code
//that's run during page load to check a person's login status:

FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
});

//The response object that's provided to your callback contains a number of fields:


{
    status: 'connected',
    authResponse: {
        accessToken: '...',
        expiresIn: '...',
        signedRequest: '...',
        userID: '...'
    }
}

//The onlogin attribute on the button to set up a JavaScript callback
//that checks the login status to see if the person logged in
//successfully:



<fb: login - button
scope = "public_profile,email"
onlogin = "checkLoginState();">
    </fb:login-button>

// This is the callback.It calls FB. getLoginStatus () to get the most recent login state. (statusChangeCallback (a) is a
//   function that 's part of the example that processes the response.)



        function checkLoginState() {
            FB.getLoginStatus(function(response) {
                statusChangeCallback(response);
            });
        }

// login button code
//Step 2: Include the JavaScript SDK on your page once, ideally right after the opening body tag.

<div id="fb-root"></div>
<script>(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = 'https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.10&appId=281809968979704';
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));</script>

//Step 2: Place this code wherever you want the plugin to appear on your page. 
<div class="fb-login-button" data-width="300px" data-max-
rows="1" data-size="large" data-button-type="continue_with" data-show-
faces="false" data-auto-logout-link="true" data-use-continue-
as="true"></div>

//spinner for loading time 
// <script>
// var finished_rendering = function() {
// console.log("finished rendering plugins");
// var spinner = document.getElementById("spinner");
// spinner.removeAttribute("style");
// spinner.removeChild(spinner.childNodes[0]);
// }
// FB.Event.subscribe('xfbml.render', finished_rendering);
// </script>
// <div id="spinner"
//     style="
//         background: #4267b2;
//         border-radius: 5px;
//         color: white;
//         height: 40px;
//         text-align: center;
//         width: 250px;">
//     Loading
//     <div
//     class="fb-login-button"
//     data-max-rows="1"
//     data-size="large"
//     data-button-type="continue_with"
//     ></div>
// </div>
// }
