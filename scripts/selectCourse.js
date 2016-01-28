/* @author Alfred Cai
 * Licensed under the MIT License
 */

var Btn = function(button_name, class_name) {
	return $('<button>')
		.text(button_name)
		.addClass(class_name)
		.css('width', '150px')
		.css('background-color', 'navajowhite')
		.css('margin', '0px 10px 3px 30px')
};
var Lesson = function(input_classNum, input_teaNum) {
	return {
		classNum: input_classNum,
		teaNum: input_teaNum
	}
};
var course = [];

function startSubmit() {
	for (var i = 0; i < 8; i++) {
		course.push(Lesson($('#CID' + i), $('#TNo' + i)));
	}
	chrome.storage.local.set({
			'selected': course
		},
		function() {});
}

function refresh() {
	location.reload();
}

function clickButton() {
	$('#FastInputAction').trigger('click');
}

$(function() {
	var $btn = Btn('开始刷课', 'btn-interval-submit');

	$('.btn-interval-submit').click(function() {
		
	});

});