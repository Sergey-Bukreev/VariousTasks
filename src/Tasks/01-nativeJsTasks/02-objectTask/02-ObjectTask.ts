export type CityType = {
    title: string
    houses: Array<HouseType>
    governmentBuildings:Array<GovermantType>
    citizensNumber: number

}
export type HouseType = {
    id?: number
    buildedAt: number
    repaired: boolean
    address: AdressType
}
export type AdressType = {
    number: number
    street:  StreetType
}
export type StreetType = {
    title:  string
}
export type GovermantType = {
    type: string
    budget: number
    staffCount: number
    address: AdressType

}

// @ts-ignore
export const city:CityType = {
    houses: [
        {
            buildedAt: 2012,
            repaired:false,
            address:{
                number: 100,
                street: {
                    title:"White street"
                }
            }

        },
        {
            buildedAt: 2008,
            repaired:false,
            address:{
                number: 100,
                street: {
                    title:"Happy street"
                }
            }
            },
        {
            buildedAt: 2020,
            repaired:false,
            address:{
                number: 101,
                street: {
                    title:"White street"
                }
            }
        }
    ],
    governmentBuildings:[
        {
            type:"HOSPITAL",
            budget:200000,
            staffCount:200,
            address:{
                number:1,
                street:{
                    title: "Central Str"
                }
            }
        },
        {
            type:"FIRE-STATION",
            budget:500000,
            staffCount:1000,
            address:{
                number:1,
                street:{
                    title: "South Str"
                }
            }
        }
    ]
}