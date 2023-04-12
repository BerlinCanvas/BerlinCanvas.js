<?php

$anzahl_monate = 12;

$query = '
SELECT ort, produkt,
SUM(anzahl) AS anzahl_bestellungen_ort,
MAX(anzahl) AS anzahl_bestellungen_produkt
FROM(
SELECT ort, produkt, COUNT(produkt) AS anz_produkt, COUNT(*) AS anzahl
FROM(';

for($i = 0; $i < $anzahl_monate; $i++)
{
	$query.= '
	SELECT ort, produkt
	FROM bestellungen b, kunden k, produkte p
	WHERE b.k_nummer = k.k_nummer
	AND b.produkt = p.p_nummer
	AND SUBSTR(bestelldatum,1,7) = "'.$input_jahr_monat[$i].'"';

	if($i < $anzahl_monate - 1)
	{
		$query.= ' UNION ALL';
	}
}

$query.= '
) tabelle_in_klammern
GROUP BY ort, produkt
ORDER BY anz_produkt DESC
) tabelle_in_klammern
GROUP BY ort
ORDER BY anzahl_bestellungen_ort DESC, anzahl_bestellungen_produkt DESC';

$result = mysqli_query($connection, $query);

$anzahl_der_bestellungen_nach_orten = array();
$anzahl_der_bestellungen_nach_produkten = array();
$orte_der_bestellungen_nach_orten = array();
$produkte_der_bestellungen_nach_orten_und_produkten = array();

$toplist = 10;
$i = 0;

while($row = mysqli_fetch_array($result))
{
	if($i < $toplist)
	{
		$anzahl_der_bestellungen_nach_orten[] = intval($row['anzahl_bestellungen_ort']);
		$anzahl_der_bestellungen_nach_produkten[] = intval($row['anzahl_bestellungen_produkt']);
		$orte_der_bestellungen_nach_orten[] = $row['ort'];
		$produkte_der_bestellungen_nach_orten_und_produkten[] = $row['produkt'];
	}

	$i++;
}

?>