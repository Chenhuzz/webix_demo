import { JetApp, EmptyRouter, HashRouter } from "webix-jet";
import DataView from "./views/Data";
export default class MyApp extends JetApp {
  constructor(config) {
    const defaults = {
      router: EmptyRouter,
      start: "test",
      views: {
        test: DataView,
      },
    };

    super({ ...defaults, ...config });
  }
}
webix.ready(() => new MyApp().render());
