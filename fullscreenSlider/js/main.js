let sliderImage = document.querySelectorAll('.slide');
console.log(sliderImage);

let arrowRight = document.getElementById('arrow-right');
let arrowLeft = document.getElementById('arrow-left');
console.log(arrowRight, arrowLeft);

let currentIndex = 0;


// image clear
function reset() {
  for(let i = 0; i < sliderImage.length; i++){
    sliderImage[i].style.display = 'none';
  }
};

// 슬라이더 초기화
function startSlide () {
  reset();
  sliderImage[0].style.display = "block";
}

// 슬라이더 왼쪽으로
function sliderLeft () {
  reset();
  sliderImage[currentIndex - 1].style.display = 'block';
  currentIndex--;
}
//  슬라이더 오른쪽으로 
function sliderRight () {
  reset();
  sliderImage[currentIndex + 1].style.display = 'block';
  currentIndex++;
}
//화살표 이벤트
arrowLeft.addEventListener('click', function(){
  if(currentIndex === 0) {
    currentIndex = sliderImage.length;
  }
  sliderLeft();
});

arrowRight.addEventListener('click', function(){
  console.log('click');
  if(currentIndex === sliderImage.length - 1) {
    currentIndex = -1;
  }
  sliderRight();
})



startSlide();