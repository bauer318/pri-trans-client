import React from 'react';

const LoadingEffect = () => {
    return (
        <div className={"loading"}>
            <div className="spinner-grow text-secondary loading-d" role={"status"}>
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    );
};

export default LoadingEffect;