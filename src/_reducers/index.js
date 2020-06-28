import { combineReducers } from "redux";

import { authentication } from "./authentication.reducer";
import { registration } from "./registration.reducer";
import { users } from "./users.reducer";
import { alert } from "./alert.reducer";
import invoiceReducer from "./invoiceReducer";
import profileReducer from "./profile-reducer";
import CoronaReducer from "./CoronaReducer";
import CoronaStateReducer from "./CoronaStateReducer";
import labResults_Reducer from "./labResults-Reducer";

const rootReducer = combineReducers({
  authentication,
  registration,
  users,
  alert,
  invoiceReducer,
  profileReducer,
  CoronaReducer,
  CoronaStateReducer,
  labResults_Reducer
});

export default rootReducer;
