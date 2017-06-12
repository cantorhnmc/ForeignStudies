
app.model.ForeignStudies = function(opts) {
	return  new app.model.model({ 
											action : 'getForeignStudies',
											func : 'JSON',
											returnDataWithPromise : true,
											doneHandlerWithJQueryPromise : function(data, success) {
													if (success) {
															data.root.forEach(function (rec,index,array) {
																var date = new Date(rec.year, rec.month-1, rec.day , 0, 0, 0);
																jQuery.extend(rec,{ studyDate : date}); 
																
																var uploadTimeHour = Math.trunc(rec.upload_time/100); 
																var uploadTimeMinutes = rec.upload_time % 100; 
																var uploadedDate = new Date(rec.upload_year, rec.upload_month -1, rec.upload_day, uploadTimeHour, uploadTimeMinutes, 0);
																jQuery.extend(rec,{ uploadedDate : uploadedDate});
                                                                
															});
															this.data = data; 
															this.deferred.resolve(data.root);
													}
													else {
														console.log("ajax in loadData in foreignStudies.js ended in error. In doneHandlerWithJQueryPromise"); 
													}

											}
									});
}; 
