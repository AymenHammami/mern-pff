import {  configureStore } from '@reduxjs/toolkit';
import userReducer from './user/userSlice';

//const rootReducer = combineReducers({ 
    user: userReducer 
//});

export const store = configureStore({
  reducer: {user: userReducer},
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

//export const persistor = persistStore(store);