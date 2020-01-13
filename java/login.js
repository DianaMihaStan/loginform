
var emailInput=document.getElementById("emailInput");

var pswInput=document.getElementById("pswInput");

var uName=document.getElementById("user1").value="ghvvcg";
var uEmail=document.Myform.email
var uPsw=document.Myform.psw;

document.registrationForm.ageInputId.oninput = function(){
    document.registrationForm.ageOutputId.value = document.registrationForm.ageInputId.value;
 }
 
function validateEmail()
{
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(uEmail.value.match(mailformat))
    {
        return (true)
    }
    alert("You have entered an invalid email address!")
    return (false)
}

function CustomValidation()
{
    this.invalid=[];   // error messages go here
}

CustomValidation.prototype =
{
    addInvalidity: function(message)
    {
        this.invalid.push(message) // add error messages
    },
    getInvalid: function()
    {
        return this.invalid.join('. /n');
    },
    checkValidity: function()
    {
            if (input.value.lenght<3)  //check 1st rule for username
            {
                this.addInvalidity('Input needs to be at least 3 caracters long');
                var uName=document.querySelector('label[for="username"] li:nth-child(1)')
                uName.classList.add('invalid');
                uName.classList.remove('valid');
            }
            else
            {
                var uName=document.querySelector('label[for="username"] li:nth-child(1)')
                uName.classList.remove('invalid');
                uName.classList.add('valid'); 
            }

            if(input.value.match(/[^A-Za-z0-9]+/g))  //check 2nd rule for username
            {
                this.addInvalidity('Must contain only letters and numbers');
                var uName=document.querySelector('label[for="username"] li:nth-child(2)')
                uName.classList.add('invalid');
                uName.classList.remove('valid');
            }
            else
            {
                var uName=document.querySelector('label[for="username"] li:nth-child(2)')
                uName.classList.remove('invalid');
                uName.classList.add('valid'); 
            }

    }
    
};

var nameInput= document.getElementById("uNameInput");

nameInput.CustomValidation= new CustomValidation();



var inputs= document.querySelectorAll('input:not([type="submit"])');
for(var i=0< i<inputs.length,i++)
{
    nameInput.addEventListener('keyup', function(){
    
        nameInput.CustomValidation.checkValidity(this)
    })
}