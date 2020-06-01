<?php
  
    $name = $_POST["name"];
    $mail = $_POST["mail"];
  $phone = $_POST["phone"];


        $to = "jb.daniel.m@gmail.com"; 
        $subject = "Письмо с обратной связи"; 
        $headers = "MIME-Version: 1.0\r\n";
        $headers .= "Content-type: text/html; charset=utf-8\r\n";
        $headers .= "From:  mail@cgscrovlya29.ru \r\n";
        $message .= "Имя : ".$name."\n";
        $message .= " E-mail: ".$mail."\n";
  $message .= " Телефон: ".$phone."\n";


        $send = mail($to, $subject, $message, $headers);

        if ($send == "true")
        {
            echo "Ваше сообщение отправлено.\r\n";
        }
        
        else
        {
            echo "Не удалось отправить, попробуйте снова!";
        }

?>
