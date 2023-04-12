


// --hide nav bar--


window.onscroll = function() {
    let Scrollpos = window.pageYOffset;
    // console.log(Scrollpos)
  if (Scrollpos < 60) {
    document.querySelector("header").style.top = "0";
  } else {
    document.querySelector("header").style.top = "-4rem";
  }
}


//progress bar
document.addEventListener('DOMContentLoaded', function () {
  var winHeight = window.innerHeight,
        docHeight = document.documentElement.scrollHeight,
        progressBar = document.querySelector('#content_progress');
  if (progressBar) {
    progressBar.max = docHeight - winHeight;
  progressBar.value = window.scrollY;

  document.addEventListener('scroll', function () {
        progressBar.max = document.documentElement.scrollHeight - window.innerHeight;
        progressBar.value = window.scrollY;
  });

  }
  
});

//back to top

function topFunction() {
  // document.querySelector("header").style.top = "0";
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  
}