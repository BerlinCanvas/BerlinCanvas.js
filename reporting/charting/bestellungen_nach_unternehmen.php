<?php

$anzahl_monate = 12;

$query = 'SELECT u_name, SUM(anz) AS anzahl_bestellungen FROM(';

for($i = 0; $i < $anzahl_monate; $i++)
{
	$query.= '
	SELECT u_name, COUNT(*) AS anz
	FROM bestellungen b, kunden k, unternehmen
	WHERE b.k_nummer = k.k_nummer
	AND p_u_nummer = u_nummer
	AND SUBSTR(bestelldatum,1,7) = "'.$input_jahr_monat[$i].'"
	AND SUBSTR(p_u_nummer,1,1) = "u"
	GROUP BY u_name';

	if($i < $anzahl_monate - 1)
	{
		$query.= ' UNION ALL';
	}
}

$query.= ') tabelle_in_klammern
GROUP BY u_name
ORDER BY u_name ASC';

$result = mysqli_query($connection, $query);

$anzahl_der_bestellungen_nach_unternehmen = array();
$unternehmen_der_bestellungen_nach_unternehmen = array();

while($row = mysqli_fetch_array($result))
{
	$anzahl_der_bestellungen_nach_unternehmen[] = intval($row['anzahl_bestellungen']);
	$unternehmen_der_bestellungen_nach_unternehmen[] = $row['u_name'];
}

?>