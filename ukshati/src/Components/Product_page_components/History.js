import React, { useState } from "react";
import Table from "react-bootstrap/Table";
import Pagination from "react-bootstrap/Pagination";
import { wateringData } from "../Utils/Data.js"; //dummy data
import "../Styles/History.css";

const History = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);

  const totalPages = Math.ceil(wateringData.length / itemsPerPage);

  // no of items to dislpay on the page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = wateringData.slice(indexOfFirstItem, indexOfLastItem);

  // To change the page number
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="watering-history-container">
      <h2 className="history-title">Watering History</h2>
      <Table striped bordered hover className="history-table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Time</th>
            <th>Duration (mins)</th>
            <th>Volume (liters)</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((item, index) => (
            <tr key={index}>
              <td>{item.date}</td>
              <td>{item.time}</td>
              <td>{item.duration}</td>
              <td>{item.volume}</td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Pagination>
        <Pagination.First
          onClick={() => handlePageChange(1)}
          disabled={currentPage === 1}
        />
        <Pagination.Prev
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        />
        {[...Array(totalPages)].map((_, pageIndex) => (
          <Pagination.Item
            key={pageIndex + 1}
            active={pageIndex + 1 === currentPage}
            onClick={() => handlePageChange(pageIndex + 1)}
          >
            {pageIndex + 1}
          </Pagination.Item>
        ))}
        <Pagination.Next
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        />
        <Pagination.Last
          onClick={() => handlePageChange(totalPages)}
          disabled={currentPage === totalPages}
        />
      </Pagination>
    </div>
  );
};

export default History;
