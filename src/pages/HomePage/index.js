import React from 'react';
import { Footer } from '../../components/footer';
import { Navbar} from '../../components/navbar';

export const Homepage = () => {

    return (
    <div>
        <Navbar/> 
    
        <section id="home">
            <div className="container">
                <div className="home-field row align-items-center">
                <div className="image text-center col-2 col-sm-1 col-xxl-2"></div>
                    <div className="image text-center col-8 col-sm-10 col-xxl-8">
                        <img className="img-fluid animate__animated animate__bounceIn animate__delay-1s" src="assets/images/logo.png" alt="home image"/>
                    </div>
                    <div className="image text-center col-2 col-sm-1 col-xxl-2"></div>                
                </div>
                <br/>
                <div className="row align-items-center">
                    <button type='button' className="btn btn-link" id="imgbutton" href='https://blog.betrybe.com/css/css-position/' data-aos="fade-up-right"  data-aos-delay="500"/>
                </div>
            </div>
            <br/>
            <br/>
        </section>

        <section id="chars">
            <div className="container">
                <div className="row align-items-center">
                    <div className="image text-center col-2 col-sm-1 col-xxl-2"></div>
                        <div className="image text-center col-8 col-sm-10 col-xxl-8">
                            <h1 id="custom">CUSTOMIZE YOUR AVATAR</h1>
                            <img src="assets/images/characters/cursor.png" className='cursor'/>
                            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <img src="assets/images/characters/baseCharacterexample1.png" className="chars" alt="..."/>
                                    </div>
                                    <div className="carousel-item">
                                        <img src="assets/images/characters/baseCharacterexample2.png" className="chars" alt="..."/>
                                    </div>
                                    <div className="carousel-item">
                                        <img src="assets/images/characters/baseCharacterexample3.png" className="chars" alt="..."/>
                                    </div>
                                </div>
                                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                                    <span id="carouselarrow-P" aria-hidden="true"></span>
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                                    <span id="carouselarrow-N" aria-hidden="true"></span>
                                    <span className="visually-hidden">Next</span>
                                </button>
                            </div>
                        </div>
                        <div className="image text-center col-2 col-sm-1 col-xxl-2"></div>        
                    </div>
                </div>
        </section>

        <section id="gameplay">
            <div className="container">
            <br/> <br/> <br/> <br/> <br/> <br/> <br/>
            <div className="border-box shadow">
            <div className="row align-items-start UpBoard">
                <div className="container-fluid col-5 mincont">
                   <div id='libox'>
                        <img className="gameplay" src="assets/images/characters/drunk.png"/>
                        <h1>03/15</h1> 
                    </div>
                </div>
                    <div className="container-fluid col-2">
                        <h1 id='gamepv'>PUB</h1>
                    </div>
                <div className="container-fluid col-5 mincont">
                    <div id='libox'>
                        <img className="gameplay" src="assets/images/coin.png"/>
                        <h1>2678,4</h1>
                    </div>
                </div>
            </div>
                <div className="row align-items-center">
                <div className="container-fluid bd-ex col-4 col-sm-2 col-xxl-4">
                    <h1>GAMEPLAY</h1>
                    <p>Go to the pub counter of your chosen Pub and buy your food “drink, and cups” game kit that you will use according to your Avatar's level and rarity.
                       <br/> But be careful!!!
                       <br/> The higher the alcohol content of the chosen kit, the greater reward, and consequently the more intoxicated you will be with each hit.
                    </p>
                </div>
                    <div className="container-fluid bd-ex col-8 col-sm-10 col-xxl-8">
                        <div className="ratio ratio-16x9">
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/csr4D6niqtE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                    </div>
                </div>
            </div>
                <div className="row align-items-center">
                <div className="container-fluid col-12">
                <img className='imgcoin' src="assets/images/coins.png"/>
                </div>
                </div>
            </div>
            <br/>
            <br/>
        </section>

        <section id="print">
            <div className="container">
            <br/> <br/> <br/>
                <div className="row align-items-center">
                <div className="text-center col-2 col-sm-1 col-xxl-2"></div>
                    <div className="text-center col-8 col-sm-10 col-xxl-8">
                        <img className="img-fluid" data-aos="zoom-in"  data-aos-delay="500" src="assets/images/prints.png" alt="print image"/>
                    </div>
                    <div className="text-center col-2 col-sm-1 col-xxl-2"></div>                
                </div>
            </div>
            <br/>
            <br/>
        </section>


        <section id="token">
            <div className="container">
            <br/> <br/> <br/> <br/> <br/> <br/> <br/>
            <div className="border-box shadow">
                <div className="row align-items-center">
                    <div className="container-fluid bd-ex col-4 col-sm-2 col-xxl-4">
                        <h1>Tokenomics</h1>
                        <ul>
                            <li>
                                <p>Total Supply 1.000.000.000 PubCoins</p>
                            </li>
                            <li>
                                <p>● 50% (500.000.000) Reward Pool (Play to Earn)</p>
                            </li>
                            <li>
                                <p>● 20% (200.000.000)  Metaverse Design and Developmen</p>
                            </li>
                            <li>
                                <p>● 8%   (80.000.000)   Marketing and Promotional Actions</p>
                            </li>
                            <li>
                                <p>● 6,8% (68.000.000)  Token Pre-Sale and Listing</p>
                            </li>
                            <li>
                                <p>● 5%   (50.000.000)   Devs (Blocked wallet for 12 months)</p>
                            </li>
                            <li>
                                <p>● 5%   (50.000.000)   Liquidity Pool (Palliative Addition)</p>
                            </li>
                        </ul>
                    </div>
                        <div className="container-fluid bd-ex col-8 col-sm-10 col-xxl-8">
                            <img id="caneca" src="assets/images/Caneca.png" data-aos="fade-up"  data-aos-delay="500" alt="token image"/>
                        </div>
                </div>
            </div>
            <br/>
            <br/>
            <br/>
            </div>
        </section>

       <Footer/>


    </div>
    );
};

