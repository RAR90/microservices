<?php

include "request_header.php";
include "strings.php";

$_FILE_POST = null;
$_FILE_POST = json_decode(file_get_contents('php://input'), true);
$_POST = $_POST ? $_POST : $_FILE_POST;

$auth = false;

$token = request_header("Token");

$dummy_token = "&*IUHK!@#$%&*45()ihjkhiuiuiIUY6JE45H@*&*&*764587yiu5jhkj";

if ($token == $dummy_token) {
  $auth = true;
} else {
  echo $STR_ACCESS_DENIED;
  exit();
}

