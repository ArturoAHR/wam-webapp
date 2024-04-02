import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { coreApi } from "../services/core";

export const store = configureStore({
  reducer: {
    [coreApi.reducerPath]: coreApi.reducer,
  },
  middleware: (getDefaultMiddleWare) => {
    return getDefaultMiddleWare().concat(coreApi.middleware);
  },
});

setupListeners(store.dispatch);
