'use client'
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import { ArrowFatLinesDown } from '@phosphor-icons/react';
import Header from '@/components/Header';
import FontCard from '@/components/FontCard';
import { useState } from 'react';
import Footer from '@/components/Footer';

const heroImage = '/white-sphere-image.webp'

const items = ["red", "blue", "green"]

// Function Component
export default function Home() {
    // Logic
    const [fontList, setFontList] = useState(items)

    // Function component
    return (
        <Parallax pages={2}>
            <Header offset={0}/>
            <main>
                {/* <!-- Filter --> */}
                {/* <aside className="sidebar-container isClosed">
                    <div className="sidebar-header grid-sidebar-header">
                    <h3>Category</h3>
                    </div>
                    <div className="sidebar-filters-container" id="sidebar-categories">
                    <div className="sidebar-filters">
                        <input type="radio" name="typefilter" id="all" value="all" checked />
                        <label htmlFor="all" id="all">All Categories</label>
                    </div>
                    <div className="sidebar-filters">
                        <input type="radio" name="typefilter" id="serif" value="serif"/>
                        <label htmlFor="serif" id="serif">Serif</label>
                    </div>
                    <div className="sidebar-filters">
                        <input type="radio" name="typefilter" id="sans-serif" value="sans-serif"/>
                        <label htmlFor="sans-serif" id="sans-serif">Sans Serif</label>
                    </div>
                    <div className="sidebar-filters">
                        <input type="radio" name="typefilter" id="handwriting" value="handwriting"/>
                        <label htmlFor="handwriting" id="handwriting">Handwriting</label>
                    </div>
                    <div className="sidebar-filters">
                        <input type="radio" name="typefilter" id="display" value="display"/>
                        <label htmlFor="display" id="display">Display</label>
                    </div>
                    <div className="sidebar-filters">
                        <input type="radio" name="typefilter" id="monospace" value="monospace"/>
                        <label htmlFor="monospace" id="monospace">Monospace</label>
                    </div>
                    </div>
                    <div className="sidebar-header grid-sidebar-header">
                    <h3>Rating</h3>
                    </div>
                    <div className="sidebar-filters-container" id="sidebar-ratings">
                    <div className="sidebar-filters">
                        <input type="radio" name="ratingfilter" id="any" value="any" checked/>
                        <label htmlFor="any" id="any">Any Rating</label>
                    </div>
                    <div className="sidebar-filters">
                        <input type="radio" name="ratingfilter" id="one" value="1"/>
                        <label htmlFor="one" id="1star"><img src="/images/Star Rating_1.png" alt="1 star rating"/></label>
                    </div>
                    <div className="sidebar-filters">
                        <input type="radio" name="ratingfilter" id="two" value="2"/>
                        <label htmlFor="two" id="2star"><img src="/images/Star Rating_2.png" alt="2 star rating"/></label>
                    </div>
                    <div className="sidebar-filters">
                        <input type="radio" name="ratingfilter" id="three" value="3"/>
                        <label htmlFor="three" id="3star"><img src="/images/Star Rating_3.png" alt="3 star rating"/></label>
                    </div>
                    <div className="sidebar-filters">
                        <input type="radio" name="ratingfilter" id="four" value="4"/>
                        <label htmlFor="four" id="4star"><img src="/images/Star Rating_4.png" alt="4 star rating"/></label>
                    </div>
                    <div className="sidebar-filters">
                        <input type="radio" name="ratingfilter" id="five" value="5"/>
                        <label htmlFor="five" id="5star"><img src="/images/Star Rating_5.png" alt="5 star rating"/></label>
                    </div>
                    </div>
                    <div className="sidebar-button">
                    <button type="submit" id="sidebar-submit" className="btn-submit">Apply</button>
                    </div>
                    <div className="sidebar-button">
                    <button type="reset" id="sidebar-reset" className="btn-reset">Reset</button>
                    </div>
                </aside> */}
            
                {/* <!-- Hero Section --> */}
                <section id="hero-container">
                    <ParallaxLayer offset={0} speed={3} factor={1}
                        style={{
                            backgroundImage: `url(${heroImage})`,
                            backgroundSize: 'cover',
                            backgroundPosition: `40vw 70%`
                        }}/>
                    <ParallaxLayer offset={0} speed={1} className='relative' style={{zIndex: '1'}}>
                        <div id="hero-text">
                            <h2 className="text-display">Free fonts. <br/>All in one place.</h2>
                            <p className="text-intro">Browse a handpicked curation of high-quality free fonts from across the internet.</p>
                        </div>
                    </ParallaxLayer>
                    <div className='absolute w-full bottom-0 right-0 flex justify-center pb-8'>
                        <ArrowFatLinesDown size={32} className='text-white'/>
                    </div>
                </section>

                {/* Font List Section */}
                <section id='fonts-list-section'>
                    <ParallaxLayer offset={1} className='p-12'>
                        <div className='fonts-list-header border-b-2 bc-primary pb-4'>
                            <h3>Name</h3>
                            <h3>Preview</h3>
                            <button className=''>Filter</button>
                        </div>
                        {fontList.map(card => (
                            <FontCard title={card} />
                        ))}
                    </ParallaxLayer>
                </section>
            </main>
            <Footer offset={1.9} factor={0.1} speed={0}/>
        </Parallax>
  );
}
