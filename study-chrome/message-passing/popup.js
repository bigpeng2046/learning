// Copyright (c) 2012 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

function setChildTextNode(elementId, text) {
  document.getElementById(elementId).innerText = text;
}
	
// Tests the roundtrip time of sendRequest().
function testRequest() {
  setChildTextNode("resultsRequest", "running...");

  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    /*
    var timer = new chrome.Interval();
    timer.start();
    var tab = tabs[0];
    chrome.tabs.sendRequest(tab.id, {counter: 1}, function handler(response) {
      if (response.counter < 1000) {
        chrome.tabs.sendRequest(tab.id, {counter: response.counter}, handler);
      } else {
        timer.stop();
        var usec = Math.round(timer.microseconds() / response.counter);
        setChildTextNode("resultsRequest", usec + "usec");
      }
    });
    */
    var tab = tabs[0];
    chrome.tabs.sendRequest(tab.id, "Hello", function handler(response) {
        setChildTextNode("resultsRequest", response);
    });    
  });
}
	
// Tests the roundtrip time of Port.postMessage() after opening a channel.
function testConnect() {
  setChildTextNode("resultsConnect", "running...");

  var port = chrome.tabs.connect(null, {name: "knockknock"});
  port.postMessage({joke: "Knock knock"});
  port.onMessage.addListener(function(msg) {
    setChildTextNode("resultsConnect", msg.question);
  });
}
	
document.addEventListener('DOMContentLoaded', function() {
  document.querySelector('#testRequest').addEventListener(
      'click', testRequest);
  document.querySelector('#testConnect').addEventListener(
      'click', testConnect);
});
