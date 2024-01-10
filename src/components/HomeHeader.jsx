import React, {useEffect, useState} from 'react';
import LogoutBtn from "./LogoutBtn";
import {useDispatch, useSelector} from "react-redux";
import {initializeCountries} from "../reducers/countryReducers";
import countryService from "../services/CountryService";
import {printError} from "../services/Utils";

const HomeHeader = ({setSelectedCountry}) => {
    const dispatch = useDispatch();
    const [countriesToSend, setCountriesToSend] = useState([]);
    const [isLoadingCountriesToSend, setIsLoadingCountriesToSend] = useState(true);
    const getAvailableCountriesToSend = () => {
        setIsLoadingCountriesToSend(true);
        countryService.getUserAvailableCountriesToSend().then(response => {
            setCountriesToSend(response);
            setIsLoadingCountriesToSend(false);
        }).catch(error => {
            printError(error);
        })
    }
    useEffect(() => {
        getAvailableCountriesToSend();
    }, []);
    const countries = useSelector(state => state.countries);
    const handleRecipientCountrySelectChange = (event) => {
        const selectedCountry = event.target.value;
        setSelectedCountry(selectedCountry);
    }
    return (
        <div>
            <div className={"row"}>
                <div className={"col-lg-3 d-flex justify-content-start"}>
                    <h2>Receiver's country </h2>
                </div>
                <div className={"col-lg-3 d-flex justify-content-start"}>
                    <select className={"form-select"} aria-label={"Default select example"}
                            onChange={handleRecipientCountrySelectChange}>
                        <option value={""}>Select destination</option>
                        {countriesToSend?.map((country, key) => <option value={country?.countryId}
                                                                        key={key}>{country?.countryName}</option>)}
                    </select>
                </div>
                <div className={"col-lg-6 d-flex justify-content-end"}>
                    <LogoutBtn/>
                </div>
            </div>
        </div>
    );
};

export default HomeHeader;