function validateForm()
{
	
		var IsValidInput = false;
	
		var Name = document.getElementById('txtName').value;
		var letters = /^[A-Za-z\s]+$/;
      if(Name.match(letters))
      {
		IsValidInput = true;
      }
      else
      {
		alert('Invalid Name entered.Please input alphabet characters only!');
		$('#txtName').focus();
		return false;
      }
	
	
	var phoneFormat = /^\d{10}$/;
	var PhoneNo = document.getElementById('txtNumber').value;
		if(PhoneNo.match(phoneFormat))
        {
			IsValidInput =  true;
        }
      else
        {
			alert("PhoneNo. Should be 10 digit only.");
			$('#txtNumber').focus();
			return false;
        }
	
	var emailId = document.getElementById('txtEmail').value;
	
	var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
	if(emailId.match(mailformat))
	{
		IsValidInput = true;
	}
	else
	{
		alert("You have entered an invalid email address!");
		$('#txtEmail').focus();
		return false;
	}
	
		
		var EmailMsg = document.getElementById('exampleFormControlTextarea1').value;
      if (EmailMsg == null || EmailMsg == "") {
         alert("Please enter message!!!");
         return false;
      }
}