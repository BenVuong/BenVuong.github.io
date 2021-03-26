var usernameValidation, passwordValidation, passwordMatchValidation,fNameValidation, lNameValidation, addressValidation,
cityValidation, stateValidation, zipValidation, pNumValidation, emailValidation;

function finalCheck()
{
    if(usernameValidation==false || passwordValidation==false || passwordMatchValidation==false || fNameValidation==false ||
    lNameValidation == false || addressValidation == false || cityValidation == false || stateValidation ==false || zipValidation ==false
    || pNumValidation == false || emailValidation == false)
    {

        alert('One or more of the fields was entered in incorrectly');
        return false;
    }
    else {
        alert('Thank you for registering!')
    }

}

function matchPassword()
{

    var password1 = document.getElementById("password").value;
    var password2 = document.getElementById("repeatPassword").value;
    if (password2 == '') {
        document.getElementById("match").innerHTML = "Required";
        document.getElementById("match").style.color = "red";
        passwordMatchValidation=false;

    }
    else if (password1 == password2) {
        document.getElementById("match").innerHTML = "Valid";
        document.getElementById("match").style.color = "green";
        passwordMatchValidation=true;

    }
    else{

        document.getElementById("match").innerHTML="no match";
        document.getElementById("match").style.color = "red";
        passwordMatchValidation=false;
    }
}
function checkPassword()
{
    var password = document.getElementById("password").value;
    var re = new RegExp("^(?=.{8,}$)(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[0-9])(?=.*?\W).*$");
    if(password == '')
    {
        document.getElementById("checkPass").innerHTML="Required";
        document.getElementById("checkPass").style.color="red"
        passwordValidation=false;

    }
    else if(re.test(password))
    {
        document.getElementById("checkPass").innerHTML="Valid";
        document.getElementById("checkPass").style.color="green";
        passwordValidation=true;
    }
    else
    {
        document.getElementById("checkPass").innerHTML="Not Valid, Your password needs 1 capital, 1 lowercase, 1 digit, and 1 special character";
        document.getElementById("checkPass").style.color="red"
        passwordValidation=false;

    }

}

function checkUsername()
{
    var username = document.getElementById("username").value;

    if(username == '')
    {
        document.getElementById("checkUserName").innerHTML="Required";
        document.getElementById("checkUserName").style.color="red"
        usernameValidation=false;
    }
    else if(username.length<6)
    {
        document.getElementById("checkUserName").innerHTML="Not Valid (Minimum length is 6)" + " current length is " + username.length ;
        document.getElementById("checkUserName").style.color="red";
        usernameValidation=false;
    }
    else
    {
        document.getElementById("checkUserName").innerHTML="Valid";
        document.getElementById("checkUserName").style.color="Green";
        usernameValidation=true;
    }
}

function checkEmail()
{
    var email = document.getElementById("email").value;
    var re = new RegExp("[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}");
    if(email == '')
    {
        document.getElementById("checkEMAIL").innerHTML="Required";
        document.getElementById("checkEMAIL").style.color="red";
        emailValidation=false;
    }
    else if(re.test(email))
    {
        document.getElementById("checkEMAIL").innerHTML="Valid";
        document.getElementById("checkEMAIL").style.color="green";
        emailValidation=true;
    }
    else
    {
        document.getElementById("checkEMAIL").innerHTML="Not Valid needs to be in the email@domain.com format";
        document.getElementById("checkEMAIL").style.color="red";
        emailValidation=false;
    }
}

function checkFirstName()
{
    var firstName = document.getElementById("name").value;
    if(firstName == '')
    {
        document.getElementById("checkFirstName").innerHTML="Required";
        document.getElementById("checkFirstName").style.color="red";
        fNameValidation=false;
    }
    else
    {
        document.getElementById("checkFirstName").innerHTML="Valid";
        document.getElementById("checkFirstName").style.color="green";
        fNameValidation=true;
    }
}

function checkLastName()
{
    var firstName = document.getElementById("lastName").value;
    if(firstName == '')
    {
        document.getElementById("checkLastName").innerHTML="Required";
        document.getElementById("checkLastName").style.color="red";
        lNameValidation=false;
    }
    else
    {
        document.getElementById("checkLastName").innerHTML="Valid";
        document.getElementById("checkLastName").style.color="green";
        lNameValidation=true;
    }
}

function checkCity() {
    var city = document.getElementById("City").value;
    if (city == '') {
        document.getElementById("checkCity").innerHTML = "Required";
        document.getElementById("checkCity").style.color = "red";
        cityValidation=false;

    }
    else
    {
        document.getElementById("checkCity").innerHTML = "Valid";
        document.getElementById("checkCity").style.color = "green";
        cityValidation=true;
    }

}

function checkAddress()
{
    var address = document.getElementById("addressLine1").value;
    if(address == '')
    {
        document.getElementById("checkAddress").innerHTML = "Required";
        document.getElementById("checkAddress").style.color = "red";
        addressValidation=false;
    }
    else
    {
        document.getElementById("checkAddress").innerHTML = "Valid";
        document.getElementById("checkAddress").style.color = "green";
        addressValidation=true;
    }
}

function checkState()
{
    var state = document.getElementById("state").value;
    if(state == '')
    {
        document.getElementById("checkState").innerHTML = "Required";
        document.getElementById("checkState").style.color = "red";
        stateValidation=false;
    }
    else
    {
        document.getElementById("checkState").innerHTML = "Valid";
        document.getElementById("checkState").style.color = "Green";
        stateValidation=true;
    }
}

function checkZIP()
{
    var reg = new RegExp('^[0-9]+$');
    var zip = document.getElementById("zip").value;
    if(zip == '')
    {
        document.getElementById("checkZIP").innerHTML="Required";
        document.getElementById("checkZIP").style.color = "red";
        zipValidation=false;
    }
    else if (zip.length < 5)
    {
        document.getElementById("checkZIP").innerHTML="Minimum length is 5";
        document.getElementById("checkZIP").style.color = "red";
        zipValidation=false;
    }
    else
    {
        if(reg.test(zip))
        {
            document.getElementById("checkZIP").innerHTML="Valid";
            document.getElementById("checkZIP").style.color = "green";
            zipValidation=true;
            if(zip.length==9)
            {
                var originalString = zip;
                var stringToAdd = "-";
                document.getElementById("zip").value = originalString.slice(0,5)+stringToAdd+originalString.slice(5);
            }
        }
        else
        {
            document.getElementById("checkZIP").innerHTML="Invalid Wrong Format Only Numbers";
            document.getElementById("checkZIP").style.color = "red";
            zipValidation=false;
        }
    }
}

function checkPhoneNumber()
{
    var reg = new RegExp('^[0-9]*$');
    var phoneNumber = document.getElementById("tel").value;
    if(phoneNumber == '')
    {
        document.getElementById("checkPhoneNumber").innerHTML="Required";
        document.getElementById("checkPhoneNumber").style.color = "red";
        pNumValidation=false;
    }
    else if (phoneNumber.length <10)
    {
        document.getElementById("checkPhoneNumber").innerHTML="Minimum length is 10";
        document.getElementById("checkPhoneNumber").style.color = "red";
        pNumValidation=false;
    }
    else
    {
        if(reg.test(phoneNumber))
        {
            document.getElementById("checkPhoneNumber").innerHTML="Valid";
            document.getElementById("checkPhoneNumber").style.color = "green";
            var originalString = phoneNumber;
            var stringToAdd ="-";
            phoneNumber = originalString.slice(0,3)+stringToAdd+originalString.slice(3,6)+stringToAdd+originalString.slice(6);
            document.getElementById("tel").value = phoneNumber;
            pNumValidation=true;

        }
        else
        {
            document.getElementById("checkPhoneNumber").innerHTML="Invalid Wrong Format Only Numbers (no extra characters needed)";
            document.getElementById("checkPhoneNumber").style.color = "red";
            pNumValidation=false;
        }
    }
}


