import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../app/hooks';
import { ApiPerson } from '../../types';
import { toast } from 'react-toastify';
import PersonForm from '../../components/PersonForm/PersonForm';
import {createPerson} from "../../store/peopleThunk";

const NewPerson = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const onSubmit = async (person: ApiPerson) => {
    try {
      await dispatch(createPerson(person)).unwrap();
      navigate('/');
      toast.success('Dish created');
    } catch (error) {
      toast.error('Could not create dish!');
    }
  };

  return (
    <div className="row mt-2">
      <div className="col">
        <PersonForm onSubmit={onSubmit} />
      </div>
    </div>
  );
};

export default NewPerson;
