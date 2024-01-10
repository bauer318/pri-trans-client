import React from 'react';
import {Form} from "react-bootstrap";
import {RxCross2} from "react-icons/rx";
import {roundValue} from "../services/Utils";

const ConvertForm = ({
                         formTitles,
                         fromAmount,
                         toAmount,
                         liveRate,
                         handleFromAmountChange,
                         currencies,
                         handleToCurrencyChange,
                         handleSubmit,
                         calculating
                     }) => {
    return (
        <div className={"row mt-2"}>
            <div className={"col-md-8 mx-auto d-flex justify-content-center"}>
                <Form onSubmit={handleSubmit}>
                    <h3>{formTitles.title}</h3>
                    <div className={"border border-secondary"}>
                        <div className={"text-primary ps-3"}>
                            {formTitles.fromSubTitle}
                        </div>
                        <div className={"d-flex mb-2"}>
                            <Form.Group controlId={"fromConvert"}>
                                <Form.Control
                                    type={"text"}
                                    className={"text-secondary border-0 me-5"}
                                    pattern={"[0-9.]+"}
                                    placeholder={fromAmount.toString()}
                                    required={true}
                                    onChange={handleFromAmountChange}
                                />
                            </Form.Group>
                            <div className={"vr"}></div>
                            <div className={"ms-3"}>{formTitles?.fromAccountCurrency?.code}</div>
                        </div>
                        <div className={"text-secondary mt-2 ps-3"}>
                            You
                            have <mark>{roundValue(formTitles.availableBalance)} {formTitles?.fromAccountCurrency?.symbol} </mark> available
                            in your balance
                        </div>
                    </div>
                    <div className={"vr h-25 ms-4"}>
                    </div>
                    <div className={"text-secondary ms-4 d-flex"}>
                        <div className={"my-auto"}>
                            <span
                                className={"product-convert bg-primary mt-1"}><span><i><RxCross2 size={28}/></i></span></span>
                        </div>
                        <div className={"mt-1"}>
                            <span className={"ms-2"}>{calculating ? "calculating..." : liveRate}</span> <span
                            className={"text-primary"}>Live rate</span>
                        </div>
                    </div>
                    <div className={"vr h-25 ms-5"}>
                    </div>
                    <div className={"border border-secondary"}>
                        <div className={"text-primary ps-3"}>
                            {formTitles.toSubtitle}
                        </div>
                        <div className={"d-flex mb-2"}>
                            <Form.Group controlId={"toConvert"}>
                                <Form.Control
                                    type={"text"}
                                    className={"text-secondary border-0 me-5"}
                                    value={roundValue(toAmount)}
                                    readOnly={true}
                                />
                            </Form.Group>
                            <div className={"vr"}></div>
                            <div className={"ms-3"}>
                                <Form.Group>
                                    <Form.Control
                                        as="select"
                                        name="toCurrency"
                                        required={true}
                                        onChange={handleToCurrencyChange}
                                    >
                                        <option
                                            value={formTitles?.fromAccountCurrency?.code}>{formTitles?.fromAccountCurrency?.code}</option>
                                        {
                                            currencies.map((currency, key) =>
                                                <option value={currencies?.currency}
                                                        key={key}>{currency?.code}</option>
                                            )
                                        }
                                    </Form.Control>
                                </Form.Group>
                            </div>
                        </div>
                    </div>
                    <div className={"mt-2"}>
                        <button className={"btn btn-primary"} type={"submit"}>{formTitles.actionTitle}<span
                            className={"ms-2"}><i>{formTitles.icon}</i></span>
                        </button>
                    </div>
                </Form>
            </div>
        </div>
    );
};

export default ConvertForm;