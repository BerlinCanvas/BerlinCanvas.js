<?php

$input_datum = '';
$ok = 'ja';

if(empty($_POST['input_datum']))
{
	$ok = 'leer';
}
else
{
	$input_datum = $_POST['input_datum'];

	if($input_datum == '')
	{
		$ok = 'Bitte geben Sie ein Datum ein.';
	}
	elseif(strlen($input_datum) != 10)
	{
		$ok = 'Ihre Eingabe im Feld "Datum" hat eine nicht korrekte Anzahl an Zeichen.';
	}
	elseif(!preg_match('/^(2022-12|2023-0[1-5])-(0[1-9]|[1-2][0-9]|3[0-1])$/',$input_datum))
	{
		$ok = 'Bitte geben Sie ein Datum zwischen Dezember 2022 und Mai 2023 ein.';
	}
	elseif(preg_match('/^2023-02-\d\d$/',$input_datum))
	{
		if(!preg_match('/^2023-02-(0[1-9]|1[0-9]|2[0-8])$/',$input_datum))
		{
			$ok = 'Der Februar 2023 hat nur 28 Tage.';
		}
	}
	elseif(preg_match('/^2023-04-\d\d$/',$input_datum))
	{
		if(!preg_match('/^2023-04-(0[1-9]|[1-2][0-9]|30)$/',$input_datum))
		{
			$ok = 'Der April 2023 hat nur 30 Tage.';
		}
	}
}

?>