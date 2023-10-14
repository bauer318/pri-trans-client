import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getRate} from "../reducers/ExchangeRateReducer";
import LoadingEffect from "../components/LoadingEffect";
import {TbArrowsExchange2} from "react-icons/tb";
import ConvertModal from "../modals/ConvertModal";
import ConvertForm from "../components/ConvertForm";
import CSWHeader from "../components/CSWHeader";
import {round} from "lodash";


const Convert = () => {
    const [showModal, setShowModal] = useState(false);
    const [rates, setRates] = useState(0);
    const [baseCurrency, setBaseCurrency] = useState('USD');
    const [liveRate, setLiveRate] = useState(0);
    const [toAmount, setToAmount] = useState(0.00);
    const [fromAmount, setFromAmount] = useState(100.00);
    const [toStrCurrency, setToStrCurrency] = useState('EUR');
    const defaultToCurrency = {
        id: 1,
        currency: "EUR"
    }
    const formTitles = {
        title: "How much do you want to convert?",
        fromSubTitle: "Convert",
        availableBalance: 82.52,
        toSubtitle: "To",
        icon: <TbArrowsExchange2 size={28}/>,
        actionTitle: "Convert",
        defaultToCurrency: defaultToCurrency
    }
    const dispatch = useDispatch();
    const currencies = [
        {
            id: 2,
            currency: "RUB"
        }
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
            setLiveRate(rates['EUR']);
            setToAmount(round(rates['EUR'] * fromAmount, 2));
        }
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        handleModal();
    }


    const handleFromAmountChange = (event) => {
        const fromA = Number(event.target.value);
        setFromAmount(fromA);
        if (liveRate !== 0) {
            setToAmount(round(liveRate * fromA, 2));
        }
    }
    const handleToCurrencyChange = (event) => {
        const toCurrency = event.target.value;
        setToStrCurrency(toCurrency);
        if (rates !== 0) {
            setLiveRate(rates[`${toCurrency}`]);
        }
        setToAmount(round(rates[`${toCurrency}`] * fromAmount, 2));
    }

    const handleModal = () => {
        setShowModal(!showModal);
    }
    return (
        <div className={"container"}>
            <CSWHeader title={"Convert devise"}/>
            {
                liveRate ? (
                    <ConvertForm formTitles={formTitles} toAmount={toAmount} fromAmount={fromAmount} liveRate={liveRate}
                                 currencies={currencies}
                                 handleSubmit={handleSubmit} handleFromAmountChange={handleFromAmountChange}
                                 handleToCurrencyChange={handleToCurrencyChange}/>
                ) : (<LoadingEffect/>)
            }
            {
                showModal &&
                <ConvertModal showModal={showModal} handleModal={handleModal}
                              fromAmount={`${fromAmount} ${baseCurrency}`}
                              toAmount={`${toAmount} ${toStrCurrency}`} liveRate={liveRate}/>
            }
        </div>
    );
};

export default Convert;