//<script type="text/javascript" charset="utf-8" src="cordova-1.8.1.js"></script>
//<script type="text/javascript" charset="utf-8">

var pictureSource;   // picture source
var destinationType; // sets the format of returned value

// Wait for Cordova to connect with the device
//

//document.addEventListener("deviceready",onDeviceReady,false);

// Cordova is ready to be used!
//
function touchme(){
  console.log("that tickles");
}

function cameraReady() {
  pictureSource=navigator.camera.PictureSourceType;
  destinationType=navigator.camera.DestinationType;
  console.log("camera Ready");
}

// Called when a photo is successfully retrieved
//
function uploadtoserver(newimageData,newcomment)
{
  //index.php?at=ajax_uploadgame
  console.log("in upload, comment is: " + newcomment);
  //console.log("ImageData is:"+newimageData);
  //post the image data to php
  // check in php to make sure can post large string
  $.post("http://192.168.10.105/posty/index.php?at=ajax_uploadgame", { imageData: newimageData, comment: newcomment },
         function(data,status) {
       //  var x = eval('(' + data + ')');
         if(data.user!="")
         console.log("Data Loaded: " + data.comment);
         },'json');
//  $.ajax({//.post?
//         type: "POST",
//         url: 'http://192.168.10.105/posty/index.php?at=ajax_uploadgame',
//         data : { 'imageData' : newimageData, 'comment' : newcomment },
//         dataType: 'jsonp',
//         jsonp: 'imgupload',// check on how this will call a success/error
//         timeout: 5000,
//         success: function(data, status){
//          console.log("in uploadtoserver(), comment is "+ data.comment);
//         },
//         error: function(){
//         console.log("There was an error loading the data.");
//         }
//         });
  
}
function onPhotoDataSuccess(imageData) {
  // Uncomment to view the base64 encoded image data
  // console.log(imageData);
  
  // Get image handle
  //
  var smallImage = document.getElementById('smallImage');
  
  // Unhide image elements
  //
  smallImage.style.display = 'block';
  
  // Show the captured photo
  // The inline CSS rules are used to resize the image
  //
  smallImage.src =  "data:image/jpeg;base64," + imageData;
  var comment= prompt("Please enter a text hint", "hint");
  uploadtoserver(imageData,comment);
//  console.log(imageData);
}

// Called when a photo is successfully retrieved
//
function onPhotoURISuccess(imageURI) {
  // Uncomment to view the image file URI
  // console.log(imageURI);
  
  // Get image handle
  //
  var largeImage = document.getElementById('largeImage');
  
  // Unhide image elements
  //
  largeImage.style.display = 'block';
  
  // Show the captured photo
  // The inline CSS rules are used to resize the image
  //
  largeImage.src = imageURI;
}

// A button will call this function
//
function capturePhoto() {
  console.log("take a picture");
  // Take picture using device camera and retrieve image as base64-encoded string
  navigator.camera.getPicture(onPhotoDataSuccess, onFail, { quality: 2,
                              destinationType: destinationType.DATA_URL });
}

// A button will call this function
//
function capturePhotoEdit() {
  console.log("take and edit a picture");
  // Take picture using device camera, allow edit, and retrieve image as base64-encoded string
  navigator.camera.getPicture(onPhotoDataSuccess, onFail, { quality: 2, allowEdit: true,
                              destinationType: destinationType.DATA_URL });
}

// A button will call this function
//
function getPhoto(source) {
  // Retrieve image file location from specified source
  navigator.camera.getPicture(onPhotoURISuccess, onFail, { quality: 50,
                              destinationType: destinationType.FILE_URI,
                              sourceType: source });
}

// Called if something bad happens.
//
function onFail(message) {
  alert('Failed because: ' + message);
}