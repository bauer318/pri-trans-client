import React, {useState} from 'react';
import LogoutBtn from "../components/LogoutBtn";
import PaymentMethodCard from "../components/PaymentMethodCard";
import ClientAddPaymentMethodModal from "../modals/ClientAddPaymentMethodModal";

const ClientPaymentMethods = () => {
    const [showModal, setShowModal] = useState(false);
    const paymentMethods = [
        {
            id: 1,
            paymentMethod: {
                id: 3,
                pm: "Sberbank"
            },
            number: '2145-854',
            accountName: "User account name"
        },
        {
            id: 2,
            paymentMethod: {
                id: 1,
                pm: "Airtel money"
            },
            number: '0021ER-854',
            accountName: "User account name"
        },
        {
            id: 3,
            paymentMethod: {
                id: 2,
                pm: "M-pesa"
            },
            number: '2145-85TEPO4',
            accountName: "User account name"
        }
    ];
    const handleModal = () => {
        setShowModal(!showModal);
    }
    const handleAddPaymentMethod = () => {
        handleModal();
    }
    return (
        <div className={"row"}>
            <div className={"col-lg-5 d-flex justify-content-start ms-1"}>
                <button className={"btn btn-info"} onClick={() => handleAddPaymentMethod()}>Add payment method</button>
            </div>
            <div className={"col-lg-6 d-flex justify-content-end"}>
                <LogoutBtn/>
            </div>
            <div className={"row row-cols-1 row-cols-md-3 g-4 mt-2 ms-2"}>
                {
                    paymentMethods?.map(pm => <PaymentMethodCard key={pm.id} paymentMethodDetails={pm}/>)
                }
            </div>
            {
                showModal &&
                <ClientAddPaymentMethodModal handleModal={handleModal} showModal={showModal}/>
            }
        </div>
    );
};

export default ClientPaymentMethods;