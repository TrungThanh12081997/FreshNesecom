import React, {
  Suspense,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";

import SectionShowItem from "../../components/showItem/SectionShowItem";
import SectionIntro from "../../components/SectionIntro/SectionIntro";
import SectionCount from "../../components/SectionCount/SectionCount";
import SectionProject from "../../components/SectionProject/SectionProject";
import SectionSlider from "../../components/SectionSllider/SectionSlider";
import Footer from "../../components/Footer/Footer";
import coding from "../../assets/img/coding.png";
import image from "../../assets/img/picture.png";
import nova from "../../assets/img/nova.png";
import tui from "assets/img/qtt.jpg";
import tui2 from "assets/img/qtt2.jpg";
import treehouse from "../../assets/img/treehouse.jpg";
import kymco from "../../assets/img/kymco.png";
import book from "../../assets/img/book.png";
import runner from "../../assets/img/runner.png";
import designer from "../../assets/img/designer.png";
import travel from "../../assets/img/travel.png";

import "./style.scss";
import BIRDS from "vanta/dist/vanta.birds.min";
import { VANTA } from "vanta";

import Header from "../../components/Header";
import Loading from "components/Loading/Loading";
import { themeContext } from "context/context";
import classNames from "classnames";

export default function HomePage() {
  const theme = useContext(themeContext);
  const darkmode = theme.state.darkMode;

  const serviceItem = [
    {
      image: image,
      title: "improve my UI UX aesthetic skill",
      para: "i like to watch the beautiful pictures,i know that will make me have a good view about aesthetic ",
    },
    {
      image: coding,
      title: "Improve my coding skill",
      para: "Coding more clean,quickly but still have a good effective",
    },
    {
      image: runner,
      title: "Have a good sport skill",
      para: "As a outward man,i really love running. I run every weekend, i know that we cant do anything without good health",
    },
    {
      image: book,
      title: "Practice English more",
      para: "I think this is very necessary cause every resource write in english",
    },
    {
      image: travel,
      title: "Travel as much as I can",
      para: "I love travel to strange place,meet strange people,to understand more about the world",
    },
    {
      image: designer,
      title: "Learn deisgn ",
      para: "I want to learn  design , but i dont have much time.Maybe i think about it in the near future",
    },
  ];
  const projectItem = [
    {
      link: "https://trungthanh12081997.github.io/kymco/",
      image: kymco,
      title: "Kymco",
      para: "My project i like it most ",
    },
    {
      link: "https://www.treehouse.finance/",
      image: treehouse,
      title: "Treehouse Web App",
      para: "Develop pages ,fetch  data,custom hooks",
    },
    {
      link: "https://novaworldphanthiet.com.vn/",
      image: nova,
      title: "Nova Phan Thiet ",
      para: "Develop atom components ,fetch API data",
    },
  ];
  const countData = [
    { count: 5, title: "Company Projects " },
    { count: 7, title: "Personal Projects " },
    { count: 2, title: "Devloping Projects" },
    { count: 3, title: "Upcoming Projects " },
  ];
  const [vantaEffect, setVantaEffect] = useState(0);

  useEffect(() => {
    if ((darkmode && !vantaEffect) || (vantaEffect && darkmode)) {
      setVantaEffect(
        VANTA.BIRDS({
          el: ".background-vanta",

          gyroControls: false,
          minHeight: 100.0,
          minWidth: 100.0,
          scale: 1.0,
          scaleMobile: 0.3,
          backgroundColor: 0x241854,
          color1: 0xca2c2c,
          color2: 0xbe1e1e,
          birdSize: 1.0,
          wingSpan: 40.0,
          speedLimit: 7.0,
          separation: 100.0,
          alignment: 98.0,
          cohesion: 100.0,
          quantity: 4.0,
        })
      );
      return () => {
        if (vantaEffect) return vantaEffect.destroy();
      };
    }
    if ((!darkmode && !vantaEffect) || (vantaEffect && !darkmode)) {
      setVantaEffect(
        VANTA.BIRDS({
          el: ".background-vanta",

          gyroControls: false,
          minHeight: 100.0,
          minWidth: 100.0,
          scale: 1.0,
          scaleMobile: 0.3,
          backgroundColor: 0xffffff,
          color1: 0xca2c2c,
          color2: 0xbe1e1e,
          birdSize: 1.0,
          wingSpan: 40.0,
          speedLimit: 7.0,
          separation: 100.0,
          alignment: 98.0,
          cohesion: 100.0,
          quantity: 4.0,
        })
      );
      return () => {
        if (vantaEffect) return vantaEffect.destroy();
      };
    }
  }, [darkmode]);

  return (
    <>
      <div className={classNames(" homePage transparent ")}>
        <Header />

        <div className={classNames("background-vanta")}>
          <SectionIntro
            name="QUAN TRUNG THÀNH"
            title="👋 Hi, I’m  Front End Developer"
            buttonLabel="Download my CV"
            fontTitle={60}
            backgroundMain={true}
            img={tui}
            para="I am  from Central Transport No.3 College ,i learn and research Front-end for about 1 year, then i have intern  3 months at Treehouse Finance,join Treehouse UI Web project.Until now i'm a fresher."
          />
          <SectionIntro
            para="I enjoy building software that makes people's lives easier by writing elegant, performant, and maintainable  code.I code front-end , i can see what i code in the screen,that make me so happy !"
            title="My Story"
            name="MY CAREER PATH"
            fontTitle={36}
            reverse={true}
            img={tui2}
          />
          <SectionShowItem
            title="My Short Term Target In The Future"
            para="I think knowledge is never enough, so i push myself to learn more and more .So great to know something new everyday "
            dataItem={serviceItem}
          />
          <SectionCount data={countData} />

          <SectionProject
            title="Some of my old projects"
            para="Please visit and leave me a message if you like  &#128516; ."
            dataItem={projectItem}
          />
        </div>

        <SectionSlider
          title="Some courses i have learned"
          para="These courses helps me very much on front end dev path."
        />
        <Footer />
      </div>
    </>
  );
}
