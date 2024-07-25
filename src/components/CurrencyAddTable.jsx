import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import LoadingEffect from "./LoadingEffect";
import {useMatch, useNavigate} from "react-router-dom";
import {addCurrency} from "../reducers/countryReducers";
import BackToCountryMainPageComponent from "./BackToCountryMainPageComponent";
import {FaBackward} from "react-icons/fa";

const CurrencyAddTable = () => {
    const currencies = useSelector(state => state.currencies);
    const match = useMatch('/admin/countries/:id/add-currency');
    const countryId = Number(match.params.id);
    const country = useSelector(state => state.countries.find(country => country.countryId === countryId));
    const countryCurrencies = country?.currencies;
    const dispatch = useDispatch();
    const [refreshTable, setRefreshTable] = useState(false);
    const navigate = useNavigate();
    const [canWait, setCanWait] = useState(false);
    const callBack = () => {
        setCanWait(false);
    }

    useEffect(() => {

    }, [refreshTable]);

    const containsCurrency = currencyId => {
        for (let i = 0; i < countryCurrencies.length; i++) {
            if (countryCurrencies[i].currencyId === currencyId) {
                return true;
            }
        }
        return false;
    }
    const currenciesToAdd = () => {
        const result = [];
        currencies.map(currency => {
            if (!containsCurrency(currency.currencyId)) {
                result.push(currency);
            }
        });
        return result;
    }

    const handleAddCurrencyClick = currencyId => {
        const addedCurrency = currencies.find(currency => currency.currencyId === currencyId);
        setCanWait(true);
        dispatch(addCurrency(countryId, addedCurrency, callBack));
        setRefreshTable(!refreshTable);
    }

    return (
        <div>
            {(currencies?.length > 0 && currenciesToAdd()?.length === 0) ?
                <BackToCountryMainPageComponent text={"No currency to add"} link={`/admin/countries/${countryId}`}/> :
                <table className={"table table-success table-striped table-bordered table-responsive"}>
                    <thead className={"table-light"}>
                    <tr>
                        <th scope={"col"} className={"text-center"}>Currency</th>
                        <th scope={"col"} className={"text-center"}>Symbol</th>
                        <th scope={"col"} className={"text-center"}>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        currencies?.length > 0 ? (
                            currenciesToAdd()?.map(currency =>
                                <tr key={currency.currencyId}>
                                    <td className={"text-center"}>{currency.currency}</td>
                                    <td className={"text-center"}>{currency.symbol}</td>
                                    <td className={"text-center"}>
                                        <button className={"btn btn-secondary"}
                                                onClick={() => handleAddCurrencyClick(currency.currencyId)}>Add
                                        </button>
                                    </td>
                                </tr>
                            )) : (<LoadingEffect/>)
                    }
                    </tbody>
                </table>}
            <div>
                <button className={"btn btn-info"}
                        onClick={() => navigate(`/admin/countries/${countryId}`)}><span
                    className={"ps-2 pe-2"}><FaBackward/></span>Back
                </button>
            </div>
            {canWait && <LoadingEffect/>}
        </div>
    );
};

export default CurrencyAddTable;