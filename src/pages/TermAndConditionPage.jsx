import React, {useRef} from 'react';

const TermAndConditionPage = () => {
    const termConditionFilePath = '/terms_conditions/Pritrans_terms_and_conditions_v1.0.0.pdf';
    const iframeRef = useRef();

    return (
        <div className={"container"}>
            <iframe
                ref={iframeRef}
                src={termConditionFilePath}
                width="100%"
                height="1000px"
                style={{border: 'none'}}
                title="PDF Viewer"
            />
        </div>
    );
};

export default TermAndConditionPage;