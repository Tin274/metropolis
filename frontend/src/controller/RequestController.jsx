import { registerUser } from "../../../backend/controller/controller";

export async function loginRequest(userData) {

  const URL = 'http://localhost:3333/api/users/login';

  const response = await fetch(URL, {
    method: 'POST',
    headers:{
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(userData)

})
console.log("response",response)
  const json = await response.json()

  console.log("message server",json)
  if(json.msg === 'user logged in'){

  const storage = userData;
  storage.logged = true;

  localStorage.setItem("name", JSON.stringify(storage))
  }
}

export async function signUpRequest(userData) {
  
  const URL = 'http://localhost:3333/api/users/signup';

  const response = await fetch(URL, {
    method: 'POST',
    headers:{
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(userData)

  })

  console.log("response",response)
  const json = await response.json()

  console.log("message server",json)
  if(json.msg === 'user signed up'){

  // const storage = userData;
  // storage.logged = true;

  //localStorage.setItem("name", JSON.stringify(storage))
  console.log('User ist registriert')
  }
}

