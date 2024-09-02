import "./components.css"

function Lista({l, l2, l3, l4}){

    return(

        <div className="principal">
            <ul>
                <li>{l}</li>
                <li>{l2}</li>
                <li>{l3}</li>
                <li>{l4}</li>
            </ul>
        </div>

    )

}

export default Lista