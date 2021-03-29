<?php

include "./helpers/auth.php";

if ($_SERVER['REQUEST_METHOD'] === $STR_GET) {

  // Dummy content
  $contacts[] = [
    'id' => 0,
    'name' => "Caio Costa",
    'email' => "exemplo@email.com"
  ];
  $contacts[] = [
    'id' => 1,
    'name' => "Rafael Ribeiro",
    'email' => "rafael.ribeiro@br.nestle.com"
  ];
  $contacts[] = [
    'id' => 2,
    'name' => "Rafael Ribeiro Gmail",
    'email' => "rafaelribeiro.email@gmail.com"
  ];

  echo json_encode($contacts);

} else {
  echo $STR_ACCESS_DENIED;
}
