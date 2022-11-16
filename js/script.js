const nextButton = document.querySelector('.btn-next');
const prevButton = document.querySelector('.btn-prev');
const steps = document.querySelectorAll('.step');
const form_steps = document.querySelectorAll('.form-step');





 let active = 1;





nextButton.addEventListener('click', (e) => {
	e.preventDefault();
   var fname=document.form.fname.value;  
    var lname=document.form.lname.value;  
    var date=document.form.day.value;  
    var month=document.form.month.value;
    var year=document.form.year.value;  
    var phone=document.form.phone.value;  
    var address=document.form.address.value;  
    var city=document.form.city.value;  
    var state=document.form.state.value;  
    var postalcode=document.form.postalcode.value;  
   var country=document.form.country.value; 
 
if (fname==""&&lname=="") {
    alert("Please Enter Your Personal Details");
    return false;
} 

else if (fname==null || fname==""){  
  alert("Please Enter First Name");

  return false;  
}else if(lname==null || lname==""){  
  alert("Please Enter Last Name");  
  return false;  
  } else if(date==""||month==""||year==""){  
  alert("Please Enter your date of birth");  
  return false;  
  }

  if(active==2){
    if (phone==""&&address==""&&city==""&&state==""&&postalcode=="") {
    alert("Please Enter your Contact Details");
    return false;
} 
  if(phone==""){  
  alert("Please Enter your phone");  
  return false;  
  }else if(address==""){  
  alert("Please Enter your address");  
  return false;  
  }else if(city==""){  
  alert("Please Enter your city");  
  return false;  
  }
  else if(state==""){  
  alert("Please Enter your state");  
  return false;  
  }
  else if(postalcode==""){  
  alert("Please Enter your postalcode");  
  return false;  
  } else if(country==""){  
  alert("Please select your country");  
  return false;  
  }
}





  

    active++;
    if (active > steps.length){
        active = steps.length;
       console.log("insode"); 

    }
    updateProgress();
})
prevButton.addEventListener('click', () => {
    active--;
    if(active < 1){
        active = 1;
    }
    updateProgress();
})

const updateProgress = () => {

    
    console.log('steps.length =>' + steps.length);
    console.log('active => ' + active);

    steps.forEach((step, i) => {
        if(i == (active-1)) {
            step.classList.add('active');
            form_steps[i].classList.add('active');
            console.log('i =>' +i);
        } else{
            step.classList.remove('active');
            form_steps[i].classList.remove('active');
        }
    });

    if (active == 1){
        prevButton.disabled = true;    
    } else if (active == steps.length){
        nextButton.disabled = true;
    } else {
        prevButton.disabled = false;
        nextButton.disabled = false;
    }
}





	
	
	
	
	
	
