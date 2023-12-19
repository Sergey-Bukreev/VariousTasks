import {CityType} from "../02-objectTask/02-ObjectTask";
import {
    createMessage,
    demolishHousesOnTheStreet,
    getBuildingsWithStaffCountGreaterThen,
    getStreetsTitlesOfGovernmentBuildings, getStreetsTitlesOfHouses
} from "./FilterAndMapTask";

let city: CityType;

beforeEach(() => {
    city = {
        title: "New York",
        houses: [
            {id:1, buildedAt:2012, repaired:false, address:{number:100, street:{title:"White street"}}},
            {id:2, buildedAt:2008, repaired:false, address:{number:100, street:{title:"Happy street"}}},
            {id:3, buildedAt:2020, repaired:false, address:{number:101, street:{title:"Happy street"}}}
        ],
        governmentBuildings: [
            {type:"HOSPITAL", budget:200000, staffCount:200, address:{number:1, street:{ title:"Central Str"}}},
            {type:"FIRE-STATION", budget:500000, staffCount:1000, address:{number:1, street:{ title:"South Str"}}}
        ],
        citizensNumber: 1000000
    }
})

// 01. Дополните тип HouseType (добавьте порядковый id от 1 и по возрастанию)
// 02. Создайте в том же файле ещё одну функцию, чтобы тесты прошли
test('House should be destroyed', () => {
    demolishHousesOnTheStreet(city, 'Happy street');

    expect(city.houses.length).toBe(1);
    expect(city.houses[0].id).toBe(1);

})

// 03. Массив строений, где работают больше 500 людей
test('buildings with correct staff count', () => {
    let buildings = getBuildingsWithStaffCountGreaterThen(city.governmentBuildings, 500)

    expect(buildings.length).toBe(1);
    expect(buildings[0].type).toBe('FIRE-STATION')
})
// 04. создайте в том же файле ещё одну функцию, чтобы тесты прошли
test('list of streets titles of government buildings', ()=> {
    let streetsNames = getStreetsTitlesOfGovernmentBuildings(city.governmentBuildings);

    expect(streetsNames.length).toBe(2);
    expect(streetsNames[0]).toBe("Central Str");
    expect(streetsNames[1]).toBe("South Str");
})

//05. создайте в том же файле ещё одну функцию, чтобы тесты прошли
test('list of streets titles', ()=> {
    let streetsNames = getStreetsTitlesOfHouses(city.houses);

    expect(streetsNames.length).toBe(3);
    expect(streetsNames[0]).toBe("White street");
    expect(streetsNames[1]).toBe("Happy street");
    expect(streetsNames[2]).toBe("Happy street");
})
test(`create greeting message for people on every street`, ()=>{
    let messages = createMessage(city.houses)
    expect(messages.length).toBe(3);
    expect(messages[0]).toBe("Hello guys from White street")
    expect(messages[1]).toBe("Hello guys from Happy street")
    expect(messages[2]).toBe("Hello guys from Happy street")
})