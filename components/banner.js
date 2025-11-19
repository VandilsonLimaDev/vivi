import React from "react";
import Image from "next/image";
import Menu from "./menu";

const BannerSite = () => {
  return (
    <>
      <section className="banner">
        <nav className="header__navlink header__navlink--banner">
          <Menu />
        </nav>
        <div className="banner__container">
          <div className="text">
            <h1 className="title banner__title section__title">Bem-vindo à Crochet Love!</h1>
            <div className="subtitle banner__subtitle ">
              <p>
                Aqui, cada ponto é feito com carinho e cada peça conta uma
                história. Somos uma loja artesanal dedicada a criar produtos
                exclusivos em crochê, unindo criatividade, afeto e qualidade em
                cada detalhe.
              </p>
              <p>
                Do decorativo ao funcional, nossas criações são pensadas para
                trazer aconchego, beleza e originalidade ao seu dia a dia.
              </p>
              <p>
                Venha conhecer nosso mundo feito à mão — você vai se apaixonar
                por cada fio!
              </p>
            </div>
          </div>
          {/* <div className="imagem">
            <Image
              src="/logo.png"
              height={350}
              width={400}
              alt="Logo Crochet Love"
            />
          </div> */}
        </div>
      </section>
    </>
  );
};

export default BannerSite;
