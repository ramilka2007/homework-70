import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { ApiPerson } from '../../types';
import { toast } from 'react-toastify';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import Spinner from '../../components/Spinner/Spinner';
import {
  selectFetchOnePersonLoading,
  selectOnePerson,
  selectUpdatePersonLoading,
} from '../../store/peopleSlice';
import { fetchOnePerson, updatePerson } from '../../store/peopleThunk';
import PersonForm from '../../components/PersonForm/PersonForm';

const EditPerson = () => {
  const navigate = useNavigate();
  const { id } = useParams() as { id: string };
  const dispatch = useAppDispatch();
  const isFetching = useAppSelector(selectFetchOnePersonLoading);
  const isUpdating = useAppSelector(selectUpdatePersonLoading);
  const person = useAppSelector(selectOnePerson);

  const onSubmit = async (apiPerson: ApiPerson) => {
    try {
      await dispatch(updatePerson({ id, apiPerson })).unwrap();
      navigate('/');
      toast.success('Contact updated!');
    } catch (e) {
      toast.error('Could not update contact!');
    }
  };

  useEffect(() => {
    dispatch(fetchOnePerson(id));
  }, [dispatch, id]);

  return (
    <div className="row mt-2">
      <div className="col">
        {isFetching && <Spinner />}
        {person && (
          <PersonForm
            onSubmit={onSubmit}
            existingPerson={person}
            isLoading={isUpdating}
          />
        )}
      </div>
    </div>
  );
};

export default EditPerson;
