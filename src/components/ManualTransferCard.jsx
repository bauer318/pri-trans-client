import React from 'react';
import {CiPhone} from "react-icons/ci";

const ManualTransferCard = () => {
    return (
        <div className="col">
            <div className="card h-100">
                <div className="card-body">
                    <h5 className="card-title">250 $, Sender name</h5>
                    <p className="card-text">DR Congo</p>
                    <hr/>
                    <p className="d-flex justify-content-between w-100">
                        <span>+243-*******</span>
                        <span><button className={"btn btn-secondary"}><span className={"text-light"}><CiPhone size={20}/></span></button></span>
                    </p>
                </div>
                <div className="card-footer">
                    <small className="text-muted">Il y'a 3 min</small>
                </div>
            </div>
        </div>
    );
};

export default ManualTransferCard;