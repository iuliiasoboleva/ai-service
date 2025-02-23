import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    projects: [],
    downloadingReportId: null,
};

const projectsSlice = createSlice({
    name: "projects",
    initialState,
    reducers: {
        setProjects: (state, action) => {
            state.projects = action.payload;
        },
        startDownload: (state, action) => {
            state.downloadingReportId = action.payload;
        },
        finishDownload: (state) => {
            state.downloadingReportId = null;
        },
        deleteProject: (state, action) => {
            const projectId = action.payload;
            state.projects = state.projects.filter((p) => p.id !== projectId);
        },
    },
});

export const { setProjects, startDownload, finishDownload, deleteProject } = projectsSlice.actions;
export default projectsSlice.reducer;
