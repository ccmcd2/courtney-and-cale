import React, {useEffect, useState} from "react";
import Hero from "../components/Hero";
import OurStoryHero from "../img/our-story-hero.jpg";
import HandWave from "../img/hand-wave.svg";
import Diamond from "../img/diamond.svg";
import HeartArrow from "../img/heart-arrow.svg";
import IconCircle from "../components/IconCircle";
import OurStoryImg from "../img/ourstory.png";

const OurStory = () => {
    const [months, setMonths] = useState(null);
    useEffect(() => {
        const oldDate = new Date("July 15, 2018 00:00:00");
        const now = new Date();
        setMonths(now.getMonth() - oldDate.getMonth() + (12 * (now.getFullYear() - oldDate.getFullYear())));
    }, []);

    const [tab, setTab] = useState(0);

    if (tab === 0) {
        var backBtnClass = "disabled"
    }

    if (tab === 2) {
        var nextBtnClass = "disabled"
    }

    return (
        <main>
            <Hero image={OurStoryHero}>
                <img class="hero-text" src={OurStoryImg}></img>
            </Hero>
            <div class="spacer"></div>
            <div class="section-container">
                <section className="our-story tab-buttons open">
                    <button className={tab === 0 ? "open" : ""} onClick={() => setTab(0)}><IconCircle image={HandWave}></IconCircle></button>
                    <button className={tab === 1 ? "open" : ""} onClick={() => setTab(1)}><IconCircle image={HeartArrow}></IconCircle></button>
                    <button className={tab === 2 ? "open" : ""} onClick={() => setTab(2)}><IconCircle image={Diamond}></IconCircle></button>
                </section>
                <section className={`our-story ${tab === 0 ? "open" : ""}`}>
                    <div class="col-xs-12 col-md-6">
                        <h2>How we met</h2>
                        <p><span>Courtney: </span> It was absolutely not love at first sight. We went to school together since 8th grade, and while I don’t remember exactly when we met, I think it was sometime in 9th or 10th grade. We both ran cross country and track for our school, but we never talked.</p>
                        <p>Junior year, we shared a computer science class together. We both sat right next to each other and still didn’t talk, only exchanging the occasional hello or goodbye, which was always initiated by Cale. Cale said that he thought I hated him because I never spoke to him, and I remember being too scared of Cale to say anything. Eventually, we started talking more and, since he distracted me from my work so often, I got more comfortable around Cale.</p>
                        <p><span>Cale: </span> I don’t really remember meeting Courtney for the first time. I know we met for the first time around 8th or 9th grade, probably at a cross country meet or while we were hanging out with a mutual friend. It wasn’t until we sat next to each other in a computer science class, a class that was the textbook definition of a blowoff class, that I really got to know Courtney.</p>
                        <p>At first she was really shy, but my unparalleled charisma and general attractiveness got her to open up. We would talk to each other throughout class, goof off, share homework, basically anything other than class work. Needless to say, I did not learn much about computer science, but by the end of the year, Courtney and I were buddies.</p>
                    </div>
                    <div class="col-xs-12 col-md-6 gallery vertical right medium">
                        <div class="img-container" id="track"></div>
                        <div class="img-container" id="cross-country"></div>
                    </div>
                </section>
                <section className={`our-story ${tab === 1 ? "open" : ""}`}>
                    <div class="col-xs-12 col-md-6">
                        <h2>How we started dating</h2>
                        <p><span>Cale:</span> Towards the end of senior year of high school, Courtney and I had become pretty good friends. I had secretly liked her for a while at this point, and I had a pretty good feeling that she liked me back. We agreed to hang out a few more times during the summer before Courtney moved away to college and I knew this would be pretty much my last chance to ask her out.</p>
                        <p>On July 15th, 2018, in a field behind Lamar High school (romantic!), I finally got the courage to ask her to be my girlfriend. Hearing her say yes was one of the most exciting moments of my life and something I will never forget.</p>
                        <p><span>Courtney:</span> We had a lot of mutual friends, and we would all hang out together. Eventually, we were brave enough to hang out just us (and even speak to each other!), and we became close friends.</p>
                        <p>On July 15, 2018, Cale and I were sitting at the top of a set of stairs that was on the practice football field at our high school, looking at the stars. Cale asked me how much time was left before I went to college. I said there was one month. He replied, “well, do you want to make it a good month?” And a good month it was! I'm pretty sure Cale's mom didn't like me at first because I convinced him to go skydiving and get matching lip tattoos with me in the first month. But I think she came around, and {months} good months later, here we are.</p>
                    </div>
                    <div class="col-xs-12 col-md-6 gallery vertical right medium">
                        <div class="img-container" id="tattoos"></div>
                        <div class="img-container" id="skydiving"></div>
                    </div>
                </section>
                <section className={`our-story ${tab === 2 ? "open" : ""}`}>
                    <div class="col-xs-12 col-md-6">
                        <h2>How he proposed</h2>
                        <p><span>Courtney:</span> We went on a trip to Mexico right after Cale graduated college. The day after we arrived, we had a beach day. We laid in the sand, played in the water, ate lunch---it was so much fun. I knew something was up because Cale kept asking me what time it was and checking his phone. I asked him if he had any plans for the rest of the day, and he said we should go back to our room around 4 to get ready for dinner. If you know Cale, you know he always goes with the flow, and while he plans things out, he never has such a specific time for things. After we got ready, Cale said that we should go back to the beach because there were some restaurants over there that looked good.</p>
                        <p>When we got back to the beach, there was a photographer there, and Cale said he had signed us up for a surprise photoshoot. We took pictures on the beach, and eventualy the photographer had Cale turn around so that we were both looking off into the distance in the same direction. Then we switched, and I turned around. I was already 99% sure of what was going on, but in case that wasn’t enough, Cale missed his cue from the photographer, who said “what time is it?” like four different times. I guess he finally got things straightened out though, and I heard him say “Courtney.” I turned around and he was on one knee holding a beautiful ring! He said, “will you marry me?” Of course I said yes!</p>
                        <p><span>Cale:</span> After a few years of dating, it became pretty apparent to me that Courtney was the person I wanted to be with for the rest of my life. We had already planned a vacation in Mexico right after my graduation and I couldn’t imagine a better opportunity to finally ask her the big question. On a beautiful beach in Riviera Maya, I asked Courtney if she would marry me, and she instantly said yes. A wave of relief washed over me, followed by the joy of actually being engaged to my best friend.</p>
                    </div>
                    <div class="col-xs-12 col-md-6 gallery vertical right medium">
                        <div class="img-container" id="proposal-1"></div>
                        <div class="img-container" id="proposal-2"></div>
                    </div>
                </section>
                <section className="our-story last next-back-buttons open">
                    <button className={`btn-primary ${backBtnClass}`} onClick={() => {if (tab > 0)setTab(tab - 1);}}>&#60;&nbsp;&nbsp;Back</button>
                    <button className={`btn-primary ${nextBtnClass}`} onClick={() => {if (tab < 2)setTab(tab + 1);}}>Next&nbsp;&nbsp;&#62;</button>
                </section>
            </div>
        </main>
    )
}

export default OurStory;