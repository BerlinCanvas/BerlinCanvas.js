
var canvas_properties = {

	bar:
	{
	},
	barlabel:
	{
	},
	canvas:
	{
		document_id: document.getElementById('bc_3_line_area_chart'),
		font_family: 'Calibri, Arial, Helvetica',
		height: 350,
		width: 700
	},
	chart:
	{
		axis_labels:
		[
			[<?php php_array_zu_js($newsletter_monate); ?>],
			[<?php php_array_zu_js($newsletter_jahre); ?>]
		],
		chart_to_values_spacing: 'yes',
		orientation: 'vertical',
		types: ['line', 'line', 'line'],
		values:
		[
			[<?php php_array_zu_js($newsletter_oeffner_zu_empfaenger); ?>],
			[<?php php_array_zu_js($newsletter_downloader_zu_oeffner); ?>],
			[<?php php_array_zu_js($newsletter_downloader_zu_empfaenger); ?>]
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
		labels: ['Öffner zu Empfänger', 'Downloader zu Öffner', 'Downloader zu Empfänger'],
		legend_to_chart_spacing: 50,
		line_height: 2.25,
		point_to_label_spacing: 16
	},
	legendpoint:
	{
		background_color:
		[
			chartFarben('gelb', 7),
			chartFarben('gruen', 7),
			chartFarben('tuerkis', 7)
		],
		border_color:
		[
			chartFarben('schwarz'),
			chartFarben('schwarz'),
			chartFarben('schwarz')
		],
		border_width: [0, 0, 0],
		position_y: [7, 7, 7],
		radius: [10, 10, 10],
		shape: ['circle', 'circle', 'circle']
	},
	line:
	{
		color:
		[
			chartFarben('schwarz'),
			chartFarben('schwarz'),
			chartFarben('schwarz')
		],
		display: ['no', 'no', 'no'],
		width: [4, 4, 3]
	},
	linearea:
	{
		color:
		[
			chartFarben('gelb', 4),
			chartFarben('gruen', 5),
			chartFarben('tuerkis', 6)
		],
		display: ['yes', 'yes', 'yes'],
		fill_to: ['bottom', 'bottom', 'bottom']
	},
	linepoint:
	{
		background_color:
		[
			chartFarben('schwarz'),
			chartFarben('schwarz'),
			chartFarben('schwarz')
		],
		border_color:
		[
			chartFarben('schwarz'),
			chartFarben('schwarz'),
			chartFarben('schwarz')
		],
		border_width: [0, 0, 0],
		display: ['no', 'no', 'no'],
		radius: [0, 0, 0],
		rainbow: 'no',
		shape: ['circle', 'circle', 'circle']
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
		font_size: [16, 16, 16],
		position_y: [0, 0, 0]
	},
	xaxis:
	{
		font_color:
		[
			chartFarben('dunkelblau'),
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
		tick_step_size: 5,
		tick_to_label_spacing: 5,
		tick_width: 1
	}
};

berlin_canvas_chart(canvas_properties);
