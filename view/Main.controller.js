sap.ui.controller("sap.training.exc08.property_binding.view.Main", {

	onInit: function() {

		var oData = {
		    "name": "Peter",
			"enabled": true
		};
		
		var oModel = new sap.ui.model.json.JSONModel();
		oModel.setData(oData);

		this.getView().setModel(oModel);
	}

});