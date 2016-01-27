var TabId = 0,
	hasFound = false,
	lesson = function(input_classNum, input_teaNum) {
		return {
			classNum: input_classNum,
			teaNum: input_teaNum
		}
	}

//course is an array of lessons
var course = [];
//init
course.push(lesson(1010, 2000))
course.push(lesson(1020, 3000))
course.push(lesson(1030, 4000))

chrome.storage.local.set({
	'selected': course
}, function() {
	console.log(course);
	console.log('Settings saved');
});
