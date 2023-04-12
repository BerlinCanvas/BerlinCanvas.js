<?php

$query = '
SELECT YEARWEEK("'.$input_datum.'", 1)
AS kw';

$vergangene_wochen = 24;

for($i = 1; $i < $vergangene_wochen; $i++)
{
	$query.= '
	UNION SELECT YEARWEEK("'.$input_datum.'" - INTERVAL '.$i.' WEEK, 1)
	AS kw';
}

$query.= ' ORDER BY kw DESC';

$result = mysqli_query($connection, $query);

$liste_jahr_kw = array();

while($row = mysqli_fetch_array($result))
{
	$liste_jahr_kw[] = substr($row['kw'],0,4).' KW '.substr($row['kw'],4,2);
}

?>