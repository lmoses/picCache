var GeoPic = Parse.Object.extend("GeoPic");



function initparse()
{
  Parse.initialize("Cu6t2yF3ZUMBskXAZiL6ZZBgwwcBGdmeSmoeQf5s", "GCd1CufkIfDR3f4MUm1LTzFp5EmxcLtIZeihnynN");
  console.log("parse started");
}

function createGeoSpot(){
  var geopic = new GeoPic();
  var point = new Parse.GeoPoint();
  geopic.save({
              user: "Default",
              location: point
              }, {
              success: function(geopic) {
              console.log("Saved");
              // The object was saved successfully.
              },
              error: function(geopic, error) {
              console.log("not saving");
              // The save failed.
              // error is a Parse.Error with an error code and description.
              }
              });
}

var logpoint = function(position) {
  var geopic = new GeoPic();
  var point = new Parse.GeoPoint();
  var lat= position.coords.latitude;
  var long = position.coords.longitude;
  console.log("latitude is "+ lat);
  console.log("longitude is "+long);
  var retVal = prompt("Enter your name : ");
  //alert("You have entered : " +  retVal );
  
  var newpoint = new Parse.GeoPoint(lat,long);
  console.log(newpoint.latitude);
  geopic.save({
              user: retVal,
              location: newpoint
              }, {
              success: function(geopic) {
              console.log("Saved");
              // The object was saved successfully.
              },
              error: function(geopic, error) {
              console.log("not saving");
              // The save failed.
              // error is a Parse.Error with an error code and description.
              }
              });
}
function storegeopoint()
{
  navigator.geolocation.getCurrentPosition(logpoint,onError);
}
function wheresfriend()
{
  
  var newstring="";
  var query = new Parse.Query(GeoPic);
  //  query.equalTo("user", name);
  query.exists("user");
  
  query.ascending("user");
  query.find({
             success: function(objects) {
             
             //console.log("here "+objects.get("user"));
             newstring+="<ul>";
             var li = "<li>";
               
             var li2 = "</li>";
             
             for (var i = 0; i < objects.length; i++)
             {
             //console.log("<li> " + objects[i].get("user") + "'s last known location was:"+objects[i].get("location").latitude+","+objects[i].get("location").longitude);
             
             newstring+= "<li> "+objects[i].get("user") + "'s last known location was:"+objects[i].get("location").latitude+","+objects[i].get("location").longitude+"</li>";
             }
             newstring+="</ul>";
             //                            console.log(name + "'s ID is:"+object.id)
             //                            console.log(object.get("location").latitude+","+object.get("location").longitude);
             //console.log(newstring);
             
             $("#result").html(newstring);
             //                           alert("Successfully retrieved " + object.id);
             },
             error: function(error) {
             alert("Error: " + error.code + " " + error.message);
             }
             });
}
//function myposition(latitude,longitude) {
//  this.longitude= longitude;
//  this.latitude=latitude;
//}
//var mypos = new myposition(0,0);
//function friendsdisatance(name)
//{
//  console.log("you are at " + mypos.latitude + "," + mypos.longitude);
//  console.log(name+ " is at a magic");
//}
//var wheresfred =function(position)
//{
//  mypos.latitude=position.coords.latitude;
//  mypos.longitude=position.coords.longitude;
//  console.log(mypos.latitude + "," + mypos.longitude);
//}
//
//function findfriend(name)
//{
//  console.log("let me find "+ name);
//  navigator.geolocation.getCurrentPosition(wheresfred, onError);
//  setTimeout(friendsdisatance(name),3000);
//
//}

// onSuccess Callback
//   This method accepts a `Position` object, which contains
//   the current GPS coordinates
//
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