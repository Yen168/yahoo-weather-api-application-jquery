jQuery(document).ready(function(){ 
    
    // var a = [1,2,3,4];
    // var k = 1;

    // var test = function(k){
    //      //var k = 3;
    //     if (k in a){
    //          alert("k in a");
    //     }else{
    //         alert("k not in a");
    //     };
    // };

    var yahooWeather = function(n){

        var cloudy = [26,27,28,29,30,44];
        var snowy = [7,13,14,15,16,17,18,41,42,43,46];
        var sunny = [32,34,36];
        var rainy = [5,6,8,9,10,11,12,35,40];
        var starry = [31,33];
        var stormy = [0,1,2,3,4,37,38,39,45,47];

        // if(cloudy.indexOf(n) > -1){
        //     alert("n in cloudy");
        //     alert(n);
        //     return "cloudy";
        // }else{
        //     alert("n not in cloudy");
        // };

        if (sunny.indexOf(n) > -1) {
            return "sunny";
        } else if (cloudy.indexOf(n) > -1) {
            return "cloudy";
        } else if (rainy.indexOf(n) > -1) {
            return "rainy";
        } else if (starry.indexOf(n) > -1) {
            return "starry";
        } else if (stormy.indexOf(n) > -1) {
            return "stormy";
        } else if (snowy.indexOf(n) > -1) {
            return "snowy";
        } else {
            return "rainbow";
        };

    };

    $.ajax({
        type: "get",
        async: false,
        // hardcoding due to the difficult to find the woeid...
        // info will update hourly
        url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%3D2459115&format=json",
        dataType: "jsonp",
        jsonp: "callback",
        jsonpCallback:"callbackFunction",
        success: function(json){
            var data = json.query.results.channel;
            alert(data.location.city+" "+data.item.title+" "+data.item.condition.text+" "+data.item.condition.code);
             $(".container").append('<div id="yahoo"></div>');
             //$("body").append('<div id="yahoo"></div>');
            var wClass = yahooWeather(+data.item.condition.code);
             $("#yahoo").addClass(wClass);
            // test(k);
            //alert(data.item.condition);
            //alert(yahooWeather(+data.item.condition.code));
        },
        error: function(){
            alert('fail');
        }
    });
});