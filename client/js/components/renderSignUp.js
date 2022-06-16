// Will Sign-Up Page

function renderSignUp() {
    // Get body to append to
        const docBody = document.body

    // Create the modal HTML and display as block
        const signUpModal = document.createElement('div')
        signUpModal.className = 'modal'
        signUpModal.setAttribute('id', 'signUpModal')
        signUpModal.style.display = 'block';

    //Create Modal Content
        const signUpModalContent = document.createElement('div')
        signUpModalContent.className = 'modalContent'
    // Signup Form
        const form = document.createElement('form')
        const logo = document.createElement('img')
        logo.src = '../../static/logo.jpeg' // link to logo image in statics
        form.innerHTML = `
        <input type="text" name="name" placeholder="Name"><br>
        <input type="text" name="email" placeholder="Email Address"><br>
        <input type="text" name="password" placeholder="Password"><br>
        <input type="text" name="postcode" placeholder="Postcode"><br>
        <button>Join Campanion</button>
        `
        form.addEventListener('submit', event => {
            event.preventDefault() //stop it adding get parameters to url
            const formData = new FormData(form) // render form data into object
    
            const data = {
                name: formData.get("name"),
                email: formData.get("email"),
                password_hash: formData.get("password"),
                postcode: formData.get("postcode")
            }
    
            axios.post('/api/users', data)
                .then(response => {
                    console.log(response)
                    // signUpModal.style.display = "none"; //close the modal
                    signUpModal.remove()
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
            if (event.target == signUpModal) {
                // signUpModal.style.display = "none";
                signUpModal.remove()
            }
        }

    // Append logo and form to modal
        signUpModalContent.append(logo, form)
        signUpModal.append(signUpModalContent)

    // Append modal to the body
        docBody.append(signUpModal)    
}