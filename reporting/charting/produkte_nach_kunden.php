<?php

$anzahl_monate = 12;

$query = 'SELECT p_name, SUM(anz) AS anzahl_bestellungen FROM(';

for($i = 0; $i < $anzahl_monate; $i++)
{
	$query.= '
	SELECT p_name, COUNT(*) AS anz
	FROM bestellungen b, kunden k, produkte p
	WHERE b.produkt = p_nummer
	AND b.k_nummer = k.k_nummer
	AND SUBSTR(bestelldatum,1,7) = "'.$input_jahr_monat[$i].'"
	AND p_u_nummer = "Privatkunde"
	GROUP BY p_name';

	if($i < $anzahl_monate - 1)
	{
		$query.= ' UNION ALL';
	}
}

$query.= ') tabelle_in_klammern
GROUP BY p_name
ORDER BY p_name ASC';

$result = mysqli_query($connection, $query);

$anzahl_der_produkte_nach_p_kunden = array();
$namen_der_produkte_nach_p_kunden = array();

while($row = mysqli_fetch_array($result))
{
	$anzahl_der_produkte_nach_p_kunden[] = intval($row['anzahl_bestellungen']);
	$namen_der_produkte_nach_p_kunden[] = $row['p_name'];
}



$query = 'SELECT p_name, SUM(anz) AS anzahl_bestellungen FROM(';

for($i = 0; $i < $anzahl_monate; $i++)
{
	$query.= '
	SELECT p_name, COUNT(*) AS anz
	FROM bestellungen b, kunden k, produkte p
	WHERE b.produkt = p_nummer
	AND b.k_nummer = k.k_nummer
	AND SUBSTR(bestelldatum,1,7) = "'.$input_jahr_monat[$i].'"
	AND SUBSTR(p_u_nummer,1,1) = "u"
	GROUP BY p_name';

	if($i < $anzahl_monate - 1)
	{
		$query.= ' UNION ALL';
	}
}

$query.= ') tabelle_in_klammern
GROUP BY p_name
ORDER BY p_name ASC';

$result = mysqli_query($connection, $query);

$anzahl_der_produkte_nach_u_kunden = array();

while($row = mysqli_fetch_array($result))
{
	$anzahl_der_produkte_nach_u_kunden[] = intval($row['anzahl_bestellungen']);

	if($row['p_name'] == '1 Jahr standard')
	{
		$anzahl_der_produkte_nach_u_kunden[] = 0;
	}
	elseif($row['p_name'] == '3 Monate standard')
	{
		$anzahl_der_produkte_nach_u_kunden[] = 0;
	}
}

?>