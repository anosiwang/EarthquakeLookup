/*-----Location Fetching-----*/
function getLocation() {
    if (navigator.geolocation)
        {
        navigator.geolocation.getCurrentPosition(showPosition,showError);
        }
    else{
        $("#info").text("抱歉，您的浏览器不支持定位，请选择手动输入位置。");
    }
}
/*-----Send Location to search-----*/
function showPosition(position) {
    $("#info").text("Latitude: " + position.coords.latitude + 
    "<br />Longitude: " + position.coords.longitude);	
}
function showError(error) {
switch(error.code) 
    {
    case error.PERMISSION_DENIED:
    $("#info").text("您拒绝了获取位置的请求，您可以选择手动输入位置。")
    break;
    case error.POSITION_UNAVAILABLE:
    $("#info").text("抱歉，位置信息不可用。请手动输入位置。")
    break;
    case error.TIMEOUT:
    $("#info").text("获取地理位置信息超时，您可以选择手动输入位置。")
    break;
    case error.UNKNOWN_ERROR:
    $("#info").text("获取地理位置时发生了未知错误，请手动输入位置。");
    break;
    }
}