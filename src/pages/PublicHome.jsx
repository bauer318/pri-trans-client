import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";
import HomeHeader from "../components/HomeHeader";
import ManualTransferList from "../components/ManualTransferList";
import AboutComponent from "../components/AboutComponent";
import LogoutBtn from "../components/LogoutBtn";
import {getItem} from "../services/LocalStorageService";

const PublicHome = () => {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState('ManualTransfer');
    const [selectedCountryId, setSelectedCountryId] = useState();
    const connectedUser = getItem('connectedUser');

    const renderContent = () => {
        switch (activeTab) {
            case 'ManualTransfer':
                return (
                    <div className="card-body">
                        <HomeHeader setSelectedCountry={setSelectedCountryId}/>
                        {selectedCountryId &&
                            <ManualTransferList selectedCountryId={selectedCountryId} isVerified={false}
                                                isPrivate={false}/>}
                    </div>
                );
            case 'About':
                return (
                    <AboutComponent/>
                );
            default:
                return null;
        }
    };

    const handleOnManualTransferClick = () => {

    }

    return (
        <div className={"container"}>
            <div className={"row mb-3"}>
                <div className={"col-lg-12 d-flex justify-content-end"}>
                    {connectedUser ? <LogoutBtn/> : <button className={"btn btn-outline-primary btn-sm"}
                                                            onClick={() => navigate('/login')}>Connection
                    </button>}

                </div>
            </div>
            <hr/>
            <div className="card text-center">
                <div className="card-header">
                    <ul className="nav nav-pills card-header-pills">
                        <li className="nav-item">
                            <button
                                className={`btn-sm nav-link ${activeTab === 'ManualTransfer' ? 'active' : ''}`}
                                onClick={(e) => {
                                    e.preventDefault();
                                    setActiveTab('ManualTransfer');
                                    handleOnManualTransferClick();
                                }}
                            >
                                Transferts manuels
                            </button>
                        </li>
                        <li className="nav-item">
                            <button
                                className={`btn-sm nav-link ${activeTab === 'About' ? 'active' : ''}`}
                                onClick={(e) => {
                                    e.preventDefault();
                                    setActiveTab('About');
                                }}
                            >
                                À propos
                            </button>
                        </li>
                    </ul>
                </div>
                {renderContent()}
            </div>
        </div>
    );
};

export default PublicHome;