
$(function(){


// ハンバーガーメニューが押された時
$('#hamburger_btn').on('click',function(){
	$(this).toggleClass('on');
	$('.js-drower').toggleClass('on');
	// 要素・hasClass('チェックしたいクラス名')
	// チェックしたいクラス名がついていたらtrue ついてなければfalse
	let isActive = $(this).hasClass('on');
    toggleDrower(isActive);
    

})
});


function toggleDrower(isActive) {
    if (isActive) {
      // onになっていた時、メニューを表示
      $('#drower-bg').fadeIn(600);
    } else {
      // onを外した時、メニューを非表示
      $('#drower-bg').fadeOut(600);
    }
  };


  // モーダル

  $(function(){

  $('.img-box img/tajimahal.jpg').on('click',function(){
  	$('.modal-bg').fadeIn('slow');
  	$('#moda-text').fadeIn('slow');
  })


$('.modal-close').on('click',function(){
	$('#drower-bg').fadeOut('slow'); 
								// 遅めのアニメーション
	$('.modal-bg').fadeOut('slow');


  });



});

   