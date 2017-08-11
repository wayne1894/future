  window.fbAsyncInit = function() {
    FB.init({
      appId      : '259036147836145',
      cookie     : true,
      xfbml      : true,
      version    : 'v2.8'
    });
    FB.AppEvents.logPageView();   
  };

  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "//connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));

var accessToken;
var userid;
var username;
function checkLoginState() {
  FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
  });
}

function statusChangeCallback(response){
    if (response.status === 'connected') {
        show(response);
    }else{
        console.log('you are not login yet.');
    }
}

function Logout(){
    FB.logout(function(response) {
        console.log('logout already');
    });
}

function show(response){
    FB.api('/me', function(response) {
        var this_post={"accessToken":accessToken,"fb_id":response.id,"people_name":response.name,"email":response.email}
        console.log(this_post);
    });
    accessToken = response.authResponse.accessToken;
    userid = response.authResponse.userID;
    console.log('userID : '+userid);
    console.log('accessToken : '+accessToken);
    console.log(response);
}