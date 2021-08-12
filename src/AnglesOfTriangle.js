const AnglesOfTriangle = () => {
    return ( 
        <div className="anglesOfTriangle">
            <div className="blur">
               <h2>Enter the angles in below input boxes and we will tell you if those angles make a Triangle</h2>
            </div>
            <form action="">
                <input className = "angleInput" type="number" autoFocus/>
                <input className = "angleInput" type="number"/>
                <input className = "angleInput" type="number"/>
                <button type="submit">submit</button>
            </form>
        </div>
     );
}
 
export default AnglesOfTriangle;