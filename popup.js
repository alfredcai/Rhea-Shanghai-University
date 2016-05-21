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

document.addEventListener('DOMContentLoaded', function () {
    alarmClock.setup();
});
