
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
	     	        width : 550,
	     	        draggable: true,
	     	        create: function( event, ui ) {
	     	        	app.controller.search.search.init(me.form);

	     	        }
	    });
	   	
		
	}; 	
	
	
	
	
}; 
	