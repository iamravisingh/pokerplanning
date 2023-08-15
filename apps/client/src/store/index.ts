import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducer';

const store = configureStore({
  reducer: rootReducer,
});

// Enable HMR for Redux store
// if reducer changes during dev mode, 
// this will update the store without full page reload 
if (import.meta.hot) {
  import('./rootReducer')
    .then((module) => {
      const newRootReducer = module.default;
      store.replaceReducer(newRootReducer);
    })
    .catch((error) => {
      console.error('HMR error:', error);
    });
}

export type RootState = ReturnType<typeof store.getState>;

export type AppGetState = typeof store.getState;

export type AppDispatch = typeof store.dispatch;

export default store;
