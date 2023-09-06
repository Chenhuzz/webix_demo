import {JetView} from "webix-jet";
import Test from "../Test";
import XmlParser from "bpmn-xml-parser";
export default class DataView extends JetView{
	config(){
		console.log('XmlParser',XmlParser)
		const subApp = <Test></Test>;
		return { cols:[
			{view:"react-component", app:subApp},
		]};
	}
	init(view){
	}
}