var user;

function tableWatch()
{
  console.log('tablewatch');
  $('#showgames').on('click', 'tr', function() {
                     //var picname = $(this).attr(picname);
                     var picname = $(this).find("img").attr("alt");
                     console.log('clicked '+ picname);
                     $('#gamephoto').html("<img src='"+picname+"' height=150 width=300/>");
                     $.mobile.path.set("#compare");
                     
                });
}
rowClick(picpath)
{
  console.log("the picture is at " + picpath);
}
function showgames()
{
  

  var jqxhr = $.post("http://www.lmoses.com/posty/index.php?at=ajax_showgames", {},
                     function(data,status) {
                     $('#result').html(data.retstring);
                     $('#showgames').load(tableWatch());
//                     $(document).ready(function() {
//                                       $('.games tr').click(function() {
//                                                            console.log('clicked');
//                                                            $.mobile.path.set("#compare");
//                                                              }
//                                                              });
//                                       
//                                       });
                     console.log("success");
                     console.log(data.note);
                     },'json')
  .success(function() { console.log("second success"); })
  .error(function() { console.log("error"); })
  .complete(function() { console.log("complete"); });
  
  $.mobile.path.set("#continuegame");
}

var onSuccess = function(position) {
  alert('Latitude: '          + position.coords.latitude          + '\n' +
        'Longitude: '         + position.coords.longitude         + '\n' +
        'Altitude: '          + position.coords.altitude          + '\n' +
        'Accuracy: '          + position.coords.accuracy          + '\n' +
        'Altitude Accuracy: ' + position.coords.altitudeAccuracy  + '\n' +
        'Heading: '           + position.coords.heading           + '\n' +
        'Speed: '             + position.coords.speed             + '\n' +
        'Timestamp: '         + position.timestamp                + '\n');
};

// onError Callback receives a PositionError object
//
function onError(error) {
  alert('code: '    + error.code    + '\n' +
        'message: ' + error.message + '\n');
}

function getpos(){
  navigator.geolocation.getCurrentPosition(onSuccess, onError);
}
