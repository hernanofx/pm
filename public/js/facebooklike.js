window.fbAsyncInit = function() {
    FB.init({
        appId: '870514156382545',
        xfbml: true,
        version: 'v2.8'
    });
};

(function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s);
    js.id = id;
    js.src = "//connect.facebook.net/es_ES/sdk.js#xfbml=1&version=v2.8&appId=870514156382545";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));
