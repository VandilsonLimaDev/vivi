import React from 'react'

const Footer = () => {
  return (
    <footer className='footer' style={{ "background-color" : "#e66271" }}>
        <div className="container footer__container flex flex-col justify-center items-center md:items-stretch  md:flex-row md:justify-between py-3 px-8 text-white" >
            <div>
                Colégio D'Lins &copy; 2025
            </div>
            <div>
                Todos os direitos reservados
            </div>
        </div>
    </footer>
  )
}

export default Footer
