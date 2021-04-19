import React from "react"
import { Provider } from "react-redux"
import { createStore, combineReducers, applyMiddleware } from "redux"
import thunk from "redux-thunk"

// import items from "./app/redux/Item/Item.reducers"
// import user from "./app/redux/User/User.reducers"
import todo from "./app/redux/Todo/Todo.reducers"
import RouteManager from "./app/RouteManager"

// Setup Redux store with Thunks
// const reducers = combineReducers({ items })
// const reducers = combineReducers({ user })
const reducers = combineReducers({ todo })
const store = createStore(reducers, applyMiddleware(thunk))

const App = () => {
    return (
        <Provider store={store}>
            <RouteManager />
        </Provider>
    )
}

export default App
