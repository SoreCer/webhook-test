<?php

$method = $_SERVER['REQUEST_METHOD'];

if($method == "POST"){
      $requestBody = file_get_contents('php://input');
      $json = json_decode($requestBody);

      $text = $json->result->parameters->text;

      switch ($text) {
        case 'hola':
          $speech = "Hola! Un placer conocerte!";
          break;
        case 'chau':
          $speech = "Hasta pronto!";
          break;

        default:
          $speech = "No entendí.¿Me lo repetirías?";
          break;
      }

      $response = new \stdClass();
      $response->speech = $speech;
      $response->displayText = $speech;
      $response->source = "webhook";
      echo json_encode($response);

}else{
     echo "Method not allowed";
}








 ?>
