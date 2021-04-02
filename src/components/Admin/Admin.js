import React from 'react';
import { useHistory } from 'react-router';
import './Admin.css'

const Admin = () => {
  const history = useHistory();

  const handleManageBook = () =>{
    history.push(`/manageBook`);
  }

  const handleAddBook = () =>{
    history.push(`/addBook`);
  }

  return (
    <div className="container admin">
      <button className="btn btn-success" onClick={() => handleAddBook()}>ADD BOOK</button>
      <button className="btn btn-primary" onClick={() => handleManageBook()}>MANAGE BOOK</button>
    </div>
  );
};

export default Admin;