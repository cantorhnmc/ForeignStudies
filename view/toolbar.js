/*
 *  Add toolbar 
 */
// create app object that can be used as the main application object.
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

app.view.toolbar = new function() {
	var me = this; 
	
	me.toolbar = null; 
	
	me.createCallbackObj = null; 
	me.create = function(callbackObj, data) {
		me.createCallBackObj = callbackObj; 
		jQuery.get(servervars.htmlRoot + 'view/toolbar.template.html', function(html) {
		 var toolbarTemplate = jQuery.templates(html);
		 var toolbarHtml = toolbarTemplate.render(data);
		 me.toolbar = jQuery(toolbarHtml).appendTo('body'); 
         me.createCallBackObj.callback.apply(me.createCallBackObj.context); 
		}); 
	}; 
	
}; 
	


