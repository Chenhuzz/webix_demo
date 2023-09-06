import {createRoot}  from "react-dom/client";

webix.protoUI({
	name:"react-component",
	defaults:{
		borderless:true
	},
	$init:function(){
		this.$ready.push(function(){
			const root = createRoot(this.$view);
			root.render(this.config.app);
		});
	}
}, webix.ui.view);