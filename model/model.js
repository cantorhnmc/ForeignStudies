


// create app object that can be used as the main application object.
if (typeof window.app !== 'object') {
  window.app = new function() {
	var me = this;

  };
}

// create model object if it doesn't exist

if (typeof app.model !== 'object' ) {
	app.model = new function() {
	   var me = this;
  };
}

/*
 *  opts = {
 * 	     action : 'action to take in the server'
 *       returnDataWithPromise : true|false
 *        }
 */
app.model.model = function(opts) {
	var me = this;
	me.data = {};
	me.action = {};
	me.loadDataParms = null;
	me.returnDataWithPromise = false;
	me.deferred = null;

	me.doneHandlerWithCallback = function(data, success) {
		if (success) {
 		  this.data = data;
 		  var parms = this.loadDataParms;
          parms.callback.apply(parms.context, [data]);
        }
        else {
        	console.log("ajax in loadData in model.js ended in error. In doneHandlerWithCallback");
        }
	};

	me.doneHandlerWithJQueryPromise = function(data, success) {
		if (success) {
		  this.data = data;
 		  this.deferred.resolve(data.root);
         }
        else {
        	console.log("ajax in loadData in model.js ended in error. In doneHandlerWithJQueryPromise");
        }


	};

	/*
	 *  opts = {
	 * 	    callback : function(data)
	 *      context : <context object>,
	 *      data    : <data to send to server>
	 *   }
	 */

	me.loadData = function(opts) {
		   me.loadDataParms = opts;
		   var handler = null;
		   if (me.returnDataWithPromise) {
		   	me.deferred = jQuery.Deferred();
		   	handler = me.doneHandlerWithJQueryPromise;
		   }
		   else {
		   	handler = me.doneHandlerWithCallback;
		   }
		   var data = {
		   	action : me.action,
		   	func   : me.func ? me.func : '',
		   	userID : servervars.userid ? servervars.userid : '',
		   	cgicds : servervars.cgicds
		   };

		   var parms = (typeof me.loadDataParms.data === 'object') ? jQuery.extend(me.loadDataParms.data, data ) : data;
           jQuery.ajax({
 	                   url : servervars.pgm,
                       dataType : 'json',
                       data : jQuery.param(parms),
                       context : me
                         }).done(handler);
            if (me.returnDataWithPromise) {
            	return me.deferred.promise();
            }

     };

	 me = jQuery.extend(me, opts);

};



