var user;

function tableWatch()
{
  console.log('tablewatch');
  $('#showgames').on('click', 'tr', function() {
                     //var picname = $(this).attr(picname);
                     var picname = $(this).attr("data-pic");
//                     console.log('clicked '+ picname);
                     $('#gamephoto').html("<img src='http://www.lmoses.com/posty/upload/"+picname+"' height=300 width=300/>");
                     $.mobile.path.set("#compare");
                     
                });
}
//rowClick(picpath)
//{
//  console.log("the picture is at " + picpath);
//}
function onError(error) {
  alert('code: '    + error.code    + '\n' +
        'message: ' + error.message + '\n');
}
function showgames()
{
  

  var jqxhr = $.post("http://www.lmoses.com/posty/index.php?at=ajax_showgames", {},
                     function(data,status) {
                     $('#result').html(data.retstring);
                     $('#showgames').load(tableWatch());

//                     console.log("success");
//                     console.log(data.note);
                     },'json')
  .success(function() { console.log("second success"); })
  .error(function() { console.log("error"); })
  .complete(function() { console.log("complete"); });
  
  $.mobile.path.set("#continuegame");
}


// onError Callback receives a PositionError object
//
function winner()
{
  alert("Nice try loser...");
  loser();
}
function loser()
{
  alert("you have lost");
  $.mobile.path.set('#home');
}
function getpos(){
  var lat=0, long=0;
  navigator.geolocation.getCurrentPosition(function(position) {
                                           lat=position.coords.latitude;
                                           long= position.coords.longitude;
                                           console.log("lat: " + lat + " long: " + long);
                                           }, onError);
  
}
