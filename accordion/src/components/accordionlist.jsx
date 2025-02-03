import languages from "../data/languages";
import Accordion from "./accordion";

export default function AccordionList() {
    return (
        <div className="accordion-list">
            {languages.map((languages, index) => (
                <Accordion key={index} title={languages.title} description={languages.description} />
            ))}
        </div>
    );
}