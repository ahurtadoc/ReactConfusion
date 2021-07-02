import {combineReducers, createStore, applyMiddleware} from "redux";
import {Dishes} from "./dishes";
import {Comments} from "./comments";
import {Leaders} from "./leaders";
import {Promotions} from "./promotions";
import thunk from "redux-thunk";
import {logger} from "redux-logger"

export const ConfigureStore = () =>{
     return createStore(
         combineReducers({
              dishes: Dishes,
              comments: Comments,
              leaders: Leaders,
              promotions: Promotions
         }),
         applyMiddleware(thunk, logger)
     );
}
