import React, { Component } from "react";
import Slider from "react-slick"; // Importa il componente Slider da react-slick
import "slick-carousel/slick/slick.css"; // Importa i file CSS per lo stile del carosello
import "slick-carousel/slick/slick-theme.css"; // Importa i file CSS per lo stile del tema del carosello
import SingleMovie from "./SingleMovie";
import { Col } from "react-bootstrap";

class NetflixCarousel extends Component {
  state = {
    movies: [], // Array per memorizzare i dati dei film
    isLoaded: false, // Flag per indicare se i dati sono stati caricati
    settings: {
      // Impostazioni del carosello
      dots: false, // Mostra i punti di navigazione
      infinite: true, // Abilita il loop infinito del carosello
      speed: 400, // Velocità di transizione delle slide (in millisecondi)
      slidesToShow: 6, // Numero di film da mostrare contemporaneamente
      slidesToScroll: 1, // Numero di film da scorrere per volta
      responsive: [
        // Impostazioni responsive
        {
          breakpoint: 1028,
          settings: {
            slidesToShow: 4, // Numero di film da mostrare su tablet/desktop
            slidesToScroll: 1, // Numero di film da scorrere su tablet/desktop
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
      ],
    },
  };

  componentDidMount() {
    const { searchQuery } = this.props;
    const endpoint = `http://www.omdbapi.com/?i=tt3896198&apikey=845ffd1f&movie&s=${searchQuery}`;

    // http://www.omdbapi.com/?i=tt3896198&apikey=845ffd1f

    fetch(endpoint)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Network response was not ok");
        }
      })
      .then((data) => {
        console.log(data);
        this.setState({
          // Aggiorna lo stato con i dati dei film ottenuti
          movies: data.Search || [], // Salva i risultati della ricerca dei film

          isLoaded: true, // Indica che i dati sono stati caricati correttamente
        });

        console.log("Success while fetching"); // Stampa un messaggio di successo sulla console
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }

  render() {
    const { movies, settings } = this.state; // Estrae i dati dei film e le impostazioni del carosello dallo stato
    const { stile } = this.props; // Estrae lo stile passato come props

    return (
      <Slider {...settings} className={stile}>
        {/* Renderizza il componente Slider con le impostazioni e la classe specificate  */}
        {movies.map((movie) => (
          <Col key={movie.imdbID} className="text-center">
            <SingleMovie year={movie.Year} title={movie.Title} img={movie.Poster} />
          </Col>
        ))}
      </Slider>
    );
  }
}

export default NetflixCarousel;
