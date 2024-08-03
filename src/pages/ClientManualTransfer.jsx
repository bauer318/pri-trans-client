import React, {useMemo, useState} from 'react';
import HomeHeader from "../components/HomeHeader";
import ManualTransferList from "../components/ManualTransferList";

const ClientManualTransfer = () => {
    const [selectedCountryId, setSelectedCountryId] = useState();
    const data = [
        {
            Expéditeur: 'Row1 Col1',
            Montant: 'Row1 Col2',
            Destination: 'Row1 Col3',
            Temps: 'Row1 Col4',
            Contact: 'Row1 Col5',
            Action: 'Row1 Col6'
        },
        {
            Expéditeur: 'Row2 Col2',
            Montant: 'Row2 Col2',
            Destination: 'Row2 Col3',
            Temps: 'Row2 Col4',
            Contact: 'Row2 Col5',
            Action: 'Row2 Col6'
        },
        {
            Expéditeur: 'Row3 Col1',
            Montant: 'Row3 Col2',
            Destination: 'Row3 Col3',
            Temps: 'Row3 Col4',
            Contact: 'Row3 Col5',
            Action: 'Row3 Col6'
        },
        {
            Expéditeur: 'Row4 Col1',
            Montant: 'Row4 Col2',
            Destination: 'Row4 Col3',
            Temps: 'Row4 Col4',
            Contact: 'Row4 Col5',
            Action: 'Row4 Col6'
        },

    ];

    const columns = ['Expéditeur/Temps', 'Montant/Destination', 'Contact/Action'];

    return (
        <div className={"container"}>
            <h4 className={"text-center"}>Les transferts manuels, la sécurité à l'expéditeur.</h4>
            <hr/>
            <hr/>
            <HomeHeader setSelectedCountry={setSelectedCountryId}/>
            <ManualTransferList columns={columns} data={data}/>
        </div>
    );
};

export default ClientManualTransfer;