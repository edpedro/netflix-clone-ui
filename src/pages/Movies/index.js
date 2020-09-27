import React, { useState, useEffect } from "react";
import Tmbd from "../../services/Tmdb";
import MovieRow from "../../components/MovieRow";
import FeatureMovie from "../../components/FeatureMovie";
import Header from "../../components/Header";
import Footer from '../../components/Footer'

import "./styles.css";

function Movies() {
  const [movieList, setMovieList] = useState([]);
  const [featureData, setFeatureData] = useState(null);
  const [blackHeader, setBlackHeader] = useState(false);

  useEffect(() => {
    const loadAll = async () => {
      let list = await Tmbd.getHomeList();
      setMovieList(list);

      let originals = list.filter((i) => (i.slug = "originals"));
      let randomChosen = Math.floor(
        Math.random() * (originals[0].items.results.length - 1)
      );
      let chosen = originals[0].items.results[randomChosen];
      let chosenInfo = await Tmbd.getMovieInfo(chosen.id, "tv");

      setFeatureData(chosenInfo);
    };
    loadAll();
  }, []);
  useEffect(() => {
    const scrollListener = () => {
      if (window.scrollY > 10) {
        setBlackHeader(true);
      } else {
        setBlackHeader(false);
      }
    };
    window.addEventListener("scroll", scrollListener);

    return () => {
      window.removeEventListener("scroll", scrollListener);
    };
  }, []);

  return (
    <div className="page">
      <Header black={blackHeader} />

      {featureData && <FeatureMovie item={featureData} />}

      <section className="lists">
        {movieList.map((item, key) => (
          <MovieRow key={key} title={item.title} items={item.items} />
        ))}
      </section>
      <Footer  title="Feito em Live (https://www.youtube.com/watch?v=tBweoUiMsDg) para estudo
        de react, todos os direitos das imagens são da Netflix.
        Dados Extraidos de https://www.themoviedb.org/"/>
      {movieList <= 0 && (
        <div className="loading">
          <img
            src="https://cdn.lowgif.com/small/0534e2a412eeb281-the-counterintuitive-tech-behind-netflix-s-worldwide.gif"
            alt="Carregando"
          />
        </div>
      )}
    </div>
  );
}

export default Movies;
