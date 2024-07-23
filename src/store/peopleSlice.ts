import { ApiPerson, Person } from '../types';
import { createSlice } from '@reduxjs/toolkit';
import {
  createPerson,
  deletePerson,
  fetchOnePerson,
  fetchPeople,
  updatePerson,
} from './peopleThunk';

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
  name: 'people',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPeople.pending, (state: PeopleState) => {
        state.fetchLoading = true;
      })
      .addCase(
        fetchPeople.fulfilled,
        (state: PeopleState, { payload: people }) => {
          state.fetchLoading = false;
          state.people = people;
        },
      )
      .addCase(fetchPeople.rejected, (state: PeopleState) => {
        state.fetchLoading = false;
      });

    builder
      .addCase(createPerson.pending, (state: PeopleState) => {
        state.createLoading = true;
      })
      .addCase(createPerson.fulfilled, (state: PeopleState) => {
        state.createLoading = false;
      })
      .addCase(createPerson.rejected, (state: PeopleState) => {
        state.createLoading = false;
      });

    builder
      .addCase(fetchOnePerson.pending, (state: PeopleState) => {
        state.onePerson = null;
        state.fetchOneLoading = true;
      })
      .addCase(
        fetchOnePerson.fulfilled,
        (state: PeopleState, { payload: apiPerson }) => {
          state.onePerson = apiPerson;
          state.fetchOneLoading = false;
        },
      )
      .addCase(fetchOnePerson.rejected, (state: PeopleState) => {
        state.fetchOneLoading = false;
      });

    builder
      .addCase(updatePerson.pending, (state: PeopleState) => {
        state.updateLoading = true;
      })
      .addCase(updatePerson.fulfilled, (state: PeopleState) => {
        state.updateLoading = false;
      })
      .addCase(updatePerson.rejected, (state: PeopleState) => {
        state.updateLoading = false;
      });

    builder
      .addCase(
        deletePerson.pending,
        (state: PeopleState, { meta: { arg: personId } }) => {
          state.deleteLoading = personId;
        },
      )
      .addCase(deletePerson.fulfilled, (state: PeopleState) => {
        state.deleteLoading = false;
      })
      .addCase(deletePerson.rejected, (state: PeopleState) => {
        state.deleteLoading = false;
      });
  },

  selectors: {
    selectPeople: (state) => state.people,
    selectFetchPeopleLoading: (state) => state.fetchLoading,
    selectDeletePersonLoading: (state) => state.deleteLoading,
    selectCreatePersonLoading: (state) => state.createLoading,
    selectFetchOnePersonLoading: (state) => state.fetchOneLoading,
    selectUpdatePersonLoading: (state) => state.updateLoading,
    selectOnePerson: (state) => state.onePerson,
  },
});

export const peopleReducer = peopleSlice.reducer;
export const {
  selectPeople,
  selectFetchPeopleLoading,
  selectDeletePersonLoading,
  selectCreatePersonLoading,
  selectFetchOnePersonLoading,
  selectUpdatePersonLoading,
  selectOnePerson,
} = peopleSlice.selectors;
