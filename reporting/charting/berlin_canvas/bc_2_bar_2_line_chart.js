
var canvas_properties = {

	bar:
	{
		background_color:
		[
			chartFarben('gruen'),
			chartFarben('blau')
		],
		border_color: chartFarben('schwarz'),
		border_width: 1,
		rainbow: 'no',
		stacked: 'no'
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
		position_y: [4, 4]
	},
	canvas:
	{
		document_id: document.getElementById('bc_2_bar_2_line_chart'),
		font_family: 'Calibri, Arial, Helvetica',
		height: 350,
		width: 700
	},
	chart:
	{
		axis_labels:
		[
			[<?php php_array_zu_js($monate_der_bestellungen_nach_kunden); ?>],
			[<?php php_array_zu_js($jahre_der_bestellungen_nach_kunden); ?>]
		],
		chart_to_values_spacing: 'yes',
		orientation: 'vertical',
		types: ['line', 'line', 'bar', 'bar'],
		values:
		[
			[<?php php_array_zu_js($anzahl_der_bestellungen_nach_kunden); ?>],
			[11, 8, 10, 13, 12, 10, 11, 12, 11, 13, 11, 12],
			[<?php php_array_zu_js($anzahl_der_bestellungen_nach_p_kunden); ?>],
			[<?php php_array_zu_js($anzahl_der_bestellungen_nach_u_kunden); ?>]
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
		labels: ['Privatkunden', 'Unternehmen', 'alle Kunden', 'weiteres Dataset'],
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
			chartFarben('schwarz'),
			chartFarben('schwarz')
		],
		border_color:
		[
			chartFarben('schwarz'),
			chartFarben('schwarz'),
			chartFarben('grau'),
			chartFarben('tuerkis')
		],
		border_width: [1, 1, 2, 2],
		position_y: [7, 7, 7, 7],
		radius: [11, 11, 3, 3],
		shape: ['rectangle', 'rectangle', 'discrete horizontal', 'discrete horizontal']
	},
	line:
	{
		color:
		[
			chartFarben('hellgrau', 5),
			chartFarben('schwarz')
		],
		display: ['yes', 'no'],
		width: [4, 4]
	},
	linearea:
	{
		color:
		[
			chartFarben('schwarz'),
			chartFarben('schwarz')
		],
		display: ['no', 'no'],
		fill_to: ['bottom', 'bottom']
	},
	linepoint:
	{
		background_color:
		[
			chartFarben('hellgrau', 3),
			chartFarben('helltuerkis')
		],
		border_color:
		[
			chartFarben('hellgelb'),
			chartFarben('helltuerkis')
		],
		border_width: [2, 3],
		display: ['no', 'yes'],
		radius: [12, 10.5],
		rainbow: 'no',
		shape: ['circle', 'discrete horizontal']
	},
	linepointlabel:
	{
		display: ['yes', 'yes'],
		font_color:
		[
			chartFarben('dunkelgrau'),
			chartFarben('dunkeltuerkisgruen')
		],
		font_size: [16, 16],
		position_y: [0, -9]
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
		font_color: chartFarben('dunkelrosa'),
		font_size: 16,
		tick_color: chartFarben('lichtgrau'),
		tick_length: 10,
		tick_step_size: 2,
		tick_to_label_spacing: 5,
		tick_width: 1
	}
};

berlin_canvas_chart(canvas_properties);
