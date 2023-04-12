<?php

$anzahl_monate = 12;

$query = 'SELECT * FROM(';

for($i = 0; $i < $anzahl_monate; $i++)
{
	$query.= '
	SELECT IFNULL(SUBSTR(bestelldatum,1,7), "'.$input_jahr_monat[$i].'") AS jahr_monat, COUNT(*) AS anzahl_bestellungen
	FROM bestellungen b, kunden k
	WHERE b.k_nummer = k.k_nummer
	AND SUBSTR(bestelldatum,1,7) = "'.$input_jahr_monat[$i].'"';

	if($i < $anzahl_monate - 1)
	{
		$query.= ' UNION ALL';
	}
}

$query.= ') tabelle_in_klammern
GROUP BY jahr_monat
ORDER BY jahr_monat ASC';

$result = mysqli_query($connection, $query);

$anzahl_der_bestellungen_nach_kunden = array();
$monate_der_bestellungen_nach_kunden = array();
$jahre_der_bestellungen_nach_kunden = array();

while($row = mysqli_fetch_array($result))
{
	$anzahl_der_bestellungen_nach_kunden[] = intval($row['anzahl_bestellungen']);
	$monate_der_bestellungen_nach_kunden[] = format_monat($row['jahr_monat']);
	$jahre_der_bestellungen_nach_kunden[] = format_jahr($row['jahr_monat']);
}



$query = 'SELECT * FROM(';

for($i = 0; $i < $anzahl_monate; $i++)
{
	$query.= '
	SELECT IFNULL(SUBSTR(bestelldatum,1,7), "'.$input_jahr_monat[$i].'") AS jahr_monat, COUNT(*) AS anzahl_bestellungen
	FROM bestellungen b, kunden k
	WHERE b.k_nummer = k.k_nummer
	AND SUBSTR(bestelldatum,1,7) = "'.$input_jahr_monat[$i].'"
	AND p_u_nummer = "Privatkunde"';

	if($i < $anzahl_monate - 1)
	{
		$query.= ' UNION ALL';
	}
}

$query.= ') tabelle_in_klammern
GROUP BY jahr_monat
ORDER BY jahr_monat ASC';

$result = mysqli_query($connection, $query);

$anzahl_der_bestellungen_nach_p_kunden = array();

while($row = mysqli_fetch_array($result))
{
	$anzahl_der_bestellungen_nach_p_kunden[] = intval($row['anzahl_bestellungen']);
}



$query = 'SELECT * FROM(';

for($i = 0; $i < $anzahl_monate; $i++)
{
	$query.= '
	SELECT IFNULL(SUBSTR(bestelldatum,1,7), "'.$input_jahr_monat[$i].'") AS jahr_monat, COUNT(*) AS anzahl_bestellungen
	FROM bestellungen b, kunden k
	WHERE b.k_nummer = k.k_nummer
	AND SUBSTR(bestelldatum,1,7) = "'.$input_jahr_monat[$i].'"
	AND SUBSTR(p_u_nummer,1,1) = "u"';

	if($i < $anzahl_monate - 1)
	{
		$query.= ' UNION ALL';
	}
}

$query.= ') tabelle_in_klammern
GROUP BY jahr_monat
ORDER BY jahr_monat ASC';

$result = mysqli_query($connection, $query);

$anzahl_der_bestellungen_nach_u_kunden = array();

while($row = mysqli_fetch_array($result))
{
	$anzahl_der_bestellungen_nach_u_kunden[] = intval($row['anzahl_bestellungen']);
}

?>