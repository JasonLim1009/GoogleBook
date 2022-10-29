import react, { useState } from "react";
import Card from "./Card";
import axios from "axios";

const Main = () => {
    const [search, setSearch] = useState("");
    const [bookData, setData] = useState([]);
    const searchBook = (evt) => {
        if (evt.key === "Enter") {
            axios.get('https://www.googleapis.com/books/v1/volumes?q=' + search + '&key=AIzaSyAXtyc2XIW1YNwOtKzC12NGVzcqQBeo6fY' + '&maxResults=40')
                .then(res => setData(res.data.items))
                .catch(err => console.log(err))
        }
    }
    return (
        <>
            <div className="header">
                <div className="row1">
                    <h1>A Book That Gets You Into the <br />Search Engine Field.</h1>
                </div>
                <div className="row2">
                    <h2>Google Books</h2>
                    <div className="search">
                        <input type="text" placeholder="Search..."
                            value={search} onChange={e => setSearch(e.target.value)}
                            onKeyPress={searchBook} />
                        <button><i class="fa-solid fa-magnifying-glass-plus"></i></button>
                    </div>
                    <img src="./images/bg2.png" alt="" />
                </div>
            </div>

            <div className="container">
                {
                    <Card book={bookData} />
                }
            </div>
        </>
    )
}
export default Main;