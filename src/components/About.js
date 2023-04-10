import React from "react";
import Image from "next/image";

import expertsPng from "./../../assets/photo/experts.png";

export const About = () => {
  return (
    <div>
      <h2 className="text-[30px] font-helios mb-[20px] leading-[100%]">
        ЭКСПЕРТЫ ОТРАСЛИ БОЛЕЕ 12 ЛЕТ
      </h2>
      <div className="flex flex-col flex-wrap lg:flex-row">
        <Image
          className="w-full mb-[24px] order-1 object-cover md:h-[340px] lg:order-3 lg:w-[50%]"
          src={expertsPng}
          alt="img"
        />
        <div className="flex flex-row flex-wrap mb-[60px] order-2 lg:order-1 lg:mb-0 lg:border-solid lg:border-t">
          <div className="pl-[8px]  h-[100px] border-solid border-x w-[50%]  mb-[15px] lg:w-[25%] lg:mb-0 lg:h-[192px] lg:px-[15px] lg:border-l-0">
            <h3 className="font-helios text-[16px] mb-[7px] leading-[90%] md:text-[21px] lg:pt-[32px] lg:mb-[23px]">
              Собственное производство
            </h3>
            <p className="text-[#5D5E61] text-[9px] leading-[120%] max-w-[150px] md:max-w-max md:text-[12px]">
              Благодаря собственному производству мы в кратчайшие сроки
              реализуем ваш заказ
            </p>
          </div>
          <div className="px-[8px] h-[100px] border-solid border-r w-[50%] mb-[15px] lg:w-[25%] lg:mb-0 lg:h-[192px] lg:border-r-0 lg:px-[15px]">
            <h3 className="font-helios text-[16px] mb-[7px] leading-[90%] md:text-[21px] lg:pt-[32px] lg:mb-[23px]">
              Любой объем, ширина, цвет
            </h3>
            <p className="text-[#5D5E61] text-[9px] leading-[120%] max-w-[150px] md:max-w-max md:text-[12px]">
              Благодаря собственному производству мы в кратчайшие сроки
              реализуем ваш заказ
            </p>
          </div>
          <div className="px-[8px] h-[100px] border-solid border-x w-[50%] lg:w-[25%]  lg:h-[192px] lg:px-[15px]">
            <h3 className="font-helios text-[16px] mb-[7px] leading-[90%] md:text-[21px] lg:pt-[32px] lg:mb-[23px]">
              Специальные условия для новых клиентов
            </h3>
            <p className="text-[#5D5E61] text-[9px] leading-[120%] max-w-[150px] md:max-w-max md:text-[12px]">
              Благодаря собственному производству мы в кратчайшие сроки
              реализуем ваш заказ
            </p>
          </div>
          <div className="px-[8px] h-[100px] border-solid border-r w-[50%] lg:w-[25%] lg:h-[192px] lg:px-[15px]  lg:border-r-0">
            <h3 className="font-helios text-[16px] mb-[7px] leading-[90%] md:text-[21px] lg:pt-[32px] lg:mb-[23px]">
              Оперативная доставка в любой регион
            </h3>
            <p className="text-[#5D5E61] text-[9px] leading-[120%] max-w-[150px] md:max-w-max md:text-[12px]">
              Благодаря собственному производству мы в кратчайшие сроки
              реализуем ваш заказ
            </p>
          </div>
        </div>
        <div className="order-3 lg:order-2 lg:w-[50%]">
          <h2 className="text-[30px] font-helios mb-[20px] leading-[100%] lg:mt-[20px]">
            О Компании
          </h2>
          <p className="text-[#2E2E2E] text-[16px] leading-[120%] mb-[20px]">
            Компания «Агросфера» была основана в январе 2017 года. Основным
            направлением деятельности является производство и поставка укрывных
            материалов и полиэтиленовой пленки, а также сопутствующих товаров.
            Основным направлением деятельности является производство и поставка
            укрывных материалов и полиэтиленовой пленки, а также сопутствующих
            товаров.
          </p>
          <a className="inline-block text-[#969696] text-[12px] leading-[110%] border-b border-solid pb-[2px] mb-[64px] cursor-pointer">
            Подробнее о компании
          </a>
        </div>
      </div>
    </div>
  );
};
