import React, {useEffect} from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const ToastNotification = ({message}) => {
    console.log("called");
    const notify = () => toast(message);
    useEffect(() => {
        notify();
    }, []);

    return (
        <div>
            <ToastContainer />
        </div>
    );
};

export default ToastNotification;