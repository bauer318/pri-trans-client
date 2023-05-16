import React, {useEffect, useState} from 'react';
import {Form} from "react-bootstrap";
import {RxCross2} from "react-icons/rx";
import {useDispatch, useSelector} from "react-redux";
import {getRate} from "../reducers/ExchangeRateReducer";
import {round} from "lodash";
import LoadingEffect from "../components/LoadingEffect";
import LogoutBtn from "../components/LogoutBtn";
import {TbArrowsExchange2} from "react-icons/tb";
import ConvertModal from "../modals/ConvertModal";


const Convert = () => {
    const [showModal, setShowModal] = useState(false);
    const [rates, setRates] = useState(0);
    const [baseCurrency, setBaseCurrency] = useState('USD');
    const [liveRate, setLiveRate] = useState(0);
    const [toAmount, setToAmount] = useState(0.00);
    const [fromAmount, setFromAmount] = useState(100.00);
    const [toStrCurrency, setToStrCurrency] = useState('EUR');
    const dispatch = useDispatch();
    const currencies = [
        {
            id: 1,
            currency: "EUR"
        },
        {
            id: 2,
            currency: "RUB"
        }
    ]
    useEffect(() => {
        dispatch(getRate(baseCurrency))
    }, []);
    const handleSubmit = (event) => {
        event.preventDefault();
        handleModal();
    }
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

    const handleFromAmountChange = (event) => {
        const fromA = Number(event.target.value);
        setFromAmount(fromA);
        if (liveRate !== 0) {
            setToAmount(round(liveRate * fromA, 2));
        }
    }
    const handleToCurrencyChange = (event) => {
        const toCurrency = Number(event.target.value);
        const toCurrencyStr = currencies.find(currency => currency.id === toCurrency).currency;
        setToStrCurrency(toCurrencyStr);
        if (rates !== 0) {
            setLiveRate(rates[`${toCurrencyStr}`]);
        }
        setToAmount(round(rates[`${toCurrencyStr}`] * fromAmount, 2));
    }

    const handleModal = () => {
        setShowModal(!showModal);
    }
    return (
        <div className={"container"}>
            <div className={"row"}>
                <div className={"col-lg-6 d-flex justify-content-start"}>
                    <h3>Convert devise</h3>
                </div>
                <div className={"col-lg-6 d-flex justify-content-end"}>
                    <LogoutBtn/>
                </div>
            </div>
            {
                liveRate ? (
                    <div className={"row mt-2"}>
                        <div className={"col-md-8 mx-auto d-flex justify-content-center"}>
                            <Form onSubmit={handleSubmit}>
                                <h3>How much do you want to convert?</h3>
                                <div className={"border border-secondary"}>
                                    <div className={"text-primary ps-3"}>
                                        Convert
                                    </div>
                                    <div className={"d-flex mb-2"}>
                                        <Form.Group controlId={"fromConvert"}>
                                            <Form.Control
                                                type={"text"}
                                                className={"text-secondary border-0 me-5"}
                                                pattern={"[0-9]+"}
                                                placeholder={fromAmount.toString()}
                                                required={true}
                                                onChange={handleFromAmountChange}
                                            />
                                        </Form.Group>
                                        <div className={"vr"}></div>
                                        <div className={"ms-5"}>USD</div>
                                    </div>
                                    <div className={"text-secondary mt-2 ps-3"}>
                                        You have 82.23 usd available in your balance
                                    </div>
                                </div>
                                <div className={"vr h-25 ms-4"}>
                                </div>
                                <div className={"text-secondary ms-4 d-flex"}>
                                    <div className={"my-auto"}>
                                        <span className={"product-convert bg-primary mt-1"}><span><i><RxCross2
                                            size={28}/></i></span></span>
                                    </div>
                                    <div className={"mt-1"}>
                                        <span className={"ms-2"}>{liveRate}</span> <span className={"text-primary"}>Live rate</span>
                                    </div>
                                </div>
                                <div className={"vr h-25 ms-5"}>
                                </div>
                                <div className={"border border-secondary"}>
                                    <div className={"text-primary ps-3"}>
                                        To
                                    </div>
                                    <div className={"d-flex mb-2"}>
                                        <Form.Group controlId={"toConvert"}>
                                            <Form.Control
                                                type={"text"}
                                                className={"text-secondary border-0 me-5"}
                                                value={toAmount}
                                                readOnly={true}
                                            />
                                        </Form.Group>
                                        <div className={"vr"}></div>
                                        <div className={"ms-5"}>
                                            <Form.Group>
                                                <Form.Control
                                                    as="select"
                                                    name="toCurrency"
                                                    required={true}
                                                    onChange={handleToCurrencyChange}
                                                >
                                                    <option value={1}>EUR</option>
                                                    <option value={2}>RUB</option>
                                                </Form.Control>
                                            </Form.Group>
                                        </div>
                                    </div>
                                </div>
                                <div className={"mt-2"}>
                                    <button className={"btn btn-primary"} type={"submit"}>Convert<span
                                        className={"ms-2"}><i><TbArrowsExchange2 size={28}/></i></span>
                                    </button>
                                </div>
                            </Form>
                        </div>
                    </div>
                ) : (<LoadingEffect/>)
            }
            <ConvertModal showModal={showModal} handleModal={handleModal} fromAmount={`${fromAmount} ${baseCurrency}`}
                          toAmount={`${toAmount} ${toStrCurrency}`} liveRate={liveRate}/>
        </div>
    );
};

export default Convert;