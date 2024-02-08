import { configureStore } from '@reduxjs/toolkit'
import { authApi} from './action/auth/api';
import { dashboardApi } from './action/Dashboard/api';

// console.log(authApi?.reducer,'ladl')
export const store = configureStore({
  reducer: {
     [authApi.reducerPath]: authApi.reducer,
     [dashboardApi.reducerPath]:dashboardApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }).concat(authApi.middleware)
    .concat(dashboardApi.middleware)
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
