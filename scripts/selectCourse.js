/* @author Alfred Cai
 * Licensed under the MIT License
 */

// 定义课程类
var Lesson = function (input_classNum, input_teaNum) {
	return {
		classNum: input_classNum,
		teaNum: input_teaNum
	}
};

// 初始化选课
function initAndSave() {
	// 清空 chrome 本地存储中“selected”的值
	chrome.storage.local.set({ 'selected': [] }, function () {
		console.log('clear storage');
	});
	var ListCourse = [];
	var count = 0;
	for (var i = 0; i < 6; i++) {
		// 获取课程号
		var cln = $('#CID' + i).val();
		// 获取教师号
		var tn = $('#TNo' + i).val();
		if (cln && tn) {
			var a = Lesson(cln, tn);
			console.log('get course%s:%s,%s', i + 1, a.classNum, a.teaNum);
			ListCourse.push(a);
			count += 1;
		}
	}
	if (count > 0) {
		// 将 ListCourse 的值存入本地存储的 selected 中
		chrome.storage.local.set({ 'selected': ListCourse }, function () {
			console.log('init and save ListCourse');
		});
		return 1;
	} else {
		alert('at least choose one lesson');
		return 0;
	}
};

var submit_id = 0, refresh_id = 0, submit_count = 1;

function submit_start() {
	// 从 chrome 的本地存储中读取课程
	chrome.storage.local.get('selected', function (items) {
		var ListCourse = items.selected;
		// 如果课程不为空，开始选课
		if (ListCourse && ListCourse.length > 0) {
			for (var i in ListCourse) {
				// 将课程填入页面的表单里
				var a = ListCourse[i];
				$('#CID' + i).val(a.classNum);
				$('#TNo' + i).val(a.teaNum);
				console.log('submit course%s:%s,%s', i + 1, a.classNum, a.teaNum);
			}
			// 点击页面上的选课按钮
			$('#FastInputAction').trigger('click');
			submit_campus = setTimeout("$('#NotCollegeAction').trigger('click')",3000);
			// 设置每8秒点击一次按钮
			submit_id = setTimeout("submit_start()", 8000);
			console.log('setTimeout id of submit:%s, the %s time to submit on %s',
				submit_id, submit_count++, new Date());
		} else {
			stop();
		}
	});
};

// 刷新页面函数，10分钟后刷新
function refreshPage(x) {
	refresh_id = setTimeout(function () {
		location.reload();
	}, x * 60 * 1000);
	console.log('setTimeout id of refresh:%s on %s', refresh_id, new Date());
}

// 停止函数，清除定时器进程
function stop() {
	if (submit_id) {
		clearTimeout(submit_id);
		clearTimeout(submit_campus);
		console.log('clear timeout of submit:%s', submit_id);

	}
	if (refresh_id) {
		clearTimeout(refresh_id);
		console.log('clear timeout of refresh:%s', refresh_id);
	}
}


chrome.storage.local.get('selected', function (items) {
	var ListCourse = items.selected;
	if (ListCourse.length > 0) {
		if(document.getElementById('FastInputAction')){
		refreshPage(10);
		submit_start();
	}
	else{
		console.log('选课尚未开始,时间:%s',new Date())
		refreshPage(0.1);
	}
}});





chrome.storage.local.get('selected', function (items) {
	var ListCourse = items.selected;
	if (ListCourse.length > 0) {
		if(document.getElementById('FastInputAction')){
		refreshPage(10);
		submit_start();
	}
	else{
		console.log('选课尚未开始,时间:%s',new Date())
		refreshPage(0.1);
	}
}});
