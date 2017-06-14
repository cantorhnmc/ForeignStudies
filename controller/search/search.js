

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
	
	me.alphaNumericRegex = /^[a-z0-9]+$/i;
	
	me.init = function(searchWindowHtml) {
	  
      me.searchWindowHtml = searchWindowHtml; 
	  jQuery(searchWindowHtml).find("#searchInput").on("keyup",me.onSearchInputKeyUp); 
      
	};
	
	me.onSearchInputKeyUp = function(event) {
		
		if (jQuery(event.currentTarget).val().length < 1) {
			jQuery(app.view.search.search.grid).jsGrid("loadData", {  clear : true}).done(function() {
	    	jQuery(app.view.search.search.grid).jsGrid("refresh");
	     });
			return;
		}
		
		if (me.alphaNumericRegex.test(String.fromCharCode(event.which)) && jQuery(event.currentTarget).val().length > 2) {
		 
		 jQuery(app.view.search.search.grid).jsGrid("loadData", {  data : {
			                                    	search : jQuery(event.currentTarget).val()
			                                    }}).done(function() {
	    	jQuery(app.view.search.search.grid).jsGrid("refresh");
	     });
		  
	                                      
	                                       
	   }
	                                      
	};  
	
	me.onRowDoubleClick = function(item, itemIndex, event) {
		var x = item; 
	}; 
	

};