function rewind(video) {
  video.pause();
  video.currentTime=video.duration;
}

function ff(video){
  if(!video.paused) video.playbackRate=8;
}

function handleScroll(index,direction) {
  console.log(index);
  console.log(direction);
  var video1 = $('#video1').get(0);
  var video2 = $('#video2').get(0);
  var video3 = $('#video3').get(0);
  var video4 = $('#video4').get(0);
  var video5 = $('#video5').get(0);

  $('#note1').hide();
  $('#note2').hide();
  $('#note3').hide();
  $('#note4').hide();
  $('#note5').hide();

  switch(index)  {
  case 0:
    video1.currentTime=0;
    video1.play();
    rewind(video2);
    rewind(video3);
    rewind(video4);
    rewind(video5);
    break;
  case 1:
    video2.currentTime=0;
    video2.play();
    rewind(video1);
    rewind(video3);
    rewind(video4);
    rewind(video5);
    break;
  case 2:
    video3.currentTime=0;
    video3.play();
    rewind(video1);
    rewind(video2);
    rewind(video4);
    rewind(video5);
    break;
  case 3:
    video4.currentTime=0;
    video4.play();
    rewind(video1);
    rewind(video2);
    rewind(video3);
    rewind(video5);
    break;
  case 4:
    video5.currentTime=0;
    video5.play();
    rewind(video1);
    rewind(video2);
    rewind(video3);
    rewind(video4);
    break;
  default:
    // rewind(video1);
    // rewind(video2);
    // rewind(video3);
    // rewind(video4);
    // rewind(video5);
    break;
  }
}

function addEventListener() {
  $(document).ready(function(){
    var video1 = $('#video1').get(0);
    var video2 = $('#video2').get(0);
    var video3 = $('#video3').get(0);
    var video4 = $('#video4').get(0);
    var video5 = $('#video5').get(0);
    video1.addEventListener('ended',function(clip){console.log("video1 end");$('#note1').fadeIn(500,"swing");},false);
    video2.addEventListener('ended',function(clip){console.log("video2 end");$('#note2').fadeIn();},false);
    video3.addEventListener('ended',function(clip){console.log("video3 end");$('#note3').fadeIn();},false);
    video4.addEventListener('ended',function(clip){console.log("video4 end");$('#note4').fadeIn();},false);
    video5.addEventListener('ended',function(clip){console.log("video5 end");$('#note5').fadeIn();},false);
  });
}

