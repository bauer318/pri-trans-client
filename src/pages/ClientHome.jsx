import React, {useEffect, useState} from 'react';
import HomeHeader from "../components/HomeHeader";
import HomeTable from "../components/HomeTable";
import {useSelector} from "react-redux";
import {getItem} from "../services/LocalStorageService";
import orderService from "../services/orderService";
import {printError} from "../services/Utils";
import LoadingEffect from "../components/LoadingEffect";
import countryService from "../services/CountryService";

const ClientHome = () => {
    const [isLoadingFromOrder, setIsLoadingFromOrder] = useState(false);
    const [isLoadingToOrder, setIsLoadingToOrder] = useState(false);
    const [fromOrders, setFromOrders] = useState([]);
    const [fromCountry, setFromCountry] = useState();
    const [selectedCountryId, setSelectedCountryId] = useState();
    const [toOrders, setToOrders] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState();
    useEffect(() => {
        const connectedUser = getItem("connectedUser");
        setFromCountry(connectedUser?.country)
        if (selectedCountryId) {
            setIsLoadingFromOrder(true);
            setIsLoadingToOrder(true);
            countryService.getById(selectedCountryId).then(
                response => {
                    setSelectedCountry(response);
                }
            ).catch(error => {
                printError(error);
            })
            orderService.getRequestedOrdersFromConnectedUser(selectedCountryId).then(
                response => {
                    setFromOrders(response);
                    setIsLoadingFromOrder(false);
                }
            ).catch(error => {
                printError(error);
            })
            orderService.getRequestedOrdersToConnectedUserCountry(selectedCountryId).then(
                response => {
                    setIsLoadingToOrder(false);
                    setToOrders(response);
                }
            ).catch(error => {
                printError(error);
            })
        }

    }, [selectedCountryId]);
    return (
        <div className={"container"}>
            <HomeHeader setSelectedCountry={setSelectedCountryId}/>
            <div className={"row mt-2"}>
                <div className={"col-lg-6"}>
                    {isLoadingFromOrder && <LoadingEffect/>}
                    <HomeTable fromCountry={fromCountry?.countryName} toCountry={selectedCountry?.countryName}
                               orders={fromOrders}/>
                </div>
                <div className={"col-lg-6"}>
                    {isLoadingToOrder && <LoadingEffect/>}
                    <HomeTable fromCountry={selectedCountry?.countryName} toCountry={fromCountry?.countryName}
                               orders={toOrders}/>
                </div>
            </div>
        </div>
    );
};

export default ClientHome;