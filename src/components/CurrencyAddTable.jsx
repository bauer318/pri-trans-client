import React from 'react';
import {MdDoneOutline} from "react-icons/md";

const CurrencyAddTable = () => {
    return (
        <div>
            <table className={"table table-success table-striped table-bordered table-responsive"}>
                <thead className={"table-light"}>
                <tr>
                    <th scope={"col"} className={"text-center"}>Currency</th>
                    <th scope={"col"} className={"text-center"}>Symbol</th>
                    <th scope={"col"} className={"text-center"}>Action</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td className={"text-center"}>Dollars USD</td>
                    <td className={"text-center"}>$</td>
                    <td className={"text-center"}>Add</td>
                </tr>
                <tr>
                    <td className={"text-center"}>Euro </td>
                    <td className={"text-center"}>£</td>
                    <td className={"text-center"} style={{color:"green"}}><MdDoneOutline/></td>
                </tr>
                </tbody>
            </table>
        </div>
    );
};

export default CurrencyAddTable;