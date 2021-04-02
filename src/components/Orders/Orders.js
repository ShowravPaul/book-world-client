import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import './Orders.css'

const Orders = () => {
    const [orders, setOrders] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    setLoggedInUser(loggedInUser); // extra line, just for using it

    useEffect(() => {
        fetch('http://localhost:5000/orders?email=' + loggedInUser.email, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                authorization: `Bearer ${sessionStorage.getItem('token')}`
            }
        })
            .then(res => res.json())
            .then(data => setOrders(data));
    }, [loggedInUser.email])

    return (
        <div className="container table">
            <h3>Hello, {loggedInUser.name}</h3>
            <h4>You have {orders.length} orders!!</h4>
            <br />
            <table id="customers">
                <tr>
                    <th>Book</th>
                    <th>Writer</th>
                    <th>Price</th>
                    <th>Order date</th>
                </tr>
                {
                    orders.map(order =>
                        <tr>
                            <td>{order.bookName}</td>
                            <td>{order.writerName}</td>
                            <td>{order.price}</td>
                            <td>{new Date(order.data).toDateString('dd/MM/yyyy')}</td>
                        </tr>
                    )
                }
            </table>
        </div>
    );
};

export default Orders;
