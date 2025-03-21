console.log('login add');


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
                document.getElementById("navbar-container").classList.add("hidden");
                document.getElementById("navbar-img").classList.add("hidden");

                document.getElementById("navbar").classList.remove("hidden");
                document.getElementById("section1").classList.remove("hidden");
                document.getElementById("section2").classList.remove("hidden");
                document.getElementById("footer").classList.remove("hidden");
                
            } else {
                alert('Wrong Password. Contact admin to get you Login code.')
            }
        } else {
            alert('Please tell your Name first.')
        }


    })