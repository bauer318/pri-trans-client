import React, {useState} from 'react';
import LogoutBtn from "./LogoutBtn";
import {FaCity} from "react-icons/fa";
import AddCountryModal from "../modals/AddCountryModal";


const CountryHeader = () => {
    const [showModal, setShowModal] = useState(false);
    const handleModal = ()=>{
        setShowModal(!showModal);
    };
    return (
        <div>
            <div className={"row"}>
                <div className={"col-lg-3 d-flex justify-content-center"}>
                    <button className={"btn btn-primary"} onClick={handleModal}>
                        <span><i><FaCity/></i></span> Add country
                    </button>
                </div>
                <div className={"col-lg-9 d-flex justify-content-end"}>
                    <LogoutBtn/>
                </div>
            </div>
            <AddCountryModal showModal={showModal} handleModal={handleModal}/>
        </div>
    );
};

export default CountryHeader;