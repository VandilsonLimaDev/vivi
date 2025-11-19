import Image from "next/image";
import HeaderSite from "../../components/header";
import BannerSite from "../../components/banner";
import CarouselQuemSomos from "../../components/carouselQuemSomos";
import MinhaGaleriaNext from "../../components/galeria";

const alunas = [
  {id: 1, nome:"Vivian Macedo", funcao : "Diretora de Tecnologia e Website", foto : "vivianmacedo.jpg" },
  {id: 2, nome:"Yasmim Cortez", funcao : "Gerente de Produçao / Finaceiro", foto : "yasmimcortez.jpg" },
  {id: 3, nome:"Lara Marques", funcao : "Diretora de Marketing", foto : "laramarques.jpg" },
  {id: 4, nome:"Maju Gusmão", funcao : "Vice-Diretora de Marketing", foto : "majugusmao.jpg" },
  {id: 5, nome:"Isabelle Lima", funcao : "Diretora Geral", foto : "isabellelima.jpg" },
  {id: 6, nome:"Ana Cecília", funcao : "Vice-Diretora Geral", foto : "anacecilia.jpg" }
];

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="container hero__container">
          <HeaderSite />
          <BannerSite />
        </div>
      </section>
      <section id="quemsomos" className="container">
        <div className="container section__container">
          <h2 className="section__title">Quem somos</h2>
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 md:col-span-5">
              <Image
                src="/imageQuemSomos.png"
                height={500}
                width={500}
                alt="imagem Quem Somos"
               />
            </div>
            <div className="col-span-12 md:col-span-7">
              <p>Na Crochet Love, acreditamos que o artesanato é uma forma de expressar amor. Nosso projeto nasceu da paixão por transformar fios em arte e do desejo de levar esse sentimento para outras pessoas.</p>
              <p>Trabalhamos com peças feitas totalmente à mão, valorizando o tempo, o cuidado e a dedicação que só o crochê pode oferecer.</p>
              <p>Mais do que uma loja, somos uma comunidade que apoia o empreendedorismo criativo e celebra a beleza do feito à mão.</p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-10 text-center">
                {alunas.map(({id, nome, funcao, foto})=>(
                  <div key={id} className="alunas__box">
                  <Image className="rounded-full overflow-hidden" src={`/alunas/${foto}`} width={500} height={500} alt={nome} />
                  <h2 className="text-center text-2xl font-bold pt-4 pb-3 leading-6 text-[var(--font-title)]">{nome}</h2>
                  <h4 className="text-center text-sm uppercase leading-4">{funcao}</h4>
                  </div>
                ))};                
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="nossamissao" className="container px-8">
        <div className="container section__container nossamissao__container">
          <h2 className="section__title">Nossa Missão</h2>
          <p>Nossa missão é espalhar afeto através do crochê, oferecendo produtos artesanais únicos, sustentáveis e de alta qualidade.
Queremos inspirar pessoas a valorizar o trabalho manual e mostrar como pequenas criações podem transformar ambientes e momentos especiais.</p>
        </div>
      </section>
      <section id="produtos" className="container">
        <div className="container section__container produtos__container">
          <h2 className="section__title">Produtos</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {/* {Array.from({ length: 15 }).map((_, index) => (
                  <Image 
                      key={index} // O key é crucial e deve ser único. O índice funciona aqui.
                      className="rounded-b-2xl overflow-hidden" 
                      src={`/produtos/produto${index + 1}.jpeg`} // ATENÇÃO: Se as imagens são produto1.jpeg, use index + 1
                      width={500} 
                      height={700} 
                      alt="produto"
                  />
              ))} */}
              <MinhaGaleriaNext />
            </div>
        </div>
      </section>
    </>
  );
}
