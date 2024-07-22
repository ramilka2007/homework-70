import { ApiPerson, Person } from '../types';
import {createSlice} from "@reduxjs/toolkit";
import {fetchPeople} from "./peopleThunk";

interface PeopleState {
  people: Person[];
  fetchLoading: boolean;
  deleteLoading: false | string;
  createLoading: boolean;
  updateLoading: boolean;
  fetchOneLoading: boolean;
  onePerson: null | ApiPerson;
}

const initialState: PeopleState = {
  people: [],
  fetchLoading: false,
  deleteLoading: false,
  createLoading: false,
  updateLoading: false,
  fetchOneLoading: false,
  onePerson: null,
};

export const peopleSlice = createSlice({
  name: "people",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPeople.pending, (state: PeopleState) => {
      state.fetchLoading = true;
    })
        .addCase(fetchPeople.fulfilled, (state: PeopleState, { payload: people }) => {
          state.fetchLoading = false;
          state.people = people;
        })
        .addCase(fetchPeople.rejected, (state: PeopleState) => {
          state.fetchLoading = false;
        });
  },
  selectors: {
    selectPeople: (state) => state.people,
  }
});

export const peopleReducer = peopleSlice.reducer;
export const {selectPeople} = peopleSlice.selectors;