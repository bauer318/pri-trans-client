import React, {useEffect, useState} from 'react';
import {MdVerified} from "react-icons/md";
import {FcCancel} from "react-icons/fc";
import {printError, roundValue} from "../services/Utils";
import {useCol} from "react-bootstrap/Col";
import {useNavigate} from "react-router-dom";
import {getItem} from "../services/LocalStorageService";
import participantService from "../services/ParticipantService";
import LoadingEffect from "../components/LoadingEffect";

const ProfilePage = () => {
    const [isVerified, setIsVerified] = useState(false);
    const [participant, setParticipant] = useState({});
    const navigate = useNavigate();
    const [canWait, setCanWait] = useState(false);
    const [error, setError] = useState("");

    const foundCallBack = () => {
        setCanWait(false);
    }

    const notFoundCallBack = () => {
        setError("Not found");
    }
    useEffect(() => {
        const connectedUser = getItem("connectedUser");
        setParticipant(connectedUser);
        setCanWait(true);
        participantService.getOne(connectedUser?.userId, notFoundCallBack, foundCallBack)
            .then(response => {
                if (response) {
                    setParticipant(response);
                    setIsVerified(response?.verified);
                }
            }).catch(error => {
            printError(error);
            foundCallBack();
        })
    }, []);
    const handleEditProfileClick = () => {
        navigate(`${getSubPath()}/profile/edit`, {state: {participant: participant}});
    }
    const getSubPath = () => {
        switch (getItem("connectedUser")?.userRole?.userRole) {
            case "ROLE_CLIENT":
                return "/client";
            case "ROLE_AGENT":
                return "/agent";
        }
    }
    return (
        <div className={"container"}>
            {canWait && <LoadingEffect/>}
            <div className={"row"}>
                <div className={"col-lg-4 mt-2"}>
                    <h3 className={"text-center"}>{participant?.firstname ? participant.firstname.concat(" ").concat(participant?.lastname) : "Edit profile!!!"}</h3>
                </div>
                <div className={"col-lg-4 mt-3"}>
                    {isVerified &&
                        <h5 className={"text-success text-center"}><span><MdVerified size={28}/></span>Verified</h5>}
                    {!isVerified &&
                        <h5 className={"text-danger text-center"}><span><FcCancel size={28}/></span>Unverified</h5>}

                </div>
                <div className={"col-lg-4 text-center mt-2"}>
                    <button className={"btn btn-primary"} onClick={handleEditProfileClick}>Edit profile</button>
                </div>
            </div>
            {error !== "" && <h5 className={"text-center text-danger mt-2"}>Add personals infos</h5>}
            {participant?.firstname && <div className={"row d-flex justify-content-center mt-2"}>
                <div className={"col-lg-6 col-auto"}>
                    <div className={"card mb-3 card-element"}>
                        <div className={"card-header"}>
                            <h3>{participant?.email}</h3>
                        </div>
                        <div className={"card-body"}>
                            <p>Nationality: {participant?.nationality}</p>
                            <p>Birthdate: {participant?.birthdate}</p>
                            <p>Phone: {participant?.phone}</p>
                            <p>Address: {participant?.address}</p>

                        </div>
                    </div>
                </div>
            </div>}


        </div>
    );
};

export default ProfilePage;