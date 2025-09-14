<?php
// Lista de números
$numeros = ["5491140976763", "5491127398763", "5491127398447"];      
     

// Archivo para guardar contadores
$file = "contador.json";

// Si no existe el archivo, inicializamos
if (!file_exists($file)) {
    file_put_contents($file, json_encode([0,0,0]));
}

// Leer el estado actual
$data = json_decode(file_get_contents($file), true);

// Buscar el índice con menos asignaciones
$minIndex = array_search(min($data), $data);

// Sumar uno al seleccionado
$data[$minIndex]++;

// Guardar de nuevo
file_put_contents($file, json_encode($data));

// Armar link de WhatsApp
$mensaje = "Hola%20mi%20nombre%20es...";
$numero = $numeros[$minIndex];
$url = "https://wa.me/$numero?text=$mensaje";

// Redirigir al WhatsApp correcto
header("Location: $url");
exit;
