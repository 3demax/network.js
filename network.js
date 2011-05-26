/*http = new XMLHttpRequest();
http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
http.setRequestHeader("Content-length", params.length);
http.setRequestHeader("Connection", "close");
*/
network = {
	url: "/api/",
	_send : function(parameters){
		this.xhr = new Xhr(this.url, {
		    urlEncoded: false,
			onSuccess: function(request){
				console.log(request.responseText);				
				this.receiveCallback(JSON.parse(request.responseText));
			},
		}).send(JSON.stringify(parameters));
		this.xhr.receiveCallback = this.receiveCallback;
	}, 

    /*_send: function(params){
	http.open('POST', this.url, true);
	http.send(params);
    },*/
	onRecieve : function(callback){
		this.receiveCallback = callback;
	},
	send: function(actionName, args){
		if ((typeof args == "undefined") || (args == "")) args = null;
		this._send({
		    "Action": {"name":actionName, "params":args},
		    "AppID":1
		})
	}
}

//examples of usage:
	//network.url = ""
	//network.onRecieve(function(response){
	//	//console.log("callback response\n\t" + response);
	//		console.log(response);
	//});
	//network.send('init', 1)
