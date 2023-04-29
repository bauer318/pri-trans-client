import React from 'react';
import {FaEdit, FaExchangeAlt} from "react-icons/fa";
import {MdDeleteForever} from "react-icons/md";

const Country = () => {
    return (
        <div className={"row mt-2"}>
            <div className={"col-4"}>
                <div>
                    <h1>RD Congo</h1>
                </div>
                <div>
                    <button className={"btn btn-primary mt-2"}><span className={"ps-2 pe-2"}><i><FaEdit/></i></span>Edit
                    </button>
                </div>
                <div>
                    <button className={"btn btn-danger mt-2"}><span className={"ps-2 pe-2"}><MdDeleteForever/></span>Delete
                    </button>
                </div>
            </div>
            <div className={"col-4"}>
                <div>
                    <h1>Currencies</h1>
                    <table className={"table table-success table-striped table-bordered table-responsive"}>
                        <tbody>
                        <tr>
                            <td className={"text-start"}>Currency 1</td>
                        </tr>
                        <tr>
                            <td className={"text-start"}>Currency 2</td>
                        </tr>
                        <tr>
                            <td className={"text-start"}>Currency 3</td>
                        </tr>
                        <tr>
                            <td className={"text-start"}>Currency 4</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className={"col-4"}>
                <div>
                    <h1>Payment methods</h1>
                    <table className={"table table-success table-striped table-bordered table-responsive"}>
                        <tbody>
                        <tr>
                            <td className={"text-start"}>Payment method 1</td>
                        </tr>
                        <tr>
                            <td className={"text-start"}>Payment method 2</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Country;