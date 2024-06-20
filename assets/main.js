///////////////////////////////////////////
//ハンバーガーメニュー
//////////////////////////////////////////
$('.hambager').on('click', function () {
  navOpen();
});
let navFlg = false;
function navOpen() {
  if (!navFlg) {
    $('.hamberger-wrap').addClass('is-ham-open');
    $('.mega-menu').addClass('is-megamenu-open');
    $('.header-inner').addClass('is-megamenu-icon');
    $('.ham-txt').text('閉じる');
    navFlg = true;
  } else {
    $('.hamberger-wrap').removeClass('is-ham-open');
    $('.mega-menu').removeClass('is-megamenu-open');
    $('.header-inner').removeClass('is-megamenu-icon');
    $('.ham-txt').text('メニュー');
    navFlg = false;
  }
}


///////////////////////////////////////////
//ハンバーガーメニュー アコーディオン
///////////////////////////////////////////
$(document).ready(function() {
  $(".little-nav").hide();
  $(".nav01 .parent").on('click', function() {
    $(this).toggleClass('active');
    $(this).next('.little-nav').slideToggle(300);
  });
});


///////////////////////////////////////////
//スクロールフェードイン
///////////////////////////////////////////
const fadeIn = document.querySelectorAll(".fadeIn");
const options = {
  rootMargin: '0px',
  threshold: 0.6
};
const observer = new IntersectionObserver(showElement, options);
fadeIn.forEach((fadeIn) => {
  observer.observe(fadeIn);
});
function showElement(entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
    }
  });
}


///////////////////////////////////////////
//FAQ アコーディオン
///////////////////////////////////////////
$(".qa-list dd").hide();
$(".qa-list dl").on("click", function(e){
    $('dd',this).slideToggle('fast');
    if($(this).hasClass('open')){
        $(this).removeClass('open');
    }else{
        $(this).addClass('open');
    }
});


///////////////////////////////////////////
//商品詳細 タブ
///////////////////////////////////////////
const tabMenus = document.querySelectorAll('.tab_menu-item');
console.log(tabMenus);

tabMenus.forEach((tabMenu) => {
  tabMenu.addEventListener('click', tabSwitch);
})

function tabSwitch(e) {
  // クリックされた要素のデータ属性を取得
  const tabTargetData = e.currentTarget.dataset.tab;
  // クリックされた要素の親要素と、その子要素を取得
  const tabList = e.currentTarget.closest('.tab_menu');
  console.log(tabList);
  const tabItems = tabList.querySelectorAll('.tab_menu-item');
  console.log(tabItems);
  // クリックされた要素の親要素の兄弟要素の子要素を取得
  const tabPanelItems = tabList.
  nextElementSibling.querySelectorAll('.tab_panel-box');
  console.log(tabPanelItems);

  // クリックされたtabの同階層のmenuとpanelのクラスを削除
  tabItems.forEach((tabItem) => {
    tabItem.classList.remove('is-active');
  })
  tabPanelItems.forEach((tabPanelItem) => {
    tabPanelItem.classList.remove('is-show');
  })

  // クリックされたmenu要素にis-activeクラスを付加
  e.currentTarget.classList.add('is-active');
  // クリックしたmenuのデータ属性と等しい値を持つパネルにis-showクラスを付加
  tabPanelItems.forEach((tabPanelItem) => {
    if (tabPanelItem.dataset.panel ===  tabTargetData) {
      tabPanelItem.classList.add('is-show');
    }
  })

}



////////////////////////////////////////////////////////////////////////////////////////
// ヘッダーが画面１番上を離れたら.activeを付与
///////////////////////////////////////////////////////////////////////////////////////
gsap.registerPlugin(ScrollTrigger);
gsap.to("header", {
  scrollTrigger: {
    start: "top+=1 top", // ビューポートのトップから1pxスクロールした時点でトリガー
    end: "bottom top", // ドキュメントの最下部まで
    toggleClass: {targets: "header", className: "active"}, // headerタグに対してactiveクラスを切り替え
  }
});


//各Swiperイベントの初期化
document.addEventListener('DOMContentLoaded', (event) => {

  //トップMVスライダー
  const swiper = new Swiper(".swiper", {
    loop: true,
    effect: 'fade',
    speed: 2000, // ２秒かけながら次の画像へ移動
    autoplay: {
      delay: 4000, // ４秒後に次の画像へ
      disableOnInteraction: false, // ユーザー操作後に自動再生を再開する
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    allowTouchMove: false, // マウスでのスワイプを禁止
  });

  //about　画像無限スライダー
  const aboutswiper = new Swiper(".about-swiper", {
    loop: true, // ループ有効
    slidesPerView: 1.7, // 一度に表示する枚数
    speed: 10000, // ループの時間
    allowTouchMove: false, // スワイプ無効
    autoplay: {
      delay: 0, // 途切れなくループ
    },
    breakpoints: {
      360: {
        slidesPerView: 1.7,
      },
      768: {
        slidesPerView: 2.5,
      },
      1100: {
        slidesPerView: 4,
      }
    },
  });

  // //TOP　ランキングスライダー
  var rankingswiper; 
  $(window).on('load resize', function(){
      var w = $(window).width();
      if (w <= 1000) {
        if (rankingswiper) {
          return;
        } else {
          rankingswiper = new Swiper('.ranking-swiper', {
            autoplay: {
              delay: 3000,
            },
            scrollbar: {
              el: '.swiper-scrollbar', //要素指定
            },
            breakpoints: {
              360: {
                slidesPerView: 1.7,
                spaceBetween: 20,
              },
              769: {
                slidesPerView: 2,
                spaceBetween: 20,
              }
            },
          });
        }
      } else {
          if (rankingswiper) {
              rankingswiper.destroy();
              rankingswiper = undefined;
          } 
      } 
  });

});


////////////////////////////////////////////////////////////////////////////////////////
// GSAPアニメーション
///////////////////////////////////////////////////////////////////////////////////////
//Fvアニメ
var tl = gsap.timeline();

tl
  .to('.anime-ttl01 span', {
    y: 0,
    stagger: 0.05,
    duration: 0.5,
    ease: "power2.out",
  })
  .to('.anime-bounce01', {
    opacity: 1,
    y: 0,
    duration: 1,
    ease: "bounce",
  }, "-=0.5");


//キャラークターがゆらゆらする
gsap.to(".yoyo01", {rotation: 30, duration: 1.5, repeat: -1, yoyo: true})
gsap.to(".yoyo02", {rotation: -30, duration: 1.5, repeat: -1, yoyo: true})



