import React, { useEffect } from 'react';
import { deletePerson, fetchPeople } from '../../store/peopleThunk';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import {
  selectDeletePersonLoading,
  selectFetchPeopleLoading,
  selectPeople,
} from '../../store/peopleSlice';
import { Person } from '../../types';
import PeopleItem from '../../components/PeopleItem/PeopleItem';
import Spinner from '../../components/Spinner/Spinner';

const Home = () => {
  const dispatch = useAppDispatch();
  const people = useAppSelector(selectPeople);
  const deleteLoading = useAppSelector(selectDeletePersonLoading);
  const peopleLoading = useAppSelector(selectFetchPeopleLoading);

  useEffect(() => {
    dispatch(fetchPeople());
  }, [dispatch]);

  const removePerson = async (id: string) => {
    await dispatch(deletePerson(id));
    await dispatch(fetchPeople());
  };

  return (
    <div>
      {people.length !== 0 ? (
        <>
          {peopleLoading ? (
            <Spinner />
          ) : (
            <>
              {people.map((person: Person) => (
                <PeopleItem
                  key={person.id}
                  person={person}
                  deleteLoading={deleteLoading}
                  onDelete={() => removePerson(person.id)}
                />
              ))}
            </>
          )}
        </>
      ) : (
        <h1>No contacts</h1>
      )}
    </div>
  );
};

export default Home;
