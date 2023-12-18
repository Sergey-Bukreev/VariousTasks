import {CityType, GovermantType, HouseType} from "../02-objectTask/02-ObjectTask";

export const addMoneyToBudget=(building:GovermantType, budget:number)=> {
    building.budget +=budget
}
export const repairHouse = (houseType: HouseType)=> {
 houseType.repaired=true
}
export const toFireStaff = (building: GovermantType, staffCountToFire: number)=> {
building.staffCount -=staffCountToFire
}
export const toHireStaff = (building: GovermantType, staffCountToHire: number)=> {
    building.staffCount +=staffCountToHire
}
export const createMessage = (city: CityType)=> {
return `Hello ${city.title} citizens. I want to ba happy. All ${city.citizensNumber} people`
}