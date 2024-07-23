import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { ApiPerson } from '../../types';
import { toast } from 'react-toastify';
import PersonForm from '../../components/PersonForm/PersonForm';
import { createPerson } from '../../store/peopleThunk';
import { selectCreatePersonLoading } from '../../store/peopleSlice';

const NewPerson = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const isCreating = useAppSelector(selectCreatePersonLoading);

  const onSubmit = async (person: ApiPerson) => {
    try {
      await dispatch(createPerson(person)).unwrap();
      navigate('/');
      toast.success('Contact created');
    } catch (error) {
      toast.error('Could not create contact!');
    }
  };

  return (
    <div className="row mt-2">
      <div className="col">
        <PersonForm onSubmit={onSubmit} isLoading={isCreating} />
      </div>
    </div>
  );
};

export default NewPerson;
