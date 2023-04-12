<?php

$letzter_monat = substr($input_datum,0,7);

$query = '
SELECT nutzung_desktop, nutzung_smartphone, nutzung_tablet
FROM webtraffic
WHERE SUBSTR(zeitraum,1,7) = "'.$letzter_monat.'"';

$result = mysqli_query($connection, $query);

$traffic_geraete_prozentzahl = array();
$traffic_geraete_typen = array('Desktop','Smartphone','Tablet');

while($row = mysqli_fetch_array($result))
{
	$traffic_geraete_prozentzahl[] = intval($row['nutzung_desktop']);
	$traffic_geraete_prozentzahl[] = intval($row['nutzung_smartphone']);
	$traffic_geraete_prozentzahl[] = intval($row['nutzung_tablet']);
}

?>