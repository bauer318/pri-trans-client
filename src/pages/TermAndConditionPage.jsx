import React, {useRef} from 'react';

const TermAndConditionPage = () => {
    const termConditionFilePath = '/terms_conditions/Pritrans_terms_and_conditions_v1.0.0.pdf';
    const iframeRef = useRef();

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', margin: 0 }}>
            <iframe
                ref={iframeRef}
                src={termConditionFilePath}
                style={{
                    width: '100%',
                    height: '100vh',
                    border: 'none',
                    transform: 'scale(1)',
                    transformOrigin: '0 0',
                    maxWidth: '100%',
                    maxHeight: '100%',
                    overflow: 'auto'
                }}
                title="PDF Viewer"
            />
        </div>
    );
};

export default TermAndConditionPage;