// 全reducerを束ねるやつ
import { combineReducers } from "redux";
import count from './count';

export default combineReducers({ count })
