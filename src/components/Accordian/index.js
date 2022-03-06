import React from 'react'
import { questions } from "../data.js";
import './accordian.css';
import SingleAccordian from '../SingleAccordian/index.js';

const Accordian = () => {

    return (
        <>
            <section className="main-div">
                <h1>React Interview Questions </h1>
                {
                    questions.map((data) => {
                        return (
                            <SingleAccordian question={data.question} answer={data.answer} />
                        )
                    })
                }
            </section>
        </>
    )
}

export default Accordian;