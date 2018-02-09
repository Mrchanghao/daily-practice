const currentImg = document.querySelector('#current');
const imgs = document.querySelectorAll('.imgs img');
const opacity = 0.5;

imgs[0].style.opacity = opacity;

// 클릭 이벤트
imgs.forEach(img => img.addEventListener('click', imgClick))

function imgClick(e) {
  // style reset 
  imgs.forEach(img => (img.style.opacity = 1));
  // img 변경 소스
  currentImg.src = e.target.src
  // opcity변경 
  e.target.style.opacity = opacity
  // 애니메이션 첨가
  currentImg.classList.add('fade-in');
  setTimeout(() => currentImg.classList.remove('fade-In'), 300);
}

// let arrowRight = document.querySelector('#arrow-right')
// let arrowLeft = document.querySelector('#arrow-left');
// let current = 0;

// function reset() {
//   for(let i = 0; i < imgs.length; i++) {
//     imgs[i] = currentImg
//   }
// }

// function startSlide() {
//   reset();
//   imgs[0] = currentImg
// }

// // setTimeout(function(){
// //   imgs[current] = currentImg
// //   current++;
// // }, 1000)

// // show 전 사진 보여주기
// function slideLeft() {
//   reset();
//   imgs[current - 1].style.display = 'block';
//   current--;
// }

// // 왼 클릭 입멘트 
// arrowLeft.addEventListener('click', function(){
//   if(current === 0 ) {
//     current = imgs.length
//   }
//   slideLeft();
// })

// // 다음 사진 보여주기 오른클릭 이벤트
// function slideRight() {
//   reset();
//   imgs[current + 1].style.display = 'block';
//   current++;
// }

// arrowRight.addEventListener('click', function(){
//   if(current === imgs.length - 1) {
//     current = -1
//   }
//   slideRight();
// })

// startSlide();
// modal 생성
const wrapper = document.querySelector('.wrapper');
const btn = document.querySelector('.container-2 button');
const close = document.querySelector('.close');
// container.classList.add('modal-body');

btn.addEventListener('click', function(){
  wrapper.style.display = 'block';
  console.log('dfdf')
})

close.addEventListener('click', function(){
  wrapper.style.display = 'none';
})

