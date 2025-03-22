console.log('login add');

// login
const loginBtn = document.getElementById("login-btn")
    .addEventListener('click', function () {
        // console.log("hello btn");

        const loginName = document.getElementById("login-name").value;
        // console.log(loginName);

        const loginPassword = document.getElementById("login-password").value;
        const convertedPassword = parseInt(loginPassword);
        console.log(loginName, convertedPassword);

        if (loginName.length != 0) {
            if (convertedPassword === 123456) {
                document.getElementById("banner-container").classList.add("hidden");
                document.getElementById("banner-img").classList.add("hidden");

                document.getElementById("navbar").classList.remove("hidden");
                document.getElementById("section1").classList.remove("hidden");
                document.getElementById("section2").classList.remove("hidden");

            } else {
                alert('Wrong Password. Contact admin to get you Login code.')
            }
        } else {
            alert('Please tell your Name first.')
        }

    })


// logout
const logoutBtn = document.getElementById("logout-btn")
    .addEventListener('click', function (event) {
        document.getElementById("banner-container").classList.remove("hidden");
        document.getElementById("banner-img").classList.remove("hidden");

        document.getElementById("navbar").classList.add("hidden");
        document.getElementById("section1").classList.add("hidden");
        document.getElementById("section2").classList.add("hidden");
        
        window.location.reload();
    })