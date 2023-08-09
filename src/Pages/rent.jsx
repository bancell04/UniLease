import './rent.css'
import { Card } from '../Components/ListingCard/card'
import { ListingsGrid } from '../Components/ListingCard/listingsGrid'
import { SubNavbar, SubNavItem, DropdownMenu } from '../Components/SubNavbar/subnav'
import { useQuery} from '@tanstack/react-query'
import Axios from "axios"

export const ListingsPage = () => {

    const url = "http://ec2-44-203-73-52.compute-1.amazonaws.com/web/"
    const { data: listings, isLoading, refetch } = useQuery(["listings"], () => {
      return Axios.get("http://ec2-44-203-73-52.compute-1.amazonaws.com/listings/").then((res) => res.data)
    })
    const tempListings = [{"id":"64b61ed3e0ef537202079e68","school":"Example School","numBedrooms":3,"numBathrooms":2,"rent":1500,"title":null,"description":"A spacious apartment with great amenities.","address":{"street":"123 Main Street","city":"Example City","state":"Example State","country":"Example Country","zipcode":"12345","unit":"Apt 1B"},"squareFootage":1200,"phoneNumber":0,"email":null,"distance":100,"price":1500},{"id":"64b6210be0ef537202079e69","school":"Example School","numBedrooms":3,"numBathrooms":2,"rent":1500,"title":null,"description":"A spacious apartment with great amenities.","address":{"street":"123 Main Street","city":"Example City","state":"Example State","country":"Example Country","zipcode":"12345","unit":"Apt 1B"},"squareFootage":1200,"phoneNumber":0,"email":null,"distance":100,"price":1500},{"id":"64b6210de0ef537202079e6a","school":"Example School","numBedrooms":3,"numBathrooms":2,"rent":1500,"title":null,"description":"A spacious apartment with great amenities.","address":{"street":"123 Main Street","city":"Example City","state":"Example State","country":"Example Country","zipcode":"12345","unit":"Apt 1B"},"squareFootage":1200,"phoneNumber":0,"email":null,"distance":100,"price":1500},{"id":"64b6210fe0ef537202079e6b","school":"Example School","numBedrooms":3,"numBathrooms":2,"rent":1500,"title":null,"description":"A spacious apartment with great amenities.","address":{"street":"123 Main Street","city":"Example City","state":"Example State","country":"Example Country","zipcode":"12345","unit":"Apt 1B"},"squareFootage":1200,"phoneNumber":0,"email":null,"distance":100,"price":1500},{"id":"64b6e6b9fb032e67e90011d6","school":"Example Scool","numBedrooms":3,"numBathrooms":2,"rent":1500,"title":null,"description":"A spacious apartment with great amenities.","address":{"street":"123 Main Street","city":"Example City","state":"Example State","country":"Example Country","zipcode":"12345","unit":"Apt 1B"},"squareFootage":1200,"phoneNumber":0,"email":null,"distance":100,"price":1500},{"id":"64b6e78eecfa127f6debb1f1","school":"Example School","numBedrooms":3,"numBathrooms":2,"rent":1500,"title":null,"description":"A spacious apartment with great amenities.","address":{"street":"123 Main Street","city":"Example City","state":"Example State","country":"Example Country","zipcode":"12345","unit":"Apt 1B"},"squareFootage":1200,"phoneNumber":0,"email":"example@example.com","distance":100,"price":1500},{"id":"64b6e7d6ecfa127f6debb1f2","school":"Example School","numBedrooms":3,"numBathrooms":2,"rent":1500,"title":null,"description":"A spacious apartment with great amenities.","address":{"street":"123 Main Street","city":"Example City","state":"Example State","country":"Example Country","zipcode":"12345","unit":"Apt 1B"},"squareFootage":1200,"phoneNumber":0,"email":"example@example.com","distance":100,"price":1500},{"id":"64b6e8a9c9a1ea190a7550ba","school":"Example School","numBedrooms":3,"numBathrooms":2,"rent":1500,"title":null,"description":"A spacious apartment with great amenities.","address":{"street":"123 Main Street","city":"Example City","state":"Example State","country":"Example Country","zipcode":"12345","unit":"Apt 1B"},"squareFootage":1200,"phoneNumber":1234547890,"email":"example@example.com","distance":100,"price":1500},{"id":"64b6ebc3981ed7257ce924cb","school":"Example School","numBedrooms":3,"numBathrooms":2,"rent":1500,"title":null,"description":"test1.","address":{"street":"123 Main Street","city":"Example City","state":"Example State","country":"Example Country","zipcode":"12345","unit":"Apt 1B"},"squareFootage":1200,"phoneNumber":1234547890,"email":"example@example.com","distance":100,"price":1500},{"id":"64b6eddf680eb45e83bbc7ef","school":"Example School","numBedrooms":3,"numBathrooms":2,"rent":1500,"title":null,"description":"test2.","address":{"street":"123 Main Street","city":"Example City","state":"Example State","country":"Example Country","zipcode":"12345","unit":"Apt 1B"},"squareFootage":1200,"phoneNumber":1234547890,"email":"example@example.com","distance":100,"price":1500},{"id":"64b6eeff4579e01359771b96","school":"Example School","numBedrooms":3,"numBathrooms":2,"rent":1500,"title":null,"description":"test3","address":{"street":"123 Main Street","city":"Example City","state":"Example State","country":"Example Country","zipcode":"12345","unit":"Apt 1B"},"squareFootage":1200,"phoneNumber":1234547890,"email":"example@example.com","distance":100,"price":1500},{"id":"64c0ad4fff9bc8150053a45b","school":"School","numBedrooms":3,"numBathrooms":2,"rent":1500,"title":"Title","description":"Description","address":{"street":"123 Main St","city":"City","state":"State","country":"Country","zipcode":"12345","unit":"Unit 1"},"squareFootage":2000,"phoneNumber":1234567890,"email":"email@example.com","distance":100,"price":1500}]

    return (
      <main className="rent-page-container">
          <SubNavbar>
            <SubNavItem text='Filter' />
            <SubNavItem text='Rent'>
              <DropdownMenu>
                
              </DropdownMenu>
            </SubNavItem>
          </SubNavbar>
          <div className='results-text'>Found {tempListings.length} spaces for rent near Mines!</div>
          <ListingsGrid entries={tempListings}/>
          <div className="map">
              
          </div>
      </main>
    )
}