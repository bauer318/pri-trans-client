import React from 'react';
import LogoutBtn from "../components/LogoutBtn";
import {BiArrowBack} from "react-icons/bi";
import {useNavigate} from "react-router-dom";
import {AiOutlineArrowDown, AiOutlineArrowUp, AiOutlinePlus} from "react-icons/ai";
import CircleBtn from "../components/CircleBtn";
import {TbArrowsExchange2} from "react-icons/tb";
import {get} from "../services/LocalStorageService";

const BalanceItem = () => {
    const navigate = useNavigate();
    const longedUser = get('longedUser');
    const subPath = `/${longedUser?.predPath}/account/1`;
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
                    <h4>USD main balance</h4>
                    <h1>82.82 USD</h1>
                </div>
                <CircleBtn onClick={() => navigate(`${subPath}/deposit/new`)} icon={<AiOutlinePlus size={28}/>}
                           content={"Deposit"}/>
                <CircleBtn onClick={() => navigate(`${subPath}/convert`)} icon={<TbArrowsExchange2 size={28}/>}
                           content={"Convert"}/>
                <CircleBtn onClick={() => navigate(`${subPath}/send`)} icon={<AiOutlineArrowUp size={28}/>}
                           content={"Send"}/>
                <CircleBtn onClick={() => navigate(`${subPath}/withdraw`)} icon={<AiOutlineArrowDown size={28}/>}
                           content={"Withdraw"}/>
            </div>
            <hr/>
            <div className={"col-lg-4"}>
                <h4>USD funding balance</h4>
                <h1>0.00 USD</h1>
            </div>
        </div>
    );
};

export default BalanceItem;