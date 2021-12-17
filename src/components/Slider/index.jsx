import React from 'react'
import SliderItem from './components/SliderItem'
import SliderTitle from './components/SliderTitle'
import "./style.scss"
export default function Slider() {
    return (
        <section className='slider'>
            <div className="container">
                <div className="slider__content">

                    <SliderTitle title="Our customers says" />
                </div>


            </div>
            <div className="slider__list">
                <SliderItem under="Name and Surname" para="“ This is an super space for your customers qoute. Don’t worry it works smooth as pie. You will get all what you need by writiing a text here “" />
                <SliderItem under="Name and Surname" para="“ This is an super space for your customers qoute. Don’t worry it works smooth as pie. You will get all what you need by writiing a text here “" />
                <SliderItem under="Name and Surname" para="“ This is an super space for your customers qoute. Don’t worry it works smooth as pie. You will get all what you need by writiing a text here “" />
                <SliderItem under="Name and Surname" para="“ This is an super space for your customers qoute. Don’t worry it works smooth as pie. You will get all what you need by writiing a text here “" />
            </div>
        </section>
    )
}
