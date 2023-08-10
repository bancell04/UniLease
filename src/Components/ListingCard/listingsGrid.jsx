import { Card } from "./card"
import "./listingsGrid.css"


export const ListingsGrid = (props) => {

    const entries = props.entries

    return (
        <div className="listings-grid">
            {entries.map((entry) => {
                return(
                    <Card 
                        key={entry.id} 
                        school={entry.school}
                        numBedrooms={entry.numBedrooms} 
                        numBathrooms={entry.numBathrooms}
                        rent={entry.rent}
                        description={entry.description}
                        address={"entry.address"} 
                        squareFootage={entry.squareFootage} 
                        phoneNumber={entry.phoneNumber} 
                        email={entry.email} 
                        price={entry.price}
                    />
                )
            })}
        </div>
    )
}