// components/ClientOnlyGallery.jsx
"use client"
import dynamic from 'next/dynamic';

// Importa seu componente de galeria DYNAMICALLY, com SSR desativado
const MinhaGaleriaNext = dynamic(
    () => import('./galeria'), // Caminho para o seu componente
    { ssr: false }
);

export default function ClientOnlyGallery(props) {
    // Renderiza o componente apenas no cliente
    return <MinhaGaleriaNext {...props} />;
}