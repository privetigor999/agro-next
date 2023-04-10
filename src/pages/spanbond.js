import React from "react";
import { Header } from "../components/Header";
import { Footer } from "@/components/Footer";
import { HeadLayout } from "@/layout/HeadLayout";
import MainLayout from "@/layout/MainLayout";
import { MainInfoWithSlider } from "@/components/MainInfoWithSlider";

import spanbondPng from "./../../assets/photo/spanbond.png";
import fieldPng from "./../../assets/photo/field.png";

export default function Spanbond() {
  const images = [spanbondPng, fieldPng];
  return (
    <HeadLayout
      title={"О компании"}
      keywords={"Агросфера,спанбонд,spanbond"}
      description={
        "Продажа спанбонда оптом. Белый и цветной материал различной плотности и ширины"
      }
    >
      <div className="w-screen min-h-screen">
        <Header />
        <main>
          <MainLayout>
            <MainInfoWithSlider
              title={"Мебельный Спанбонд"}
              descr={
                "Продажа спанбонда оптом. Белый и цветной материал различной плотности и ширины"
              }
              images={images}
            />
          </MainLayout>
        </main>
        <Footer />
      </div>
    </HeadLayout>
  );
}
