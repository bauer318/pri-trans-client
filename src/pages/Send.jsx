import React, {useEffect, useState} from 'react';
import CSWHeader from "../components/CSWHeader";
import {useDispatch, useSelector} from "react-redux";
import {getRate} from "../reducers/ExchangeRateReducer";
import {initializeSendDetails} from "../reducers/sendReducers";
import {round} from "lodash";
import LoadingEffect from "../components/LoadingEffect";
import ConvertForm from "../components/ConvertForm";
import {AiOutlineArrowRight} from "react-icons/ai";
import {useLocation, useNavigate} from "react-router-dom";
import {initializeCurrencies} from "../reducers/currencyReducers";
import {saveItem} from "../services/LocalStorageService";
import axios from "axios";
import {baseURL, getToken, printError} from "../services/Utils";
import {Form} from "react-bootstrap";
import {initializeCountries} from "../reducers/countryReducers";
import useDebounce from "../hooks/useDebounce";
import orderService from "../services/orderService";

const Send = () => {
    const [rates, setRates] = useState(0);
    const [baseCurrency, setBaseCurrency] = useState('USD');
    const [liveRate, setLiveRate] = useState(0);
    const [toAmount, setToAmount] = useState(0.00);
    const [fromAmount, setFromAmount] = useState(100.00);
    const [toStrCurrencyCode, setToStrCurrencyCode] = useState('USD');
    const [formDetails, setFormDetails] = useState({});
    const [account, setAccount] = useState();
    const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [fromAccount, setFromAccount] = useState();
    const [toCurrency, setToCurrency] = useState();
    const [canSend, setCanSend] = useState(false);
    const countries = useSelector(state => state?.countries)
    const [currencies, setCurrencies] = useState();
    const [isDestinationSelected, setIsDestinationSelected] = useState(false)
    const [countryId, setCountryId] = useState();
    const [usdFromCurrencyRate, setUsdFromCurrencyRate] = useState(1.0);
    const [usdToCurrencyRate, setUsdToCurrencyRate] = useState(1.0);
    const [isTaping, setIsTaping] = useState(false);

    const debouncedToAmount = useDebounce(fromAmount, 500);
    const debouncedRate = useDebounce(toStrCurrencyCode, 500);
    useEffect(() => {
        dispatch(getRate(baseCurrency));
        dispatch(initializeCurrencies());
        dispatch(initializeCountries());
        const currentAccount = location?.state?.currentAccount;
        setAccount(currentAccount);
        setFromAccount(currentAccount);
        setFormDetails({
            title: "How much do you want to send?",
            fromSubTitle: "You send exactly",
            toSubtitle: "Recipient gets",
            availableBalance: currentAccount?.balance,
            icon: <AiOutlineArrowRight size={28}/>,
            actionTitle: "Continue",
            fromAccountCurrency: currentAccount?.currency,
        })
        setToStrCurrencyCode(currentAccount?.currency?.code);

    }, []);
    useEffect(() => {
        if (debouncedToAmount) {
            calculateToAmount(liveRate);
        } else {
            setToAmount(toAmount);
        }
        if (debouncedRate) {
            setIsTaping(true);
            orderService.getOrderRate(usdFromCurrencyRate, usdToCurrencyRate)
                .then(orderRate => {
                    setLiveRate(orderRate);
                    calculateToAmount(orderRate);
                    setIsTaping(false);
                }).catch(error => {
                printError(error);
                setIsTaping(false);
            })
        } else {
            setLiveRate(liveRate);
        }
    }, [debouncedRate, debouncedToAmount]);
    const calculateToAmount = (rate) => {
        setIsTaping(true);
        orderService.getToAmount(fromAmount, rate)
            .then(toAmountResponse => {
                    setToAmount(toAmountResponse);
                    setIsTaping(false);
                }
            ).catch(error => {
            printError(error);
            setIsTaping(false);
        })
    }
    const rate = useSelector(state => state.rates);
    if (rate?.rates) {
        if (rates === 0) {
            setRates(rate.rates);
        }
        if (rates !== 0 && liveRate === 0 && account) {
            const usdFromAmount = rates[account?.currency?.code];
            const usdToAmount = rates[`${toStrCurrencyCode}`];
            setLiveRate(usdToAmount / usdFromAmount);
            setToAmount(round((usdToAmount / usdFromAmount) * fromAmount, 2));
        }
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        axios.get(`${baseURL}/accounts/can-send-amount/${account?.accountId}/${fromAmount}`, {headers: getToken()})
            .then(response => {
                if (response.data) {
                    setCanSend(true);
                    const sendDetails = {
                        fromAmount: fromAmount,
                        toAmount: toAmount,
                        fromAccount: fromAccount,
                        toCurrencyCode: toStrCurrencyCode,
                        liveRate: liveRate,
                        countryId: countryId
                    };
                    dispatch(initializeSendDetails(sendDetails));
                    navigate('/client/account/send/to');
                } else {
                    setCanSend(false);
                    alert("insufficient balance to send");
                }
            })

    }
    const handleAmountSendChange = (e) => {
        const fromA = Number(e.target.value);
        //setInputFromAmount(fromA);
        setFromAmount(fromA);
        /*if (liveRate !== 0) {
            const r = round(usdToCurrencyRate / usdFromCurrencyRate, 6);
            const t = round(r * fromA, 6);
            setToAmount(t);
        }*/
    }
    const handleReceiveCurrencyChange = (e) => {
        const toCurrency = e.target.value;
        const fromCurrency = account?.currency?.code;
        setToStrCurrencyCode(toCurrency);
        //let usdFromCurrencyRateP;
        //let usdToCurrencyRateP;
        if (rates !== 0) {
            //usdFromCurrencyRateP = rates[`${fromCurrency}`];
            //usdToCurrencyRateP = rates[`${toCurrency}`];
            //setLiveRate(round(usdToCurrencyRateP / usdFromCurrencyRateP, 6));
            setUsdFromCurrencyRate(rates[`${fromCurrency}`])
            setUsdToCurrencyRate(rates[`${toCurrency}`]);
        }
        //const r = round(usdToCurrencyRateP / usdFromCurrencyRateP, 6);
        //const t = round(r * fromAmount, 6);
        //setToAmount(t);
    }
    const handleDestinationChange = (e) => {
        const selectedCountry = e.target.value;
        if (selectedCountry !== "") {
            setIsDestinationSelected(true)
            const c = countries.filter(country => country?.countryId === Number(selectedCountry))[0]
            setCurrencies(c.currencies.filter(currency => currency.currencyId !== account?.currency?.currencyId));
            setCountryId(c.countryId);
        } else {
            setIsDestinationSelected(false)
        }

    }
    return (
        <div className={"container"}>
            <CSWHeader title={"Send money"}/>
            <div className={"col-md-8 mx-auto d-flex justify-content-center"}>
                Where
            </div>
            <div className={"col-md-8 mx-auto d-flex justify-content-center"}>
                <Form.Group>
                    <Form.Control
                        as="select"
                        name="toCountry"
                        onChange={handleDestinationChange}
                    >
                        <option
                            value={""}>Destination
                        </option>
                        {
                            countries?.map(country => <option key={country?.countryId} value={country?.countryId}>
                                {country?.countryName}
                            </option>)
                        }

                    </Form.Control>
                </Form.Group>
            </div>
            {liveRate && isDestinationSelected && currencies ? (
                <ConvertForm formTitles={formDetails}
                             currencies={currencies} handleToCurrencyChange={handleReceiveCurrencyChange}
                             handleFromAmountChange={handleAmountSendChange} handleSubmit={handleSubmit}
                             liveRate={liveRate}
                             fromAmount={fromAmount}
                             toAmount={toAmount}/>) : (<LoadingEffect/>)}
        </div>
    );
};

export default Send;