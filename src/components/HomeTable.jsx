import React from 'react';

const HomeTable = ({fromCountry, toCountry}) => {
    const tab_from = [
        {
            sender:"J***",
            amount:"10.00",
            currency:"EUR"
        },
        {
            sender:"M***",
            amount:"125.50",
            currency:"USD"
        },
        {
            sender:"J***",
            amount:"5500.00",
            currency:"RUB"
        }
    ];
    const tab_to = [
        {
            sender:"P***",
            amount:"25.00",
            currency:"EUR"
        }
    ];
    const tabToPrint = ()=>{
        if(fromCountry==="Russia"){
            return tab_from;
        }
        return tab_to;
    }
    return (
        <div>
            <div>
                <h3>From <i>{fromCountry}</i> to <i>{toCountry}</i></h3>
            </div>
            <table className={"table table-success table-striped table-bordered table-responsive"}>
                <thead className={"table-light"}>
                <tr>
                    <th scope={"col"} className={"text-center"}>Sender</th>
                    <th scope={"col"} className={"text-center"}>Amount</th>
                    <th scope={"col"} className={"text-center"}>Currency</th>
                </tr>
                </thead>
                <tbody>
                {tabToPrint().map((order,index)=> <tr key={index}>
                    <td className={"text-center"}>{order.sender}</td>
                    <td className={"text-center"}>{order.amount}</td>
                    <td className={"text-center"}>{order.currency}</td>
                </tr>)}
                </tbody>
            </table>
        </div>
    );
};

export default HomeTable;