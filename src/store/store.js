import { configureStore } from "@reduxjs/toolkit";
import track from "./trackSlice";

export default configureStore({
  reducer: {
    track: track.reducer,
  },
});
