import React, {useState} from 'react';
import {FaEdit} from "react-icons/fa";
import {MdDeleteForever} from "react-icons/md";
import UpdateCurrencyModal from "../modals/UpdateCurrencyModal";
import {useSelector} from "react-redux";
import LoadingEffect from "./LoadingEffect";

const CurrencyTable = () => {
    const [showModal, setShowModal] = useState(false);
    const [selectedCurrency, setSelectedCurrency] = useState();
    const [isDelete, setIsDelete] = useState(false);

    const currencies = useSelector(state => state.currencies);
    const handleModal = () => {
        setShowModal(!showModal);
    };
    const handleHelp = (currencyIdParam) => {
        const selectedCurrency = currencies.find(currency => currency.id === currencyIdParam);
        setSelectedCurrency(selectedCurrency);
        handleModal();
    };

    const handleEdit = (currencyIdParam) => {
        handleHelp(currencyIdParam);
        setIsDelete(false);
    };

    const handleDelete = (currencyIdParam) => {
        handleHelp(currencyIdParam);
        setIsDelete(true);
    };

    return (
        <>{currencies ?
            (<div>
                <table className={"table table-success table-striped table-bordered table-responsive"}>
                    <thead className={"table-light"}>
                    <tr>
                        <th scope={"col"} className={"text-center"}>Currency</th>
                        <th scope={"col"} className={"text-center"}>Symbol</th>
                        <th scope={"col"} className={"text-center"} colSpan={2}>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        currencies.map(currency =>
                            <tr key={currency.id}>
                                <td className={"text-center"}>{currency.currency}</td>
                                <td className={"text-center"}>{currency.symbol}</td>
                                <td className={"text-center"} onClick={() => handleEdit(currency.id)}><FaEdit/></td>
                                <td className={"text-center"} onClick={() => handleDelete(currency.id)}>
                                    <MdDeleteForever/>
                                </td>
                            </tr>
                        )
                    }
                    </tbody>
                </table>
                {selectedCurrency &&
                    <UpdateCurrencyModal showModal={showModal} handleModal={handleModal} selectedCurrency={selectedCurrency}
                                         isDelete={isDelete}/>}
            </div>) : (<LoadingEffect/>)}
        </>
    );
};

export default CurrencyTable;