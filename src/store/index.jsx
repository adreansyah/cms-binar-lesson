import { configureStore } from '@reduxjs/toolkit';

import rootReducers from './reducers';
import { thunk } from 'redux-thunk';
import { createLogger } from 'redux-logger';

const store = configureStore({
    reducer: rootReducers,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk, createLogger())
});
export default store