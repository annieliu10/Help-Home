
/// Hannah version///
// $('#loginForm').on('submit',(e) => {
//     e.preventDefault();
//     let hash = {};
//     let arg = ['name','email','password'];
//     arg.forEach((name) => {
//         let value = $('#loginForm').find(`[name= ${name}]`).val();
//         hash[name] = value;
//     })
//     $('#loginForm').find('.error').each((index,span) => {
//         $(span).text('');
//     })
//     if(hash['email'] === ''){
//         $('#loginForm').find('[name = "email"]').siblings('.error').text('Please enter email');
//         return
//     }
//      if(hash['password'] === ''){
//         $('#loginForm').find('[name = "password"]').siblings('.error').text('Please enter password');
//         return
//     }
//     $.post('/login',hash).then((response) =>{console.log(response)},
//         (request) => {
//         let {errors} = request.responseJSON;
//         if(errors.email  &&  errors.email === 'invalid'){
//            $('#loginForm').find('[name = "email"]').siblings('.error').text('Invalid Email');
//         }
//         })
//     })

//Ruby fetch
console.log('login js is working')
// const Swal = require('sweetalert2')
const loginForm = document.getElementById('loginForm')
loginForm.addEventListener('submit', (evt) => {
     evt.preventDefault()
     let username = evt.target['name'].value
     let password = evt.target['password'].value
     fetch("http://localhost:3000/login", {
        method: 'POST',
        headers: {
            "content-type": "application/json",
            "accept": "application/json"
        },
        body: JSON.stringify(
            {
                username: username,
                password: password
            }
        )
    })
    .then(r => r.json())
    .then(data => {
        console.log(data)
        if(data.errors){
        //     Swal.fire({
        //         icon: 'error',
        //         title: 'Oops...',
        //         text: 'Something went wrong!'
                
        //       })

        alert(data.errors)
        }else{
        localStorage.setItem('id', data.id)
        localStorage.setItem('token', data.token)
        window.location.assign('profile-page.html')
    }

    })
}
)