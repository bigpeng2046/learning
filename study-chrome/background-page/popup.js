var createTab = document.getElementById('createTab');

createTab.onclick = function() {
  chrome.tabs.create({ url: 'image.html', selected: true});
};

var setImage = document.getElementById('setImage');

setImage.onclick = function() {
  var viewTabUrl = chrome.extension.getURL('image.html');
  var imageUrl = "images/icon-38.png";

  // Look through all the pages in this extension to find one we can use.
  var views = chrome.extension.getViews();
  for (var i = 0; i < views.length; i++) {
    var view = views[i];

    // If this view has the right URL and hasn't been used yet...
    if (view.location.href == viewTabUrl && !view.imageAlreadySet) {
      // ...call one of its functions and set a property.
      view.setImageUrl(imageUrl);
      view.imageAlreadySet = true;
      break;
    }
  }
};
