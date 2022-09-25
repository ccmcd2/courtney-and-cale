import React, {useEffect, useState} from "react";
import Hero from "../components/Hero";
import IndexHero from "../img/index-hero.JPG";
import Message from "../img/message.jpg";
import HomeBanner from "../img/home-banner.JPG";
import CourtneyandCale from "../img/courtneyandcale.png";
import TyingTheKnot from "../img/tyingtheknot.png";

const Index = () => {
    const [days, setDays] = useState(null);
    const [hours, setHours] = useState(null);
    const [minutes, setMinutes] = useState(null);
    const [seconds, setSeconds] = useState(null);
    
    useEffect(() => {
        const intervalID = setInterval(function() {
            const countdownDate = new Date("July 15, 2023 00:00:00").getTime();
            // Get today's date and time
            const now = new Date().getTime();
          
            // Find the distance between now and the count down date
            const distance = countdownDate - now;
          
            // Time calculations for days, hours, minutes, and seconds
            setDays(Math.floor(distance / (1000 * 60 * 60 * 24)));
            setHours(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
            setMinutes(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
            setSeconds(Math.floor((distance % (1000 * 60)) / 1000));
        }, 1000);
        return () => clearInterval(intervalID);
    }, []);

    return (
        <main>
            <Hero image={IndexHero} className="home">
                <img class="hero-text" src={CourtneyandCale}></img>
                <h2 class="special">July 15, 2023</h2>
            </Hero>
            <div class="spacer"></div>
            <div class="section-container">
                <section>
                    <div class="container">
                        <div class="row message">
                            <div class="col-xs-12 col-md-5 message-right">
                                <p class="message">Now that we are happily engaged, we are looking forward to sharing our love with all of you on the big day! Many of you have played a big part in our relationship, and we are honored to have you as our guests.<br/><br/><span class="from">&mdash; Courtney &amp; Cale</span></p>
                                <p class="open-quotes">"</p>
                                <p class="close-quotes">"</p>
                            </div>
                            <div class="col-xs-12 col-md-7 message-left">
                                <img src={Message} alt="Cale and Courtney smiling at the camera at the beach"/>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div class="btn-block-container">
                        <a href="/wedding-info" class="btn-block"><h3>Wedding Info</h3></a>
                        <a href="/our-story" class="btn-block"><h3>Our Story</h3></a>
                        <a href="/faq" class="btn-block"><h3>FAQs</h3></a>
                    </div>
                </section>
            </div>
            <section class="last home">
                <div class="banner">
                    <img src={HomeBanner} className="banner-background" alt="Courtney putting on her ring after the proposal"/>
                    <img class="countdown-img" src={TyingTheKnot} alt="white cursive text reads 'tying the knot'"/>
                    <div class="countdown">
                        <p><span id="days">{days}</span><br/>days</p>
                        <p><span id="hours">{hours}</span><br/>hours</p>
                        <p><span id="minutes">{minutes}</span><br/>minutes</p>
                        <p><span id="seconds">{seconds}</span><br/>seconds</p>
                    </div>
                </div>
            </section>
        </main>
        
    )
}

export default Index;
