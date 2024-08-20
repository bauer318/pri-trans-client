import React from 'react';

const AboutComponentCard = ({aboutData}) => {
    return (
        <div className="card mb-3 me-2" style={{maxWidth: '540px'}}>
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={aboutData?.imageLink} className="img-fluid rounded-start" alt={aboutData?.alt}/>
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{aboutData?.cardTitle}</h5>
                        <p className="card-text text-justify">{aboutData?.cardText}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutComponentCard;