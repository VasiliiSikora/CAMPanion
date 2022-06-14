// // Will check for logged in user

// async function getUser() { // make function asynchronous
//     URL = 'http://localhost:3000/api/session'
//     const results = await axios.get(URL).then(response => { //set await so that when the function is called it knows that a promise is coming
    
//     if (response.data.name) { //checks if user is logged in as there are still "sessions" albeit with null info in them when you log out
//         console.log(response.data.name)
//         let header = document.getElementById('header')
//         let linkBox = document.createElement('section')
//         let loggedIn = document.createElement('h1')
//         loggedIn.className='clickable'
//         loggedIn.innerText = `User: ${response.data.name}`
//         linkBox.appendChild(loggedIn)
//         header.appendChild(linkBox)

//         let logout = document.createElement('button')
//         logout.className='clickable'
//         logout.innerText = `logout`
//         logout.addEventListener('click', () => {
//             axios.delete('/api/session')
//             logout.remove()
//             loggedIn.remove()
//             linkBox.remove()
//         })
//         linkBox.appendChild(loggedIn)
//         linkBox.appendChild(logout)
//         header.appendChild(linkBox)
//     }


//     return response.data
//     })


// }