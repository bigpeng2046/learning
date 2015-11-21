var resultDiv;

var loginResp;

document.addEventListener("deviceready", init, false);
function init() {
	document.querySelector("#startScan").addEventListener("touchend", startScan, false);
	document.querySelector("#clearLog").addEventListener("touchend", clearLog, false);

	resultDiv = document.querySelector("#results");
}

function startScan() {
	cordova.plugins.barcodeScanner.scan(
		function (result) {
			var s = "Result: " + result.text + "<br/>" +
			"Format: " + result.format + "<br/>" +
			"Cancelled: " + result.cancelled;
			resultDiv.innerHTML = s;
			loginResp = ParseResponse(result.text);
			connect_to_server();
		}, 
		
		function (error) {
			alert("Scanning failed: " + error);
		}
	);
}

function ParseResponse(response) {
	var headers = {};
	var pairs = response.split("\r\n");	
	var pair;
	
	for (pair in pairs) {
		var temp = pairs[pair].split(":");
		if (temp)
			headers[temp[0]] = temp[1];
	}
	
	return headers;
}

function clearLog() {
	document.getElementById("messages").innerHTML = "";
}

function connect_to_server() {
	connect("ws://" + loginResp["Hosts"] + ":" + loginResp["Port"]);
}

var webSocket;

var connect = function(address){
	webSocket = new WebSocket(address);

	webSocket.onopen = function(e) {
		log("Connection open...");
		if (loginResp["ClientId"])
			send("SET-CREDENTIAL MIQI/1.0\r\nClientId:" + loginResp["ClientId"]+"\r\n");
		disconnect();
	};

	webSocket.onerror = function (e) {
		log("Connection error...");
	};

	webSocket.onmessage = function(e){
		if(typeof e.data === "string") {
			log("Received : " + e.data);
		} else {
			log("Binary message received...");
		}
	};
	webSocket.onclose = function(e){
		log("Connection Closed...");
	};
};

var disconnect = function(){
	log("Closing connection...");
	webSocket.close();
};

var log = function(message){
	var text = document.createTextNode(message);
	var div = document.createElement('div');
	div.appendChild(text);
	div.innerText = message;

	document.getElementById("messages").appendChild(div);
};

var send = function(message) {
	if (webSocket.readyState != 1) {
		log("Cannot send data when the connection is closed...");
		return;
	}
	log("Sending : " + message);
	webSocket.send(message);
};
