import React from "react";
import { SwiperBlock } from "./../components/SwiperBlock";

export const MainInfoWithSlider = ({ title, descr, images }) => {
  return (
    <div className="flex flex-col mb-[60px]">
      <div className="flex flex-col mb-[17px]">
        <h1 className="text-[30px] font-helios leading-[100%]">{title}</h1>
        <p className="font-helios leading-[120%]">{descr}</p>
      </div>
      <SwiperBlock images={images} />
    </div>
  );
};
