import React, { useState } from 'react';
import { questions } from "../data.js";
import './accordian.css';
import SingleAccordian from '../SingleAccordian/index.js';
import Dropdown from '../Dropdown/index.js';

const Accordian = () => {

    const [selected, setSelected] = useState("Choose any topics");
    const [currentPage, setCurrentPage] = useState(1);

    let currentData;

    if (selected !== "Choose any topics") {
        currentData = questions[selected].slice(
            (currentPage - 1) * 5,
            (currentPage - 1) * 5 + 5
        );
    }

    const prev = () => setCurrentPage(currentPage - 1);
    const next = () => setCurrentPage(currentPage + 1);

    return (
        <section className={`${selected !== "Choose any topics" ? 'sel-div' : 'main-div'}`}>
            {selected === "Choose any topics" && <img src='./question.png' alt="questions" className='imgDiv' />}
            <h1 className='head'>
                Interview Questions
            </h1>
            <p className='para'>
                Select any topics to get the questions
            </p>
            <Dropdown selected={selected} setSelected={setSelected} />
            {selected !== "Choose any topics" &&
                currentData.map((data) => {
                    return (
                        <SingleAccordian question={data.question} answer={data.answer} />
                    )
                })
            }
            {selected !== "Choose any topics" &&
                <div className='pagination'>
                    <button onClick={prev} className="button" disabled={currentPage <= 1}>
                        Prev
                    </button>
                    <button onClick={next} className="button" disabled={currentPage >= 4}>
                        Next
                    </button>
                </div>
            }

        </section>
    );
}

export default Accordian;