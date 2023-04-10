import React from "react";
import Image from "next/image";

import instagramSvg from "./../../assets/social/instagram.svg";
import facebookSvg from "./../../assets/social/facebook.svg";
import linkedInSvg from "./../../assets/social/linkedin.svg";
import youtubeSvg from "./../../assets/social/youtube.svg";

export const Footer = () => {
  const [phone, setPhone] = React.useState("+7 495 ");

  const tabsAbout = [
    {
      title: "О компании",
    },
    {
      title: "Контакты",
    },
    {
      title: "Оплата и доставка",
    },
    {
      title: "Оптовые доставки",
    },
  ];

  const tabsProduction = [
    {
      title: "Мебельный Спабонд",
    },
    {
      title: "Укрывной материал",
    },
    {
      title: "Геотекстиль Ак Дорнит",
    },
    {
      title: "Геотекстиль",
    },
  ];

  const socials = [
    {
      img: instagramSvg,
      name: "Instagram",
    },
    {
      img: facebookSvg,
      name: "Facebook",
    },

    {
      img: linkedInSvg,
      name: "Linkedin",
    },
    {
      img: youtubeSvg,
      name: "Youtube",
    },
  ];

  return (
    <footer className="px-[33px] pt-[60px] pb-[25px] md:px-[40px] lg:px-[80px] lg:pt-[98px] lg:pb-[28px] xl:px-[90px] bg-main-black">
      <div className="lg:flex lg:flex-row lg:justify-between">
        <div className="flex flex-wrap mb-[46px] lg:mb-[110px]">
          <nav className="text-nav-footer mr-[75px] mb-[46px] lg:mr-[88px] xl:mr-[160px]">
            <h4 className="font-helios text-[16px] mb-[20px] lg:mb-[27px]">
              О Компании
            </h4>
            <ul>
              {tabsAbout.map((tab, i) => (
                <li
                  key={i}
                  className="font-button text-[12px] mb-[12px] last:mb-0 cursor-pointer"
                >
                  <a>{tab.title}</a>
                </li>
              ))}
            </ul>
          </nav>
          <nav className="text-nav-footer mb-[46px]  md:w-auto md:mr-[75px] lg:mr-[88px] xl:mr-[160px]">
            <h4 className="font-helios text-[16px] mb-[20px] lg:mb-[27px]">
              Продукция
            </h4>
            <ul>
              {tabsProduction.map((tab, i) => (
                <li
                  key={i}
                  className="font-button text-[12px] mb-[12px] last:mb-0 cursor-pointer"
                >
                  <a>{tab.title}</a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="mb-[40px] w-4/5 md:w-auto">
            <h4 className="hidden text-nav-footer font-helios text-[16px] mb-[20px] md:block lg:mb-[27px]">
              Следите за нами
            </h4>
            <ul className="flex flex-row md:flex-col">
              {socials.map((social, i) => (
                <li
                  className="mr-[4px] last:mr-0 md:mb-[12px] md:last:mb-0"
                  key={i}
                >
                  <a className="cursor-pointer">
                    <Image
                      src={social.img}
                      alt={social.name}
                      className="md:hidden"
                    />
                    <p className="hidden md:block font-button text-nav-footer text-[12px]   cursor-pointer ">
                      {social.name}
                    </p>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col mb-[70px]">
          <h4 className="font-helios text-[16px] mb-[42px] text-nav-footer">
            Закажите обратный звонок
          </h4>
          <input
            className="w-[229px] lg:w-[280px] text-nav-footer bg-main-black outline-none border-b-solid border-b-[1px] pb-[8px] mb-[18px]"
            value={phone}
            type="tel"
            onChange={(e) => setPhone(e.target.value)}
          />
          <button className="text-[12px] font-bold w-[229px] h-[35px] bg-white lg:w-[280px] lg:h-[46px]">
            Обратный звонок
          </button>
        </div>
      </div>
      <hr className="mb-[25px] " />
      <div className="flex flex-row justify-between">
        <p className="text-[10px] text-nav-footer">2022. Все права защищены</p>
        <p className="text-[10px] text-nav-footer">Сайт разработан ---</p>
      </div>
    </footer>
  );
};
