import React from 'react';
import {FaEdit} from "react-icons/fa";
import {MdDeleteForever} from "react-icons/md";

const CurrencyTable = () => {
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
                    <td className={"text-center"}><FaEdit/></td>
                    <td className={"text-center"}><MdDeleteForever/></td>
                </tr>
                <tr>
                    <td className={"text-center"}>Euro </td>
                    <td className={"text-center"}>£</td>
                    <td className={"text-center"}><FaEdit/></td>
                    <td className={"text-center"}><MdDeleteForever/></td>
                </tr>
                </tbody>
            </table>
        </div>
    );
};

export default CurrencyTable;