import {CityType, GovermantType, HouseType} from "../02-objectTask/02-ObjectTask";

export const demolishHousesOnTheStreet= (city: CityType, street: string)=> {
city.houses = city.houses.filter(h=> h.address.street.title !== street)
}

export const getBuildingsWithStaffCountGreaterThen = (governmentBuildings: Array<GovermantType>, number: number)=> {
 return governmentBuildings.filter(governmentBuildings => governmentBuildings.staffCount > 500)
}

export const getStreetsTitlesOfGovernmentBuildings = (governmentBuildings: Array<GovermantType>) => {
  return  governmentBuildings.map(governmentBuildings => governmentBuildings.address.street.title)
}

export const getStreetsTitlesOfHouses = (houses: Array<HouseType>) => {
 return houses.map(houses=> houses.address.street.title)
}

export const createMessage = (houses: Array<HouseType>) => {
return houses.map(houses => `Hello guys from ${houses.address.street.title}` )
}