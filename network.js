network = {
	url: "/api",
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
//  network.url = ""
//	network.onRecieve(function(response){
//			console.log(response);
//	});
//	network.send('init', 1)
