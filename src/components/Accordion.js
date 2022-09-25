import React, {useState, useEffect, useRef} from "react";
import Measure from 'react-measure';

const Accordion = ({ question, children }) => {
    const [open, setOpen] = useState(false);
    const [answerHeight, setAnswerHeight] = useState(0);

    return (
        <div class="accordion">
            <div onClick={() => setOpen(!open)} className="question">{question}<span>{open ? "-" : "+"}</span></div>
            <div style={{ height: open ? answerHeight : 0, overflowY: 'hidden', transition: 'all 250ms ease' }}>
                <Measure scroll onResize={(content) => {
                    setAnswerHeight(content.scroll.height);
                }}>{({ measureRef }) => (
                    <div className="answer" ref={measureRef}>{children}</div>
                )}</Measure>
            </div>
        </div>
    );
}

export default Accordion;