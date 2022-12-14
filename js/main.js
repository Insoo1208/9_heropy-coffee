// div.serch 요소 선택 시 강제 포커스 및 제어
// 검색창 요소(.serch) 찾기
const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

// 검색창 요소를 클릭하면 input 요소를 포커스 하도록 실행
searchEl.addEventListener('click', function() {
  searchInputEl.focus();
});

// input 요소에 포커스 되면 실행
searchInputEl.addEventListener('focus', function() {
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder', '통합검색');
});

// input 요소에 포커스가 해제되면 실행
searchInputEl.addEventListener('blur', function() {
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder', '');
});

// 스크롤 시 고정 배너 숨김
// 페이지 스크롤에 따른 배지 요소 제어
const badgeEl = document.querySelector('.badges');

// 최상단으로 이동하는 버튼
const toTopEl = document.querySelector('#to-top');
toTopEl.addEventListener('click', () => {
  gsap.to(window, 0.6, {
    scrollTo: 0, // 페이지의 0px(최상단)지점으로 이동
  });
})

// window: 브라우저 창 객체
window.addEventListener('scroll', function () {
  if (window.scrollY > 500) {
    // badgeEl.style.display = 'none'

    // gsap.top(요소, 시간, 속성) 메소드: CSS속성을 통해 애니메이션 처리
    gsap.to(badgeEl, 0.6, {
      opacity: 0,
      display: 'none'
    });
    gsap.to(toTopEl, 0.6, {
      opacity: 1,
      x: 0, // x축 0px 지점으로 이동
    })
  } else {
    // badgeEl.style.display = 'block'
    gsap.to(badgeEl, 0.6, {
      opacity: 1,
      display: 'block'
    });
    gsap.to(toTopEl, 0.6, {
      opacity: 0,
      x: 100,
    });
  }
});

// 순차적으로 요소 보이기
// 나타날 요소(.fade-in)들을 찾기
const fadeEls = document.querySelectorAll('.visual .fade-in');

// 요소들을 하나씩 반복해서 처리
fadeEls.forEach(function (fadeEl, index) {
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * 0.7,
    opacity: 1
  });
});


// 공지사항 수직 슬라이드 기능 작성
// new 키워드로 Swiper 객체를 생성 => 슬라이드 기능을 생성
// new Swiper(선택자, 옵션 객체)
// 첫번째 인수: 슬라이드 기능을 적용할 요소의 선택자
// 두번째 인수: 다양한 옵션을 객체 데이터로 전달(다른 옵션들은 API페이지 참고)
new Swiper('.notice .swiper', {
  // Optional parameters
  direction: 'vertical', // 수직 슬라이드
  loop: true, // 반복 재생 여부
  autoplay: true // 자동 재생
});

// 프로모션 섹션 수평 슬라이드 기능
new Swiper('.promotion .swiper', {
  // Optional parameters
  direction: 'horizontal', // 수평 슬라이드(기본값)
  loop: true, // 반복 재생 여부
  autoplay: { // 자동 재생 여부
    delay: 5000 // 5초마다 슬라이드 바뀜
  },
  slidesPerView: 3, // 한 번에 보여줄 슬라이드 개수
  spaceBetween: 10, // 슬라이드 사이 여백(간격) px
  centeredSlides: true, // 1번 슬라이드가 가운데 보이기
  pagination: {
    el: '.promotion .swiper-pagination', // 페이지 번호 요소
    clickable: true, // 사용자의 페이지 번호 제어 여부
  },
  navigation: { // 이전, 다음 슬라이드 버튼 사용
    nextEl: '.promotion .swiper-button-next',
    prevEl: '.promotion .swiper-button-prev',
  },
});

// 프로모션 섹션 토글 기능
const promotionToggleBtn = document.querySelector('.toggle-promotion');
const promotionEl = document.querySelector('section.promotion');
const promotionToggleIcon = promotionToggleBtn.querySelector('.material-icons');

promotionToggleBtn.addEventListener('click', () => {
  if (promotionEl.classList.contains('hide')) {
    promotionEl.style.height = '663px';
    promotionEl.classList.remove('hide');
    promotionToggleIcon.textContent = 'upload';
  } else {
    promotionEl.style.height = '0';
    promotionEl.classList.add('hide');
    promotionToggleIcon.textContent = 'download';
  }
});


// 유튜브 섹션 위에 부유 요소 에니메이션 처리
gsap.to('.floating1', 1.5, {
  delay: 1,
  y: 15, // 수직으로 얼마나 움직일지
  repeat: -1, // 몇 번 반복할 지 설정, -1은 무한
  yoyo: true, // 한 번 재생 된 것을 다시 뒤로 재생
  ease: Power1.easeInOut // Easing 함수 적용
});

gsap.to('.floating2', 2, {
  delay: 0.5,
  y: 15, // 수직으로 얼마나 움직일지
  repeat: -1, // 몇 번 반복할 지 설정, -1은 무한
  yoyo: true, // 한 번 재생 된 것을 다시 뒤로 재생
  ease: Power1.easeInOut // Easing 함수 적용
});

gsap.to('.floating3', 2.5, {
  delay: 1.5,
  y: 20, // 수직으로 얼마나 움직일지
  repeat: -1, // 몇 번 반복할 지 설정, -1은 무한
  yoyo: true, // 한 번 재생 된 것을 다시 뒤로 재생
  ease: Power1.easeInOut // Easing 함수 적용
});


// ScrollMagic 사용
// 그 외 scrollreveal 등등
const spyEls = document.querySelectorAll('section.scroll-spy');
spyEls.forEach(function (spyEl) {
  // 메소드 체이닝
  new ScrollMagic.Scene({ // 감시 할 장면(Scene) 추가 및 옵션 지정
    triggerElement: spyEl, // 감시 할 요소를 지정
    triggerHook: 0.8 // 화면의 80% 지점에서 보여짐 여부 감시(0~1 사이 지정)
  })
    .setClassToggle(spyEl, 'show') // 요소가 화면에 보이면 show 클래스 추가
    .addTo(new ScrollMagic.Controller()); // 컨트롤러에 장면을 할당
});


// Awards 섹션 슬라이드 기능
new Swiper('.awards .swiper', {
  // Optional parameters
  direction: 'horizontal', // 수평 슬라이드(기본값)
  loop: true, // 반복 재생 여부
  autoplay: true, // 자동 재생 여부  // 5초마다 슬라이드 바뀜
  slidesPerView: 5, // 한 번에 보여줄 슬라이드 개수
  spaceBetween: 30, // 슬라이드 사이 여백(간격) px
  centeredSlides: true, // 1번 슬라이드가 가운데 보이기
  navigation: { // 이전, 다음 슬라이드 버튼 사용
    nextEl: '.awards .swiper-button-next',
    prevEl: '.awards .swiper-button-prev',
  },
});

// 현재 연도 표시
// 날짜 정보를 가진 JS의 date 객체 활용
// JS 기본 제공 객체(여러 데이터들의 묶음)
const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear(); // 2022