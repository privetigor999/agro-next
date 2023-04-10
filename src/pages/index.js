import { Header } from "../components/Header";
import { Footer } from "@/components/Footer";
import { HeadLayout } from "@/layout/HeadLayout";
import MainLayout from "@/layout/MainLayout";
import { SwiperBlock } from "./../components/SwiperBlock";
import { AccordionBlock } from "./../components/AccordionBlock";
import { About } from "@/components/About";
import { Contacts } from "@/components/Contacts";
import { MainInfoWithSlider } from "@/components/MainInfoWithSlider";

import fieldPng from "./../../assets/photo/field.png";

export default function Home() {
  const accordionItems = [
    {
      buttonText: "Мебельный Спабонд",
      panelText:
        " Спанбонд имеет множество применений. Самые распространённые это: производство матрасов, пружинных блоков, одноразовой одежды из спанбонда, сумок, чехлов, как укрывной материал и др. Наш спанбонд отлично подходит для всех сфер применения.",
    },
    {
      buttonText: "Укрывной материал",
      panelText:
        " Спанбонд имеет множество применений. Самые распространённые это: производство матрасов, пружинных блоков, одноразовой одежды из спанбонда, сумок, чехлов, как укрывной материал и др. Наш спанбонд отлично подходит для всех сфер применения.",
    },
    {
      buttonText: "Геотекстиль",
      panelText:
        " Спанбонд имеет множество применений. Самые распространённые это: производство матрасов, пружинных блоков, одноразовой одежды из спанбонда, сумок, чехлов, как укрывной материал и др. Наш спанбонд отлично подходит для всех сфер применения.",
    },
    {
      buttonText: "Геотекстиль Ак Дорнит",
      panelText:
        " Спанбонд имеет множество применений. Самые распространённые это: производство матрасов, пружинных блоков, одноразовой одежды из спанбонда, сумок, чехлов, как укрывной материал и др. Наш спанбонд отлично подходит для всех сфер применения.",
    },
  ];
  const images = [fieldPng, fieldPng, fieldPng];
  return (
    <HeadLayout
      title={"Главная"}
      keywords={"Агросфера"}
      description={"Ваш надежный поставщик укрывных материалов"}
    >
      <div className="w-screen min-h-screen">
        <Header />
        <main>
          <MainLayout>
            <MainInfoWithSlider
              title={"АгроСфера"}
              descr={"Ваш надежный поставщик укрывных материалов"}
              images={images}
            />
            <div className="mb-[60px]">
              <div className="mb-[26px]">
                <h2 className="text-[30px] font-helios mb-[20px]">Продукция</h2>
                <p className="font-button leading-[120%]">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using{" "}
                </p>
              </div>
              <AccordionBlock items={accordionItems} />
            </div>
            <About />
          </MainLayout>
          <Contacts />
        </main>
        <Footer />
      </div>
    </HeadLayout>
  );
}
