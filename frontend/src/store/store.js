import { configureStore } from "@reduxjs/toolkit";
import jobReducer from "./slices/jobSlice.js";
import userReducer from "./slices/userSlice.js";
import applicationReducer from "./slices/applicationSlice.js";
import updateProfileReducer from "./slices/updateProfileSlice.js";

const store = configureStore({
  reducer: {
    user: userReducer,
    jobs: jobReducer,
    applications: applicationReducer,
    updateProfile: updateProfileReducer,
  },
});

export default store;
