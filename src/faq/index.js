import React from "react";
import Hero from "../components/Hero";
import FAQHero from "../img/faq-hero.jpg";
import Accordion from "../components/Accordion";
import FAQImg from "../img/frequentlyaskedquestions.png";
import Envelope from "../img/envelope.svg";
import Phone from "../img/phone.svg";
import IconCircle from "../components/IconCircle";

const FAQs = () => {
    return (
        <main>
            <Hero image={FAQHero} className="faq-hero">
                <img class="hero-text" src={FAQImg}></img>
            </Hero>
            <div class="spacer"></div>
            <div class="section-container">
              <section>
                  <Accordion className="" question="Where are you registered?">
                    <p>Please know that your presence at our wedding is present enough! However, for those who would like to bring a gift, we have created an <a href='https://www.amazon.com/wedding/share/courtneyandcaleAmazon'>Amazon registry</a>. Cash gifts are also welcome (but not expected) and will be put towards a buying our first home together.</p>
                  </Accordion>
                  <Accordion className="" question="What do you mean by semi-formal attire?">
                    <p>Masculine clothing options include a suit or a shirt and tie with a nice pair of slacks. For feminine attire, a cocktail dress, flowy dress, or dressy suit is perfect.</p>
                  </Accordion>
                  <Accordion className="" question="Can I take pictures during the ceremony?">
                    <p>We politely request that you refrain from taking pictures during the ceremony. We promise to share pictures from our photographer after the wedding, and we would love to see all the photos you take during the reception!</p>
                  </Accordion>
                  <Accordion className="" question="Can I bring a plus one?">
                    <p>While we would love to have as many people celebrate with us as possible, we are trying to keep the event intimate. We ask that you not bring guests who are not mentioned on your invitation.</p>
                  </Accordion>
                  <Accordion className="" question="What will the weather be like?">
                    <p>It will be HOT! But don't worry, both the ceremony and reception will be indoors with air conditioning.</p>
                  </Accordion>
                  <Accordion className="" question="I'm traveling from out of town. Where should I stay?">
                    <p>Since we have very few guests coming from out of town, we do not have a block of rooms reserved anywhere. If you need help finding accommodations, please contact us and we will be happy to assist!</p>
                  </Accordion>
              </section>
              <section class="last" id="contact-us">
                <a id="contact"></a>
                <h3>Contact Us</h3>
                <p>If you still have questions, please email or text us so we can help!</p>
                <div class="row">
                  <IconCircle image={Envelope}></IconCircle>
                  <p><a href="mailto:courtneyandcale@gmail.com">courtneyandcale@gmail.com</a></p>
                </div>
                <div class="row">
                  <IconCircle image={Phone}></IconCircle>
                  <p>Bride: <a href="tel:8177260994">817-726-0994</a></p>
                </div>
                <div class="row">
                  <IconCircle image={Phone}></IconCircle>
                  <p>Groom: <a href="tel:8172357043">817-235-7043</a></p>
                </div>
              </section>
            </div>
        </main>
    )
}

export default FAQs;

/*var accordion = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener("click", function() {
    // Toggle between adding and removing the "active" class
    this.classList.toggle("open");

    // Toggle between hiding and showing the answer panel
    var answer = this.nextElementSibling;
    if (answer.style.display === "block") {
      answer.style.display = "none";
    } else {
      answer.style.display = "block";
    }
  });
}*/

/*const accordion = document.getElementsByClassName('accordion');
var i;

for (i=0; i<accordion.length; i++) {
  accordion[i].addEventListener('click', function () {
    this.classList.toggle('open')
  })
}*/