

const signup = document.getElementById('signup').addEventListener('click', () => {
    location.href = '/pages/signUp.html'
})

const signin = document.getElementById('signin').addEventListener('click', () => {

    const user = document.getElementById('user').value;
    const pass = document.getElementById('pass').value;

    const userInfo = JSON.parse(localStorage.getItem('information')) || [];

    console.log(user, pass)

    let checkUser = userInfo.length &&
        JSON.parse(localStorage.getItem('information')).some(data =>
            data.userName.toLowerCase() == user.toLowerCase() && data.passWord.toLowerCase() == pass.toLowerCase()
        );

    if (checkUser) {
        swal("Login successfully!");
        setTimeout(() => {
            location.href = '/pages/Home.html'
        }, 3000)




    }
    else {
        swal("User not exist ,please sign Up !");
    }

})