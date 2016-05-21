/* @author Alfred Cai
 * Licensed under the MIT License
 */

var Btn = function (button_name, class_name) {
	return $("<input type='button'>")
		.val(button_name)
		.addClass(class_name)
		.css('width', '100px')
		.css('background-color', 'navajowhite')
		.css('margin', '0px 20px')
};
var Lesson = function (input_classNum, input_teaNum) {
	return {
		classNum: input_classNum,
		teaNum: input_teaNum
	}
};

$(function () {
	var $btn_submit = Btn('开始自动刷课', 'btn-interval-submit');
	$('#FastInputAction').before($btn_submit);

	$('.btn-interval-submit').click(function () {
		if (initAndSave()) {
			refreshPage();
			submit_start();
		}
	});

	$('.btn-refresh').click(function () {
		location.reload();
	});
});

function initAndSave() {
	chrome.storage.local.set({ 'selected': [] }, function () {
		console.log('clear storage');
	});
	var ListCourse = [];
	var count = 0;
	for (var i = 0; i < 6; i++) {
		var cln = $('#CID' + i).val();
		var tn = $('#TNo' + i).val();
		if (cln && tn) {
			var a = Lesson(cln, tn);
			console.log('get course%s:%s,%s', i + 1, a.classNum, a.teaNum);
			ListCourse.push(a);
			count += 1;
		}
	}
	if (count > 0) {
		chrome.storage.local.set({ 'selected': ListCourse }, function () {
			console.log('init and save ListCourse');
		});
		return 1;
	} else {
		alert('at least choose one lesson');
		return 0;
	}
};

var submit_time = 0, refresh_time = 0, submit_count = 1;

function submit_start() {
	chrome.storage.local.get('selected', function (items) {
		var ListCourse = items.selected;
		if (ListCourse.length > 0) {
			for (var i in ListCourse) {
				var a = ListCourse[i];
				$('#CID' + i).val(a.classNum);
				$('#TNo' + i).val(a.teaNum);
				console.log('submit course%s:%s,%s', i + 1, a.classNum, a.teaNum);
			}
			$('#FastInputAction').trigger('click');
			submit_time = setTimeout("submit_start()", 10000);
			console.log('setTimeout id of submit:%s, the %s time to submit on %s', submit_time, submit_count++, new Date());
		} else {
			stop();
		}
	});
};

function refreshPage() {
	refresh_time = setTimeout(function(){
		location.reload();
	}, 60 * 1000);
	console.log('setTimeout id of refresh:%s on %s', refresh_time, new Date());
}

function stop() {
	if (submit_time) {
		clearTimeout(submit_time);
		console.log('clear timeout of submit:%s', submit_time);

	}
	if (refresh_time) {
		clearTimeout(refresh_time);
		console.log('clear timeout of refresh:%s', refresh_time);
	}
}

chrome.storage.local.get('selected', function (items) {
	var ListCourse = items.selected;
	if (ListCourse.length > 0) {
		refreshPage();
		submit_start();
	}
});