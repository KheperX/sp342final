console.log(1)
function checkNID() {
  let nid = (document.getElementById("nid").value).trim();
  if (nid.length != 13) {
    return false;
  } else {
	return true;
  }
}
function checkfname() {
	let fname = (document.getElementById("fname").value).trim();
	if (fname.length > 3) {
	  return true;
	} else {
	  return false;
	}
}
  function checklname() {
	let fname = (document.getElementById("lname").value).trim();
	if (fname.length > 3) {
	  return true;
	} else {
	  return false;
	}
  }

function checkTicketNo() {
  let num = (document.getElementById("ticknum").value).trim();
  if (num < 1 ||num > 5 && num.length != 0) {
    return false;
  } else {
	return true;
  }
}

function validateForm(){
	if(!checkNID()){
		console.log("if")
	  alert("Invalid value for National ID!");
	  document.getElementById("nid").focus();
	  return false;
	}else{
		if(!checkTicketNo()){
		  alert("Invalid value for No.of tickets!!");
		  document.getElementById("ticknum").focus();
		  return false;
		}else{
			if(!checkfname()){
			  alert("input your frist name!!!!");
			  document.getElementById("fname").focus();
			  return false;
			}else{
				if(!checklname()){
				  alert("input your last name!!!!");
				  document.getElementById("lname").focus();
				  return false;
		}else{
			
			total = priceCalculate();
			alert("Total price for this booking is "+total+" USD");
			return false;
		
		}
				
		}
	}}}
