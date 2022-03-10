import React, { useState } from 'react';
import './singleAccordian.css';

const SingleAccordian = ({ question, answer }) => {

    const [show, setShow] = useState(false);

    return (
        <>
            <div class="accordion">
                <div class="accordion-item">
                    <div class="accordion-item-header" onClick={() => setShow(!show)}>
                        {question}
                    </div>
                    {show &&
                        <div class="accordion-item-body-content">
                            {answer}
                        </div>
                    }
                </div>
            </div>
        </>
    )
}

export default SingleAccordian;