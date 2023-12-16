import './index.css';

export default function FinalResult(props) {
    console.log("temp");
    const {specialDetail} = props;
    console.log(specialDetail);
    const {
        coord, weather, base, main, visibility,
        wind, clouds, dt, sys, timezone, id, name, cod
    } = specialDetail;
    
    return (
        <li >
            <div className="finalElement">
                <div className='temp'><h3>base is : {base}</h3></div>
                <div className='temp'><p>visibility : {visibility}</p></div>
                <div className='temp'><p>dt: {dt}</p></div>
                <div className='temp'><p>timezone: {timezone}</p></div>
                <div className='temp'><p>id : {id}</p></div>
                <div className='temp'><p>name is : {name}</p></div>
                <div className='temp'><p>cod is : {cod}</p></div>
                {/* <div className='temp'><p></p></div> */}
            </div>
        </li>
    );
}