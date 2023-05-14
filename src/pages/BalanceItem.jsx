import React from 'react';
import LogoutBtn from "../components/LogoutBtn";
import {BiArrowBack} from "react-icons/bi";
import {useNavigate} from "react-router-dom";
import {AiOutlineArrowDown, AiOutlineArrowUp, AiOutlinePlus} from "react-icons/ai";
import CircleBtn from "../components/CircleBtn";
import {TbArrowsExchange2} from "react-icons/tb";
import {FiSend} from "react-icons/fi";

const BalanceItem = () => {
    const navigate = useNavigate();
    return (
        <div className={"container"}>
            <div className={"row"}>
                <div className={"col-lg-6 d-flex justify-content-start"}>
                    <button className={"btn btn-info"} onClick={() => {
                        navigate("/client/account")
                    }}><span><i><BiArrowBack size={28}/></i></span> Back
                    </button>
                </div>
                <div className={"col-lg-6 d-flex justify-content-end"}>
                    <LogoutBtn/>
                </div>
            </div>
            <div className={"row mt-5"}>
                <div className={"col-lg-4"}>
                    <h4>USD Balance</h4>
                    <h1>82.82 USD</h1>
                </div>
                <CircleBtn onClick={() => navigate("/client/account/1/deposit/new")} icon={<AiOutlinePlus size={28}/>}
                           content={"Deposit"}/>
                <CircleBtn onClick={() => navigate("/client/account")} icon={<TbArrowsExchange2 size={28}/>}
                           content={"Convert"}/>
                <CircleBtn onClick={() => navigate("/client/account")} icon={<AiOutlineArrowUp size={28}/>}
                           content={"Send"}/>
                <CircleBtn onClick={() => navigate("/client/account")} icon={<AiOutlineArrowDown size={28}/>}
                           content={"Withdraw"}/>
            </div>
            <hr/>
            <div>
                ...
            </div>
        </div>
    );
};

export default BalanceItem;