<<<<<<< HEAD
import React from "react";
import SliderItem from "./components/SliderItem";
import BarTitle from "../BarTitle";
import "./style.scss";
import { GreenRight } from "../ArrowIcon";
import "../../assets/css/style.scss";
=======
import React from 'react'
import SliderItem from './components/SliderItem'
import BarTitle from '../BarTitle'
import "./style.scss"
import { GreenRight } from '../ArrowIcon'
import "../../assets/css/style.scss"
>>>>>>> 311e8f2c15ef7043a419b0383129efbdc252a37b
// import Flickity from "react-flickity-component";
export default function Slider() {
    const flickityOptions = {
        // initialIndex: 3,
        wrapAround: true,
        groupCells: true
        , groupCells: 3,
        //  groupCells: '80%',
        fade: true,
        // adaptiveHeight: true,
        pageDots: false,



    }


    return (
        <section className='slider'>
            <div className="container">
                <div className="slider__content">

                    <BarTitle title="Our customers says" />
                </div>


            </div>
            <div className="slider__list">
                {/* <Flickity  // default ''
                    elementType={'div'} // default 'div'
                    options={flickityOptions} // takes flickity options {}
                    disableImagesLoaded={false} // default false
                    reloadOnUpdate // default false
                    static // default false
                >
<<<<<<< HEAD
                    <SliderItem under="Name and Surname" para=" This is an super space for your customers qoute. Don’t worry it works smooth as pie. You will get all what you need by writiing a text here " />

                    <SliderItem under="Name and Surname" para=" This is an super space for your customers qoute. Don’t worry it works smooth as pie. You will get all what you need by writiing a text here " />

                    <SliderItem under="Name and Surname" para=" This is an super space for your customers qoute. Don’t worry it works smooth as pie. You will get all what you need by writiing a text here " />

                    <SliderItem under="Name and Surname" para=" This is an super space for your customers qoute. Don’t worry it works smooth as pie. You will get all what you need by writiing a text here " />

                    <SliderItem under="Name and Surname" para=" This is an super space for your customers qoute. Don’t worry it works smooth as pie. You will get all what you need by writiing a text here " />

                    <SliderItem under="Name and Surname" para=" This is an super space for your customers qoute. Don’t worry it works smooth as pie. You will get all what you need by writiing a text here " />
                    <SliderItem under="Name and Surname" para=" This is an super space for your customers qoute. Don’t worry it works smooth as pie. You will get all what you need by writiing a text here " />
                    <SliderItem under="Name and Surname" para=" This is an super space for your customers qoute. Don’t worry it works smooth as pie. You will get all what you need by writiing a text here " />
                    <SliderItem under="Name and Surname" para=" This is an super space for your customers qoute. Don’t worry it works smooth as pie. You will get all what you need by writiing a text here " />
                </Flickity>
=======
                    <SliderItem under="Name and Surname" para="“ This is an super space for your customers qoute. Don’t worry it works smooth as pie. You will get all what you need by writiing a text here " />
                    <SliderItem under="Name and Surname" para="“ This is an super space for your customers qoute. Don’t worry it works smooth as pie. You will get all what you need by writiing a text here " />
                    <SliderItem under="Name and Surname" para="“ This is an super space for your customers qoute. Don’t worry it works smooth as pie. You will get all what you need by writiing a text here " />
                    <SliderItem under="Name and Surname" para="“ This is an super space for your customers qoute. Don’t worry it works smooth as pie. You will get all what you need by writiing a text here " />
                </Flickity> */}
>>>>>>> 311e8f2c15ef7043a419b0383129efbdc252a37b
                <div className="prev__btn">
                    {/* <div className="prev__btn-icon">
                        <svg width="6" height="13" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.06641 14.3734L7.54641 8.89339C7.79474 8.64357 7.93413 8.30563 7.93413 7.95339C7.93413 7.60114 7.79474 7.2632 7.54641 7.01339L2.21307 1.68005" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="bevel" />
                        </svg>
                    </div> */}
        </div>
        <div className="next__btn">
          {/* <div className="next__btn-icon">
                        <svg width="6" height="13" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.06641 14.3734L7.54641 8.89339C7.79474 8.64357 7.93413 8.30563 7.93413 7.95339C7.93413 7.60114 7.79474 7.2632 7.54641 7.01339L2.21307 1.68005" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="bevel" />
                        </svg>

                    </div> */}
        </div>
      </div>
    </section>
    // <Flickity>
    //     <img src="https://placeimg.com/640/480/animals" />
    //     <img src="https://placeimg.com/640/480/nature" />
    //     <img src="https://placeimg.com/640/480/architecture" />
    // </Flickity>
  );
}
