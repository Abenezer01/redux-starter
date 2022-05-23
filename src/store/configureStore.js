import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";
import logger from "./middleware/logger";
import func from "./middleware/func";
import errorLogger from "./middleware/error";
import apiMiddleware from './middleware/api'
export default () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => [
      ...getDefaultMiddleware(),
      logger("console"),//parametrized middleware
      errorLogger,
      apiMiddleware
    ],
  });
};
