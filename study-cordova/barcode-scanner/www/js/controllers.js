angular.module('miqi', ['ngCordova'])

  .controller('PictureCtrl', function($scope, $cordovaBarcodeScanner) {

	$scope.scanBarcode = function() {
	  document.addEventListener("deviceready", function () {

		$cordovaBarcodeScanner
		  .scan()
		  .then(function(result) {
			// Success! Barcode data is here
			alert(result.text);
			var s = "Result: " + result.text + "<br/>" +
			  "Format: " + result.format + "<br/>" +
			  "Cancelled: " + result.cancelled;
			$scope.barcodeInfo = "" + s;
		  }, function(error) {
			// An error occurred
			alert("error!");
		  });

	  }, false);
	};
	
  });
  