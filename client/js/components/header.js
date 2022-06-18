function renderHeader() {
    const headerContainer = document.getElementById("header");
    headerContainer.innerHTML=""
    
    const heading = document.createElement("h1");
    heading.setAttribute('id', 'heading');
    heading.textContent = "CAMPanion";
    headerContainer.appendChild(heading);

    const homeButton = document.createElement("button");
    homeButton.setAttribute('class', 'nav-button');
    homeButton.setAttribute('id', 'homeButton');
    homeButton.textContent = "Home Page";
    homeButton.addEventListener('click', renderHomePage)
    headerContainer.appendChild(homeButton);

    const aboutButton = document.createElement("button");
    aboutButton.setAttribute('class', 'nav-button');
    aboutButton.setAttribute('id', 'aboutButton');
    aboutButton.textContent = "About";
    headerContainer.appendChild(aboutButton);

    const reviewButton = document.createElement("button");
    reviewButton.setAttribute('class', 'nav-button');
    reviewButton.setAttribute('id', 'reviewButton');
    reviewButton.textContent = "Add a Review";
    reviewButton.addEventListener('click', renderAllCampsitesAZ)
    headerContainer.appendChild(reviewButton);

    const addSiteButton = document.createElement("button");
    addSiteButton.setAttribute('class', 'nav-button');
    addSiteButton.setAttribute('id', 'addSiteButton');
    addSiteButton.textContent = "Add a Campsite";
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
}
