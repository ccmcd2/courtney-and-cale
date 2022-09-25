import React from "react";
import Hero from "../components/Hero";
import WeddingInfoHero from "../img/wedding-info-hero.JPG";
import IconCircle from "../components/IconCircle";
import LocationPin from "../img/location-pin.svg";
import Calendar from "../img/calendar.svg";
import Tie from "../img/tie.svg";
import PartyMember from "../components/PartyMember";
import Person from "../img/person.png";
import Tamanno from "../img/tamanno.jpg";
import Summer from "../img/summer.jpg";
import Cameron from "../img/cameron.jpg";
import Lucas from "../img/lucas.jpg";
import Colin from "../img/colin.jpg";
import Lily from "../img/lily.jpg";
import Connor from "../img/connor.jpg";
import Evan from "../img/evan.jpg";
import Elaine from "../img/elaine.jpg";
import Parker from "../img/parker.jpg";
import Payton from "../img/payton.jpg";
import Alejandro from "../img/alejandro.jpg";
import Kallie from "../img/kallie.jpg";
import WeddingInfoImg from "../img/weddinginfo.png";
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import ArrowLeft from "../img/left-arrow.svg";
import ArrowRight from "../img/right-arrow.svg";
import { HashLink as Link } from "react-router-hash-link";

const WeddingInfo = () => {
    const LeftArrow = () => {
        const { isFirstItemVisible, scrollPrev } = React.useContext(VisibilityContext);
        return (
            <button className="arrow left" disabled={isFirstItemVisible} onClick={() => scrollPrev()}><IconCircle image={ArrowLeft}></IconCircle></button>
        );
    };

    const RightArrow = () => {
        const { isLastItemVisible, scrollNext } = React.useContext(VisibilityContext);
        return (
            <button className="arrow right" disabled={isLastItemVisible} onClick={() => scrollNext()}><IconCircle image={ArrowRight}></IconCircle></button>
        );
    };

    return (
        <main>
            <Hero image={WeddingInfoHero} className="wedding-info-hero">
                <img class="hero-text" src={WeddingInfoImg}></img>
            </Hero>
            <div class="spacer"></div>
            <div class="section-container">
                <section class="wedding-info">
                    <div class="col-xs-12 col-lg-5 details-block">
                        <h2>Details</h2>
                        <div class="row">
                            <IconCircle image={LocationPin} className="secondary"></IconCircle>
                            <p><span>When:</span><br/>July 15, 2022</p>
                        </div>
                        <div class="row">
                            <IconCircle image={Calendar} className="secondary"></IconCircle>
                            <p><span>Where:</span><br/>Dalmore Event Venue<br/><a href="https://goo.gl/maps/UoCNHcq8M9XuFPaw5" alt="Directions to Dalmore Event Venue" title="Directions" target="_blank">4301 Fossil Creek Blvd.<br/>Fort Worth, TX 76137</a></p>
                        </div>
                        <div class="row">
                            <IconCircle image={Tie} className="secondary"></IconCircle>
                            <p><span>Dress code:</span><br/>Semi-formal</p>
                        </div>
                        <p>More details will be available closer to the event. If your question can’t wait, view our <a href="/faq">FAQs</a> or <Link to="/faq#contact-us">contact us</Link>.</p>
                    </div>
                    <div class="col-xs-12 col-lg-7 gallery right large">
                        <div class="img-container" id="dalmore"></div>
                    </div>
                </section>
                <section class="wedding-info">
                    <h2>Wedding Party</h2>
                    <h3>Bridesmaids</h3>
                    <div class="carousel">
                        <ScrollMenu scrollContainerClassName="scroll-menu" LeftArrow={LeftArrow} RightArrow={RightArrow}>
                            <PartyMember image={Lily}>
                                <h4>Lily</h4>
                                <span>Maid of Honor</span>
                                <p>Lily and Courtney went through their blunder years together and have been best friends ever since.</p>
                            </PartyMember>
                            <PartyMember image={Tamanno}>
                                <h4>Tamanno</h4>
                                <span>Bridesmaid</span>
                                <p>Tamanno has been Courtney's classmate, running buddy, and motivational speaker since 8th grade.</p>
                            </PartyMember>
                            <PartyMember image={Summer}>
                                <h4>Summer</h4>
                                <span>Bridesmaid</span>
                                <p>Though they met in elementary school, Summer and Courtney solidified their friendship after high school when they started working together.</p>
                            </PartyMember>
                            <PartyMember image={Elaine}>
                                <h4>Elaine</h4>
                                <span>Bridesmaid</span>
                                <p>Elaine and Courtney went to school together and became friends while suffering together by waiting tables at Piranha Killer Sushi.</p>
                            </PartyMember>
                            <PartyMember image={Payton}>
                                <h4>Payton</h4>
                                <span>Junior Bridesmaid</span>
                                <p>Payton is Courtney's favorite annoying little brat, a great playmate, and a loyal companion.</p>
                            </PartyMember>
                        </ScrollMenu>
                    </div>
                </section>
                <section class="wedding-info">
                    <h3>Groomsmen</h3>
                    <div class="carousel">
                        <ScrollMenu scrollContainerClassName="scroll-menu" LeftArrow={LeftArrow} RightArrow={RightArrow}>
                            <PartyMember image={Cameron}>
                                <h4>Cameron</h4>
                                <span>Best Man</span>
                                <p>As Cale's lovable little brother, Cameron was the obvious choice for Best Man, despite the many years of annoyances.</p>
                            </PartyMember>
                            <PartyMember image={Evan}>
                                <h4>Evan</h4>
                                <span>Groomsman</span>
                                <p>Evan and Cale have been friends since kindergarten and have been roommates, teammates, and schoolmates throughout their lives.</p>
                            </PartyMember>
                            <PartyMember image={Alejandro}>
                                <h4>Alejandro</h4>
                                <span>Groomsman</span>
                                <p>Alejandro and Cale have been close friends since they met in 7th grade and have made many memories together.</p>
                            </PartyMember>
                            <PartyMember image={Lucas}>
                                <h4>Lucas</h4>
                                <span>Groomsman</span>
                                <p>As a fellow Eagle Scout and cross country survivor, Lucas has stuck by Cale through the worst of it.</p>
                            </PartyMember>
                            <PartyMember image={Parker}>
                                <h4>Parker</h4>
                                <span>Groomsman</span>
                                <p>Parker has been a trusty source of bad ideas and hijinks for Cale since junior high school.</p>
                            </PartyMember>
                        </ScrollMenu>
                    </div>
                </section>
                <section class="wedding-info last">
                    <h3>Other Supporters</h3>
                    <div class="carousel">
                        <ScrollMenu scrollContainerClassName="scroll-menu" LeftArrow={LeftArrow} RightArrow={RightArrow}>
                            <PartyMember image={Connor}>
                                <h4>Connor</h4>
                                <span>Flower Guy</span>
                                <p>Connor is Courtney's (younger) older brother and her first bully, but they have overcome their differences and become good friends.</p>
                            </PartyMember>
                            <PartyMember image={Colin}>
                                <h4>Colin</h4>
                                <span>Flower Guy</span>
                                <p>Colin is Courtney's oldest brother and has been a great source of laughter and occasional chagrin over the years.</p>
                            </PartyMember>
                            <PartyMember image={Kallie}>
                                <h4>Kallie</h4>
                                <span>Ring Bearer</span>
                                <p>As Courtney's coolest cousin and a responsible young lady, Kallie fits the bill perfectly for ring bearer.</p>
                            </PartyMember>
                        </ScrollMenu>
                    </div>
                </section>
            </div>
        </main>
    )
}

export default WeddingInfo;