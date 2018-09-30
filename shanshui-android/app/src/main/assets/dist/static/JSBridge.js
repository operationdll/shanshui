/**
 * 处理JS 与iOS 交互 && 处理JS 与 安卓交互
 */
var openMap, getLocation, setMessageTag, removeMessageTag;
// window.open = cordova.InAppBrowser.open;
if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) {
	/**
	 * 处理JS 与iOS 交互
	 */
	//01----->基础参数设置 *  设置平台标识
	localStorage.platform = '1'

	//02----->方法 *  打开地图
	openMap =function(lng,lat) {
		window.webkit.messageHandlers.openMap.postMessage({lng:lng,lat:lat});
	}
 
	//03----->方法 *  获取当前位置
	getLocation = function() {
		window.webkit.messageHandlers.getLocation.postMessage(' ');

		// var onSuccess = function(position) {
		// 	alert('Latitude: '          + position.coords.latitude          + '\n' +
		// 		  'Longitude: '         + position.coords.longitude         + '\n' +
		// 		  'Altitude: '          + position.coords.altitude          + '\n' +
		// 		  'Accuracy: '          + position.coords.accuracy          + '\n' +
		// 		  'Altitude Accuracy: ' + position.coords.altitudeAccuracy  + '\n' +
		// 		  'Heading: '           + position.coords.heading           + '\n' +
		// 		  'Speed: '             + position.coords.speed             + '\n' +
		// 		  'Timestamp: '         + position.timestamp                + '\n');
		// };
	
		// onError Callback receives a PositionError object
		//
		// function onError(error) {
		// 	alert('code: '    + error.code    + '\n' +
		// 		  'message: ' + error.message + '\n');
		// }
	
		// navigator.geolocation.getCurrentPosition(onSuccess, onError);
	
		
	}
	function setLocationLat(lat,lng){
		//设置当前经纬度
		localStorage.lat = lng
		localStorage.lng = lat
	}
	//04----->方法 *  设置消息推送别名


	setMessageTag=function(a,b,c) {
		var obj = {
			alias_type:a,
			alias:b,
			tag:c
		}
		console.log('bm',obj)
		window.webkit.messageHandlers.addUMTagAlias.postMessage(obj)
	}
} else if (/(Android)/i.test(navigator.userAgent)) {
	/**
	 * 处理JS 与 安卓交互
	 */
	//01----->基础参数设置 *  设置平台标识
	localStorage.platform = '2'


	//02----->方法 *  打开地图
	openMap= function(lng,lat) {
		JSInterface.openMap(lng,lat)
	}

	//03----->方法 *  获取当前位置
	getLocation=function() {
		JSInterface.getLocation()
	}
	setLocationLat=function(lng,lat){
		localStorage.lat = lat
		localStorage.lng = lng
	}

	//04----->方法 *  设置消息推送别名
	function setMessageTag(a, b, c) {
		JSInterface.setMessageTag(a, b, c)
	}

}

//05----->方法 *  安卓打开pdf方法
function openPdf(url) {
	// JSInterface.openPDF(url)
	// window.open(url, '_blank', 'location=yes')
	window.open(url, '_system', 'location=yes')
}

//06----->方法 *  安卓打开视频的方法
function openVideo(url) {
	JSInterface.openVideo(url)
}
//07----->方法 *  安卓打开原生页面的方法
function openUrl(url,title) {
	JSInterface.openUrl(url,title)
}

//08----->方法 *  iOS打开原生页面的方法
function openFile(url) {
	window.webkit.messageHandlers.openFile.postMessage(url)
	// window.open(url, '_blank', 'location=yes')
}

//09----->方法 *  安卓获取消息列表的方法
function getNotifaction() {
	var obj=JSInterface.getNotifaction()
	return JSON.parse(obj)
}

//10----->方法 *  安卓获判断返回标识
function isHomePage(flag) {
    JSInterface.isHomePage(flag)
}

//11----->方法 *  iOS清除别名
function removeAllTagAlias(a,b,c) {
    var obj = {
        alias_type:a,
        alias:b,
        tag:c
    }
    window.webkit.messageHandlers.removeAllTagAlias.postMessage(obj)
}

function removeMessageTag(a,b,c) {
    JSInterface.removeMessageTag(a, b, c)
}

//12----->方法 *  安卓清除别名
function startXmlNetWork(xmlUrl){
    JSInterface.startXmlNetWork(xmlUrl)
}
function setXmlData(data) {
	console.log('xml',data)
}

//13----->方法 *  安卓打开外部浏览器
function getSystemBrowser(url) {
    JSInterface.getSystemBrowser(url)
}

//14----->方法 *  iOS打开外部浏览器
function openSafariUrl(url) {
	window.webkit.messageHandlers.openSafariUrl.postMessage(url);
	// window.open(url, '_system', 'location=yes')
}


/**
 * 初始化数据
 */
//初始化位置
getLocation()
//初始化集团id
//1=雅诗阁
//2=山水
localStorage.groupid = 2


/**
 * 初始化数据
 */
function openBooking(url) {
	if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) {
		window.webkit.messageHandlers.openSafariUrl.postMessage(url);
		// window.open(url, '_system', 'location=yes')
	} else {
		JSInterface.getSystemBrowser(url)
		// window.open(url, '_blank', 'location=yes')
	}
}


























