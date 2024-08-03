import React from 'react';
import {roundValue} from "../services/Utils";

const HomeTable = ({fromCountry, toCountry, orders}) => {
    return (
        <div>
            <div>
                <h3><i className={"text-secondary"}>{fromCountry}</i> vers <i className={"text-secondary"}>{toCountry}</i></h3>
            </div>
            <table className={"table table-success table-striped table-bordered table-responsive"}>
                <thead className={"table-light"}>
                <tr>
                    <th scope={"col"} className={"text-center"}>Expéditeur</th>
                    <th scope={"col"} className={"text-center"}>Montant</th>
                    <th scope={"col"} className={"text-center"}>Monnaie</th>
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