import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const SearchResults = () => {
    const { searchTerm } = useParams();
    const [books, setBooks] = useState([]);

    console.log("Search Term:", searchTerm); // ✅ Check if it's undefined

    useEffect(() => {
        if (!searchTerm) return;
        
        const fetchBooks = async () => {
            try {
                const response = await fetch(`/api/books?search=${searchTerm}`);
                const data = await response.json();
                setBooks(data);
            } catch (error) {
                console.error("Error fetching books:", error);
            }
        };

        fetchBooks();
    }, [searchTerm]);

    return (
        <div>
            <h2>Search Results for: "{searchTerm}"</h2>
            {books.length > 0 ? (
                <ul>
                    {books.map((book) => (
                        <li key={book._id}>{book.title}</li>
                    ))}
                </ul>
            ) : (
                <p>No books found.</p>
            )}
        </div>
    );
};

export default SearchResults;
