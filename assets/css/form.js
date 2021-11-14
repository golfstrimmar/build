
















$("#sendmail").on("click", function () {
    var name = $("#name").val();
    var phone = $("#phone").val();

// let sendmail = document.querySelector('#sendmail ');
// let  name =   document.querySelector('#name ').value;;
// let phone  =   document.querySelector('#phone ').value;;
// let email  =   document.querySelector('#email ').value;;
//
// if(name === ''){
//   alert(" Введите имя")
// }
//     if(phone === ''){
//     alert(" Введите телефон")
// }
//     if(email === ''){
//     alert(" Введите email")
// }

$.ajax({
url:  'ajax/mail.php',
    type: 'POST',
    cache: false,
    data: {  'name' : name, 'phone': phone },
    dataType: 'html',
        beforeSend: function(){
            // $('#sendmail').prop("disabled", true)
        },
        success: function(data){
            if(data.success == true){
                $("#mailForm").trigger("reset");
                alert(data);
                // $('#sendmail').prop("disabled", false)
            }else{
                alert("были ошибки");
            }
    }
})

});