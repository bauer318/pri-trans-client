import React, {useEffect} from 'react';
import {MdDoneOutline} from "react-icons/md";
import {useDispatch, useSelector} from "react-redux";
import LoadingEffect from "./LoadingEffect";
import {useMatch, useNavigation} from "react-router-dom";
import {initializeCurrencies} from "../reducers/currencyReducers";

const CurrencyAddTable = () => {
    const currencies = useSelector(state => state.currencies);
    const match = useMatch('/admin/countries/:id/add-currency');
    const countryId = Number(match.params.id);
    const country = useSelector(state => state.countries.find(country => country.countryId === countryId));
    const countryCurrencies = country?.currencies;

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

    }

    return (
        <div>
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
            </table>
        </div>
    );
};

export default CurrencyAddTable;