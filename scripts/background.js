chrome.storage.onChanged.addListener(function (changes, namespace) {
  for (key in changes) {
    var storageChange = changes[key];
    console.log('Storage key "%s" in namespace "%s" changed. ' +
      'Old value was "%s", new value is "%s".',
      key,
      namespace,
      storageChange.oldValue,
      storageChange.newValue);
  }
});

chrome.alarms.onAlarm.addListener(function (alarm) {
  console.log('Alarm name:%s,time:%s,period:%s', alarm.name, alarm.scheduledTime, alarm.periodInMinutes);
  switch (alarm.name) {
    case 'submit':
      chrome.storage.local.get('windowsId', function (e) {
        var windowsId = e.windowsId;
      });
      break;
    case 'refresh':
      break;
    default: break;
  }
});

chrome.runtime.onMessage.addListener(
  function (request, sender, sendResponse) {
    console.log(sender.tab ? "from a content script:" + sender.tab.url : "from the extension");
    if (request.greeting == "hello") sendResponse({ farewell: "goodbye" });
  });

chrome.storage.local.set({ 'windowsId': 123 }, function () {
  console.log('init and save ListCourse');
});

chrome.storage.local.get('windowsId', function (e) {
  console.log(e.windowsId);
});
