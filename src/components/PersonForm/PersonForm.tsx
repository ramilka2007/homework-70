import React, { useState } from 'react';
import { ApiPerson } from '../../types';
import ButtonSpinner from '../Spinner/ButtonSpinner';

export interface PersonFormProps {
  onSubmit: (person: ApiPerson) => void;
  existingPerson?: ApiPerson;
  isLoading?: boolean;
}

const emptyState: ApiPerson = {
  name: '',
  phone: '',
  email: '',
  image: '',
};

const PersonForm: React.FC<PersonFormProps> = ({
  onSubmit,
  existingPerson,
  isLoading,
}) => {
  const initialState: ApiPerson = existingPerson
    ? { ...existingPerson }
    : emptyState;

  const [person, setPerson] = useState<ApiPerson>(initialState);

  const changeInfo = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setPerson((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const onFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    onSubmit({
      ...person,
    });
  };

  return (
    <form onSubmit={onFormSubmit}>
      <h4> {existingPerson ? 'Edit contact' : 'Add new contacts'}</h4>
      <div className="form-group d-flex justify-content-evenly mb-4">
        <h4 className="w-25">
          <label htmlFor="name">Name</label>
        </h4>
        <input
          type="text"
          name="name"
          id="name"
          required
          className="form-control w-75"
          onChange={changeInfo}
          value={person.name}
        />
      </div>
      <div className="form-group d-flex justify-content-evenly mb-4">
        <h4 className="w-25">
          <label htmlFor="phone">Phone</label>
        </h4>
        <input
          type="text"
          name="phone"
          id="phone"
          required
          className="form-control w-75"
          onChange={changeInfo}
          value={person.phone}
        />
      </div>
      <div className="form-group d-flex justify-content-evenly mb-4">
        <h4 className="w-25">
          <label htmlFor="email">Email</label>
        </h4>
        <input
          type="email"
          name="email"
          id="email"
          required
          className="form-control w-75"
          onChange={changeInfo}
          value={person.email}
        />
      </div>
      <div className="form-group d-flex justify-content-evenly mb-4">
        <h4 className="w-25">
          <label htmlFor="image">Image</label>
        </h4>
        <input
          type="url"
          name="image"
          id="image"
          required
          className="form-control w-75"
          onChange={changeInfo}
          value={person.image}
        />
      </div>
      <div className="form-group d-flex justify-content-evenly mb-4">
        <h3 className="w-25">Photo preview</h3>
        <div className="w-75 align-items-start d-flex">
          {person.image ? (
            <img
              src={person.image}
              alt=""
              style={{ width: '125px', height: '125px' }}
            />
          ) : (
            <div
              className="border border-2 border-black"
              style={{ width: '125px', height: '125px' }}
            >
              Your photo
            </div>
          )}
        </div>
      </div>
      <button
        type="submit"
        className="btn btn-primary mt-2"
        disabled={isLoading}
      >
        {isLoading && <ButtonSpinner />}
        {existingPerson ? 'Update' : 'Create'}
      </button>
    </form>
  );
};

export default PersonForm;
