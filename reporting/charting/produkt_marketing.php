<?php

$anzahl_monate = 12;

$query = 'SELECT * FROM(';

for($i = 0; $i < $anzahl_monate; $i++)
{
	$query.= '
	SELECT IFNULL(SUBSTR(bestelldatum,1,7), "'.$input_jahr_monat[$i].'") AS jahr_monat, COUNT(*) AS anzahl_bestellungen
	FROM bestellungen b, produkte p
	WHERE b.produkt = p_nummer
	AND SUBSTR(bestelldatum,1,7) = "'.$input_jahr_monat[$i].'"
	AND p_nummer = "2mmar"';

	if($i < $anzahl_monate - 1)
	{
		$query.= ' UNION ALL';
	}
}

$query.= ') tabelle_in_klammern
GROUP BY jahr_monat
ORDER BY jahr_monat ASC';

$result = mysqli_query($connection, $query);

$anzahl_von_produkt_marketing = array();
$monate_von_produkt_marketing = array();
$jahre_von_produkt_marketing = array();

while($row = mysqli_fetch_array($result))
{
	$anzahl_von_produkt_marketing[] = intval($row['anzahl_bestellungen']);
	$monate_von_produkt_marketing[] = format_monat($row['jahr_monat']);
	$jahre_von_produkt_marketing[] = format_jahr($row['jahr_monat']);
}



$query = 'SELECT * FROM(';

for($i = 0; $i < $anzahl_monate; $i++)
{
	$query.= '
	SELECT IFNULL(SUBSTR(bestelldatum,1,7), "'.$input_jahr_monat[$i].'") AS jahr_monat, COUNT(*) AS anzahl_bestellungen
	FROM bestellungen b, produkte p
	WHERE b.produkt = p_nummer
	AND SUBSTR(bestelldatum,1,7) = "'.$input_jahr_monat[$i].'"
	AND p_nummer != "2mmar"';

	if($i < $anzahl_monate - 1)
	{
		$query.= ' UNION ALL';
	}
}

$query.= ') tabelle_in_klammern
GROUP BY jahr_monat
ORDER BY jahr_monat ASC';

$result = mysqli_query($connection, $query);

$anzahl_von_allen_produkten_ausser_marketing = array();

while($row = mysqli_fetch_array($result))
{
	$anzahl_von_allen_produkten_ausser_marketing[] = intval($row['anzahl_bestellungen']);
}

?>