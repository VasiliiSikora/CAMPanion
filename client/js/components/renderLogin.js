// Will Login Page

function renderLogin() {
    // Get body to append to
        const docBody = document.body

    // Create the modal HTML and display as block
        const loginModal = document.createElement('div')
        loginModal.className = 'modal'
        loginModal.setAttribute('id', 'loginModal')
        loginModal.style.display = 'block';

    //Create Modal Content
        const loginModalContent = document.createElement('div')
        loginModalContent.className = 'modalContent'
    // login Form
        const form = document.createElement('form')
        const logo = document.createElement('img')
        logo.src = '../../static/logo.jpeg' // link to logo image in statics
        form.innerHTML = `
        <input type="text" name="email" placeholder="Email Address"><br>
        <input type="text" name="password" placeholder="Password"><br>
        <button>Login</button>
        `
        form.addEventListener('submit', event => {
            event.preventDefault() //stop it adding get parameters to url
            const formData = new FormData(form) // render form data into object
    
            const data = {
                email: formData.get("email"),
                password: formData.get("password"),
            }
    
            axios.post('/api/session', data)
                .then(response => {
                    console.log(response)
                    loginModal.remove()
                    renderHeader()
                }).catch((err) => {
                    console.log(err)
                    console.log(err.response)
                    if (err.response.status === 400) {
                        const reason = err.response.data.message
                        alert(reason)
                    } else {
                        alert('Unknown Error Occured')
                    }
                })
        })


    // When the user clicks anywhere outside of the modal, close it
        window.onclick = function(event) {
            if (event.target == loginModal) {
                // loginModal.style.display = "none";
                loginModal.remove()
            }
        }

    // Append logo and form to modal
        loginModalContent.append(logo, form)
        loginModal.append(loginModalContent)

    // Append modal to the body
        docBody.append(loginModal)    
}