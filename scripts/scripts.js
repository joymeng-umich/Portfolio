


// --hide nav bar--


window.onscroll = function() {
    let Scrollpos = window.pageYOffset;
  if (Scrollpos < 600) {
    document.querySelector("header").style.top = "0";
  } else {
    document.querySelector("header").style.top = "-500px";
  }
}


//progress bar
document.addEventListener('DOMContentLoaded', function () {
  var winHeight = window.innerHeight,
        docHeight = document.documentElement.scrollHeight,
        progressBar = document.querySelector('#content_progress');
  progressBar.max = docHeight - winHeight;
  progressBar.value = window.scrollY;

  document.addEventListener('scroll', function () {
        progressBar.max = document.documentElement.scrollHeight - window.innerHeight;
        progressBar.value = window.scrollY;
  });
});