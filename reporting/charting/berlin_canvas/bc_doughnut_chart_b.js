
var canvas_properties = {

	arc:
	{
		background_color:
		[
			chartFarben('dunkelblau'),
			chartFarben('blau'),
			chartFarben('hellblau'),
			chartFarben('tuerkis'),
			chartFarben('gruen'),
			chartFarben('hellgruen'),
			chartFarben('gelb'),
			chartFarben('orange'),
			chartFarben('rot'),
			chartFarben('rosa')
		],
		width: 60
	},
	arclabel:
	{
		display: 'yes',
		font_color: chartFarben('dunkelgrau'),
		font_size: 20,
		position: 50
	},
	canvas:
	{
		document_id: document.getElementById('bc_doughnut_chart_b'),
		font_family: 'Calibri, Arial, Helvetica',
		height: 350,
		width: 550
	},
	chart:
	{
		diameter: 80,
		orientation: 'ring',
		type: 'doughnut',
		values: [<?php php_array_zu_js($anzahl_der_bestellungen_nach_orten); ?>]
	},
	legend:
	{
		display: 'yes',
		font_color: chartFarben('schwarz'),
		font_size: 16,
		labels: [<?php php_array_zu_js($orte_der_bestellungen_nach_orten); ?>],
		legend_to_chart_spacing: 50,
		line_height: 2.2,
		point_to_label_spacing: 17
	},
	legendpoint:
	{
		background_color:
		[
			chartFarben('dunkelblau'),
			chartFarben('blau'),
			chartFarben('hellblau'),
			chartFarben('tuerkis'),
			chartFarben('gruen'),
			chartFarben('hellgruen'),
			chartFarben('gelb'),
			chartFarben('orange'),
			chartFarben('rot'),
			chartFarben('rosa')
		],
		border_color:
		[
			chartFarben('schwarz'),
			chartFarben('schwarz'),
			chartFarben('schwarz'),
			chartFarben('schwarz'),
			chartFarben('schwarz'),
			chartFarben('schwarz'),
			chartFarben('schwarz'),
			chartFarben('schwarz'),
			chartFarben('schwarz'),
			chartFarben('schwarz')
		],
		border_width: 0,
		position_y: 7,
		radius: 10,
		shape: 'circle'
	}
};

berlin_canvas_chart(canvas_properties);
