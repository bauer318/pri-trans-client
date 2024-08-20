import React from 'react';
import {Viewer, Worker} from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';

const TermAndConditionPage = () => {
    const termConditionFilePath = '/terms_conditions/Pritrans_terms_and_conditions_v1.0.0.pdf';

    return (
        <div style={{height: '100vh', width: '100%'}}>
            <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
            <Viewer fileUrl={termConditionFilePath}/>
        </Worker>
        </div>
    );
};

export default TermAndConditionPage;