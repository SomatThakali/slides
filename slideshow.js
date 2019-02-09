

var images = ["./images/IMG_0047.jpg", "./images/IMG_0060.jpg", "./images/IMG_0081.jpg", "./images/IMG_0112.jpg", "./images/IMG_0406.jpg", "./images/IMG_0407.jpg", "./images/IMG_0408.jpg", "./images/IMG_0411.jpg", "./images/IMG_0412.jpg", "./images/IMG_0416.jpg", "./images/IMG_0417.jpg", "./images/IMG_0476.jpg"];


var showImage;


var count = 0;


$('#start').on('click', startSlideshow);

$('#stop').on('click', stopSlideshow);


function displayImage() {
  $("#image-holder").html("<img src=" + images[count] + " width='400px'>");
}

var clockRunning = false;
function nextImage() {
  count++;
   displayImage();
  setTimeout(displayImage, 1000);
  if(count === images.length){
    count = 0;
  }
  
}
function startSlideshow() {
  if (!clockRunning) {
    showImages = setInterval(nextImage, 3000);
    clockRunning = true;
  }
}
function stopSlideshow() {
  clearInterval(showImages);
  clockRunning = false;

}
displayImage();
