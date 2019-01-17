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
        alert('数据已存入，请打开快速录入界面，若已打开，请刷新.之后即可开始自动刷课');  
    })
    chrome.storage.local.get('selected',function(items){
        let ListCourse = items.selected;
        let classnum = document.getElementsByClassName('input_classnum');
        let teanum = document.getElementsByClassName('input_teachernum');
        for(let i = 0;i<ListCourse.length;i++){
            classnum[i].value=ListCourse[i].classNum;
            teanum[i].value=ListCourse[i].teaNum;
        }
    })

}
)
