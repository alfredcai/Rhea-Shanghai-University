/* @author Alfred Cai
 * Licensed under the MIT License
 */

var btn = function(button_name, class_name) {
	return $('<button>')
		.text(button_name)
		.addClass(class_name)
		.css('width', '150px')
		.css('background-color', 'navajowhite')
		.css('margin', '0px 10px 3px 30px')
};

$(function() {
	var $btn0 = btn('原样式', 'btn-normal'),
		$btn1 = btn('删除周末', 'btn-delWeek'),
		$btn2 = btn('添加课程名', 'btn-addLessonName')

	$('#UserNo').before($btn0)
		.before($btn1).before($btn2);

	$('.btn-normal').click(function() {
		InitPage();
	});

	$('.btn-delWeek').click(function() {
		var list = $('.tbllist');
		var $table = $(list[1]);
		for (var i = 0; i < 14; i++) {
			var $tr = $table.children('tbody').children().eq(i);
			$tr.children().eq(8).remove();
			$tr.children().eq(7).remove();
		};
	});

	$('.btn-addLessonName').click(function() {
		$('.btn-delWeek').trigger('click');

		var list = $('.tbllist');
		var $table = $(list[1]);
		setTableWidth($table);

		var data = getCourse_Array(list);
		var location = [];

		for (var i = 1; i < 14; i++) {
			var $tr = $table.children('tbody').children().eq(i);
			for (var j = 0; j < 7; j++) {
				var $td = $tr.children().eq(j);
				var pattern = /[A-Z]/;
				var str = $td.text().trim();
				if (pattern.test(str)) {
					location.push([str, i, j]);
				}
			};
		};

		location.forEach(function(e) {
			$td = $table.children('tbody')
				.children().eq(e[1])
				.children().eq(e[2]);
			$td.empty();
			var index = e[0].charCodeAt(0) - 65;
			var course_name = data[index][2],
				course_room = data[index][7];

			$td.html(course_name + "<br>" + course_room);
		})
	});
});

function setTableWidth(table) {
	var $table = $(table);
	var $tr = $table.children('tbody').children().eq(0);
	for (var i = 2; i < 7; i++) {
		var $td = $tr.children().eq(i);
		$td.css('width', 133);
	};
};

function getCourse_Array(list) {
	var course = [];
	var $tr_list = $(list[0]).children().children();
	for (var i = 3; i < $tr_list.length; i++) {
		var $td_list = $($tr_list[i]).children();
		var a_course = [];
		for (var j = 0; j < $td_list.length - 1; j++) {
			var str = $($td_list[j]).text().trim()
			a_course.push(str);
		};
		course.push(a_course);
	};
	return course;
};

//Copy from the webpage's head.script code
function InitPage() {
	var istudentNo = $("#UserNo").val();
	$.ajax({
		type: "POST",
		url: "/StudentQuery/CtrlViewQueryCourseTable",
		data: {
			studentNo: istudentNo
		},
		cache: false,
		beforeSend: function() {
			$("#divCourseMain").html("<div style=\"text-align:center; margin-top:10px;\"><img src='/Content/default/images/loading.gif' alt=''/></div>");
		},
		success: function(html) {
			$("#divCourseMain").empty().html(html);
		}
	});
};