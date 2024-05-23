// function Student (firstName, lastName){
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.syHi = function (){
//         return [
//             this.firstName,
//             this.lastName
//         ]
//     }
// }

// let newStudent = new Student("Jonas", "Jonaitis");
// console.log(newStudent)
// console.log(newStudent.syHi());

// for(let property of newStudent.syHi()){
//     console.log(property)
// }

//javascript prototipai
//uzduotis

/* sukurti prekes konstruktoriu su siais property:
id, pavadinimas, kaina: (reguliari, akcija),

sukurkite metoda, kuris grazintu visa informacija apie preke, taciau kaina grazintume iprastine, jeigu siandien oro temperatura yra maziau, kaip 20 laipsniu, jeigu daugiau reikia grazinti sumazinta kaina (akcija). atfiltruoti duomenis
*/



const getData = async () => {
    try {
        let response = await fetch('https://api.meteo.lt/v1/places/kaunas/forecasts/long-term');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        let data = await response.json();
        let {forecastTimestamps} = data;
        forecastTimestamps = forecastTimestamps.filter((temp)=>{
            return temp.forecastTimeUtc === '2024-05-23 11:00:00'
        })
        console.log(forecastTimestamps);


    } catch (error) {
        console.error('Error fetching data:', error);
    }
}


getData();

//klase, js reikia moketi asinchronines funkcijas. ismokti filter ir map.

class Student{
    constructor(first, last, subject){
        this.first = first;
        this.last = last,
        this.subject = subject;
    }

    getProfile(){
        return [
            this.first,
            this.last,
            this.subject
        ]
    }
}

class VipStudent extends Student{
    constructor(first, last, subject, status){
        super(first,last,subject);
        this.status = status;
    }
}
const student = new Student("Jonas", "Jonaitis", "JS");
console.log(student)

const vipStudent = new VipStudent("Jonas", "Jonaitis", "JS", "supervisor");
console.log(vipStudent.getProfile())