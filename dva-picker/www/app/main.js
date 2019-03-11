import dva from "dva";
import { createLogger } from "redux-logger";
import router from "./router";
import pickerModel from "./models/pickerModel";

//创建app，并且使用logger插件
const app = dva({
  onAction: createLogger()
});

app.model(pickerModel);

app.router(router);

app.start("#app");
