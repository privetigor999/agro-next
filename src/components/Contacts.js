import React from "react";

export const Contacts = () => {
  const [name, setName] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [company, setCompany] = React.useState("");
  return (
    <div className="bg-contacts px-[33px] flex flex-col md:px-[40px] lg:px-[80px] xl:px-[90px] py-[60px] lg:flex-row">
      <div className="pb-[48px] border-solid border-b-[1px] lg:border-t-[1px] lg:border-r-[1px] lg:border-[#535356] lg:w-2/3">
        <p className="font-helios text-white text-[21px] leading-[120%] mb-[15px] lg:pt-[50px] pr-[130px] lg:text-[32px]">
          Станьте нашим партнером - получите индивидуальное коммерческое
          предложение{" "}
        </p>
        <input
          className="w-full mt-[40px] pb-[10px] mr-[20px] md:mr-[40px] text-[#E7E7E7] border-b-solid border-b-[1px] border-b-[#5D5E61] bg-transparent outline-none max-w-[322px] lg:w-[281px]"
          placeholder="ФИО"
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
        />
        <input
          className="w-full mt-[40px] pb-[10px] mr-[20px]  md:mr-[40px] text-[#E7E7E7] border-b-solid border-b-[1px] border-b-[#5D5E61] bg-transparent outline-none max-w-[322px] lg:w-[281px]"
          placeholder="Телефон"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          type="text"
        />
        <input
          className="w-full mt-[40px] pb-[10px] mr-[20px]  md:mr-[40px] text-[#E7E7E7] border-b-solid border-b-[1px] border-b-[#5D5E61] bg-transparent outline-none max-w-[322px] lg:w-[281px]"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="text"
        />
        <input
          className="w-full mt-[40px] pb-[10px] mr-[20px]  md:mr-[40px] text-[#E7E7E7] border-b-solid border-b-[1px] border-b-[#5D5E61] bg-transparent outline-none max-w-[322px] lg:w-[281px]"
          placeholder="Компания"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          type="text"
        />
        <div className="mt-[64px] ">
          <button className="w-[162px] h-[35px] text-[12px] text-[#7E7F81] border-solid border-[1px] border-[#7E7F81] mb-[10px] lg:w-[280px] lg:h-[46px] lg:mr-[40px]">
            Скачать предложение
          </button>
          <button className="w-[162px] h-[35px] text-[12px] text-[#000000] bg-[#ffffff] font-bold lg:w-[280px] lg:h-[46px]">
            Отправить данные
          </button>
        </div>
      </div>
      <div className="pt-[50px] lg:w-1/3 lg:pl-[112px] lg:border-y-[1px] lg:border-solid lg:border-t-[#535356] lg:border-b-[#535356]">
        <p className="font-helios text-white text-[21px] leading-[120%]  mb-[15px] lg:text-[32px]">
          Контакты
        </p>
        <p className="text-[12px] text-[#898989] leading-[120%] pb-[28px]">
          Свяжитесь с нами и получите скидку на первый заказ
        </p>
        <a
          href="mailto:order@agrosfera.pro"
          className="block text-white font-helios uppercase pb-[17px]"
        >
          order@agrosfera.pro
        </a>
        <a
          href="tel:+7(495)0229123"
          className="block text-white font-helios uppercase pb-[17px] mb-[30px]"
        >
          +7(495) 022 91 23
        </a>
        <button className="w-[162px] h-[35px] text-[12px] text-[#7E7F81] border-solid border-[1px] border-[#7E7F81] mb-[10px] lg:w-[200px] lg:h-[46px]">
           Получить консультацию
        </button>
      </div>
    </div>
  );
};
