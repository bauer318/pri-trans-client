import React from 'react';
import {MdDoneOutline} from "react-icons/md";

const PaymentMethodAddTable = () => {
    return (
        <div>
            <table className={"table table-success table-striped table-bordered table-responsive"}>
                <thead className={"table-light"}>
                <tr>
                    <th scope={"col"} className={"text-center"}>Payment method</th>
                    <th scope={"col"} className={"text-center"}>Action</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td className={"text-center"}>Sberbank</td>
                    <td className={"text-center"} style={{color: "green"}}><MdDoneOutline/></td>
                </tr>
                <tr>
                    <td className={"text-center"}>Airtel money</td>
                    <td className={"text-center"}>Add</td>
                </tr>
                </tbody>
            </table>
        </div>
    );
};

export default PaymentMethodAddTable;