/* @author Alfred Cai
 * Licensed under the MIT License
 */

// 在页面加载完成后添加事件监听
$(function () {
	// 找到表单并添加 selector
	var list = $('.tbllist tr');
	addHeading(list[0]);
	for (var i = 1; i < list.length - 1; i++) {
		addSelector(list[i])
	};
	addSelectorAll(list[list.length - 1]);

	// 添加事件监听，当选择器值改变时同时改变相对应的所有选择器的值
	$('.select-all').change(function () {
		var value = $(this).val();
		$('select').each(function (i, e) {
			$(e).val(value)
		});
	});
	// 同上，这是监听单行的选择器
	$('.select-tr').change(function () {
		var $td = $(this).parent(),
			value = $(this).val()
		for (var i = 0; i < 4; i++) {
			$td = $td.next()
			$td.children('select').val(value)
		}
	});
});

function addSelectorAll(tr) {
	// 定义全选的 selector 的 CSS 样式
	var $select = $('<select>')
		.addClass('select-all')
		.css('background-color', 'navajowhite')
		.css('width', '150px').css('margin', '2px 40px 2px 10px');
	// selector 中 option 的值
	$('<option>').val('0').text("全部赋值").appendTo($select);
	$('<option>').val('25').text("非常大").appendTo($select);
	$('<option>').val('20').text("比较大").appendTo($select);
	$('<option>').val('15').text("一般").appendTo($select);
	$('<option>').val('10').text("很少").appendTo($select);
	$select.val('0');

	// 在页面上放置 selector
	var $input = $(tr).children().children('span').children();
	$input.css('width', '150px');
	$input.before($select);

	$('#msg').css('color', '#CD0A0A');
}

function addSelector(tr) {
	// 定义单行的 selector 的 CSS 样式
	var $td = $('<td>');
	var $select = $('<select>')
		.addClass('select-tr')
		.css('background-color', 'navajowhite')
	$('<option>').val('0').text("单行赋值").appendTo($select);
	$('<option>').val('25').text("非常大").appendTo($select);
	$('<option>').val('20').text("比较大").appendTo($select);
	$('<option>').val('15').text("一般").appendTo($select);
	$('<option>').val('10').text("很少").appendTo($select);
	$select.val('0');
	$td.append($select);

	// 放置 selector
	var $tr = $(tr);
	$tr.children().eq(3).after($td);
};

function addHeading(tr) {
	var $heading = $(tr);
	var $th = $heading.children().eq(3);
	$th.after($('<th>单行全选</th>'));
};
