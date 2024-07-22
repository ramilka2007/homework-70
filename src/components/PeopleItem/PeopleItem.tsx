import React, {useState} from 'react';
import {Person} from "../../types";
import OnePersonModal from "../OnePersonModal/OnePersonModal";

export interface PeopleItemProps {
    person: Person;
}

const PeopleItem: React.FC<PeopleItemProps> = ({person}) => {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <div className="w-75 border border-1 border-black p-3 d-flex align-items-center mb-5" onClick={() => setShowModal(true)}>
                <div className="image w-25 d-flex align-items-start">
                    <img src={person.image} alt="" style={{width: '125px', height: '125px'}}/>
                </div>
                <div className="info w-75 d-flex align-items-start">
                    <h1>
                        {person.name}
                    </h1>
                </div>
            </div>

            <OnePersonModal show={showModal} info={person} onClose={() => setShowModal(false)} />
        </>
    );
};

export default PeopleItem;