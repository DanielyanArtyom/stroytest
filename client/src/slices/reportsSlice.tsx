import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { SERVER_URL } from "../constants/common";
import { RootState } from "../store/store";
import {
  IChat,
  IDuration,
  IRating,
  IResponse,
  ITag,
} from "../types/reportTypes";

export const fetchTotalChatReports = createAsyncThunk(
  "reportSlice/fetchTotalChatReports",
  async () => {
    try {
      const res = await axios.get<IResponse<IChat>>(
        `${SERVER_URL}/ChatContoller/TotalChats`,
        {
          params: {
            from: "2024-01-01T02:00:00+02:00",
            to: "2024-01-14T02:00:00+02:00",
          },
        }
      );

      return res.data;
    } catch (e) {
      console.log(e);
    }
  }
);

export const fetchDurationReports = createAsyncThunk(
  "reportSlice/fetchDurationReports",
  async () => {
    try {
      const res = await axios.get<IResponse<IDuration>>(
        `${SERVER_URL}/ChatContoller/DurationReport`,
        {
          params: {
            from: "2024-01-01T02:00:00+02:00",
            to: "2024-01-14T02:00:00+02:00",
          },
        }
      );
      return res.data;
    } catch (e) {
      console.log(e);
    }
  }
);

export const fetchRatingReport = createAsyncThunk(
  "reportSlice/fetchRatingReport",
  async () => {
    try {
      const res = await axios.get<IResponse<IRating>>(
        `${SERVER_URL}/ChatContoller/RatingReport`,
        {
          params: {
            from: "2024-01-01T02:00:00+02:00",
            to: "2024-01-14T02:00:00+02:00",
          },
        }
      );
      return res.data;
    } catch (e) {
      console.log(e);
    }
  }
);

export const fetchTagsReport = createAsyncThunk(
  "reportSlice/fetchTagsReport",
  async () => {
    try {
      const res = await axios.get<IResponse<ITag>>(
        `${SERVER_URL}/ChatContoller/tagsReport`,
        {
          params: {
            from: "2024-01-01T02:00:00+02:00",
            to: "2024-01-14T02:00:00+02:00",
          },
        }
      );
      return res.data;
    } catch (e) {
      console.log(e);
    }
  }
);

const reportSlice = createSlice({
  name: "reportSlice",
  initialState: {
    totalChats: null as IResponse<IChat> | null,
    duration: null as IResponse<IDuration> | null,
    rating: null as IResponse<IRating> | null,
    tags: null as IResponse<ITag> | null,
    isFetching: true,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTotalChatReports.fulfilled, (state, { payload }) => {
        state.totalChats = payload as IResponse<IChat>;
        state.isFetching = false;
      })
      .addCase(fetchTotalChatReports.pending, (state) => {
        state.isFetching = true;
      })
      .addCase(fetchDurationReports.fulfilled, (state, { payload }) => {
        state.duration = payload as IResponse<IDuration>;
        state.isFetching = false;
      })
      .addCase(fetchDurationReports.pending, (state) => {
        state.isFetching = true;
      })
      .addCase(fetchRatingReport.fulfilled, (state, { payload }) => {
        state.rating = payload as IResponse<IRating>;
        state.isFetching = false;
      })
      .addCase(fetchRatingReport.pending, (state) => {
        state.isFetching = true;
      })
      .addCase(fetchTagsReport.fulfilled, (state, { payload }) => {
        state.tags = payload as IResponse<ITag>;
        state.isFetching = false;
      })
      .addCase(fetchTagsReport.pending, (state) => {
        state.isFetching = true;
      });
  },
});

export const getTotalChats = (state: RootState) => state.reports.totalChats;
export const getDuration = (state: RootState) => state.reports.duration;
export const getRating = (state: RootState) => state.reports.rating;
export const getTags = (state: RootState) => state.reports.tags;
export const getIsFetching = (state: RootState) => state.reports.isFetching;

export default reportSlice.reducer;
