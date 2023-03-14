function submitForm() {
    const first_name = document.getElementById('first_name').value;
    const last_name = document.getElementById('last_name').value;
    const number_street = document.getElementById('number_street').value;
    const City = document.getElementById('City').value;
    const Zip_Code = document.getElementById('Zip_Code').value;
    const Check_in_Date = document.getElementById('Check-in_Date').value;
    const Check_out_Date = document.getElementById('Check-out_Date').value;
    const Number_People = document.getElementById('Number_People').value;
    const Room_Type = document.getElementById('Room_Type').value;
    const Phone = document.getElementById('Phone').value;
    const Email_Address = document.getElementById('Email_Address').value;
    const Payment_Method = document.getElementById('Payment_Method').value;
    const Card_Number = document.getElementById('Card_Number').value;
    const Special_Requests = document.getElementById('Special_Requests').value;
    const tax = 1.07;

    var total_charge = 0;
    const check_in = new Date(Check_in_Date);
    const check_out = new Date(Check_out_Date);
    var day = (check_out.getTime() - check_in.getTime()) / 86400000;

    switch(Room_Type){
        case "queen":
            total_charge = (150 * day) * tax;
            break;
        case "king":
            total_charge = (200 * day) * tax;
            break;
        case "suit":
            total_charge = (300 * day) * tax;
            break;
    }

    total_charge = total_charge.toFixed(2);

    sessionStorage.setItem('first_name', first_name);
    sessionStorage.setItem('last_name',last_name );
    sessionStorage.setItem('number_street', number_street);
    sessionStorage.setItem('City',City );
    sessionStorage.setItem('Zip_Code', Zip_Code);
    sessionStorage.setItem('Check-in_Date', Check_in_Date);
    sessionStorage.setItem('Check-out_Date', Check_out_Date);
    sessionStorage.setItem('Number_People', Number_People);
    sessionStorage.setItem('Room_Type', Room_Type);
    sessionStorage.setItem('Phone', Phone);
    sessionStorage.setItem('Email_Address', Email_Address);
    sessionStorage.setItem('Payment_Method', Payment_Method);
    sessionStorage.setItem('Card_Number', Card_Number);
    sessionStorage.setItem('Special_Requests', Special_Requests);
    sessionStorage.setItem('total_charge', total_charge);

	
    return true;
}