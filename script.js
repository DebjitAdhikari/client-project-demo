// const slider=document.querySelector(".slider");
// const allSlides=document.querySelectorAll(".slide");
// const btnLeft=document.querySelector(".left");
// const btnRight=document.querySelector(".right");
// let currentSlide=-1;
// const maxSlide=allSlides.length;
// function gotoSlideForRight(){
//     currentSlide++;
//     allSlides.forEach((el,i)=>{
//         el.style.left=`${100*(i-currentSlide)}%`;
        
//     })
// }
// gotoSlideForRight();
// btnRight.addEventListener("click",function(){
//     if(currentSlide===maxSlide-1){
//         currentSlide=-1;
//         gotoSlideForRight()
//     }else
//         gotoSlideForRight();
// })
// function gotoSlideForLeft(){
//     currentSlide--;
//     allSlides.forEach((el,i)=>{
//         el.style.left=`${100*(i-currentSlide)}%`;
//     })
// }
// btnLeft.addEventListener("click",function(){
//     if(currentSlide===0){
//         currentSlide=maxSlide;
//         gotoSlideForLeft();
//     }else
//         gotoSlideForLeft();
// })

// let index = 0;
// const slides = document.querySelectorAll(".slide");
// const totalSlides = slides.length;

// // Set initial slide position
// const setSlidePosition = () => {
//   slides.forEach((slide, idx) => {
//     slide.style.left = `${(idx - index) * 100}%`;
//   });
// };

// // Next slide
// const nextSlide = () => {
//   index = (index + 1) % totalSlides;
//   setSlidePosition();
// };

// // Previous slide
// const prevSlide = () => {
//   index = (index - 1 + totalSlides) % totalSlides;
//   setSlidePosition();
// };

// // Set initial position
// setSlidePosition();

// // Button events
// document.querySelector(".left").addEventListener("click", prevSlide);
// document.querySelector(".right").addEventListener("click", nextSlide);
// const menuBtn = document.getElementById('menu-btn');
//         const mobileMenu = document.getElementById('mobile-menu');

//         menuBtn.addEventListener('click', () => {
//             mobileMenu.classList.toggle('hidden');
//             mobileMenu.classList.toggle('fade-in');

//         }
//     )
function toggleMenu() {
  const mobileMenu = document.getElementById("mobile-menu");
  mobileMenu.classList.toggle("hidden");
}