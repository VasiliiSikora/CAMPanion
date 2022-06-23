// Will check for logged in user

async function getUser() { // make function asynchronous
    const URL = '/api/session'
    const results = await axios.get(URL).then(response => { //set await so that when the function is called it knows that a promise is coming
    console.log(response.data)
    if (response.data.name) { //checks if user is logged in as there are still "sessions" albeit with null info in them when you log out
        console.log(response.data.name)

        // Get SignUp & LogIn buttons and remove them
        const signUpButton = document.getElementById('signUpButton')
        const logInButton = document.getElementById('logInButton')
        signUpButton.remove()
        logInButton.remove()

        let headerContainer = document.getElementById('header')
        let loggedIn = document.createElement('button')
        loggedIn.className='nav-button'
        loggedIn.innerText = `Logged in as: ${response.data.name}`
        headerContainer.appendChild(loggedIn)

        let logout = document.createElement('button')
        logout.className='nav-button'
        logout.innerText = `logout`
        logout.addEventListener('click', () => {
            axios.delete('/api/session')
            renderHeader()
        })
        headerContainer.appendChild(logout)

    }


    return response.data
    })


}