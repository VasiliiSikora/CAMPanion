function renderAboutUs() {    
    const aboutUsBtn = document.getElementById('aboutButton');
    aboutUsBtn.addEventListener("click", aboutUs)
    }
    
    function aboutUs() {
        const abtpage = document.getElementById('page');
        abtpage.innerHTML= "";
    
        const abtheading = document.createElement('h2');
        abtheading.textContent = "About Us";
    
        const text = document.createElement("div");
        text.setAttribute('class', 'about');
        text.innerHTML = `
        <p>Hi, welcome to Campanion!</p>
        <p>We are Will, Kim, and Amanda, 3 people who cover the camping spectrum from "prefers glamping" to "Bear Grylls".
        We are so happy to have you here, and hope that you find this site useful.</p>
        <p>We are always looking for ways to improve, and adding new content is one of those ways. So if you've stayed at one of the campsites listed, please leave a review.
        It helps other campers out. Or if you've stayed somewhere that isn't listed on the site yet, please add it in with the "Add a Campsite" feature.</p>
        <p>Thanks for finding us and Happy Camping!</p>
        `

        let img1 = document.createElement("img");
            img1.setAttribute('class', 'about-image');
        img1.src = "https://cdn.pixabay.com/photo/2017/08/17/08/08/camp-2650359_1280.jpg"
        abtpage.replaceChildren(abtheading, text, img1)
    
    }