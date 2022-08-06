var sp = window.webkitSpeechRecognition; // Namespacing
var Recognition = new sp; // Creating a new sp object

// Starting Recognition
function start_selfie(){
    document.getElementById("text_box").innerHTML = " ";
    Recognition.start();
}

Recognition.onresult = function(hello){
    console.log(hello);
    content = hello.results[0][0].transcript;
    document.getElementById("text_box").innerHTML = content;
    Webcam.attach(camera1);
}

camera1 = document.getElementById("camera");

Webcam.set({
    height: 250,
    width: 360,
    image_format: 'png',
    png_quality: 90
});



