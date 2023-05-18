import React from 'react';
import {useNavigate} from "react-router-dom";
import {BiArrowBack} from "react-icons/bi";
import LogoutBtn from "../components/LogoutBtn";
import CircleBtn from "../components/CircleBtn";
import {TbArrowsExchange2} from "react-icons/tb";

const AgentBalanceItem = () => {
    const navigate = useNavigate();
    return (
        <div className={"container"}>
            <div className={"row"}>
                <div className={"col-lg-6 d-flex justify-content-start"}>
                    <button className={"btn btn-info"} onClick={() => {
                        navigate("/agent/account")
                    }}><span><i><BiArrowBack size={28}/></i></span> Back
                    </button>
                </div>
                <div className={"col-lg-6 d-flex justify-content-end"}>
                    <LogoutBtn/>
                </div>
            </div>
            <div className={"row mt-5"}>
                <div className={"col-lg-4"}>
                    <h4>USD main balance</h4>
                    <h1>82.82 USD</h1>
                </div>
                <CircleBtn onClick={() => navigate("/agent/account/1/convert")} icon={<TbArrowsExchange2 size={28}/>}
                           content={"Convert"}/>
            </div>
            <hr/>
            <div className={"col-lg-4"}>
                <h4>USD funding balance</h4>
                <h1>0.00 USD</h1>
            </div>
        </div>
    );
};

export default AgentBalanceItem;