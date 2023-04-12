<?php

$anzahl_monate = 12;

$query = '
SELECT jahr_monat,
AVG(empfaenger) AS anzahl_empfaenger,
AVG(oeffner) AS anzahl_oeffner,
AVG(downloader) AS anzahl_downloader
FROM(';

for($i = 0; $i < $anzahl_monate; $i++)
{
	$query.= '
	SELECT SUBSTR(versanddatum,1,7) AS jahr_monat, empfaenger, oeffner, downloader
	FROM newsletter
	WHERE SUBSTR(versanddatum,1,7) = "'.$input_jahr_monat[$i].'"';

	if($i < $anzahl_monate - 1)
	{
		$query.= ' UNION ALL';
	}
}

$query.= ') tabelle_in_klammern
GROUP BY jahr_monat
ORDER BY jahr_monat ASC';

$result = mysqli_query($connection, $query);

$newsletter_oeffner_zu_empfaenger = array();
$newsletter_downloader_zu_oeffner = array();
$newsletter_downloader_zu_empfaenger = array();
$newsletter_monate = array();
$newsletter_jahre = array();

while($row = mysqli_fetch_array($result))
{
	$anz_downloader = intval($row['anzahl_downloader']);
	$anz_empfaenger = intval($row['anzahl_empfaenger']);
	$anz_oeffner = intval($row['anzahl_oeffner']);

	$newsletter_oeffner_zu_empfaenger[] = round($anz_oeffner / $anz_empfaenger * 100, 0);
	$newsletter_downloader_zu_oeffner[] = round($anz_downloader / $anz_oeffner * 100, 0);
	$newsletter_downloader_zu_empfaenger[] = round($anz_downloader / $anz_empfaenger * 100, 0);
	$newsletter_monate[] = format_monat($row['jahr_monat']);
	$newsletter_jahre[] = format_jahr($row['jahr_monat']);
}

?>