
var canvas_properties = {

	bar:
	{
		background_color:
		[
			chartFarben('gruen'),
			chartFarben('blau')
		],
		border_color: chartFarben('schwarz'),
		border_width: 0,
		rainbow: 'no',
		stacked: 'yes'
	},
	barlabel:
	{
		display: ['yes', 'yes'],
		font_color:
		[
			chartFarben('weiss'),
			chartFarben('weiss')
		],
		font_size: [16, 16],
		position_x: [-6, -6]
	},
	canvas:
	{
		document_id: document.getElementById('bc_2_stacked_horizontal_bar_1_line_chart'),
		font_family: 'Calibri, Arial, Helvetica',
		height: 350,
		width: 700
	},
	chart:
	{
		axis_labels:
		[
			[<?php php_array_zu_js($namen_der_produkte_nach_p_kunden); ?>]
		],
		chart_to_values_spacing: 'yes',
		orientation: 'horizontal',
		types: ['bar', 'bar', 'line'],
		values:
		[
			[<?php php_array_zu_js($anzahl_der_produkte_nach_p_kunden); ?>],
			[<?php php_array_zu_js($anzahl_der_produkte_nach_u_kunden); ?>],
			[45, 15, 25, 30, 12]
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
			display: 'no',
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
		labels: ['Privatkunden', 'Unternehmen', 'Ziel'],
		legend_to_chart_spacing: 50,
		line_height: 2.25,
		point_to_label_spacing: 8
	},
	legendpoint:
	{
		background_color:
		[
			chartFarben('gruen'),
			chartFarben('blau'),
			chartFarben('hellgelb')
		],
		border_color:
		[
			chartFarben('schwarz'),
			chartFarben('schwarz'),
			chartFarben('schwarz')
		],
		border_width: [1, 1, 1],
		position_y: [7, 7, 7],
		radius: [11, 11, 11],
		shape: ['rectangle', 'rectangle', 'rectangle']
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
			chartFarben('hellgelb')
		],
		border_color:
		[
			chartFarben('dunkelgrau')
		],
		border_width: [1],
		display: ['yes'],
		radius: [11],
		rainbow: 'no',
		shape: ['rectangle']
	},
	linepointlabel:
	{
		display: ['yes'],
		font_color:
		[
			chartFarben('dunkelgrau')
		],
		font_size: [16],
		position_x: [12]
	},
	xaxis:
	{
		font_color: chartFarben('dunkeltuerkisgruen'),
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
