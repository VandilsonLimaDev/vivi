"use client"
import React from "react";
import Lightbox from "yet-another-react-lightbox";
// Importa o componente de layout de galeria
import { RowsPhotoAlbum } from "react-photo-album"; 
// Importa o CSS necessário para o layout de Rows
import "react-photo-album/rows.css"; 
import "yet-another-react-lightbox/styles.css";
import Image from "next/image";

// Dados de Exemplo com dimensões (Simulação)
const slides = [
    { src: '/produtos/produto1.jpeg', title: 'P1', width: 800, height: 600 },
    { src: '/produtos/produto2.jpeg', title: 'P2', width: 400, height: 600 },
    { src: '/produtos/produto3.jpeg', title: 'P3', width: 600, height: 400 },
    { src: '/produtos/produto4.jpeg', title: 'P4', width: 600, height: 400 },
    { src: '/produtos/produto5.jpeg', title: 'P5', width: 600, height: 400 },
    { src: '/produtos/produto6.jpeg', title: 'P6', width: 600, height: 400 },
    { src: '/produtos/produto7.jpeg', title: 'P7', width: 600, height: 400 },
    { src: '/produtos/produto8.jpeg', title: 'P8', width: 600, height: 400 },
    { src: '/produtos/produto9.jpeg', title: 'P9', width: 600, height: 400 },
    { src: '/produtos/produto10.jpeg', title: 'P10', width: 600, height: 400 },
    { src: '/produtos/produto11.jpeg', title: 'P11', width: 600, height: 400 },
    { src: '/produtos/produto12.jpeg', title: 'P12', width: 600, height: 400 },
    { src: '/produtos/produto13.jpeg', title: 'P13', width: 600, height: 400 },
    { src: '/produtos/produto14.jpeg', title: 'P14', width: 600, height: 400 },
    { src: '/produtos/produto15.jpeg', title: 'P15', width: 600, height: 400 },
];

export default function MinhaGaleriaNext() {
    // Usamos -1 como estado inicial (Lightbox fechado)
    const [index, setIndex] = React.useState(-1);

    return (
        <>
            <RowsPhotoAlbum
                // O array de dados
                photos={slides} 
                // Altura alvo para cada linha. O componente ajusta a largura.
                targetRowHeight={180} 
                // Função chamada quando uma miniatura é clicada
                onClick={({ index: current }) => setIndex(current)}
                // Opcional: Renderiza as imagens usando o Image do Next.js (Melhor performance!)
                renderPhoto={({ photo, imageProps, wrapperStyle }) => (
                    <div style={wrapperStyle}>
                        <Image 
                            src={photo.src}
                            alt={photo.alt || photo.title}
                            width={photo.width}
                            height={photo.height}
                            {...imageProps} // Adiciona props de layout/styling do álbum
                            // Opcional: Adicionar um container para styling
                            style={{ ...imageProps.style, display: "block" }} 
                        />
                    </div>
                )}
            />

            {/* 💡 O Lightbox Modal */}
            <Lightbox
                index={index}
                slides={slides}
                // O Lightbox está aberto se o index for 0 ou maior.
                open={index >= 0} 
                // Fecha o Lightbox redefinindo o index para -1.
                close={() => setIndex(-1)} 
            />
        </>
    );
}