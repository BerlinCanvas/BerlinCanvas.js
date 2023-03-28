
var canvas_properties = {

	arc:
	{
		background_color:
		[
			chartFarben('dunkelblau'),
			chartFarben('hellblau'),
			chartFarben('helltuerkis')
		]
	},
	arclabel:
	{
		display: 'yes',
		font_color: chartFarben('weiss'),
		font_size: 24,
		position: 0
	},
	canvas:
	{
		document_id: document.getElementById('bc_pie_chart_a'),
		font_family: 'Calibri, Arial, Helvetica',
		height: 350,
		width: 550
	},
	chart:
	{
		diameter: 100,
		orientation: 'ring',
		type: 'pie',
		values: [<?php php_array_zu_js($traffic_geraete_prozentzahl); ?>]
	},
	legend:
	{
		display: 'yes',
		font_color: chartFarben('schwarz'),
		font_size: 16,
		labels: [<?php php_array_zu_js($traffic_geraete_typen); ?>],
		legend_to_chart_spacing: 50,
		line_height: 2.25,
		point_to_label_spacing: 8
	},
	legendpoint:
	{
		background_color:
		[
			chartFarben('schwarz'),
			chartFarben('schwarz'),
			chartFarben('schwarz')
		],
		border_color:
		[
			chartFarben('dunkelblau'),
			chartFarben('hellblau'),
			chartFarben('helltuerkis')
		],
		border_width: 4,
		position_y: 7,
		radius: 10,
		shape: 'star'
	}
};

berlin_canvas_chart(canvas_properties);
