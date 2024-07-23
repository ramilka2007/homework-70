import { createAsyncThunk } from '@reduxjs/toolkit';
import { ApiPeople, ApiPerson, Person } from '../types';
import { AppDispatch } from '../app/store';
import axiosApi from '../axiosApi';

export const fetchPeople = createAsyncThunk<
  Person[],
  undefined,
  { dispatch: AppDispatch }
>('people/fetchPeople', async (_) => {
  const { data: people } = await axiosApi.get<ApiPeople | null>('/people.json');

  let newPeople: Person[] = [];

  if (people) {
    newPeople = Object.keys(people).map((key: string) => {
      const person = people[key];
      return {
        id: key,
        ...person,
      };
    });
  }

  return newPeople;
});

export const createPerson = createAsyncThunk<void, ApiPerson>(
  'people/create',
  async (apiPerson) => {
    await axiosApi.post('/people.json', apiPerson);
  },
);

export const fetchOnePerson = createAsyncThunk<ApiPerson, string>(
  'people/fetchOne',
  async (id) => {
    const { data: person } = await axiosApi.get<ApiPerson | null>(
      `/people/${id}.json`,
    );

    if (person === null) {
      throw new Error('Not found');
    }

    return person;
  },
);

export interface UpdatePersonArg {
  id: string;
  apiPerson: ApiPerson;
}

export const updatePerson = createAsyncThunk<void, UpdatePersonArg>(
  'people/update',
  async ({ id, apiPerson }) => {
    await axiosApi.put(`/people/${id}.json`, apiPerson);
  },
);

export const deletePerson = createAsyncThunk<void, string>(
  'people/deletePerson',
  async (personId) => {
    await axiosApi.delete('/people/' + personId + '.json');
  },
);
