<?php

$jahr = substr($input_datum, 0, 4);
$monat = substr($input_datum, 5, 2);

$input_jahr_monat = array();
$monate_in_die_vergangenheit = 24;

for($i = 0; $i < $monate_in_die_vergangenheit; $i++)
{
	$input_jahr_monat[] = $jahr.'-'.$monat;

	if($monat == '01')
	{
		$jahr -= 1;
		$monat = '12';
	}
	else
	{
		$monat--;

		if(strlen($monat) == 1)
		{
			$monat = '0'.$monat;
		}
	}
}

?>