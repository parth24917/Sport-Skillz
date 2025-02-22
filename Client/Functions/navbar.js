document.addEventListener("DOMContentLoaded", function() {
    const navHTML = `
        <nav>
            <label class="glow">Sport&SkillZ</label>
            <ul>
                <li><a href='index.html' id='homeLink'>Home</a></li>
                <li><a href='about.html' id='aboutLink'>About us</a></li>
                <li><a href='Register.html' id='registerLink'>Register</a></li>
                 <li><a href='loginpage.html' id='loginLink'>Login</a></li>
            </ul>
        </nav>`
    ;
    document.body.insertAdjacentHTML('afterbegin', navHTML);

    // Get the current URL
    const currentUrl = window.location.href;

    // Select the navigation links
    const homeLink = document.getElementById('homeLink');
    const aboutLink = document.getElementById('aboutLink');
    const registerLink = document.getElementById('registerLink');
    const loginLink = document.getElementById('loginLink')

    // Remove 'active' class from all links
    homeLink.classList.remove('active');
    aboutLink.classList.remove('active');
    registerLink.classList.remove('active');
    loginLink.classList.remove('active');

    // Add 'active' class to the current link
    if (currentUrl.includes('Register.html')) {
        registerLink.classList.add('active');
    } else if (currentUrl.includes('about.html')) {
        aboutLink.classList.add('active');
    } else if(currentUrl.includes('index.html')){
        homeLink.classList.add('active');
    }
      else{
        loginLink.classList.add('active');
      }
});