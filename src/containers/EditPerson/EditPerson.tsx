import React from 'react';
import {useParams} from "react-router-dom";

const EditPerson = () => {
    const {id} = useParams();
    console.log(id);
    return (
        <div>
            EditPerson
        </div>
    );
};

export default EditPerson;