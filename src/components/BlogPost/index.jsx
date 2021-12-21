import React from 'react'
import classnames from 'classnames'
import BlogItem from './components/BlogItem'
import BarTitle from '../BarTitle'
// import BlogImg from './components/BlogImg'
// import BlogTag from "./components/BlogTag"
import BlogTitle from "./components/BlogTitle"
import BlogDate from "./components/BlogDate"
import "./style.scss"
import meo from "../../assets/img/meo.jpg"
import Avatar from '../Avatar'
import classNames from 'classnames'
export default function BlogPost({ size }) {
    return (
        <section className="blog__post">
            <div className="container">


                <BarTitle title="Read our Blog posts" />
                <div className="blog__post-list">
                    <div className="blog__post-large">

                        <BlogItem size="large" href={meo} para="Our chef tips for a great and tasty dinner ready in 20 minutes"
                            tag="Dinner tips" name="Author" date="17.6.2020" color="white" />
                    </div>
                    <div className="blog__post-small">
                        <BlogItem size="middle" href={meo} para="Which vegetable your family will love and wants eat each day"
                            tag="Vegetables" name="Author" date="17.6.2020" color="black" />
                    </div>
                    <div className="blog__post-large">
                        <BlogItem size="small" href={meo} para=" Salat is kinda good start to your morning routines"
                            tag="" name="Author" date="17.6.2020" color="black" />
                        <BlogItem size="small" href={meo} para="Our chef tips for a great and healthy breakfast"
                            tag="" name="Author" date="17.6.2020" color="black" />
                        <BlogItem size="small" href={meo} para="Prepare a simple and delicious breads"
                            tag="" name="Author" date="17.6.2020" color="black" />

                    </div>

                    {/* 
                    <BlogItem size="large" >
                        


                    </BlogItem>
                    <BlogItem size="small" >
                        <BlogImg size="middle" href={meo} >

                        </BlogImg>
                        <div className="blog__small-bottom">
                            <BlogTag tag="Vegetable" />
                            <BlogTitle size="middle" title="Which vegetable your family will love and want’s eat each day" />
                            <BlogDate color="black" name="Author" date="17. 6. 2020" />
                        </div>


                    </BlogItem>
                    <BlogItem size="large" >


                        <div className="blog__box">
                            <div className="blog__box-content">
                                <BlogTitle size="small" title="Prepare a simple and delicious breads" />
                                <BlogDate color="black" name="Author" date="17. 6. 2020" />
                            </div>
                            <BlogImg size="small" href={meo} />
                        </div>
                        <div className="blog__box">
                            <div className="blog__box-content">
                                <BlogTitle size="small" title="Salat is kinda good start to your morning routines" />
                                <BlogDate color="black" name="Author" date="17. 6. 2020" />
                            </div>
                            <BlogImg size="small" href={meo} />
                        </div>
                        <div className="blog__box">
                            <div className="blog__box-content">
                                <BlogTitle size="small" title="Prepare a simple and delicious breads" />
                                <BlogDate color="black" name="Author" date="17. 6. 2020" />
                            </div>
                            <BlogImg size="small" href={meo} />
                        </div>


                    </BlogItem> */}
                </div>
            </div>


        </section>



    )
}

