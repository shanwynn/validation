function checkForm(form)
{
  if(form.username.length < 7 || form.username.length > 26){
    alert("Username must be more than 7 or less than 26 characters.");
    form.username.focus();
    return false;
  }

re = /[@],[.]/;
  if(!re.test(form.email.value)) {
    alert("Email must contain @ and .");
    form.email.focus();
    return false;
  }

re = /[0-9],[a-z]/;
  if(!re.test(form.password.value)) {
    alert("Password must contain a number and letter.");
    form.password.focus();
    return false;
  }
}
