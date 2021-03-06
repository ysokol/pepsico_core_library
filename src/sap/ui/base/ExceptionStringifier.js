sap.ui.define([
	"com/pepsico/core/sap/ui/base/RuntimeException"
], function(RuntimeException) {
	"use strict";

	return {
		stringify: function(oException) {
			if (!oException)
				return "";
			if (oException instanceof com.pepsico.core.sap.ui.base.RuntimeException) {
				return oException.toString();
			} else if (oException instanceof Error) {
				return oException.toString() + "\n" + oException.stack;
			} else if (typeof oException === "object"){
				return JSON.stringify(oException, null, 4);
			} else if (typeof oException === "string"){
				return oException;
			} else {
				return "Uncknown object '" + oException + "'";
			}
		}
	};
});
