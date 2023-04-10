import React from "react";
import MainLayout from "@/layout/MainLayout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import headerLogo from "./../../assets/agro-logo.svg";
import hamburgerIcon from "./../../assets/hamburger.svg";

export const Header = React.memo(() => {
  const tabs = [
    { title: "О компании", link: "/spanbond" },
    { title: "Контакты", link: "/" },
    { title: "Оплата и доставка", link: "/" },
    { title: "Оптовые доставки", link: "/" },
  ];
  return (
    <MainLayout>
      <header className="w-full h-[60px] lg:h-[100px]  bg-white flex items-center justify-between">
        <Link className="cursor-pointer w-[113px] lg:w-[160px]" href={"/"}>
          <Image src={headerLogo} alt="logo" priority={true} />
        </Link>
        <nav className="hidden md:block">
          <ul className="flex items-center justify-between">
            {tabs.map((tab, i) => (
              <li key={i} className="ml-[30px] lg:ml-[40px] first:ml-0">
                <Link
                  href={tab.link}
                  className="text-nav-item text-[13px] xl:text-[14px]   cursor-pointer"
                >
                  {tab.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex items-center">
          <button className="bg-main-black text-white w-[100px] lg:w-[210px] xl:w-[240px] h-[30px] lg:h-[46px]  text-[9px]  lg:text-[13px] xl:text-[14px] font-button font-bold">
            Оставить заявку
          </button>
          <button className="ml-[6px] md:hidden">
            <Image src={hamburgerIcon} alt="menu" />
          </button>
        </div>
      </header>
    </MainLayout>
  );
});
