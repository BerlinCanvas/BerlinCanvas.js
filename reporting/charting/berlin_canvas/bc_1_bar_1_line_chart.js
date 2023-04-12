
var canvas_properties = {

	bar:
	{
		background_color:
		[
			chartFarben('dunkelrosa')
		],
		border_color: chartFarben('schwarz'),
		border_width: 1,
		rainbow: 'no',
		stacked: 'no'
	},
	barlabel:
	{
		display: ['yes'],
		font_color:
		[
			chartFarben('dunkelrosa')
		],
		font_size: [16],
		position_y: [-19]
	},
	canvas:
	{
		document_id: document.getElementById('bc_1_bar_1_line_chart'),
		font_family: 'Calibri, Arial, Helvetica',
		height: 350,
		width: 700
	},
	chart:
	{
		axis_labels:
		[
			[<?php php_array_zu_js($monate_von_produkt_marketing); ?>],
			[<?php php_array_zu_js($jahre_von_produkt_marketing); ?>]
		],
		chart_to_values_spacing: 'yes',
		orientation: 'vertical',
		types: ['line', 'bar'],
		values:
		[
			[<?php php_array_zu_js($anzahl_von_allen_produkten_ausser_marketing); ?>],
			[<?php php_array_zu_js($anzahl_von_produkt_marketing); ?>]
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
		labels: ['2 Monate marketing', 'alle anderen Produkte'],
		legend_to_chart_spacing: 50,
		line_height: 2.25,
		point_to_label_spacing: 8
	},
	legendpoint:
	{
		background_color:
		[
			chartFarben('dunkelrosa'),
			chartFarben('hellgraugelb')
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
			chartFarben('hellgrau', 5)
		],
		display: ['yes'],
		width: [4]
	},
	linearea:
	{
		color:
		[
			chartFarben('hellgrau', 3)
		],
		display: ['yes'],
		fill_to: ['bottom']
	},
	linepoint:
	{
		background_color:
		[
			chartFarben('hellgrau', 3)
		],
		border_color:
		[
			chartFarben('hellgelb')
		],
		border_width: [2],
		display: ['yes'],
		radius: [14],
		rainbow: 'no',
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
		position_y: [0]
	},
	xaxis:
	{
		font_color:
		[
			chartFarben('dunkelrosa'),
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
		font_color: chartFarben('dunkelgruen'),
		font_size: 16,
		tick_color: chartFarben('lichtgrau'),
		tick_length: 10,
		tick_step_size: 2,
		tick_to_label_spacing: 5,
		tick_width: 1
	}
};

berlin_canvas_chart(canvas_properties);
