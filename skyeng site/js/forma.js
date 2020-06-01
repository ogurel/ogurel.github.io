$(function(){
    $('.forma__submit').click(function () {

        var name = $('.forma input[name="name"]').val();
        var phone = $('.forma input[name="phone"]').val();
        var mail = $('.forma input[name="mail"]').val();
    

        if (name !== '' && phone.length == 11) {

            $.ajax({
                url: "send.php",
                type: "post",
                data: {
                    "name": name,
                    "mail": mail,
                    "phone": phone,
                 
                },
                error: function () {
                    alert('Произошла ошибка')
                },

                beforeSend: function () {

                },
                success: function (result) {
                    alert('Ваша заявка отправлена!');
                    $('.forma input').val('');
                    window.open('thank.html');

                }
            });
        } else {
            alert('Поле имени и телефона(11 цифр) обязательны для заполнения')
        }

    });
}) 
