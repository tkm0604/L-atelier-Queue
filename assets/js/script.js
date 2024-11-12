// -----------------------------------
// デバイスで条件分岐
// -----------------------------------
$(document).ready(function() {

	let ua = window.navigator.userAgent.toLowerCase();
	if(ua.indexOf('iPhone') > 0) {
		//iPhoneの時の処理
		$("meta[name='viewport']").attr("content", "width=device-width,initial-scale=1");
	} else if(ua.indexOf("Android") > 0 && ua.indexOf("Mobile") > 0) {
		//Android（モバイル）の時の処理
		$("meta[name='viewport']").attr("content", "width=device-width,initial-scale=1");
	} else if(ua.indexOf('ipad') > -1 || ua.indexOf('macintosh') > -1 && 'ontouchend' in document || ua.indexOf('Android') > -1) {
		//iPadとAndroidの時の処理
		$("meta[name='viewport']").attr("content", "width=1280");
	} else {
		//その他PCの処理
		$("meta[name='viewport']").attr("content", "width=device-width,initial-scale=1");
	}



// -----------------------------------
// ハンバーガーメニュー
// -----------------------------------	

	$('#hamburger').click(function(){
		$('.g-nav').toggleClass('is-active');
		$(this).toggleClass('is-active');
		$('body').toggleClass('no-scroll');   // スクロールの禁止/解除
	});

    $(window).on('scroll', function() {
        let footerOffset = $('footer').offset().top; // フッターの位置を取得
        let windowHeight = $(window).height();       // 画面の高さ
        let scrollTop = $(window).scrollTop();       // スクロール位置を取得
        
        if (scrollTop + windowHeight + 50 > footerOffset) {
            $('#hamburger').fadeOut(); // footer50px上に差し掛かったら非表示
        } else {
            $('#hamburger').fadeIn();  // footerから離れたら再表示
        }
    });

// -----------------------------------
// TOPへ戻る
// -----------------------------------	

    $('#goTop').on('click', function(event) {
        event.preventDefault(); // リンクのデフォルト動作を無効化
        $('html, body').animate({ scrollTop: 0 }, 'slow'); // スムーズにスクロール
    });
});