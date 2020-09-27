import React from "react";

import Header from "../../components/Header";
import ImgPad from "../../assets/img1.jpg";

import tv from "../../assets/tv.png";
import videoAnimation from "../../assets/video1.gif";

import mobile from "../../assets/mobile.jpg";
import boxshot from "../../assets/boxshot.png";

import device from "../../assets/device.png";
import videoAnimation2 from "../../assets/video2.gif";

import ButtonsCard from "../../components/ButtonsCard";
import ButtonsSearch from "../../components/ButtonsSearch";
import Footer from '../../components/Footer'

import "./styles.css";

function Home() {
  return (
    <div
      className="container"
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundImage: `url(${ImgPad})`,
      }}
    >
      <Header />

      <div className="home-vertical-bottom">
        <div className="home-vertical-top">
          <div className="home-main">
            <div className="card-header">
              <h1>
                100% diversão.
                <br /> R$1,90 nos primeiros 30 dias.
              </h1>
              <h4>Assista onde quiser. Cancele quando quiser.</h4>
              <h5>
                Pronto para assistir? Informe seu email para criar ou reiniciar
                sua assinatura.
              </h5>
              <ButtonsSearch title="EXPERIMENTE JÁ POR R$1,90" />
              <p>Esta oferta está disponível somente para não assinantes.</p>
            </div>
            <div className="linha-vertical"></div>
            <div className="card-animation">
              <div className="card-animation-1">
                <div className="card-text">
                  <h1>Aproveite na TV.</h1>
                  <h3>
                    Assista em Smart TVs, PlayStation, Xbox, Chromecast, Apple
                    TV, aparelhos de Blu-ray e outros aparelhos.
                  </h3>
                </div>
                <div className="cardimg">
                  <img className="img2Animation" src={tv} alt="img1" />
                  <img
                    className="imgAnimation"
                    src={videoAnimation}
                    alt="img"
                  />
                </div>
              </div>
              <div className="linha-vertical"></div>
              <div className="card-animation-2">
                <div className="cardimg">
                  <img className="img2Animation1" src={mobile} alt="img1" />
                  <div className="card-box">
                    <img className="imgAnimation1" src={boxshot} alt="img" />
                    <p>
                      Stranger Things <span>Download em andamento...</span>{" "}
                    </p>
                  </div>
                </div>
                <div className="card-text">
                  <h1>
                    Baixe séries para <br /> assistir offline.
                  </h1>
                  <h3>
                    Salve seus títulos favoritos e sempre tenha algo para
                    assistir.
                  </h3>
                </div>
              </div>
              <div className="linha-vertical"></div>
              <div className="card-animation-3">
                <div className="card-text">
                  <h1>
                    Assista quando <br /> quiser.
                  </h1>
                  <h3>
                    Assista no celular, tablet, smart TV ou notebook sem pagar a
                    mais por isso.
                  </h3>
                </div>
                <div className="cardimg">
                  <img className="img2Animation2" src={device} alt="img1" />
                  <img
                    className="imgAnimation2"
                    src={videoAnimation2}
                    alt="img"
                  />
                </div>
              </div>
              <div className="linha-vertical"></div>
            </div>
            <div className="question">
              <h1>Perguntas frequentes</h1>
              <ButtonsCard
                title="O que é a Netflix?"
                body="A Netflix é um serviço de transmissão online que oferece uma ampla
            variedade de séries, filmes e documentários premiados em milhares de
            aparelhos conectados à internet."
              />
              <ButtonsCard
                title="Quanto custa a Netflix?"
                body="Assista à Netflix no seu celular, tablet, Smart TV, notebook ou aparelho de streaming por uma taxa mensal única. Os planos variam de R$21,90 a R$45,90 por mês. Sem contrato nem taxas extras."
              />
              <ButtonsCard
                title="Onde posso assistir?"
                body="Assista onde quiser, o quanto quiser e em um número ilimitado de aparelhos. Faça login com sua conta Netflix em netflix.com para começar a assistir no computador ou em qualquer aparelho conectado à Internet compatível com o aplicativo Netflix, como Smart TVs, smartphones, tablets, aparelhos de streaming e videogames."
              />
              <ButtonsCard
                title="Como faço para cancelar?"
                body="A Netflix é flexível. Não há contratos nem compromissos. Você pode cancelar a sua conta na internet com apenas dois cliques. Não há taxa de cancelamento – você pode começar ou encerrar a sua assinatura a qualquer momento."
              />
              <ButtonsCard
                title="O que eu posso assistir na Netflix?"
                body="A Netflix tem um grande catálogo de filmes, documentários, séries, originais Netflix premiados e muito mais. Assista o quanto quiser, quando quiser."
              />
              <div className="questionButton">
                <p>Pronto para assistir? Informe seu email para criar ou reiniciar sua assinatura.</p>
                 <ButtonsSearch title="VAMOS LÁ" />
              </div>
             
              <div className="linha-vertical"></div>

              <Footer title="Feito por Eduardo, para estudo de react, todos os direitos das imagens são da Netflix.
        Email: edp2013.ep@gmail.com"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
