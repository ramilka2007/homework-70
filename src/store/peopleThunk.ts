import {createAsyncThunk} from "@reduxjs/toolkit";
import {ApiPeople, ApiPerson, Person} from "../types";
import {AppDispatch} from "../app/store";
import axiosApi from "../axiosApi";

export const fetchPeople = createAsyncThunk<Person[], undefined, {dispatch: AppDispatch}>('people/fetchPeople', async (_, thunkAPI) => {
    const {data: people} = await axiosApi.get<ApiPeople | null>('/people.json');

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