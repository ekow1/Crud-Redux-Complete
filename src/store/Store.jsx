import { legacy_createStore as createStore} from "redux";
import usersReducer from "../components/reducer/UserReducers";

const Store = createStore( usersReducer )
export  default Store;