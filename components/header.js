import Image from "next/image";
import Link from "next/link";
import React from "react";
import Menu from "./menu";

const HeaderSite = () => {
  return (
    <header id="home" className="header">
      <div className="header__container">
        <Link href="/">
          <Image
            src="/logo-vertical.png"
            height={60}
            width={410}
            alt="Projeto Crochet Love"
          />
        </Link>
        <nav className="header__navlink header__navlink--header">
          <Menu />
        </nav>
      </div>
    </header>
  );
};

export default HeaderSite;
