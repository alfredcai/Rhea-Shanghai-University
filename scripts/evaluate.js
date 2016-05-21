/* @author Alfred Cai
 * Licensed under the MIT License
 */

$(function () {
	var list = $('.tbllist tr');
	addHeading(list[0]);
	for (var i = 1; i < list.length - 1; i++) {
		addSelector(list[i])
	};
	addSelectorAll(list[list.length - 1]);

	$('.select-all').change(function () {
		var value = $(this).val();
		$('select').each(function (i, e) {
			$(e).val(value)
		});
	});

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
	var $select = $('<select>')
		.addClass('select-all')
		.css('background-color', 'navajowhite')
		.css('width', '150px').css('margin', '2px 40px 2px 10px');
	$('<option>').val('0').text("全部赋值").appendTo($select);
	$('<option>').val('25').text("非常大").appendTo($select);
	$('<option>').val('20').text("比较大").appendTo($select);
	$('<option>').val('15').text("一般").appendTo($select);
	$('<option>').val('10').text("很少").appendTo($select);
	$select.val('0');

	var $input = $(tr).children().children('span').children();
	$input.css('width', '150px');
	$input.before($select);

	$('#msg').css('color', '#CD0A0A');
}

function addSelector(tr) {
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

	var $tr = $(tr);
	$tr.children().eq(3).after($td);
};

function addHeading(tr) {
	var $heading = $(tr);
	var $th = $heading.children().eq(3);
	$th.after($('<th>单行全选</th>'));
};
