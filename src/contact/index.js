import React from "react";
import RSVPForm from "../components/RSVPForm.js";
import FAQHero from "../img/faq-hero.jpg";
import Hero from "../components/Hero";
import FAQImg from "../img/frequentlyaskedquestions.png";

const Contact = () => {
    return (
        <main>
            <Hero image={FAQHero} className="faq-hero">
                <img class="hero-text" src={FAQImg}></img>
            </Hero>
            <div class="spacer"></div>
            <RSVPForm></RSVPForm>
        </main>
    )
}

export default Contact;