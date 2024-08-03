import React, {useState} from 'react';
import {Pagination, Table} from 'react-bootstrap';
import '../pagination_table.css';
import ManualTransferCard from "./ManualTransferCard";

const ManualTransferList = ({data, columns}) => {
    const [currentPage, setCurrentPage] = useState(1);
    const rowsPerPage = 2;

    const indexOfLastRow = currentPage * rowsPerPage;
    const indexOfFirstRow = indexOfLastRow - rowsPerPage;
    const currentRows = data.slice(indexOfFirstRow, indexOfLastRow);

    const totalPages = Math.ceil(data.length / rowsPerPage);

    const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div>
            <div className={"row row-cols-1 row-cols-md-3 g-4 mt-2"}>
                <ManualTransferCard/>
                <ManualTransferCard/>
                <ManualTransferCard/>
                <ManualTransferCard/>
                <ManualTransferCard/>
            </div>
            <Pagination>
                <Pagination.First onClick={() => handlePageChange(1)} disabled={currentPage === 1}/>
                <Pagination.Prev onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}/>
                {[...Array(totalPages)].map((_, i) => (
                    <Pagination.Item key={i} active={i + 1 === currentPage} onClick={() => handlePageChange(i + 1)}>
                        {i + 1}
                    </Pagination.Item>
                ))}
                <Pagination.Next onClick={() => handlePageChange(currentPage + 1)}
                                 disabled={currentPage === totalPages}/>
                <Pagination.Last onClick={() => handlePageChange(totalPages)} disabled={currentPage === totalPages}/>
            </Pagination>
        </div>
    );
};

export default ManualTransferList;