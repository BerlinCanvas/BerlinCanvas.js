
var canvas_properties = {

	bar:
	{
		background_color:
		[
			chartFarben('tuerkis'),
			chartFarben('gruen'),
			chartFarben('blau')
		],
		border_color: chartFarben('schwarz'),
		border_width: 0,
		rainbow: 'no',
		stacked: 'no'
	},
	barlabel:
	{
		display: ['yes', 'yes', 'yes'],
		font_color:
		[
			chartFarben('dunkeltuerkis'),
			chartFarben('gruen'),
			chartFarben('blau')
		],
		font_size: [16, 16, 16],
		position_y: [-19, -19, -19]
	},
	canvas:
	{
		document_id: document.getElementById('bc_3_bar_chart'),
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
		types: ['bar', 'bar', 'bar'],
		values:
		[
			[<?php php_array_zu_js($anzahl_der_bestellungen_nach_kunden); ?>],
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
		labels: ['alle Kunden', 'Privatkunden', 'Unternehmen'],
		legend_to_chart_spacing: 50,
		line_height: 2.25,
		point_to_label_spacing: 8
	},
	legendpoint:
	{
		background_color:
		[
			chartFarben('tuerkis'),
			chartFarben('gruen'),
			chartFarben('blau')
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
		font_color:
		[
			chartFarben('gruen'),
			chartFarben('blau')
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
		tick_step_size: 2,
		tick_to_label_spacing: 5,
		tick_width: 1
	}
};

berlin_canvas_chart(canvas_properties);
