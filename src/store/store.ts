import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    // [userSlice.reducerPath]:userSice.reducer
  },
  //   middleware: (getDefaultMiddleware) => {
  //     getDefaultMiddleware().concat(userSlice.middleware);
  //   },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
