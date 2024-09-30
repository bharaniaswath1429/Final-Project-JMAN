import React, { useEffect, useState } from 'react';
import axios from 'axios';

const EmployeeDashboard = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("authToken");

    if (token) {
      axios.get('http://localhost:8000/api/employee', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error("Error fetching protected route", error.response?.data || error.message);
      });
    } else {
      console.error("No token found, user is not authenticated.");
    }
  }, []);

  return (
    <div>
      <h1>Employee Dashboard</h1>
      {data ? <p>{data.message}</p> : <p>Loading...</p>}
    </div>
  );
};

export default EmployeeDashboard;