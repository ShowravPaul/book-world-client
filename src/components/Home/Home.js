import React, { useEffect, useState } from 'react';
import SingleBook from '../SingleBook/SingleBook';

const Home = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch('https://book-world-server-1.herokuapp.com/books')
            .then(response => response.json())
            .then(data => setBooks(data))
    }, [])

    // const book ={
    //     bookName:"Java", 
    //     writerName:"Bojlur Vai",
    //     price:100,
    //     imageURL:"google.com"
    // }
     
    return (
        <div className="container">
            <div className="row">
                {
                    books.map(book => <SingleBook key={book._id} book={book} ></SingleBook>)
                }
                {/* {
                    <SingleBook book = {book}></SingleBook>
                } */}
            </div>
        </div>
    );
};

export default Home;
