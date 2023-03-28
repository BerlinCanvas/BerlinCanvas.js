
var canvas_properties = {

	bar:
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
		border_color: chartFarben('schwarz'),
		border_width: 0,
		rainbow: 'yes',
		stacked: 'no'
	},
	barlabel:
	{
		display: ['yes'],
		font_color:
		[
			chartFarben('weiss')
		],
		font_size: [16],
		position_x: [-6]
	},
	canvas:
	{
		document_id: document.getElementById('bc_1_horizontal_bar_1_bubbles_chart'),
		font_family: 'Calibri, Arial, Helvetica',
		height: 350,
		width: 700
	},
	chart:
	{
		axis_labels:
		[
			[<?php php_array_zu_js($orte_der_bestellungen_nach_orten); ?>]
		],
		chart_to_values_spacing: 'yes',
		orientation: 'horizontal',
		types: ['bar', 'line'],
		values:
		[
			[<?php php_array_zu_js($anzahl_der_bestellungen_nach_orten); ?>],
			[30, 17, 20, 14, 15, 10, 12, 10, 7, 10]
		]
	},
	grid:
	{
		background_color: chartFarben('hellgelb'),
		x:
		{
			display: 'yes',
			line_color: chartFarben('lichtgrau'),
			line_width: 1
		},
		y:
		{
			display: 'yes',
			line_color: chartFarben('lichtgrau'),
			line_width: 1
		},
		under_over_zero_line_color: chartFarben('grau')
	},
	legend:
	{
		display: 'yes',
		font_color: chartFarben('schwarz'),
		font_size: 16,
		labels: ['Bestellungen', 'Ziel'],
		legend_to_chart_spacing: 50,
		line_height: 2.25,
		point_to_label_spacing: 8
	},
	legendpoint:
	{
		background_color:
		[
			chartFarben('weiss'),
			chartFarben('weiss')
		],
		border_color:
		[
			chartFarben('schwarz'),
			chartFarben('schwarz')
		],
		border_width: [1, 1],
		position_y: [7, 7],
		radius: [11, 6],
		shape: ['rectangle', 'circle']
	},
	line:
	{
		color:
		[
			chartFarben('schwarz')
		],
		display: ['no'],
		width: [0]
	},
	linearea:
	{
		color:
		[
			chartFarben('schwarz')
		],
		display: ['no'],
		fill_to: ['bottom']
	},
	linepoint:
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
			chartFarben('schwarz')
		],
		border_width: [1],
		display: ['yes'],
		radius: [11],
		rainbow: 'yes',
		shape: ['circle']
	},
	linepointlabel:
	{
		display: ['yes'],
		font_color:
		[
			chartFarben('dunkelgrau')
		],
		font_size: [16],
		position_x: [17]
	},
	xaxis:
	{
		font_color: chartFarben('dunkelgrau'),
		font_size: 16,
		tick_color: chartFarben('lichtgrau'),
		tick_length: 10,
		tick_step_size: 5,
		tick_to_label_spacing: 5,
		tick_width: 1
	},
	yaxis:
	{
		font_color:
		[
			chartFarben('schwarz')
		],
		font_size: 16,
		tick_color: chartFarben('lichtgrau'),
		tick_length: 10,
		tick_to_label_spacing: 5,
		tick_width: 1
	}
};

berlin_canvas_chart(canvas_properties);
