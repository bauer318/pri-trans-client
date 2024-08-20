import React from 'react';
import {Viewer, Worker} from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import 'core-js/es/promise';
import 'core-js/es/array/includes';
import 'regenerator-runtime/runtime';

const TermAndConditionPage = () => {
    const termConditionFilePath = '/terms_conditions/Pritrans_terms_and_conditions_v1.0.0.pdf';

    return (
        <div style={{height: '100vh', width: '100%'}}>
            <Worker workerUrl={`https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js`}>
            <Viewer fileUrl={termConditionFilePath}/>
        </Worker>
        </div>
    );
};

export default TermAndConditionPage;