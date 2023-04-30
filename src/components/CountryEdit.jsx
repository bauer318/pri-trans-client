import React, {useState} from 'react';
import {FaSave} from "react-icons/fa";
import {MdCancel, MdDeleteForever} from "react-icons/md";
import RemoveCurrencyFromCountryModal from "../modals/RemoveCurrencyFromCountryModal";
import RemovePaymentMethodFromCountryModal from "../modals/RemovePaymentMethodFromCountryModal";

const CountryEdit = () => {
    const [showCurrencyModal, setShowCurrencyModal] = useState(false);
    const [showPMModal,setShowPMModal] = useState(false);
    const [countryId, setCountryId] = useState(0);
    const [currencyId, setCurrencyId] = useState(0);
    const [paymentMethodId, setPaymentMethodId] = useState(0);

    const handleCurrencyModal = ()=>{
        setShowCurrencyModal(!showCurrencyModal);
    }

    const handlePMModal = () =>{
        setShowPMModal(!showPMModal);
    }
    const handleRemoveCurrency = (currencyIdParam) =>{
        setCurrencyId(currencyIdParam);
        handleHelp();
        handleCurrencyModal();
    }

    const handleHelp =()=>{
        setCountryId(1);
    }
    const handleRemovePaymentMethod = (paymentMethodIdParam) =>{
        setPaymentMethodId(paymentMethodIdParam);
        handleHelp();
        handlePMModal();
    }
    return (
        <div className={"row mt-2"}>
            <div className={"col-4"}>
                <div>
                    <h1>RD Congo</h1>
                </div>
                <div>
                    <button className={"btn btn-primary mt-2"}><span className={"ps-2 pe-2"}><i><FaSave/></i></span>Save
                    </button>
                </div>
                <div>
                    <button className={"btn btn-info mt-2"}><span className={"ps-2 pe-2"}><MdCancel/></span>Cancel
                    </button>
                </div>
            </div>
            <div className={"col-4"}>
                <div>
                    <h1>Currencies</h1>
                    <table className={"table table-success table-striped table-bordered table-responsive"}>
                        <tbody>
                        <tr>
                            <td className={"text-start"}>Currency 1</td>
                            <td className={"text-center"} onClick={()=>handleRemoveCurrency(1)}><MdDeleteForever/></td>
                        </tr>
                        <tr>
                            <td className={"text-start"}>Currency 2</td>
                            <td className={"text-center"} onClick={()=>handleRemoveCurrency(2)}><MdDeleteForever/></td>
                        </tr>
                        <tr>
                            <td className={"text-start"}>Currency 3</td>
                            <td className={"text-center"} onClick={()=>handleRemoveCurrency(3)}><MdDeleteForever/></td>
                        </tr>
                        <tr>
                            <td className={"text-start"}>Currency 4</td>
                            <td className={"text-center"} onClick={()=>handleRemoveCurrency(4)}><MdDeleteForever/></td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className={"col-4"}>
                <div>
                    <h1>Payment methods</h1>
                    <table className={"table table-success table-striped table-bordered table-responsive"}>
                        <tbody>
                        <tr>
                            <td className={"text-start"}>Payment method 1</td>
                            <td className={"text-center"} onClick={()=>handleRemovePaymentMethod(1)}><MdDeleteForever/></td>
                        </tr>
                        <tr>
                            <td className={"text-start"}>Payment method 2</td>
                            <td className={"text-center"} onClick={()=>handleRemovePaymentMethod(1)}><MdDeleteForever/></td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <RemoveCurrencyFromCountryModal countryId={countryId} currencyId={currencyId} handleModal={handleCurrencyModal} showModal={showCurrencyModal}/>
            <RemovePaymentMethodFromCountryModal countryId={countryId} paymentMethodId={paymentMethodId} handleModal={handlePMModal} showModal={showPMModal}/>
        </div>
    );
};

export default CountryEdit;