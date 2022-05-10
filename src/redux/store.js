import { combineReducers, legacy_createStore } from "redux";
import { TodosReducer,initialTodos } from "./TodosSlice/TodosSlice";


const store=legacy_createStore(combineReducers({
   todos:TodosReducer,
}),
{
    todos:initialTodos
});
export default store;