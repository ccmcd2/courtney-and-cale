import React from "react";
import Hero from "../components/Hero";

const RSVPForm = () => {
    return (
        <form action="https://docs.google.com/forms/u/1/d/e/1FAIpQLSdnk146i6-V7pRCAel9jZnNNorv3QNohlzSzpBIyv51EQiV4w/formResponse" target="_self" method="POST">

            <p>Will you be attending?</p>
            <input type="radio" name="entry.495138451_sentinel" id="yes"/>
            <label for="yes">I'll be there!</label>
            <input type="radio" name="entry.495138451_sentinel" id="no"/>
            <label for="no">I can't make it, but congratulations!</label>

            <p>Please list the name(s) of everyone in your party that will be in attendance (including yourself):</p>
            <label class="visually-hidden" for="entry.1498135098">Please list the name(s) of everyone in your party that will be in attendance (including yourself):</label>
            <input type="text" name="entry.1498135098"/>

            <p>How many people in your party want chicken?</p>
            <label class="visually-hidden" for="entry.838032075">How many people in your party want chicken?</label>
            <input type="text" name="entry.838032075"/>

            <p>How many people in your party want steak?</p>
            <label class="visually-hidden" for="entry.916526448">How many people in your party want steak?</label>
            <input type="text" name="entry.916526448"/>

            <p>What song would get you out on the dance floor?</p>
            <label class="visually-hidden" for="entry.2606285">What song would get you out on the dance floor?</label>
            <input type="text" name="entry.2606285"/>

            <input type="submit" value="Submit"/>

        </form>
    )
}

export default RSVPForm;