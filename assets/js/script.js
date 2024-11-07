// -----------------------------------
// デバイスで条件分岐
// -----------------------------------
$(function(){
	var ua = window.navigator.userAgent.toLowerCase();
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
});


