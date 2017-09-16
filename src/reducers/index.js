import {combineReducers} from "redux";
import { reducer as form } from 'redux-form';
import SignUpReducers from "./SignUpReducers";

export default combineReducers({
  form: form,
  signUpData: SignUpReducers
})
