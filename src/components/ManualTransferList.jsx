import React, {useEffect, useState} from 'react';
import {Pagination} from 'react-bootstrap';
import '../pagination_table.css';
import ManualTransferCard from "./ManualTransferCard";
import manualTransferService from "../services/ManualTransferService";
import countryService from "../services/CountryService";
import {printError} from "../services/Utils";
import LoadingEffect from "./LoadingEffect";
import ManualPrivateTransferCard from "./ManualPrivateTransferCard";

const ManualTransferList = ({selectedCountryId, isVerified, isPrivate, status, canRefresh}) => {
    const [page, setPage] = useState(1);
    const [size, setSize] = useState(10);
    const [destination, setDestination] = useState('');
    const [canWait, setCanWait] = useState(false);
    const [data, setData] = useState();
    const [currentStatus, setCurrentStatus] = useState(status);

    const handlePageChange = (pageNumber) => setPage(pageNumber);

    const callBack = () => {
        setCanWait(false);
    }
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 576) {
                setSize(3);
            } else {
                setSize(10);
            }
        };

        window.addEventListener('resize', handleResize);
        handleResize();
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        setCanWait(true);
        if (isPrivate) {
            if (currentStatus !== '') {
                manualTransferService.getForCurrentUserByStatus(status, page, size)
                    .then(response => {
                        callBack();
                        setData(response);
                    }).catch(error => {
                    callBack();
                    printError(error);
                })
            }
        } else {
            if (destination !== '') {
                manualTransferService.getAllByDestination(destination, page, size)
                    .then(
                        response => {
                            callBack();
                            setData(response);
                        }
                    ).catch(error => {
                    callBack();
                    printError(error);
                })
            }
        }
    }, [destination, page, size, currentStatus, status, canRefresh]);

    useEffect(() => {
        setCanWait(true);
        if (selectedCountryId) {
            countryService.getById(selectedCountryId).then(
                response => {
                    setDestination(response?.countryName);
                    callBack();
                }
            ).catch(error => {
                printError(error);
                callBack();
            })
        }
    }, [selectedCountryId]);

    return (
        <div>
            <div className={"row row-cols-1 row-cols-md-3 g-4 mt-2"}>
                {data?.items?.map((transfer, key) => isPrivate ?
                    <ManualPrivateTransferCard key={key} transfer={transfer} setCurrentStatus={setCurrentStatus}/> :
                    <ManualTransferCard key={key} transfer={transfer}
                                        isVerified={isVerified}/>)}
            </div>
            {canWait && !isPrivate && selectedCountryId && <LoadingEffect/>}
            {canWait && isPrivate && <LoadingEffect/>}
            {!canWait && selectedCountryId && data?.items?.length === 0 &&
                <h4 className={"text-info text-center mt-2"}>Aucun transfert pour le moment vers {destination}!</h4>}
            {!canWait && isPrivate && data?.items?.length === 0 &&
                <h4 className={"text-info text-center mt-2"}>Aucun transfert!</h4>}
            <Pagination>
                <Pagination.Prev onClick={() => handlePageChange(page - 1)} disabled={!data?.hasPrevious}/>
                <Pagination.Item active={true} onClick={() => handlePageChange(page + 1)}>
                    {page}
                </Pagination.Item>

                <Pagination.Next onClick={() => handlePageChange(page + 1)}
                                 disabled={!data?.hasNext}/>
            </Pagination>
        </div>
    );
};

export default ManualTransferList;