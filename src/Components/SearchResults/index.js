import './index.css';

// const button_clicked = async (event) => {
//     // const id = event.target.id
//     // console.log(event.target);
//     // const targetId = event.targetId;
//     console.log(event.target.id);
// }

export default function SearchReasult(props){
    const {element, index, cityGotSelected, fetch_specific} = props;
    const {name, country, state} = element;
    // console.log(index);
    // console.log(element);
    // console.log(props.name);

    const buttonClicked = () => {
        // Define your button_clicked function logic here
        console.log(`Button ${index} clicked!`);
        cityGotSelected(index);
        fetch_specific();
    };

    return (
        <li >
            <div>
            <button onClick={buttonClicked} id={`${index}`} className="resultElement">
            <div className='temp'><h3>{name}</h3></div>
            <div className='temp'><p>Country: {country}</p></div>
            <div className='temp'><p>State: {state}</p></div>
            </button>
            </div>
        </li>
    );
}