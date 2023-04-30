import React, {useState} from 'react';
import {FaEdit} from "react-icons/fa";
import {MdDeleteForever} from "react-icons/md";
import UpdateCurrency from "../modals/UpdateCurrency";

const CurrencyTable = () => {
    const [showModal, setShowModal] = useState(false);
    const [currencyId, setCurrencyId] = useState(0);
    const [isDelete, setIsDelete] = useState(false);

    const handleModal = () => {
        setShowModal(!showModal);
    };
    const handleHelp = (currencyIdParam) => {
        setCurrencyId(currencyIdParam);
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
        <div>
            <table className={"table table-success table-striped table-bordered table-responsive"}>
                <thead className={"table-light"}>
                <tr>
                    <th scope={"col"} className={"text-center"}>Currency</th>
                    <th scope={"col"} className={"text-center"}>Symbol</th>
                    <th scope={"col"} className={"text-center"} colSpan={2}>Action</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td className={"text-center"}>Dollars USD</td>
                    <td className={"text-center"}>$</td>
                    <td className={"text-center"} onClick={() => handleEdit(1)}><FaEdit/></td>
                    <td className={"text-center"} onClick={() => handleDelete(1)}><MdDeleteForever/></td>
                </tr>
                <tr>
                    <td className={"text-center"}>Euro</td>
                    <td className={"text-center"}>£</td>
                    <td className={"text-center"} onClick={() => handleEdit(2)}><FaEdit/></td>
                    <td className={"text-center"} onClick={() => handleDelete(2)}><MdDeleteForever/></td>
                </tr>
                </tbody>
            </table>
            <UpdateCurrency showModal={showModal} handleModal={handleModal} currencyId={currencyId} isDelete={isDelete}/>
        </div>
    );
};

export default CurrencyTable;