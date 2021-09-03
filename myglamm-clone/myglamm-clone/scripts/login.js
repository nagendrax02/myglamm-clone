function log_in(){
    let mobile = document.getElementById("number").value;
    
    let arr = localStorage.getItem('data');
    const users = {
        name: 'guru',
        email: 'gurur@1.com',
        number: '75340765564'
    } 

    if(arr == null){
        arr = [];
        // create_user_detail_modal(mobile);
        arr.push(users);
        localStorage.setItem('data', JSON.stringify(arr));
       // console.log(arr)
    }else{
     let user = JSON.parse(localStorage.getItem("data"));
        for(let i=0 ; i<user.length ; i++){
            if(user[i].number == mobile){
               let mid_section_div = document.getElementById('mid-section')
                let ul = document.createElement('ul');
                let li_user_name = document.createElement('li');
                li_user_name.textContent = user[i].name;
                let li_dashboard = document.createElement('li');
                let li_logout = document.createElement('li');
                ul.append(li_user_name,li_dashboard,li_logout)
                
              
                mid_section_div.append(ul);
                let  register_div = document.getElementById('register-box');
            }
            else{
                if(mobile ==''){
                    alert('Please Enter mobile Number');
                }else{
                    create_user_detail_modal(mobile);
                }
            }
        }
     
    }
}
function register_user(mobile){
    let user_name = document.getElementById('user-name').value;
    let user_email = document.getElementById('user-email').value;
    console.log(user_name, user_email)
}