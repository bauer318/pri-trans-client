import React from 'react';

const HomeTable = ({fromCountry, toCountry}) => {
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
                <tr>
                    <td className={"text-center"}>J***</td>
                    <td className={"text-center"}>10.00</td>
                    <td className={"text-center"}>EUR</td>
                </tr>
                <tr>
                    <td className={"text-center"}>M***</td>
                    <td className={"text-center"}>150.25</td>
                    <td className={"text-center"}>USD</td>
                </tr>
                <tr>
                    <td className={"text-center"}>J***</td>
                    <td className={"text-center"}>5000.00</td>
                    <td className={"text-center"}>Rub</td>
                </tr>
                </tbody>
            </table>
        </div>
    );
};

export default HomeTable;