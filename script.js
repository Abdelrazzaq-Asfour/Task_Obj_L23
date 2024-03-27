//DATA
let users = 
[
    {
        id: 1,
        username: "john_doe",
        email: "john@example.com",
        fullName: "John Doe",
        age: 30,
        address: {
            street: "123 Main St",
            city: "Anytown",
            state: "CA",
            zip: "12345",
            country: "USA"
        }
    },
    {
        id: 2,
        username: "jane_smith",
        email: "jane@example.com",
        fullName: "Jane Smith",
        age: 25,
        address: {
            street: "456 Elm St",
            city: "Othertown",
            state: "NY",
            zip: "54321",
            country: "USA"
        }
    }
];

//Input Data
const _id =document.getElementById('id')
const username =document.getElementById('username')
const email =document.getElementById('email')
const fullName =document.getElementById('fullName')
const age =document.getElementById('age')
const address =document.getElementById('address')
const street =document.getElementById('street')
const city =document.getElementById('city')
const state =document.getElementById('state')
const zip =document.getElementById('zip')
const country =document.getElementById('country')
//call_Data
id.innerHTML= users[0].id
username.innerHTML= users[0].username
email.innerHTML= users[0].email
fullName.innerHTML= users[0].fullName
age.innerHTML= users[0].age

street.innerHTML= users[0].address.street
city.innerHTML= users[0].address.city
state.innerHTML= users[0].address.state
zip.innerHTML= users[0].address.zip
country.innerHTML= users[0].address.country

