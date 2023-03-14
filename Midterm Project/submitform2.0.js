function submitForm() {

    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const email_address = document.getElementById('email_address').value;

    var input = "";

    if(!(name === "")){
        input = name;
    }
    else if(!(email_address === "")){
        input = email_address;
    }
    else{
        input = "guest";
    }

    sessionStorage.setItem('input', input);

    return true;




}