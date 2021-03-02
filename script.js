//counter
const countEl = document.getElementById('count');

updateVisitCount();

function updateVisitCount() {
	fetch('https://api.countapi.xyz/update/szrederjaroslaw.pl/szreder/?amount=1')
	.then(res => res.json())
	.then(res => {
		countEl.innerHTML = res.value;
	})
}
//timeline animation
let timeline = document.querySelectorAll(".timeline li");

function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function show() {
  for (let i = 0; i < timeline.length; i++) {
    if (isInViewport(timeline[i])) {
      if(!timeline[i].classList.contains("in-view")){
        timeline[i].classList.add("in-view");
      }
    } else if(timeline[i].classList.contains("in-view")) {
      timeline[i].classList.remove("in-view");
    }
  }
}
 
window.addEventListener("load", show);
window.addEventListener("scroll", show);

//mobile navbar
let navbar = document.querySelector(".navbar")
let ham = document.querySelector(".menuham")


function toggleHamburger(){
  navbar.classList.toggle("showNav")
  ham.classList.toggle("showClose")
}

ham.addEventListener("click", toggleHamburger)



let menuLinks = document.querySelectorAll(".menuLink")
menuLinks.forEach( 
  function(menuLink) { 
    menuLink.addEventListener("click", toggleHamburger) 
  }
)


