const searchEl = document.querySelector(".search");
const searchInputEl = searchEl.querySelector("input");

searchEl.addEventListener("click",function(){
  searchInputEl.focus();
})

searchInputEl.addEventListener("focus",function(){
  searchEl.classList.add("focused");
  searchInputEl.setAttribute("placeholder","통합검색");
})

searchInputEl.addEventListener("blur",function(){
  searchEl.classList.remove("focused");
  searchInputEl.removeAttribute("placeholder","통합검색");
})

const badgeEl = document.querySelector('header .badges');

window.addEventListener("scroll",_.throttle(
  function(){
    console.log(window.scrollY);
    if(window.scrollY>500){
      // gsap.to(요소, 지속시간, 옵션)
      gsap.to(badgeEl, .6, {
        opacity: 0,
        display: 'none'
      })
    } else {
      gsap.to(badgeEl, .6, {
        opacity: 1,
        display: 'block'
      })
    }
  },300
))

/**
 * 순서대로 나타나는 기능
 */
// 나타날 요소들(.fade-in) 찾기.
const fadeEls = document.querySelectorAll('.visual .fade-in')
// 나타날 요소들을 하나씩 반복해서 처리!
fadeEls.forEach(function (fadeEl, index) {
  // 각 요소들을 순서대로(delay) 보여지게 함!
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * .7,
    opacity: 1
  })
})