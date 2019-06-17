<?php
$to = "lenbar20@gmail.com"; // емайл получателя данных из формы 
$tema = "Form"; // тема полученного емайла 
$message = "Company name: ".$_POST['companyName']."<br>";//присвоить переменной значение, полученное из формы name=name
$message .= "Contact phone: ".$_POST['phone']."<br>"; //полученное из формы name=phone
$message .= "from: ".$_POST['from']."<br>"; //полученное из формы name=phone
$message .= "to: ".$_POST['to']."<br>"; //полученное из формы name=phone
$message .= "Cargo characteristics: ".$_POST['cargo']."<br>"; //полученное из формы name=phone
$message .= "Towage requirements: ".$_POST['towage']."<br>"; //полученное из формы name=phone
$message .= "Attachment: ".$_POST['file']."<br>"; //полученное из формы name=message
$headers  = 'MIME-Version: 1.0' . "\r\n"; // заголовок соответствует формату плюс символ перевода строки
  $headers .= 'Content-type: text/html; charset=utf-8' . "\r\n"; // указывает на тип посылаемого контента
mail($to, $tema, $message, $headers); //отправляет получателю на емайл значения переменных
?>