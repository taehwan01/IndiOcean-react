import { createSlice } from "@reduxjs/toolkit";

let track = createSlice({
  name: "Tracks",
  initialState: [],
  reducers: {
    addTrack(state, action) {
      state.push(action.payload);
    },
  },
});

export const { addTrack } = track.actions;

export default track;
