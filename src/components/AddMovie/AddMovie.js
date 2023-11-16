import React, { useState } from "react";
import styles from "./AddMovie.module.css";

const AddMovie = (props) => {

    //props yang data nya berasal dar main
    const { movies, setMovies } = props;

    // state yang menghandle proses inputan
    const [title, setTitle] = useState("");
    const [date, setDate] = useState("");
    const [link, setLink] = useState("");
    const [genre, setGenre] = useState("");

    // arrow function manghandlw inputan title
    const handleTitle = (e) => { setTitle(e.target.value) }

    // arrow function menghandle inputan date
    const handleDate = (e) => { setDate(e.target.value) }

    const handleLink = (e) => { setLink(e.target.value) }

    const handleGenre = (e) => { setGenre(e.target.value) };

    const genreOptions = ["Action", "Comedy", "Drama", "Sci-Fi"]; // Add your list of genre

    // arrow func menghandle submit
    const handleSubmit = (e) => {
        e.preventDefault();
        if (title === "" && date === "") { alert("title dan date kosong") }
        else if (title === "") { alert("title kosong") }
        else if (date === "") { alert("date kosong") }
        else {
            const movie = {
                id: 4,
                title: title,
                date: date,
                Image: link,
                genre: genre
            };
            setMovies([...movies, movie]);
            alert("berhasil menambahkan movie")
        }

    };

    return (
        <div className={styles.container}>
            <form className={styles.addmovie} onSubmit={handleSubmit}>
                <input placeholder="masukan judul" className={styles.addmovie__input} id="title" type="text" value={title} onChange={handleTitle} />
                <input placeholder="masukan link" className={styles.addmovie__input} id="link" type="text" value={link} onChange={handleLink} />
                <select className={styles.addmovie__input} id='genre' value={genre} onChange={handleGenre} placeholder="Masukkan genre">
                    <option value="" disabled>Select a genre</option>
                    {genreOptions.map((option, index) => (
                        <option key={index} value={option}>{option}</option>
                    ))}
                </select>
                <input placeholder="masukan tanggal" className={styles.addmovie__input} id="date" type="date" value={date} onChange={handleDate} />
                <br />
                <button className={styles.addmovie_button}>simpan</button>
            </form>
        </div>
    );
};

export default AddMovie;