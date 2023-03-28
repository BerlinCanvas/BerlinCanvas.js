
var canvas_properties = {

	bar:
	{
		background_color:
		[
			chartFarben('gelb'),
			chartFarben('tuerkis'),
			chartFarben('hellgruen'),
			chartFarben('blau'),
			chartFarben('orange'),
			chartFarben('rot')
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
			chartFarben('dunkelgrau')
		],
		font_size: [16],
		position_x: [6]
	},
	canvas:
	{
		document_id: document.getElementById('bc_1_horizontal_bar_chart'),
		font_family: 'Calibri, Arial, Helvetica',
		height: 350,
		width: 700
	},
	chart:
	{
		axis_labels:
		[
			[<?php php_array_zu_js($unternehmen_der_bestellungen_nach_unternehmen); ?>]
		],
		chart_to_values_spacing: 'yes',
		orientation: 'horizontal',
		types: ['bar'],
		values:
		[
			[<?php php_array_zu_js($anzahl_der_bestellungen_nach_unternehmen); ?>]
		]
	},
	grid:
	{
		background_color: chartFarben('hellgelb'),
		x:
		{
			display: 'yes',
			line_color: chartFarben('lichtgrau'),
			line_width: 5
		},
		y:
		{
			display: 'yes',
			line_color: chartFarben('lichtgrau'),
			line_width: 5
		},
		under_over_zero_line_color: chartFarben('grau')
	},
	legend:
	{
		display: 'no',
		font_color: chartFarben('schwarz'),
		font_size: 16,
		labels: ['Bestellungen'],
		legend_to_chart_spacing: 50,
		line_height: 2.25,
		point_to_label_spacing: 8
	},
	legendpoint:
	{
		background_color:
		[
			chartFarben('weiss')
		],
		border_color:
		[
			chartFarben('schwarz')
		],
		border_width: [1],
		position_y: [7],
		radius: [11],
		shape: ['rectangle']
	},
	line:
	{
	},
	linearea:
	{
	},
	linepoint:
	{
	},
	linepointlabel:
	{
	},
	xaxis:
	{
		font_color: chartFarben('dunkelgrau'),
		font_size: 16,
		tick_color: chartFarben('lichtgrau'),
		tick_length: 10,
		tick_step_size: 1,
		tick_to_label_spacing: 10,
		tick_width: 5
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
		tick_to_label_spacing: 10,
		tick_width: 5
	}
};

berlin_canvas_chart(canvas_properties);
