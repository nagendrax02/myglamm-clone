function register_user(number){
    let mobile = number;
    let user_name = document.getElementById('user-name').value;
    let user_email = document.getElementById('user-email').value;
    let users = JSON.parse (localStorage.getItem('data'));
    let user = {
        name: user_name,
        email:user_email,
        number: mobile
    }
    if(user.name=='' && user.email == '' && user.number == ''){
        alert('please enter all the details ');
    }
    else if(user.name =='' || user.email == '' || user.number == ''){
        alert('Please enter all the details')
    }
    else{
        users.push(user);
        localStorage.setItem('data', JSON.stringify(users));
    }
  
 
}

