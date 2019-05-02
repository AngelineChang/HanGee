// Initialize Firebase
var config = {
  apiKey: "AIzaSyAMCffs46RTuWXisNsJbEiJuthCrr6XRZs",
  authDomain: "hangee-test.firebaseapp.com",
  databaseURL: "https://hangee-test.firebaseio.com",
  projectId: "hangee-test",
  storageBucket: "hangee-test.appspot.com",
  messagingSenderId: "45255808411"
};
firebase.initializeApp(config);

var storage = firebase.storage();
var storageRef = storage.ref();
var imagesRef = storageRef.child('images');// Points to 'images'




// var imgRef = [];
// var imgSerial = [];
// var imgID = [];
// var imgSrc = [];
// var imgURL = [];
// for (var i = 0; i < 3; i++) {
//   imgSerial[i] = "images/" + i + ".png";
//   imgRef[i] = storageRef.child(imgSerial[i]);
//   imgURL[i] = imgRef[i].getDownloadURL()
//   imgID[i] = document.getElementById(i);
//   imgSrc[i] = imgID[i].src;
// }


  var imgRef0 = storageRef.child('images/0.png');
  imgRef0.getDownloadURL().then(function(url) {
    var img = document.getElementById('0');
    img.src = url;
  });

  var imgRef1 = storageRef.child('images/1.png');
  imgRef1.getDownloadURL().then(function(url) {
    var img = document.getElementById('1');
    img.src = url;
  });

  var imgRef2 = storageRef.child('images/2.png');
  imgRef2.getDownloadURL().then(function(url) {
    var img = document.getElementById('2');
    img.src = url;
  });

  var imgRef3 = storageRef.child('images/3.png');
  imgRef3.getDownloadURL().then(function(url) {
    var img = document.getElementById('3');
    img.src = url;
  });

  var imgRef4 = storageRef.child('images/4.png');
  imgRef4.getDownloadURL().then(function(url) {
    var img = document.getElementById('4');
    img.src = url;
  });

  var imgRef5 = storageRef.child('images/5.png');
  imgRef5.getDownloadURL().then(function(url) {
    var img = document.getElementById('5');
    img.src = url;
  });

  var imgRef6 = storageRef.child('images/6.png');
  imgRef6.getDownloadURL().then(function(url) {
    var img = document.getElementById('6');
    img.src = url;
  });




// var imgRef= storageRef.child('images/0.png');
// imgRef.getDownloadURL().then(function(url) {
//   // `url` is the download URL for 'images/stars.jpg'
//   // Or inserted into an <img> element:
//   var img = document.getElementById('0');
//   img.src = url;
// });


// Points to 'images/hp-hangee-intro.png'
// Note that you can use variables to create child values
var fileName = '01.png';
var spaceRef = imagesRef.child(fileName);

// File path is 'images/hp-hangee-intro.png'
var path = spaceRef.fullPath
// File name is 'hp-hangee-intro.png'
var name = spaceRef.name
// Points to 'images'
var imagesRef = spaceRef.parent;

var gsReference = storage.refFromURL('gs://hangee-test.appspot.com/images/01.png');




// //change h1 text
// var bigOne = document.getElementById('bigOne');
// var dbRef = firebase.database().ref().child('text');
// dbRef.on('value', function(snapshot){
//   bigOne,innerText = snapshot.val()
// });
// //dbRef.on('value', snap => bigOne.innerText = snap.val());
// console.log('hi');


// <script>
//       var db       = firebase.database();  // class : firebase.database
//       var rootRef  = db.ref();
//       var petitionRef = db.ref("petition");
//       var petitionCount = [];
//
//       console.log(petitionCount.length+1);
//
//       petitionRef.on("child_added", getReplyNum);
//       function getReplyNum(childSnapShot){
//         num = parseInt(childSnapShot.key);
//         petitionCount.push(num);
//         $("#now").html("GOALS: 200 &nbsp; &nbsp; NOW:"+petitionCount.length);
//       }
//       var $last = $('.progress-radial').last();
//
//       setInterval(function(){
//         var currentClass = $last.attr('class').split(' ')[1];
//         var currentPercentage = currentClass.substring(9,12);
//         var newPercentage = (parseInt(currentPercentage) + 1);
//         if (newPercentage <= petitionCount.length/2) {
//         	var newClass = 'progress-' + newPercentage;
//         $last.removeClass(currentClass).addClass(newClass);
//
//         }
//         },20);
//
//     </script>
