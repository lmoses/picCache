var user;

function showgames()
{
  $.mobile.path.set("#continuegame");
  var jqxhr = $.post("http://www.lmoses.com/posty/index.php?at=ajax_showgames", {},
                     function(data,status) {
                     $('#result').html(data.retstring);
                     console.log("success");
                     console.log(data.note);
                     },'json')
  .success(function() { console.log("second success"); })
  .error(function() { console.log("error"); })
  .complete(function() { console.log("complete"); });
}