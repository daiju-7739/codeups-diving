
jQuery(function ($) { // この中であればWordpressでも「$」が使用可能になる

    let topBtn = $('.c-to-top');
    topBtn.hide();
  
    // ボタンの表示設定
    $(window).scroll(function () {
      if ($(this).scrollTop() > 70) {
        // 指定px以上のスクロールでボタンを表示
        topBtn.fadeIn();
      } else {
        // 画面が指定pxより上ならボタンを非表示
        topBtn.fadeOut();
      }
    });

  // ボタンをクリックしたらスクロールして上に戻る
  topBtn.click(function () {
    $('body,html').animate({
      scrollTop: 0
    }, 300, 'swing');
    return false;
  });

  //ドロワーメニュー
  $('.js-hamburger').click(function () {
    if ($('.js-hamburger').hasClass('is-active')) {
      $('.js-hamburger').removeClass('is-active');
      //$('html').toggleClass('is-fixed');
      $('.js-sp-nav').fadeOut(300);
    } else {
      $('.js-hamburger').addClass('is-active');
      $('.js-sp-nav').fadeIn(300);
    }
  });


});
