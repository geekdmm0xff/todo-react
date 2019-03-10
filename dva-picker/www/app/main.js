import dva from "dva";
import { createLogger } from "redux-logger";
import router from "./router";
import carModel from "./models/carModel";

//创建app，并且使用logger插件
const app = dva({
  onAction: createLogger()
});

app.model(carModel);

app.router(router);

app.start("#app");
