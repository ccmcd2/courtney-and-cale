import React from "react";
import Hero from "../components/Hero";
import RegistryHero from "../img/registry-hero.jpg";
import RegistryImg from "../img/registry.png";
import { HashLink as Link } from 'react-router-hash-link';

const Registry = () => {
    return (
        <main>
            <Hero image={RegistryHero}>
                <img class="hero-text" src={RegistryImg}></img>
            </Hero>
            <div class="spacer"></div>

            <div class="section-container">
                <section class="last">
                    <div class="registry-info">
                        <p>Please know that your presence at our wedding is present enough! However, for friends and family who have been asking for gift ideas, we have created the registry below. Cash gifts are also welcome (but not expected) and will be put towards a buying our first home together.</p>
                        <a class="btn-secondary" href="https://www.amazon.com/wedding/share/courtneyandcale" target="_blank">Amazon Registry</a>
                    </div>
                </section>
            </div>
        </main>
    )
}

export default Registry;