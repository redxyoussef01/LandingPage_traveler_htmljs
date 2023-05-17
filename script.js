const $body = $("body");
const $header = $(".page-header");
const $navCollapse = $(".navbar-collapse");
const scrollClass = "scroll";

var users = [{ username:'redx', Firstname:"youssef" , Lastname:"rais", email:"yourais00@gmail.com" ,password:"azert123"},
             { username:'zayzay', Firstname:"Zineb" ,Lastname : "Zouibaa" , email:"Zaineb00@gmail.com" , password: "123456789" } ]



$(window).on("scroll", () => {
  if (this.matchMedia("(min-width: 992px)").matches) {
    const scrollY = $(this).scrollTop();
    scrollY > 0
      ? $body.addClass(scrollClass)
      : $body.removeClass(scrollClass);
  } else {
    $body.removeClass(scrollClass);
  }
});

$(".page-header .nav-link, .navbar-brand").on("click", function(e) {
  e.preventDefault();
  const href = $(this).attr("href");
  $("html, body").animate({
    scrollTop: $(href).offset().top - 71
  }, 600);
});

function SignUp(){
    var Firstname = document.getElementById("firstName").value;
    var Lastname = document.getElementById("lastName").value;
    var Email = document.getElementById("email").value;
    var Password = document.getElementById("password").value;
    var CPassword = document.getElementById("confirmPassword").value;
    console.log(Firstname);
    console.log(Lastname);
    console.log(Email);
    console.log(Password);
    console.log(CPassword);
   
   

      if(PassConfirm() === true){
        var users= [];
    var Gusername = "";
    for(var i=0 ; i<2 ;i++){
    Gusername +=  Firstname.charAt(i);
    }

    for(var i=0 ; i<2 ;i++){
    Gusername +=  Lastname.charAt(i);
    }
    console.log(Gusername);

    var user = {};

    user.Firstname  = Firstname ;
    user.Lastname  = Lastname;
    user.Email = Email ;
    user.Password = Password ; 
    user.Gusername = Gusername;

        users.push(user);

        console.log(users);
      }else{
  return false;
      }
    

  
}


function PassConfirm(){
    var Password = document.getElementById("password").value;
    var CPassword = document.getElementById("confirmPassword").value;

    if(Password == CPassword){
    return true;
    }else{
    document.getElementById("Confirm").innerHTML ="Password do not match";
    document.getElementById("password").value ="";
    document.getElementById("confirmPassword").value ="";
    }
}


        


              function showPass(){

                var passInput = document.getElementById('password');

                if(passInput.type == 'password'){
                    passInput.type = 'text'
                }else if(passInput.type == 'text'){
                    passInput.type = 'password'
                }
             }


            
            function login(){
                var userValue = document.getElementById('email').value;
                var passValue = document.getElementById('password').value;
               
              for(var i=0; i<users.length;i++){

                    if((userValue == users[i].username && passValue == users[i].password )||(userValue == users[i].email && passValue == users[i].password)){
                        return true;
                    }
                }
                document.getElementById('loginmsg').innerHTML = 'username and password do not match';
                document.getElementById('email').value="";
                document.getElementById('password').value = "";
                        return false;
             }
            