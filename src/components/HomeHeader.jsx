import React from 'react';
import LogoutBtn from "./LogoutBtn";

const HomeHeader = () => {
    const handleRecipientCountrySelectChange = (event) => {
        const selectedCountry = event.target.value;
            console.log({selectedCountry});
    }
    return (
        <div>
            <div className={"row"}>
                <div className={"col-lg-3 d-flex justify-content-start"}>
                    <h2>Recipient's country </h2>
                </div>
                <div className={"col-lg-3 d-flex justify-content-start"}>
                    <select className={"form-select"} aria-label={"Default select example"}
                            onChange={handleRecipientCountrySelectChange}>
                        <option value={1}>DR Congo</option>
                        <option value={2}>Russia</option>
                    </select>
                </div>
                <div className={"col-lg-6 d-flex justify-content-end"}>
                    <LogoutBtn/>
                </div>
            </div>
        </div>
    );
};

export default HomeHeader;