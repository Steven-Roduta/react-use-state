import { useState } from "react";

export default function Accordion({ title, description }) {

    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen((current) => !current)
    }

    return (
    <div className="accordion">
        <div className="accordion__title">
            <h3>{title}</h3>
        </div>

        <button className="accordion__button" onClick={toggleAccordion}>
            {isOpen ? "-" : "+"}
        </button>
        {isOpen && <div>{description}</div>}
    </div>
    );
}