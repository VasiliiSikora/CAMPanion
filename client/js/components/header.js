function renderHeader() {
    const mainContainer = document.getElementById('page')
    mainContainer.classList.remove('render-single-campsite');
    const headerContainer = document.getElementById("header");
    headerContainer.innerHTML = ""
    
    // const heading = document.createElement("h1");
    // heading.setAttribute('id', 'heading');
    // heading.innerHTML = `
    //     <span id='logo-c'>C&#x26FAMP</span>
    //     <span id='logo-anion'>anion</span>
    //     `
    
    // // 'C' + '&#x26FA' + 'MPanion';
    // heading.addEventListener('click', renderHomePage)
    // headerContainer.appendChild(heading);

    const headingLogo = document.createElement('img');
    headingLogo.setAttribute('id', 'heading');
    headingLogo.src = "../images/logo.png"
    headingLogo.addEventListener('click', renderHomePage)
    headerContainer.appendChild(headingLogo);


    // made campanion title a link to home page instead
    // const homeButton = document.createElement("button");
    // homeButton.setAttribute('class', 'nav-button');
    // homeButton.setAttribute('id', 'homeButton');
    // homeButton.textContent = "Home Page";
    // homeButton.addEventListener('click', renderHomePage)
    // headerContainer.appendChild(homeButton);

    const aboutButton = document.createElement("button");
    aboutButton.setAttribute('class', 'nav-button');
    aboutButton.setAttribute('id', 'aboutButton');
    aboutButton.textContent = "About";
    headerContainer.appendChild(aboutButton);

    // removed since 
    // const reviewButton = document.createElement("button");
    // reviewButton.setAttribute('class', 'nav-button');
    // reviewButton.setAttribute('id', 'reviewButton');
    // reviewButton.textContent = "Add a Review";
    // reviewButton.addEventListener('click', renderAllCampsitesAZ)
    // headerContainer.appendChild(reviewButton);

    const addSiteButton = document.createElement("button");
    addSiteButton.setAttribute('class', 'nav-button');
    addSiteButton.setAttribute('id', 'addSiteButton');
    addSiteButton.textContent = "Add Campsite";
    headerContainer.appendChild(addSiteButton);

    const signupButton = document.createElement("button");
    signupButton.setAttribute('class', 'nav-button');
    signupButton.setAttribute('id', 'signUpButton');
    signupButton.textContent = "Sign Up";
    signupButton.addEventListener('click', renderSignUp)
    headerContainer.appendChild(signupButton);

    const loginButton = document.createElement("button");
    loginButton.setAttribute('class', 'nav-button');
    loginButton.setAttribute('id', 'logInButton');
    loginButton.textContent = "Log In";
    loginButton.addEventListener('click', renderLogin)
    headerContainer.appendChild(loginButton);

    // Check for loggedin user
    getUser()
    renderAddCampsite()
    renderAboutUs();

}
