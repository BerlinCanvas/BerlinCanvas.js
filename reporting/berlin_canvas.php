<!doctype html>
<html lang="de">
<head>
<meta charset="utf-8">
<meta name="description" content="BerlinCanvas is the free charting library for all.">
<meta name="language" content="de">
<meta name="robots" content="noindex">
<title>BerlinCanvas</title>
<link rel="stylesheet" href="style.css" type="text/css">
</head><body>

<div class="form_datum">
<form action="" method="post" name="form_datum">
Bitte geben Sie ein Datum (JJJJ-MM-TT) zwischen Dezember 2022 und Mai 2023 ein.<br>
<input class="form_datum_input_1" type="text" name="input_datum" value="2023-04-03">
<input class="form_datum_input_2" type="submit" value="Start">
</form>
</div>

<script type="text/javascript">

var input_datum = document.form_datum.input_datum;

input_datum.focus();

</script>

<?php

include("starting/functions.php");
include("starting/input_datum.php");

if($ok == 'ja')
{
	include("starting/connection.php");
	include("starting/input_jahr_monat.php");
	include("starting/query_jahr_kw.php");

	include('charting/bestellungen_nach_kunden.php');
	include('charting/bestellungen_nach_orten_und_produkten.php');
	include('charting/bestellungen_nach_unternehmen.php');
	include('charting/newsletter_nach_monaten.php');
	include('charting/produkt_marketing.php');
	include('charting/produkte_nach_kunden.php');
	include('charting/produkte_nach_kw.php');
	include('charting/traffic_nach_geraeten.php');
	include('charting/traffic_nach_monaten.php');
	include('charting/umfrage_nach_jahren.php');
}

?>

<script src="libraries/berlin_canvas.js" type="text/javascript"></script>
<script src="starting/farben.js" type="text/javascript"></script>



<div class="stat_box">

<div class="stat_titel">
<div class="stat_titel_1">Horizontal Bar Chart</div>
<div class="stat_titel_2">Bestellungen nach Unternehmen</div>
</div>

<canvas class="berlin_canvas" id="bc_1_horizontal_bar_chart"></canvas>

<div class="stat_untertitel">von Bestellungen der letzten 12 Monate</div>

</div>



<div class="stat_box">

<div class="stat_titel">
<div class="stat_titel_1">Horizontal Bar-Line Chart</div>
<div class="stat_titel_2">Bestellungen nach Orten</div>
</div>

<canvas class="berlin_canvas" id="bc_1_horizontal_bar_1_line_chart"></canvas>

<div class="stat_untertitel">Top 10 der letzten 12 Monate</div>

</div>



<div class="stat_box">

<div class="stat_titel">
<div class="stat_titel_1">Horizontal Bar-Bubbles Chart</div>
<div class="stat_titel_2">Bestellungen nach Orten</div>
</div>

<canvas class="berlin_canvas" id="bc_1_horizontal_bar_1_bubbles_chart"></canvas>

<div class="stat_untertitel">Top 10 der letzten 12 Monate</div>

</div>



<div class="stat_box">

<div class="stat_titel">
<div class="stat_titel_1">Horizontal Bar-Line Chart</div>
<div class="stat_titel_2">Bestellungen nach Orten und Produkten</div>
</div>

<canvas class="berlin_canvas" id="bc_2_horizontal_bar_1_line_chart"></canvas>

<div class="stat_untertitel">Top 10 der letzten 12 Monate</div>

</div>



<div class="stat_box">

<div class="stat_titel">
<div class="stat_titel_1">Stacked Horizontal Bar-Line Chart</div>
<div class="stat_titel_2">Produkte nach Kunden</div>
</div>

<canvas class="berlin_canvas" id="bc_2_stacked_horizontal_bar_1_line_chart"></canvas>

<div class="stat_untertitel">von Bestellungen der letzten 12 Monate</div>

</div>



<div class="stat_box">

<div class="stat_titel">
<div class="stat_titel_1">Bar Chart</div>
<div class="stat_titel_2">Bestellungen nach Kunden</div>
</div>

<canvas class="berlin_canvas" id="bc_3_bar_chart"></canvas>

<div class="stat_untertitel"><br></div>

</div>



<div class="stat_box">

<div class="stat_titel">
<div class="stat_titel_1">Bar-Line Chart</div>
<div class="stat_titel_2">Produkt Marketing nach Monaten</div>
</div>

<canvas class="berlin_canvas" id="bc_1_bar_1_line_chart"></canvas>

<div class="stat_untertitel"><br></div>

</div>



<div class="stat_box">

<div class="stat_titel">
<div class="stat_titel_1">Bar-Line Chart</div>
<div class="stat_titel_2">Bestellungen nach Kunden</div>
</div>

<canvas class="berlin_canvas" id="bc_2_bar_2_line_chart"></canvas>

<div class="stat_untertitel"><br></div>

</div>



<div class="stat_box">

<div class="stat_titel">
<div class="stat_titel_1">Bar-Line-Bubbles Chart</div>
<div class="stat_titel_2">Bestellungen nach Kunden</div>
</div>

<canvas class="berlin_canvas" id="bc_2_bar_1_line_1_bubbles_chart"></canvas>

<div class="stat_untertitel"><br></div>

</div>



<div class="stat_box">

<div class="stat_titel">
<div class="stat_titel_1">Stacked Bar-Line Chart</div>
<div class="stat_titel_2">Produkte nach Kalenderwochen</div>
</div>

<canvas class="berlin_canvas" id="bc_5_stacked_bar_1_line_chart"></canvas>

<div class="stat_untertitel"><br></div>

</div>



<div class="stat_box">

<div class="stat_titel">
<div class="stat_titel_1">Line Chart</div>
<div class="stat_titel_2">Website-Traffic nach Monaten</div>
</div>

<canvas class="berlin_canvas" id="bc_3_line_chart"></canvas>

<div class="stat_untertitel">Angaben in Tausend</div>

</div>



<div class="stat_box">

<div class="stat_titel">
<div class="stat_titel_1">Line Chart</div>
<div class="stat_titel_2">Interessen-Umfrage</div>
</div>

<canvas class="berlin_canvas" id="bc_2_line_chart"></canvas>

<div class="stat_untertitel">der letzten zwei Jahre, Angaben in Prozent</div>

</div>



<div class="stat_box">

<div class="stat_titel">
<div class="stat_titel_1">Line Area Chart</div>
<div class="stat_titel_2">Newsletter-Versand nach Monaten</div>
</div>

<canvas class="berlin_canvas" id="bc_3_line_area_chart"></canvas>

<div class="stat_untertitel">im Verhältnis, Angaben in Prozent</div>

</div>



<div class="stat_box">

<div class="stat_titel">
<div class="stat_titel_1">Horizontal Line Area Chart</div>
<div class="stat_titel_2">Weitere Statistiken</div>
</div>

<canvas class="berlin_canvas" id="bc_3_horizontal_line_area_chart"></canvas>

<div class="stat_untertitel"><br></div>

</div>



<div class="stat_box">

<div class="stat_titel">
<div class="stat_titel_1">Pie Chart</div>
<div class="stat_titel_2">Website-Traffic nach Geräten</div>
</div>

<canvas class="berlin_canvas" id="bc_pie_chart_a"></canvas>

<div class="stat_untertitel">vom letzten Monat, Werte in Prozent</div>

</div>



<div class="stat_box">

<div class="stat_titel">
<div class="stat_titel_1">Pie Chart</div>
<div class="stat_titel_2">Website-Traffic nach Geräten</div>
</div>

<canvas class="berlin_canvas" id="bc_pie_chart_b"></canvas>

<div class="stat_untertitel">vom letzten Monat, Werte in Prozent</div>

</div>



<br>



<div class="stat_box">

<div class="stat_titel">
<div class="stat_titel_1">Doughnut Chart</div>
<div class="stat_titel_2">Bestellungen nach Orten</div>
</div>

<canvas class="berlin_canvas" id="bc_doughnut_chart_a"></canvas>

<div class="stat_untertitel">Top 10 der letzten 12 Monate</div>

</div>



<div class="stat_box">

<div class="stat_titel">
<div class="stat_titel_1">Doughnut Chart</div>
<div class="stat_titel_2">Bestellungen nach Orten</div>
</div>

<canvas class="berlin_canvas" id="bc_doughnut_chart_b"></canvas>

<div class="stat_untertitel">Top 10 der letzten 12 Monate</div>

</div>



<div class="stat_box">

<div class="stat_titel">
<div class="stat_titel_1">Horizontal Bar Chart</div>
<div class="stat_titel_2">Negative Werte</div>
</div>

<canvas class="berlin_canvas" id="bc_1_negative_horizontal_bar_chart"></canvas>

<div class="stat_untertitel"><br></div>

</div>



<div class="stat_box">

<div class="stat_titel">
<div class="stat_titel_1">Bar Chart</div>
<div class="stat_titel_2">Negative Werte</div>
</div>

<canvas class="berlin_canvas" id="bc_1_negative_bar_chart"></canvas>

<div class="stat_untertitel"><br></div>

</div>



<div class="stat_box">

<div class="stat_titel">
<div class="stat_titel_1">Horizontal Line Chart</div>
<div class="stat_titel_2">Negative Werte</div>
</div>

<canvas class="berlin_canvas" id="bc_1_negative_horizontal_line_chart"></canvas>

<div class="stat_untertitel"><br></div>

</div>



<div class="stat_box">

<div class="stat_titel">
<div class="stat_titel_1">Line Chart</div>
<div class="stat_titel_2">Negative Werte</div>
</div>

<canvas class="berlin_canvas" id="bc_1_negative_line_chart"></canvas>

<div class="stat_untertitel"><br></div>

</div>



<div class="stat_box">

<div class="stat_titel">
<div class="stat_titel_1">Horizontal Bar-Line Chart</div>
<div class="stat_titel_2">Negative Werte</div>
</div>

<canvas class="berlin_canvas" id="bc_1_negative_horizontal_bar_1_negative_horizontal_line_chart"></canvas>

<div class="stat_untertitel"><br></div>

</div>



<div class="stat_box">

<div class="stat_titel">
<div class="stat_titel_1">Bar-Line Chart</div>
<div class="stat_titel_2">Negative Werte</div>
</div>

<canvas class="berlin_canvas" id="bc_1_negative_bar_1_negative_line_chart"></canvas>

<div class="stat_untertitel"><br></div>

</div>



<div class="stat_box">

<div class="stat_titel">
<div class="stat_titel_1">Stacked Horizontal Bar Chart</div>
<div class="stat_titel_2">Negative Werte</div>
</div>

<canvas class="berlin_canvas" id="bc_4_negative_stacked_horizontal_bar_chart"></canvas>

<div class="stat_untertitel"><br></div>

</div>



<div class="stat_box">

<div class="stat_titel">
<div class="stat_titel_1">Stacked Bar Chart</div>
<div class="stat_titel_2">Negative Werte</div>
</div>

<canvas class="berlin_canvas" id="bc_4_negative_stacked_bar_chart"></canvas>

<div class="stat_untertitel"><br></div>

</div>



<div class="stat_box">

<div class="stat_titel">
<div class="stat_titel_1">Horizontal Range Chart</div>
<div class="stat_titel_2">Weitere Statistiken</div>
</div>

<canvas class="berlin_canvas" id="bc_2_horizontal_range_chart"></canvas>

<div class="stat_untertitel"><br></div>

</div>



<div class="stat_box">

<div class="stat_titel">
<div class="stat_titel_1">Range Chart</div>
<div class="stat_titel_2">Weitere Statistiken</div>
</div>

<canvas class="berlin_canvas" id="bc_2_range_chart"></canvas>

<div class="stat_untertitel"><br></div>

</div>



<div class="stat_box">

<div class="stat_titel">
<div class="stat_titel_1">Discrete Bar-Line Chart</div>
<div class="stat_titel_2">Weitere Statistiken</div>
</div>

<canvas class="berlin_canvas" id="bc_2_discrete_bar_2_discrete_line_chart"></canvas>

<div class="stat_untertitel">In einem Zeitraum von 1 bis 40, z.B. Monate</div>

</div>



<script type="text/javascript">

var stat_box = document.getElementsByClassName('stat_box');

if('<?php echo $ok ?>' == 'ja')
{
	for(var i = 0; i < stat_box.length; i++)
	{
		stat_box[i].style.display = 'inline-block';
	}
}
else
{
	if('<?php echo $ok ?>' != 'leer')
	{
		alert('<?php echo $ok ?>');
	}
}

<?php

// Da die JavaScript-Dateien PHP-Code einbinden, müssen sie mit PHP eingebunden werden.

if($ok == 'ja')
{
	include('charting/berlin_canvas/bc_1_bar_1_line_chart.js');
	include('charting/berlin_canvas/bc_1_horizontal_bar_1_bubbles_chart.js');
	include('charting/berlin_canvas/bc_1_horizontal_bar_1_line_chart.js');
	include('charting/berlin_canvas/bc_1_horizontal_bar_chart.js');
	include('charting/berlin_canvas/bc_1_negative_bar_1_negative_line_chart.js');
	include('charting/berlin_canvas/bc_1_negative_bar_chart.js');
	include('charting/berlin_canvas/bc_1_negative_horizontal_bar_1_negative_horizontal_line_chart.js');
	include('charting/berlin_canvas/bc_1_negative_horizontal_bar_chart.js');
	include('charting/berlin_canvas/bc_1_negative_horizontal_line_chart.js');
	include('charting/berlin_canvas/bc_1_negative_line_chart.js');
	include('charting/berlin_canvas/bc_2_bar_1_line_1_bubbles_chart.js');
	include('charting/berlin_canvas/bc_2_bar_2_line_chart.js');
	include('charting/berlin_canvas/bc_2_discrete_bar_2_discrete_line_chart.js');
	include('charting/berlin_canvas/bc_2_horizontal_bar_1_line_chart.js');
	include('charting/berlin_canvas/bc_2_horizontal_range_chart.js');
	include('charting/berlin_canvas/bc_2_line_chart.js');
	include('charting/berlin_canvas/bc_2_range_chart.js');
	include('charting/berlin_canvas/bc_2_stacked_horizontal_bar_1_line_chart.js');
	include('charting/berlin_canvas/bc_3_bar_chart.js');
	include('charting/berlin_canvas/bc_3_horizontal_line_area_chart.js');
	include('charting/berlin_canvas/bc_3_line_area_chart.js');
	include('charting/berlin_canvas/bc_3_line_chart.js');
	include('charting/berlin_canvas/bc_4_negative_stacked_bar_chart.js');
	include('charting/berlin_canvas/bc_4_negative_stacked_horizontal_bar_chart.js');
	include('charting/berlin_canvas/bc_5_stacked_bar_1_line_chart.js');
	include('charting/berlin_canvas/bc_doughnut_chart_a.js');
	include('charting/berlin_canvas/bc_doughnut_chart_b.js');
	include('charting/berlin_canvas/bc_pie_chart_a.js');
	include('charting/berlin_canvas/bc_pie_chart_b.js');
}

?>

</script>

<?php

if($ok == 'ja')
{
	mysqli_close($connection);
}

?>

</body></html>