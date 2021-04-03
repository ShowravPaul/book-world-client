import React, { useContext } from 'react';
import { TakenBookContext, UserContext } from '../../App';
import './CheckOut.css'

const CheckOut = () => {
    const [takenBook, setTakenBook] = useContext(TakenBookContext);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    // these 2 lines are extra, just for using them
    setTakenBook(takenBook);
    setLoggedInUser(loggedInUser);

    const saveOrderData = () => {
        const orderData = { ...loggedInUser, ...takenBook, data: new Date() };
        // console.log(orderData);
        fetch('https://book-world-server-1.herokuapp.com/addOrder', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(orderData)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
            })
    }
    saveOrderData();

    //eikhan theke email, date, price, book 
    return (
        <div>
            <h3 className="success">Successfully done!!</h3>
            <div className="checkout">
                <h1>Thanks for buying!</h1>
                <h4>You have just bought: </h4>
                <p>Book: {takenBook.bookName}</p>
                <p>Writer: {takenBook.writerName}</p>
                <p>Price: ${takenBook.price}</p>
            </div>
        </div>
    );
};

export default CheckOut;
