import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

import styles from "./../styles/accordion.module.scss";

export const AccordionBlock = ({ items }) => {
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
  return (
    <Accordion allowZeroExpanded={true}>
      {items.map((item, i) => (
        <AccordionItem key={i}>
          <AccordionItemHeading>
            <AccordionItemButton className={styles.accordion__button}>
              <p className="text-[16px] text-[#898989]">{item.buttonText}</p>
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p className="pb-[22px]">{item.panelText}</p>
          </AccordionItemPanel>
        </AccordionItem>
      ))}
    </Accordion>
  );
};
