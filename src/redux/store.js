import { applyMiddleware, createStore } from 'redux'
import thunkMiddleware from 'redux-thunk'
import reducer from './reducer'
import AsyncStorage from '@react-native-community/async-storage';
import { persistStore, persistReducer } from 'redux-persist';

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, reducer)


export const store = createStore(persistedReducer, applyMiddleware(thunkMiddleware))
export const persistor = persistStore(store);
