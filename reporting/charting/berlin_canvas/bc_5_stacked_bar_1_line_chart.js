
var canvas_properties = {

	bar:
	{
		background_color:
		[
			chartFarben('gruen'),
			chartFarben('dunkelblau'),
			chartFarben('rot'),
			chartFarben('helltuerkis'),
			chartFarben('gelb')
		],
		border_color: chartFarben('schwarz'),
		border_width: 0,
		rainbow: 'no',
		stacked: 'yes'
	},
	barlabel:
	{
		display: ['yes', 'yes', 'yes', 'yes', 'yes'],
		font_color:
		[
			chartFarben('weiss'),
			chartFarben('weiss'),
			chartFarben('weiss'),
			chartFarben('weiss'),
			chartFarben('weiss')
		],
		font_size: [16, 16, 16, 16, 16],
		position_y: [5, 5, 5, 5, 5]
	},
	canvas:
	{
		document_id: document.getElementById('bc_5_stacked_bar_1_line_chart'),
		font_family: 'Calibri, Arial, Helvetica',
		height: 350,
		width: 700
	},
	chart:
	{
		axis_labels:
		[
			[<?php php_array_zu_js($kws_der_produkte_nach_kw); ?>],
			[<?php php_array_zu_js($jahre_der_produkte_nach_kw); ?>]
		],
		chart_to_values_spacing: 'yes',
		orientation: 'vertical',
		types: ['bar', 'bar', 'bar', 'bar', 'bar', 'line'],
		values:
		[
			[<?php php_array_zu_js($anzahl_von_produkt_1jsta); ?>],
			[<?php php_array_zu_js($anzahl_von_produkt_3msta); ?>],
			[<?php php_array_zu_js($anzahl_von_produkt_2mmar); ?>],
			[<?php php_array_zu_js($anzahl_von_produkt_1jstu); ?>],
			[<?php php_array_zu_js($anzahl_von_produkt_6mvip); ?>],
			[5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5]
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
		labels:
		[
			'Ziel',
			'6 Monate vip',
			'1 Jahr student',
			'2 Monate marketing',
			'3 Monate standard',
			'1 Jahr standard'
		],
		legend_to_chart_spacing: 50,
		line_height: 2.25,
		point_to_label_spacing: 8
	},
	legendpoint:
	{
		background_color:
		[
			chartFarben('schwarz'),
			chartFarben('gelb'),
			chartFarben('helltuerkis'),
			chartFarben('rot'),
			chartFarben('dunkelblau'),
			chartFarben('gruen')
		],
		border_color:
		[
			chartFarben('orange'),
			chartFarben('schwarz'),
			chartFarben('schwarz'),
			chartFarben('schwarz'),
			chartFarben('schwarz'),
			chartFarben('schwarz')
		],
		border_width: [2, 1, 1, 1, 1, 1],
		position_y: [7, 7, 7, 7, 7, 7],
		radius: [3, 11, 11, 11, 11, 11],
		shape:
		[
			'discrete horizontal',
			'rectangle',
			'rectangle',
			'rectangle',
			'rectangle',
			'rectangle'
		]
	},
	line:
	{
		color:
		[
			chartFarben('orange')
		],
		display: ['yes'],
		width: [2]
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
			chartFarben('schwarz')
		],
		border_color:
		[
			chartFarben('schwarz')
		],
		border_width: [0],
		display: ['no'],
		radius: [0],
		rainbow: 'no',
		shape: ['circle']
	},
	linepointlabel:
	{
		display: ['no'],
		font_color:
		[
			chartFarben('schwarz')
		],
		font_size: [16],
		position_y: [0]
	},
	xaxis:
	{
		font_color:
		[
			chartFarben('dunkeltuerkisgruen'),
			chartFarben('dunkelgrau')
		],
		font_size: [16, 12],
		line_height: [1.5, 1],
		tick_color: chartFarben('lichtgrau'),
		tick_length: 10,
		tick_to_label_spacing: 5,
		tick_width: 1
	},
	yaxis:
	{
		font_color: chartFarben('dunkelgrau'),
		font_size: 16,
		tick_color: chartFarben('lichtgrau'),
		tick_length: 10,
		tick_step_size: 1,
		tick_to_label_spacing: 5,
		tick_width: 1
	}
};

berlin_canvas_chart(canvas_properties);
