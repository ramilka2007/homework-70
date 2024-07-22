import React, {useEffect} from 'react';
import {fetchPeople} from "../../store/peopleThunk";
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import {selectPeople} from "../../store/peopleSlice";
import {Person} from "../../types";
import PeopleItem from "../../components/PeopleItem/PeopleItem";

const Home = () => {
  const dispatch = useAppDispatch();
  const people = useAppSelector(selectPeople);

  useEffect(() => {
    dispatch(fetchPeople());
  }, [dispatch]);

  return (
      <div>
        {people.map((person: Person) => (
          <PeopleItem key={person.id} person={person} />
        ))}
      </div>);
};

export default Home;
