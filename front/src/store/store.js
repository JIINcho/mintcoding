import { configureStore } from '@reduxjs/toolkit';
import userReducer from "./user";
import pageReducer from "./page";
import mainPageReducer from "./mainPage";
import roommateReducer from "./roommate";
import matchingReducer from "./matching";

export default configureStore({
    reducer: {
        user: userReducer,
        page: pageReducer,
        mainPage: mainPageReducer,
        roommate : roommateReducer,
        matching: matchingReducer,
    },
})
