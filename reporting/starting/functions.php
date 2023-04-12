<?php

function format_jahr($jahr_monat)
{
	$jahr = substr($jahr_monat, 2, 2);

	return $jahr;
}

function format_kw($jahr_kw)
{
	$kw = substr($jahr_kw, 8, 2);

	return $kw;
}

function format_monat($jahr_monat)
{
	$monate = array('Jan', 'Feb', 'Mrz', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dez');
	$monat = substr($jahr_monat, 5, 2);
	$monat = preg_replace('/^0/','',$monat);
	$monat--;
	$monat = $monate[$monat];

	return $monat;
}

function php_2_arrays_zu_js($php_array)
{
	$js_array = '';

	for($i = 0; $i < count($php_array); $i++)
	{
		if($i < count($php_array) - 1)
		{
			$js_array.= $php_array[$i].', ';
		}
		else
		{
			$js_array.= $php_array[$i];
		}
	}

	echo $js_array;
}

function php_array_zu_js($php_array)
{
	$js_array = '';

	for($i = 0; $i < count($php_array); $i++)
	{
		if($i < count($php_array) - 1)
		{
			$js_array.= '"'.$php_array[$i].'", ';
		}
		else
		{
			$js_array.= '"'.$php_array[$i].'"';
		}
	}

	echo $js_array;
}

function tausend($zahl)
{
	$tausender = $zahl / 1000;
	$tausender = round($tausender, 0);

	return $tausender;
}

?>