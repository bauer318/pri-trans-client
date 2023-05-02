import React from 'react';
import {MdDoneOutline} from "react-icons/md";
import {useSelector} from "react-redux";
import LoadingEffect from "./LoadingEffect";

const CurrencyAddTable = () => {
    const currencies = useSelector(state => state.currencies);
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
                {
                    currencies ? (
                        currencies.map(currency=>
                        <tr key={currency.id}>
                            <td className={"text-center"}>{currency.currency}</td>
                            <td className={"text-center"}>{currency.symbol}</td>
                            {/*Here we will put a condition, if this currency is already assigned we will display this
                             <td className={"text-center"} style={{color: "green"}}><MdDoneOutline/></td>
                             else user can add it
                            */}
                            <td className={"text-center"}>Add</td>
                        </tr>
                    ) ): (<LoadingEffect/>)
                }
                </tbody>
            </table>
        </div>
    );
};

export default CurrencyAddTable;