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

var database = firebase.database();

//change h1 text
var bigOne = document.getElementById('bigOne');
var dbRef = firebase.database().ref().child('text');
dbRef.on('value', function(snapshot){
  bigOne,innerText = snapshot.val()
});
//dbRef.on('value', snap => bigOne.innerText = snap.val());
console.log('hi');


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
