
if (typeof window.app !== 'object') {
  window.app = new function() {
	var me = this;
  };
}

// create view object if it doesn't exist

if (typeof app.view !== 'object' ) {
	app.view = new function() {
	   var me = this;
  }; 
}

if (typeof app.view.search !== 'object' ) {
	app.view.search = new function() {
	  
  }; 
}
app.view.search.search = new function() {

	var me = this; 
	jQuery.get(servervars.htmlRoot + '/view/search/search.template.html', function(html) {
		me.template = jQuery.templates(html);
	}); 
	me.dialog = null; 
	me.form = null;
	me.show = function() {

      if (me.form) {
			jQuery(me.form).remove(); 
       }
      if (me.dialog) {
			jQuery("#mainSearchDiv").dialog("destroy"); 
	  }
		
	  var formHtml = me.template.render();
	  me.form = jQuery(formHtml).appendTo('body');	
	  me.dialog = jQuery("#mainSearchDiv").dialog({
	     	        width : 400,
	     	        height : 400,
	     	        draggable: true,
	     	        create: function( event, ui ) {
	     	        	
	     	        	 me.grid = jQuery("#searchGrid").jsGrid({
				                                         sorting : false,
				                                         paging : false,
				                                         width : "100%", 
				                                         height : 300,
				                                         controller : app.model.search.search,
				                                         autoload : false,
				                                         noDataContent  : '',

				                                         fields : [
			                                                       {
				                                                     title : "Search Results",
				                                                     name : "DESCRIPTION",
				                                                     type : "text"
			                                                       }
			                                                      ],
			                                         onRefreshed : function(args) {
				
				                                     
			                                         },
			                                         rowDoubleClick : app.controller.search.search.onRowDoubleClick
			                                           
		                                         });	
	     	        	app.controller.search.search.init(me.form);

	     	        }
	    });
	    
	    
	   	
		
	}; 	
	
  me.refreshGrid = function() {
  	 jQuery("#searchGrid").jsGrid("refresh"); 
  }; 
	
  me.clear = function() {
  	if (me.grid) {
  		app.model.search.search.clear(); 
  		jQuery(me.grid).jsGrid("refresh");
  	}
  }; 	
	
}; 
	