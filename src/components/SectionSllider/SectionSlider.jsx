import React, { useContext } from "react";
import SliderItem from "./SliderItem";
import scss from "assets/img/sass.png";
import js from "assets/img/js.png";
import next from "assets/img/next.png";
import react from "assets/img/react.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { themeContext } from "context/context";
import classNames from "classnames";

const SectionSlider = ({ title, para }) => {
  const theme = useContext(themeContext);
  const darkmode = theme.state.darkMode;
  const dataSlider = [
    {
      name: "Evondev",
      position: "ReactJS",
      para: "Khóa học ReactJS cơ bản đến nâng cao ",
      link: "https://kt.city/course/khoa-hoc-reactjs-co-ban",
      img: react,
    },
    {
      name: "F8 Official",
      position: "HTML CSS Advance",
      para: "Trong khóa này xây dựng 2 web là The Band & Shopee",
      link: "https://fullstack.edu.vn/courses/html-css",
      img: scss,
    },
    {
      name: "Evondev",
      para: "Khoá học Javascript từ cơ bản ",
      position: "Javascript Basic",
      link: "https://kt.city/course/tu-hoc-javascript-hieu-qua-va-de-dang-danh-cho-nguoi-moi",
      img: js,
    },
    {
      name: "Nghiepuit",
      position: "ReactJS Class Component",
      para: "Thầy dạy rất có tâm , xen lẫn thực hành rất dễ hiểu",
      link: "https://www.youtube.com/watch?v=gL5HBA_1bDQ",
      img: react,
    },
    {
      name: "EZ Front End",
      position: "NextJS && Typescript",
      para: "NextJS cho người mới bắt đầu 2022      ",
      link: "https://www.youtube.com/watch?v=er21PVbM9sU",
      img: next,
    },
    {
      name: "EZ Front End",
      position: "ReactJS Basic",
      para: "ReactJS cho người mới bắt đầu 2020 ",
      link: "https://www.udemy.com/course/reactjs-cho-nguoi-moi-bat-dau-2020/",
      img: react,
    },
  ];
  return (
    <div className={classNames("w-full", "background-main")}>
      <div className="container">
        <h1
          className={classNames(
            "text-center font-36 fw-500  mb-2",
            darkmode ? "main" : "secondary"
          )}
        >
          {title}
        </h1>
        <p className="text-center para font-14 mt-3 mx-auto">{para}</p>
        <div className="w-full mt-5 px-0">
          <Swiper grabCursor={"true"} spaceBetween={40} slidesPerView={"auto"}>
            {dataSlider?.map((data, index) => {
              return (
                <SwiperSlide key={index}>
                  <SliderItem dataContent={data} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default SectionSlider;
