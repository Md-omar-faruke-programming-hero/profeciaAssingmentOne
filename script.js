console.log("keol")
const create = document.getElementById('create').addEventListener('click', () => {

    const userName = document.getElementById('userName').value;
    const passWord = document.getElementById('passWord').value;

    const userInfo = JSON.parse(localStorage.getItem('information')) || [];



    let checkUser = userInfo.length &&
        JSON.parse(localStorage.getItem('information')).some(data =>
            data.userName.toLowerCase() == userName.toLowerCase()
        );

    if (!checkUser) {
        userInfo.push({ userName, passWord })
        localStorage.setItem('information', JSON.stringify(userInfo))

        swal("Account Create successfully!");


        location.href = '/pages/index.html'


    }
    else {
        swal("User already exist ,try with diffrent name!");
    }

})


document.getElementById('signin').addEventListener('click', () => {
    console.log("hellllo")
})