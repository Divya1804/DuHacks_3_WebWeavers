// Import necessary modules from redux-persist
import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
// Import your reducer (userSlicer)
import userSlicer from './userSlicer';
import storageSession from 'redux-persist/lib/storage/session';

// Configuration for redux-persist
const persistConfig = {
  key: 'root', // Key for the persisted data
  storage: storageSession // Storage engine, you can use 'localStorage' or 'sessionStorage'
};

// Create a persisted reducer
const persistedReducer = persistReducer(persistConfig, userSlicer);

// Create the Redux store with the persisted reducer
export const store = configureStore({
  reducer: persistedReducer,
});

// Create a persistor object
export const persistor = persistStore(store);

// Add event listener to clear persisted state on window unload

