import languages from "../data/languages";
export default function AccordionList() {
    return (
    <div className="accordion-list">
        {
            languages.map((languages, index) => {
                return (       
                 <div className="accordion" key={index}>
                    <div className="accordion__title">
                        <h3>{languages.title}</h3>
                    </div>
        
                    <button className="accordion__button">+</button>
                    <div>{languages.description}</div>
                </div>
        
                )
            })
        }

    </div>

    );
}