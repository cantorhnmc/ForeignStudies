

// create app object that can be used as the main application object.
if (typeof window.app !== 'object') {
  window.app = new function() {
	var me = this;

  };
}

// create controller object if it doesn't exist

if (typeof app.controller !== 'object' ) {
	app.controller = new function() {
  }; 
}

if (typeof app.controller.search !== 'object' ) {
	app.controller.search = new function() {
  }; 
}


app.controller.search.search = new function() {
	var me = this; 
	
	
	me.init = function() {
		
      
	};
	
	 
	

};