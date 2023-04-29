import React from 'react';
import {FaEdit} from "react-icons/fa";
import {MdDeleteForever} from "react-icons/md";

const PaymentMethodTable = () => {
    return (
        <div>
            <table className={"table table-success table-striped table-bordered table-responsive"}>
                <thead className={"table-light"}>
                <tr>
                    <th scope={"col"} className={"text-center"}>Payment method</th>
                    <th scope={"col"} className={"text-center"} colSpan={2}>Action</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td className={"text-center"}>Sberbank</td>
                    <td className={"text-center"}><FaEdit/></td>
                    <td className={"text-center"}><MdDeleteForever/></td>
                </tr>
                <tr>
                    <td className={"text-center"}>Airtel money </td>
                    <td className={"text-center"}><FaEdit/></td>
                    <td className={"text-center"}><MdDeleteForever/></td>
                </tr>
                </tbody>
            </table>
        </div>
    );
};

export default PaymentMethodTable;