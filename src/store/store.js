import { configureStore } from "@reduxjs/toolkit";
import { todoReducer } from "../feature/todo/todoSlice";

export const store = configureStore({
    reducer: todoReducer
    //todoReducer is a reducer function, which is responsible for
    //  handling updates to the state in response to actions.

})

