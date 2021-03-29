<?php

include "./helpers/auth.php";

if ($_SERVER['REQUEST_METHOD'] === $STR_POST) {

  $subject = $_POST["SUBJECT"];
  $recipient = $_POST["RECIPIENT"];
  $sender = $_POST["SENDER"];
  $message = $_POST["MESSAGE"];

  $headers  = "MIME-Version: 1.0\r\n";
  $headers .= "Content-type: text/html; charset=iso-8859-1\r\n";
  $headers .= "From: $sender\r\n";
  $headers .= "Return-Path: $recipient\r\n";
  $headers .= "Reply-to: $sender\r\n";
  $status = "false";

  if ( mail($recipient, $subject, $message, $headers) ) {
    echo $STR_EMAIL_SENT;
  } else  {
    echo $STR_EMAIL_NOSENT;
  }

} else {
  echo $STR_ACCESS_DENIED;
}