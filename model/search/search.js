
if (typeof app.model.search !== 'object' ) {
	app.model.search = new function() {
  };
}

app.model.search.Search = function(opts) {
	return  new app.model.model({ 
											action : 'searchForeignStudyTypes',
											func : 'JSON',
											returnDataWithPromise : true,
											doneHandlerWithJQueryPromise : function(data, success) {
													if (success) {
															
															this.data = data; 
															this.deferred.resolve(data.rows);
													}
													else {
														console.log("ajax in loadData in foreignStudies.js ended in error. In doneHandlerWithJQueryPromise"); 
													}

											}
									});
}; 
