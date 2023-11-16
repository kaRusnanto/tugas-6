import React, {useState} from "react";
import Movie from "./Movie/Movie";
import styles from "./Movies.module.css";

function Movies(props) {

    const {item} = props

    return (
        <div className={styles.container}>
            <section className={styles.movies}>
                <h2 className={styles.movies__title}>Latest Movie</h2>
                <div className={styles.movie__container}>
                    {
                        item.map(function(data) {
                            return (
                                
                                <Movie key={data.id} title= {data.title} data= {data.date} Image={data.Image}/>
                                
                            )
                        })
                    }
                </div>
               
            </section>
        </div>
    );
}

export default Movies;