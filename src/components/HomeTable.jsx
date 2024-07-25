import React from 'react';
import {roundValue} from "../services/Utils";

const HomeTable = ({fromCountry, toCountry, orders}) => {
    return (
        <div>
            <div>
                <h2>From {fromCountry} to {toCountry}</h2>
            </div>
            <table className={"table table-success table-striped table-bordered table-responsive"}>
                <thead className={"table-light"}>
                <tr>
                    <th scope={"col"} className={"text-center"}>Sender</th>
                    <th scope={"col"} className={"text-center"}>Amount</th>
                    <th scope={"col"} className={"text-center"}>Devise</th>
                </tr>
                </thead>
                <tbody>
                {orders?.map((order, key) => <tr key={key}>
                    <td className={"text-center"}>{order?.email}</td>
                    <td className={"text-center"}>{roundValue(order?.amount)}</td>
                    <td className={"text-center"}>{order?.devise}</td>
                </tr>)}
                </tbody>
            </table>
        </div>
    );
};

export default HomeTable;