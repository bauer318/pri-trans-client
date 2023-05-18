import React, {useState} from 'react';
import CSWHeader from "../components/CSWHeader";
import {BsUnlock} from "react-icons/bs";
import LoadingEffect from "../components/LoadingEffect";
import {FiLock} from "react-icons/fi";

const ModeratorHome = () => {
    const users = [
        {
            id: 1,
            firstName: "first name",
            lastName: "last name",
            middleName: "middle name",
            blockingStatus: false,
            role: 'client'
        },
        {
            id: 2,
            firstName: "second f name",
            lastName: "second l name",
            blockingStatus: true,
            role: 'moderator'
        }
    ];
    const handleBlockUnblock = id =>{
        let user = users?.find(user=>user.id===id);
        user.blockingStatus = !user?.blockingStatus;
        console.log(user);
    }
    return (
        <div className={"container"}>
            <CSWHeader title={"Users"}/>
            {
                users ? (<table className={"table table-success table-striped table-bordered table-responsive mt-2"}>
                    <thead className={"table-light"}>
                    <tr>
                        <th scope={"col"} className={"text-center"}>User's full name</th>
                        <th scope={"col"} className={"text-center"}>User's role</th>
                        <th scope={"col"} className={"text-center"}>Lock / Unlock</th>
                    </tr>
                    </thead>
                    <tbody>
                    {users.map(user =>
                        <tr key={user.id}>
                            <td>{`${user.firstName} ${user.lastName} ${user?.middleName}`}</td>
                            <td>{user.role}</td>
                            <td className={"text-center"} onClick={()=>handleBlockUnblock(user.id)}>{user.blockingStatus ? (<FiLock size={28}/>) : (
                                <BsUnlock size={28}/>)}</td>
                        </tr>
                    )}
                    </tbody>
                </table>) : (<LoadingEffect/>)
            }

        </div>
    );
};

export default ModeratorHome;