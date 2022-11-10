// import { combineReducers } from 'redux'
// import FrontendSideSlice from "../Components/FrontendSide/FrontendSideSlice"
import { currencyApi } from "../api/CurrencyApi"

const reducer = {
    // frontendSide: combineReducers({
        // Frontendside: FrontendSideSlice.reducer,
    // }),
    // Registration: RegistrationSlice.reducer,
    // [frontendSideApi.reducerPath]: frontendSideApi.reducer,
    // [registrationApi.reducerPath]: registrationApi.reducer,
    [currencyApi.reducerPath]: currencyApi.reducer
}

export default reducer