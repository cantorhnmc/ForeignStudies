

// create app object that can be used as the main application object.
if (typeof window.app !== 'object') {
  window.app = new function() {
	var me = this;

  };
}

// create controller object if it doesn't exist

if (typeof app.controller !== 'object' ) {
	app.controller = new function() {
	   var me = this;
  }; 
}


app.controller.main = new function() {
	var me = this; 
	
	
	me.init = function() {
		app.model.foreignStudies = app.model.ForeignStudies(); 
		app.model.search.search = new app.model.search.Search(); 
		app.view.toolbar.create({
			                     callback : me.onContinueInit,
			                     context : me 
		                         }, 
		                         servervars); 
		 
      
	};
	
	me.onContinueInit = function() {
		
		jQuery(app.view.toolbar.toolbar).find("#addButton").click(me.onAddButtonClick);
		
		app.view.foreignStudiesGrid.create();
		
	    
	}; 
	
	me.onAddButtonClick = function() {
		
		app.view.search.search.show(); 
	}; 
	

};
