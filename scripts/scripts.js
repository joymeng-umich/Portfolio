


// --hide nav bar--

// var part1 = document.getElementById("plchd");
// const part1 = document.querySelector('#plchd')

// console.log(part1.offsetTop)

// window.onscroll = function() {
//     let Scrollpos = window.pageYOffset;
//     // console.log(Scrollpos)
//   if (Scrollpos < 60) {
//     document.querySelector("header").style.top = "0";
//   } else {
//     document.querySelector("header").style.top = "-4rem";
//     document.querySelector("header").style.overflow = "hidden"
//   }



// }

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



function dropDown() {
  if (document.querySelector("header").style.overflow == "hidden"){
    document.querySelector("header").style.overflow = "visible"
  } else{
    document.querySelector("header").style.overflow = "hidden"
  }
}


// disp

function disp(){
  // console.log(screen.width);
  // if (screen.width < 500) {
    // console.log('hovered');
    const element = document.querySelectorAll('.indexes a');
    element.forEach((e) => {
      e.style.display="block";
    })
  // }
  
}

function disappear(){
  // if (window.screen.width < 500) {

  const element = document.querySelectorAll('.indexes a');
  element.forEach((e) => {
    e.style.display="none";
  })
// }
}

// function navto(){



// }


// indexindicatoer

const sec1 = document.querySelector("#sec1");
const sec2 = document.querySelector("#sec2");
const sec3 = document.querySelector("#sec3");
const sec4 = document.querySelector("#sec4");
const id1 = document.querySelector("#index1")
const id2 = document.querySelector("#index2")
const id3 = document.querySelector("#index3")
const id4 = document.querySelector("#index4")

// const blackp = document.querySelectorAll('.blackpoint');
// const circlep = document.querySelectorAll('.circlepoint');

window.onscroll = function() {

  let Scrollpos = window.pageYOffset;
  let scrollposbottom = Scrollpos + screen.height;

  // console.log(Scrollpos+screen.availHeight);
  // // console.log(sec4.offsetTop)
  // console.log(Scrollpos)
  // console.log(typeof(Scrollpos))
  // console.log(scrollposbottom)
  // console.log(typeof(scrollposbottom))
  // console.log(sec4.offsetTop)
  // console.log(typeof(sec4.offsetTop))


  if (Scrollpos < 60) {
    document.querySelector("header").style.top = "0";
  } else {
    document.querySelector("header").style.top = "-4rem";
    document.querySelector("header").style.overflow = "hidden"
  }
  if (sec1) {
  if (Scrollpos >= sec1.offsetTop && Scrollpos < sec2.offsetTop) {
    document.querySelector('#index1 .blackpoint').style.display="inline";
    document.querySelector('#index1 .circlepoint').style.display="none";

  document.querySelector('#index2 .blackpoint').style.display="none";
  document.querySelector('#index2 .circlepoint').style.display="inline";

  if (id3){
    document.querySelector('#index3 .blackpoint').style.display="none";
  document.querySelector('#index3 .circlepoint').style.display="inline";
  }
  
  document.querySelector('#index4 .blackpoint').style.display="none";
  document.querySelector('#index4 .circlepoint').style.display="inline";



  } else if (Scrollpos >= sec2.offsetTop && scrollposbottom < sec3.offsetTop){

    document.querySelector('#index1 .blackpoint').style.display="none";
    document.querySelector('#index1 .circlepoint').style.display="inline";

    document.querySelector('#index2 .blackpoint').style.display="inline";
    document.querySelector('#index2 .circlepoint').style.display="none";


    if (id3){
      document.querySelector('#index3 .blackpoint').style.display="none";
      document.querySelector('#index3 .circlepoint').style.display="inline";
    }

  
    document.querySelector('#index4 .blackpoint').style.display="none";
    document.querySelector('#index4 .circlepoint').style.display="inline";


  


  } else if (scrollposbottom >= sec3.offsetTop && scrollposbottom < sec4.offsetTop){
    document.querySelector('#index1 .blackpoint').style.display="none";
    document.querySelector('#index1 .circlepoint').style.display="inline";
  
    document.querySelector('#index2 .blackpoint').style.display="none";
    document.querySelector('#index2 .circlepoint').style.display="inline";
  
    if(id3){
      document.querySelector('#index3 .blackpoint').style.display="inline";
      document.querySelector('#index3 .circlepoint').style.display="none";
    }


    document.querySelector('#index4 .blackpoint').style.display="none";
    document.querySelector('#index4 .circlepoint').style.display="inline";

    // console.log('imin3')
  } else if (scrollposbottom >= sec4.offsetTop) {

    // console.log('imin4')


    document.querySelector('#index1 .blackpoint').style.display="none";
    document.querySelector('#index1 .circlepoint').style.display="inline";
  
    document.querySelector('#index2 .blackpoint').style.display="none";
    document.querySelector('#index2 .circlepoint').style.display="inline";
    if (id3) {
      document.querySelector('#index3 .blackpoint').style.display="none";
      document.querySelector('#index3 .circlepoint').style.display="inline";
    }
    

    document.querySelector('#index4 .blackpoint').style.display="inline";
    document.querySelector('#index4 .circlepoint').style.display="none";
  

  }

  }
}

// const gallery = document.querySelectorAll('.gallery');
// const arrow = document.querySelector('#sscontainer i')

// gallery.forEach((e) =>{
//   e.currentTarget.on("scroll", function (e) {
//     let horizontal = e.currentTarget.scrollLeft;
//     console.log(horizontal)
//     arrow.style.display = none;
    
//     })
//   })