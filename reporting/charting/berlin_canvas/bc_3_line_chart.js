
var canvas_properties = {

	bar:
	{
	},
	barlabel:
	{
	},
	canvas:
	{
		document_id: document.getElementById('bc_3_line_chart'),
		font_family: 'Calibri, Arial, Helvetica',
		height: 350,
		width: 800
	},
	chart:
	{
		axis_labels:
		[
			[<?php php_array_zu_js($monate_von_traffic_nach_monaten); ?>],
			[<?php php_array_zu_js($jahre_von_traffic_nach_monaten); ?>]
		],
		chart_to_values_spacing: 'yes',
		orientation: 'vertical',
		types: ['line', 'line', 'line'],
		values:
		[
			[<?php php_array_zu_js($anzahl_seitenaufrufe_von_traffic_nach_monaten); ?>],
			[<?php php_array_zu_js($anzahl_sitzungen_von_traffic_nach_monaten); ?>],
			[<?php php_array_zu_js($anzahl_nutzer_von_traffic_nach_monaten); ?>]
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
		labels: ['Seitenaufrufe', 'Sitzungen', 'Nutzer'],
		legend_to_chart_spacing: 50,
		line_height: 2.25,
		point_to_label_spacing: 8
	},
	legendpoint:
	{
		background_color:
		[
			chartFarben('hellgelb'),
			chartFarben('schwarz'),
			chartFarben('hellgelb')
		],
		border_color:
		[
			chartFarben('gelb'),
			chartFarben('orange'),
			chartFarben('rot')
		],
		border_width: [3, 3, 3],
		position_y: [7, 7, 7],
		radius: [7, 7, 8],
		shape: ['triangle', 'plus', 'rectangle']
	},
	line:
	{
		color:
		[
			chartFarben('gelb'),
			chartFarben('schwarz'),
			chartFarben('rot')
		],
		display: ['yes', 'no', 'yes'],
		width: [4, 4, 3]
	},
	linearea:
	{
		color:
		[
			chartFarben('schwarz'),
			chartFarben('schwarz'),
			chartFarben('schwarz')
		],
		display: ['no', 'no', 'no'],
		fill_to: ['bottom', 'bottom', 'bottom']
	},
	linepoint:
	{
		background_color:
		[
			chartFarben('hellgelb'),
			chartFarben('schwarz'),
			chartFarben('hellgelb')
		],
		border_color:
		[
			chartFarben('gelb'),
			chartFarben('orange'),
			chartFarben('rot')
		],
		border_width: [3, 3, 3],
		display: ['yes', 'yes', 'yes'],
		radius: [7, 6, 7],
		rainbow: 'no',
		shape: ['triangle', 'plus', 'rectangle']
	},
	linepointlabel:
	{
		display: ['yes', 'yes', 'yes'],
		font_color:
		[
			chartFarben('schwarz'),
			chartFarben('schwarz'),
			chartFarben('schwarz')
		],
		font_size: [16, 12, 16],
		position_y: [-15, -12, 15]
	},
	xaxis:
	{
		font_color:
		[
			chartFarben('rosa'),
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
		tick_step_size: 50,
		tick_to_label_spacing: 5,
		tick_width: 1
	}
};

berlin_canvas_chart(canvas_properties);
