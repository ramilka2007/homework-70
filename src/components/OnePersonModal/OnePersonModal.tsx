import React from 'react';
import {Person} from "../../types";
import {Link} from "react-router-dom";

export interface OnePersonModalProps {
    show: boolean;
    info: Person;
    onClose: React.MouseEventHandler;
}

const OnePersonModal: React.FC<OnePersonModalProps> = ({show, info, onClose}) => {
    return (
        <>
            <div
                className="modal-backdrop show"
                style={{ display: show ? 'block' : 'none' }}
            />
            <div
                className="modal show"
                style={{ display: show ? 'block' : 'none' }}
                onClick={onClose}
            >
                <div
                    className="modal-dialog"
                    onClick={(event) => event.stopPropagation()}
                >
                    <div className="modal-content" style={{width:'550px'}}>
                        <div className="modal-header p-1">
                            <button className="btn fs-3 ms-auto" onClick={onClose}>X</button>
                        </div>
                        <div className="modal-body">
                            <div className="d-flex mb-3">
                                <div className="w-50">
                                    <img src={info.image} alt="" style={{width: '233px', height: '233px'}}/>
                                </div>
                                <div className="w-50 text-break">
                                    <h1 className="mb-4 fs-1">{info.name}</h1>
                                    <div className="d-flex align-items-center mb-4 fs-5">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                             style={{width: '20px', height: '20px', marginRight: '10px'}}>
                                            <path
                                                d="M21.384,17.752a2.108,2.108,0,0,1-.522,3.359,7.543,7.543,0,0,1-5.476.642C10.5,20.523,3.477,13.5,2.247,8.614a7.543,7.543,0,0,1,.642-5.476,2.108,2.108,0,0,1,3.359-.522L8.333,4.7a2.094,2.094,0,0,1,.445,2.328A3.877,3.877,0,0,1,8,8.2c-2.384,2.384,5.417,10.185,7.8,7.8a3.877,3.877,0,0,1,1.173-.781,2.092,2.092,0,0,1,2.328.445Z"/>
                                        </svg>
                                        <span>{info.phone}</span>
                                    </div>
                                    <div className="d-flex align-items-center mb-4 fs-5">
                                        <svg data-name="1-Email" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" style={{width: '20px', height: '20px', marginRight: '10px'}}>
                                            <path
                                                d="M29 4H3a3 3 0 0 0-3 3v18a3 3 0 0 0 3 3h26a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3zm-.72 2L16 14.77 3.72 6zM30 25a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7.23l13.42 9.58a1 1 0 0 0 1.16 0L30 7.23z"/>
                                        </svg>
                                        <span>{info.email}</span>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex justify-content-evenly">
                                <Link to={`/edit-person/${info.id}`} type="button" className="btn btn-success w-25 fs-5">Edit</Link>
                                <button type="button" className="btn btn-danger w-25 fs-5">Delete</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default OnePersonModal;