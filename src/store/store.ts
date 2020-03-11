import { combineReducers, createStore, applyMiddleware } from 'redux'

import genresReducer from './reducers/genresReducer' 

const reducer = combineReducers({
    genres: genresReducer,
})

export default createStore(reducer, applyMiddleware())