import React, { useContext } from 'react';
import { useHistory } from 'react-router';
import { TakenBookContext } from '../../App';
import './SingleBook.css'

const SingleBook = ({book}) => {
    const { bookName, imageURL, writerName, price } = book;
    const boughtBook = {
        bookName: bookName,
        imageURL: imageURL,
        writerName: writerName,
        price: price
    }

    const [takenBook, setTakenBook] = useContext(TakenBookContext);
    setTakenBook(takenBook); // extra line, just for using it
    const history = useHistory();

    const handleBuy = (boughtBook) => {
        setTakenBook(boughtBook);
        history.push(`/checkout`);
    }

    return (
        <div className="col-sm-12 col-md-6 col-lg-4">
            <div className="card">
                <img src={imageURL} alt="" />
                <div className="card-body">
                    <p><b>{bookName}</b> by {writerName}</p>
                    <p>Price: ${price}</p>
                    <button className="btn btn-primary" onClick={() => handleBuy(boughtBook)}> Buy </button>
                </div>
            </div>
        </div>
    );
};


export default SingleBook;