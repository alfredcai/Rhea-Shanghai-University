var alarmClock = {
    offHandler : function(e) {
       chrome.storage.local.set({ 'selected': [] });
       window.close();
    },
    setup: function() {
            var a = document.getElementById('stop-submit');
            a.addEventListener('click',  alarmClock.offHandler );
        }
};

let Lesson = function (input_classNum, input_teaNum) {
	return {
		classNum: input_classNum,
		teaNum: input_teaNum
	}
};

document.addEventListener('DOMContentLoaded', function () {
    alarmClock.setup();
    let b = document.getElementById('btn-send')
    b.addEventListener('click',function(){
        let classnum = document.getElementsByClassName('input_classnum');
        let teanum = document.getElementsByClassName('input_teachernum');
        let ListCourse = [];
        for(let i=0;i<6;i++){
            if(!classnum[i].value||!teanum[i].value) break;
            ListCourse.push(Lesson(classnum[i].value,teanum[i].value))
        }
        chrome.storage.local.set({'selected':ListCourse})
        alert('请手动刷新选课网站以开启自动监测')
    }
)
}
)
