import React, {useEffect, useState} from 'react';
import CSWHeader from "../components/CSWHeader";
import {RxCross2} from "react-icons/rx";
import {useDispatch, useSelector} from "react-redux";
import {getRate} from "../reducers/ExchangeRateReducer";
import {initializeSendDetails} from "../reducers/sendReducers";
import {round} from "lodash";
import LoadingEffect from "../components/LoadingEffect";
import ConvertForm from "../components/ConvertForm";
import {AiOutlineArrowRight} from "react-icons/ai";
import {useNavigate} from "react-router-dom";
import {get} from "../services/LocalStorageService";

const Send = () => {
    const [rates, setRates] = useState(0);
    const [baseCurrency, setBaseCurrency] = useState('USD');
    const [liveRate, setLiveRate] = useState(0);
    const [toAmount, setToAmount] = useState(0.00);
    const [fromAmount, setFromAmount] = useState(100.00);
    const [toStrCurrency, setToStrCurrency] = useState('USD');
    const navigate = useNavigate();
    const longedUser = get('longedUser');
    const defaultToCurrency = {
        id: 3,
        currency: "USD"
    }
    const availableBalance = 82.52;
    const formTitles = {
        title: "How much do you want to send?",
        fromSubTitle: "You send exactly",
        toSubtitle: "Recipient gets",
        availableBalance: 82.52,
        icon: <AiOutlineArrowRight size={28}/>,
        actionTitle: "Continue",
        defaultToCurrency: defaultToCurrency
    }
    const dispatch = useDispatch();
    const currencies = [
        {
            id: 1,
            currency: "EUR"
        },
        {
            id: 2,
            currency: "RUB"
        },
    ]
    useEffect(() => {
        dispatch(getRate(baseCurrency))
    }, []);
    const rate = useSelector(state => state.rates);
    if (rate.rates) {
        if (rates === 0) {
            setRates(rate.rates);
        }
        if (rates !== 0 && liveRate === 0) {
            setLiveRate(rates['USD']);
            setToAmount(round(rates['USD'] * fromAmount, 2));
        }
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        findCurrency(toStrCurrency);
        const sendDetails = {
            fromAmount: fromAmount,
            toAmount: toAmount,
            fromCurrency: findCurrency(baseCurrency),
            toCurrency: findCurrency(toStrCurrency),
            liveRate: liveRate
        };
        dispatch(initializeSendDetails(sendDetails));
        localStorage.setItem('details', JSON.stringify(sendDetails));
        navigate(`/${longedUser?.predPath}/account/1/send/to`);
    }
    const findCurrency = currencyStr =>{
        const currency = currencies.find(currency => currency.currency.toLowerCase() === currencyStr.toLowerCase());
        if(currency){
            return currency;
        }
        return defaultToCurrency;

    }
    const handleAmountSendChange = (e) => {
        const fromA = Number(e.target.value);
        setFromAmount(fromA);
        if (liveRate !== 0) {
            setToAmount(round(liveRate * fromA, 2));
        }
    }
    const handleReceiveCurrencyChange = (e) => {
        const toCurrency = e.target.value;
        setToStrCurrency(toCurrency);
        if (rates !== 0) {
            setLiveRate(rates[`${toCurrency}`]);
        }
        setToAmount(round(rates[`${toCurrency}`] * fromAmount, 2));
    }
    return (
        <div className={"container"}>
            <CSWHeader title={"Send money"}/>
            {liveRate ? (
                <ConvertForm formTitles={formTitles}
                             currencies={currencies} handleToCurrencyChange={handleReceiveCurrencyChange}
                             handleFromAmountChange={handleAmountSendChange} handleSubmit={handleSubmit}
                             liveRate={liveRate}
                             fromAmount={fromAmount}
                             toAmount={toAmount}/>) : (<LoadingEffect/>)}
        </div>
    );
};

export default Send;