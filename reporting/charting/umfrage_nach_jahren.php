<?php

$query = '
SELECT SUBSTR(empfangsdatum,1,4) AS umfrage_jahr
FROM umfrage
ORDER BY umfrage_jahr DESC
LIMIT 1';

$result = mysqli_query($connection, $query);

$umfrage_jahr_1 = 0;

while($row = mysqli_fetch_array($result))
{
	$umfrage_jahr_1 = $row['umfrage_jahr'];
}

$umfrage_jahr_2 = $umfrage_jahr_1 - 1;

$query = '
SELECT
AVG(finanzen) AS umfrage_finanzen,
AVG(politik) AS umfrage_politik,
AVG(soziales) AS umfrage_soziales,
AVG(sport) AS umfrage_sport,
AVG(technik) AS umfrage_technik,
AVG(wirtschaft) AS umfrage_wirtschaft
FROM umfrage
WHERE SUBSTR(empfangsdatum,1,4) = "'.$umfrage_jahr_1.'"';

$result = mysqli_query($connection, $query);

$themen_der_umfrage_nach_jahren = array('Finanzen','Politik','Soziales','Sport','Technik','Wirtschaft');
$zahlen_der_umfrage_von_jahr_1 = array();

while($row = mysqli_fetch_array($result))
{
	$zahlen_der_umfrage_von_jahr_1[] = intval($row['umfrage_finanzen']);
	$zahlen_der_umfrage_von_jahr_1[] = intval($row['umfrage_politik']);
	$zahlen_der_umfrage_von_jahr_1[] = intval($row['umfrage_soziales']);
	$zahlen_der_umfrage_von_jahr_1[] = intval($row['umfrage_sport']);
	$zahlen_der_umfrage_von_jahr_1[] = intval($row['umfrage_technik']);
	$zahlen_der_umfrage_von_jahr_1[] = intval($row['umfrage_wirtschaft']);
}



$query = '
SELECT
AVG(finanzen) AS umfrage_finanzen,
AVG(politik) AS umfrage_politik,
AVG(soziales) AS umfrage_soziales,
AVG(sport) AS umfrage_sport,
AVG(technik) AS umfrage_technik,
AVG(wirtschaft) AS umfrage_wirtschaft
FROM umfrage
WHERE SUBSTR(empfangsdatum,1,4) = "'.$umfrage_jahr_2.'"';

$result = mysqli_query($connection, $query);

$zahlen_der_umfrage_von_jahr_2 = array();

while($row = mysqli_fetch_array($result))
{
	$zahlen_der_umfrage_von_jahr_2[] = intval($row['umfrage_finanzen']);
	$zahlen_der_umfrage_von_jahr_2[] = intval($row['umfrage_politik']);
	$zahlen_der_umfrage_von_jahr_2[] = intval($row['umfrage_soziales']);
	$zahlen_der_umfrage_von_jahr_2[] = intval($row['umfrage_sport']);
	$zahlen_der_umfrage_von_jahr_2[] = intval($row['umfrage_technik']);
	$zahlen_der_umfrage_von_jahr_2[] = intval($row['umfrage_wirtschaft']);
}



function umfrage_verhaeltnis($array)
{
	$summe = 0;

	for($i = 0; $i < count($array); $i++)
	{
		$summe += $array[$i];
	}

	$quotient = 100 / $summe;

	for($i = 0; $i < count($array); $i++)
	{
		$array[$i] = $array[$i] * $quotient;
		$array[$i] = round($array[$i], 0);
	}

	return $array;
}

$zahlen_der_umfrage_von_jahr_1 = umfrage_verhaeltnis($zahlen_der_umfrage_von_jahr_1);
$zahlen_der_umfrage_von_jahr_2 = umfrage_verhaeltnis($zahlen_der_umfrage_von_jahr_2);

?>