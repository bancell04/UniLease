import './card.css'
import samplepicture from './apt-sample-image.jpg'

export const Card = (props) => {

    return (
        <div className='card-container'>
            <div className='img-container'>
                <img src={samplepicture} className='img-picture'></img>
            </div>
            <div className='info-container'>
                <p className='info-title'>{props.description}</p>
                <div className='address-line'>
                    <p className='address'>{props.address}</p>
                </div>
                <ul className='info-list'>
                    <li>
                        <p className='rent'>${props.rent}</p>
                    </li>
                    <li>
                        <p>{props.numBedrooms} bds</p>
                    </li>
                    <li>
                        <p>{props.numBathrooms} ba</p>
                    </li>
                    <li>
                        <p>0.9 mi</p>
                    </li>
                </ul>
                <ul className='listing-details'>
                    <li><a>Details</a></li>
                    <li>|</li>
                    <li><a>Contact</a></li>
                </ul>
                <button className='viewButton'>
                    View
                </button>
            </div>
        </div>
    )
}