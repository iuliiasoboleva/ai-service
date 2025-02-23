import { configureStore } from "@reduxjs/toolkit";
import projectsReducer from "./projectsSlice"; // Добавь нужные редюсеры

export const store = configureStore({
    reducer: {
        projects: projectsReducer,
    },
});
