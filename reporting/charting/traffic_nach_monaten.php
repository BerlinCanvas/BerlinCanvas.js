<?php

$anzahl_monate = 18;

$query = '';

for($i = 0; $i < $anzahl_monate; $i++)
{
	$query.= '
	SELECT zeitraum, nutzer, sitzungen, seitenaufrufe
	FROM webtraffic
	WHERE SUBSTR(zeitraum,1,7) = "'.$input_jahr_monat[$i].'"';

	if($i < $anzahl_monate - 1)
	{
		$query.= ' UNION ALL';
	}
}

$query.= ' ORDER BY zeitraum ASC';

$result = mysqli_query($connection, $query);

$anzahl_nutzer_von_traffic_nach_monaten = array();
$anzahl_sitzungen_von_traffic_nach_monaten = array();
$anzahl_seitenaufrufe_von_traffic_nach_monaten = array();
$monate_von_traffic_nach_monaten = array();
$jahre_von_traffic_nach_monaten = array();

while($row = mysqli_fetch_array($result))
{
	$anzahl_nutzer_von_traffic_nach_monaten[] = tausend(intval($row['nutzer']));
	$anzahl_sitzungen_von_traffic_nach_monaten[] = tausend(intval($row['sitzungen']));
	$anzahl_seitenaufrufe_von_traffic_nach_monaten[] = tausend(intval($row['seitenaufrufe']));
	$monate_von_traffic_nach_monaten[] = format_monat($row['zeitraum']);
	$jahre_von_traffic_nach_monaten[] = format_jahr($row['zeitraum']);
}

?>