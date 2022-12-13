<?php

$hostname = "https://databases-auth.000webhost.com/";
$bancodedados = "id20004793_sistemadenotas";
$usuario = "guizao";
$senha = "av7}U_Z|dT=\70ry";

$mysqli = new mysqli($hostname, $usuario, $senha, $bancodedados);
if($mysqli -> connect_errno)
{
	echo "falha ao conectar: (" . $mysqli->connect_errno . ") " . $mysqli->connect_error;
}