import React, {useEffect, useState} from 'react';
import {Form} from "react-bootstrap";
import LoadingEffect from "./LoadingEffect";
import {getItem} from "../services/LocalStorageService";
import walletService from "../services/walletService";
import {printError, roundValue} from "../services/Utils";
import {round} from "lodash";

//Deposit Withdraw DW
const DWForm = ({formDetails, handleSubmit, handleAmountChange, handlePMChange, isDeposit}) => {
    const [paymentMethods, setPaymentMethods] = useState([]);
    useEffect(() => {
        const user = getItem('connectedUser');
        /*if (isDeposit) {
            setPaymentMethods(user?.country?.paymentMethods);
        } else {*/
        if (formDetails?.currency?.currency) {
            walletService.getUserPaymentMethodByCurrency(user?.userId, formDetails?.currency.currency)
                .then(r => {
                    setPaymentMethods(r);
                })
                .catch(error => {
                    printError(error);
                })
        }
        /*}*/

    }, [formDetails]);
    return (
        <>
            {formDetails ? (
                <div className={"row mt-2"}>
                    <div className={"col-md-8 mx-auto d-flex justify-content-center"}>
                        <Form onSubmit={handleSubmit}>
                            <h3>{formDetails?.title}</h3>
                            <p className={"text-secondary"}>Your balance right now is <span className={"text-body"}>
                                {`${roundValue(formDetails?.availableBalance)} ${formDetails?.currency?.code}`} </span></p>
                            <div className={"border border-secondary"}>
                                <div className={"text-primary ps-3"}>
                                    {formDetails?.subTitle}
                                </div>
                                <div className={"d-flex mb-2"}>
                                    <Form.Group>
                                        <Form.Control
                                            type={"text"}
                                            className={"text-secondary border-0 me-5"}
                                            pattern={"[0-9.]+"}
                                            placeholder={"100.00"}
                                            required={true}
                                            onChange={handleAmountChange}
                                        />
                                    </Form.Group>
                                    <div className={"vr"}></div>
                                    <div className={"ms-5"}>{formDetails?.currency?.code}</div>
                                </div>
                            </div>
                            <Form.Group className={"mt-2"}>
                                <Form.Label className={"text-secondary"}>{formDetails.pmTitle}</Form.Label>
                                <Form.Control
                                    as="select"
                                    name={"paymentMethod"}
                                    required={true}
                                    onChange={handlePMChange}
                                >
                                    <option value={""}>Select payment method</option>
                                    {paymentMethods?.map((pm, key) =>
                                        <option value={pm?.paymentMethod}
                                                key={key}>{pm?.paymentMethod}</option>
                                    )
                                    }
                                </Form.Control>
                            </Form.Group>
                            <div className={"mt-2"}>
                                <button className={"btn btn-primary"} type={"submit"}>{formDetails.actionTitle}<span
                                    className={"ms-2"}><i>{formDetails.icon}</i></span>
                                </button>
                            </div>
                        </Form>
                    </div>

                </div>
            ) : (<LoadingEffect/>)}
        </>
    );
};

export default DWForm;