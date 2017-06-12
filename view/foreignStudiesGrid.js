

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

app.view.foreignStudiesGrid = new function() {
	var me = this;
	me.grid = null; 
	me.create = function() {
		me.grid = jQuery('<div id="foreignStudiesDiv"></div>').appendTo('body'); 
		var gridHeight = Math.floor((window.screen.availHeight - jQuery(me.grid).offset().top) * 0.9); 
		jQuery(me.grid).jsGrid({
				sorting : false,
				paging : false,
				width : "100%", 
				height : gridHeight + "px", 
				controller : app.model.foreignStudies,
				autoload : true,
				noDataContent  : '',

				fields : [
			              {
				            title : "Description",
				            name : "description",
				            type : "text"
			              },
			              {
			              	title : "Study Date",
			              	type : "text",
			              	sorter : function(date1, date2) {
					                   return date1 - date2;
				                      },
				            itemTemplate : function(columnItem, data) {
					
					              return (data.studyDate.getMonth() + 1).pad() + '/' + 
					                     data.studyDate.getDate().pad() + '/' + 
					                     data.studyDate.getFullYear();     
				               }         
			              },
			              {
				            title : "Accension#",
				            name : "accensionNumber",
				            type : "text"
			              },
			              {
				            title : "Notes",
				            name : "notes",
				            type : "text"
			              },
			              {
				            title : "Uploaded",
				            name : "uploaded",
				            type : "text",
				            itemTemplate : function(columnItem, data) {
					
					              return data.uploadby_lastname + ', ' + data.uploadby_lastname
					                                      + ' ' + (data.uploadedDate.getMonth() + 1).pad() + '/' + 
					                                              data.uploadedDate.getDate().pad() + '/' + 
					                                              data.uploadedDate.getFullYear() + ' ' + 
					                                              data.uploadedDate.getHours().pad() + ':' + 
					                                              data.uploadedDate.getMinutes().pad();     
				               } 
				               
			              } 
			             ],
			onRefreshed : function(args) {
				
				
			}  
		}); 
		
	}; 
	
	
	
	
}; 
