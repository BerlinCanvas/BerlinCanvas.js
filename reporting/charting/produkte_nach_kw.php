<?php

$anzahlKalenderwochen = 12;

$produkt_nummern = array('1jsta','1jstu','2mmar','3msta','6mvip');

$query = 'SELECT * FROM(';

for($i = 0; $i < count($produkt_nummern); $i++)
{
	for($j = 0; $j < $anzahlKalenderwochen; $j++)
	{
		$query.= '
		SELECT IFNULL(woche, "'.$liste_jahr_kw[$j].'") AS kw, IFNULL(p_nummer, "'.$produkt_nummern[$i].'") AS produktnummer, COUNT(*) AS anzahl_bestellungen
		FROM bestellungen b, produkte p
		WHERE produkt = p_nummer
		AND woche = "'.$liste_jahr_kw[$j].'"
		AND produkt = "'.$produkt_nummern[$i].'"';

		if($j < $anzahlKalenderwochen - 1)
		{
			$query.= ' UNION ALL';
		}
	}

	if($i < count($produkt_nummern) - 1)
	{
		$query.= ' UNION ALL';
	}
}

$query.= ') tabelle_in_klammern
GROUP BY kw, produktnummer
ORDER BY kw ASC';

$result = mysqli_query($connection, $query);

$anzahl_von_produkt_1jsta = array();
$anzahl_von_produkt_1jstu = array();
$anzahl_von_produkt_2mmar = array();
$anzahl_von_produkt_3msta = array();
$anzahl_von_produkt_6mvip = array();

$kws_der_produkte_nach_kw = array();
$jahre_der_produkte_nach_kw = array();

while($row = mysqli_fetch_array($result))
{
	if($row['produktnummer'] == '1jsta')
	{
		$anzahl_von_produkt_1jsta[] = intval($row['anzahl_bestellungen']);
	}
	elseif($row['produktnummer'] == '1jstu')
	{
		$anzahl_von_produkt_1jstu[] = intval($row['anzahl_bestellungen']);
	}
	elseif($row['produktnummer'] == '2mmar')
	{
		$anzahl_von_produkt_2mmar[] = intval($row['anzahl_bestellungen']);
	}
	elseif($row['produktnummer'] == '3msta')
	{
		$anzahl_von_produkt_3msta[] = intval($row['anzahl_bestellungen']);
	}
	elseif($row['produktnummer'] == '6mvip')
	{
		$anzahl_von_produkt_6mvip[] = intval($row['anzahl_bestellungen']);
	}
}

for($i = $anzahlKalenderwochen - 1; $i >= 0; $i--)
{
	$kws_der_produkte_nach_kw[] = format_kw($liste_jahr_kw[$i]);
	$jahre_der_produkte_nach_kw[] = format_jahr($liste_jahr_kw[$i]);
}

?>