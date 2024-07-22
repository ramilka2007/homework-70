import React from 'react';
import {Person} from "../../types";

export interface PeopleItemProps {
    person: Person;
}

const PeopleItem: React.FC<PeopleItemProps> = ({person}) => {
    console.log(person);
    return (
        <div>
            PersonItem
        </div>
    );
};

export default PeopleItem;