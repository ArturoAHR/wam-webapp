import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

export const store = configureStore({
  reducer: {},
  middleware: (getDefaultMiddleWare) => {
    return getDefaultMiddleWare();
  },
});

setupListeners(store.dispatch);
