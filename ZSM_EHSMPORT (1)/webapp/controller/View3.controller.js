sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("portalportal.controller.view3", {
		onbclick:function()
	{
			var oR = sap.ui.core.UIComponent.getRouterFor(this);
			oR.navTo("View2");
	},
		onInit: function()
	{
	
		var url = "/sap/opu/odata/SAP/ZEHSM_SM_OD_SRV/";
		var d;
		var oe= new sap.ui.model.odata.ODataModel(url,true);
		oe.read("ZEHSM_RISK_SSSet?$filter=InciRecNo eq '1000002' &$format=json",{
			context:null,
			urlParameter:null,
			async:false,
			success:function(oData,oResponse)
			{
				d=oData.results;
				
			}
		}
		);
		var oen=new sap.ui.model.json.JSONModel();
		oen.setData({
			"results":d
		});
		this.getView().byId("Mara").setModel(oen);
	}

	});

});