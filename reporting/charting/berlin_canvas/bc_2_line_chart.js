
var canvas_properties = {

	bar:
	{
	},
	barlabel:
	{
	},
	canvas:
	{
		document_id: document.getElementById('bc_2_line_chart'),
		font_family: 'Calibri, Arial, Helvetica',
		height: 350,
		width: 600
	},
	chart:
	{
		axis_labels:
		[
			[<?php php_array_zu_js($themen_der_umfrage_nach_jahren); ?>]
		],
		chart_to_values_spacing: 'yes',
		orientation: 'vertical',
		types: ['line', 'line'],
		values:
		[
			[<?php php_array_zu_js($zahlen_der_umfrage_von_jahr_2); ?>],
			[<?php php_array_zu_js($zahlen_der_umfrage_von_jahr_1); ?>]
		]
	},
	grid:
	{
		background_color: chartFarben('hellgelb'),
		x:
		{
			display: 'no',
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
		labels: ['<?php echo $umfrage_jahr_1; ?>', '<?php echo $umfrage_jahr_2; ?>'],
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
			chartFarben('rosa'),
			chartFarben('grau')
		],
		border_width: [4, 2],
		position_y: [7, 7],
		radius: [6, 4],
		shape: ['circle', 'circle']
	},
	line:
	{
		color:
		[
			chartFarben('grau'),
			chartFarben('rosa')
		],
		display: ['yes', 'yes'],
		width: [3, 4]
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
			chartFarben('weiss'),
			chartFarben('weiss')
		],
		border_color:
		[
			chartFarben('grau'),
			chartFarben('rosa')
		],
		border_width: [2, 4],
		display: ['yes', 'yes'],
		radius: [4, 6],
		rainbow: 'no',
		shape: ['circle', 'circle']
	},
	linepointlabel:
	{
		display: ['yes', 'yes'],
		font_color:
		[
			chartFarben('dunkelgrau'),
			chartFarben('rosa')
		],
		font_size: [12, 16],
		position_y: [-12, -16]
	},
	xaxis:
	{
		font_color:
		[
			chartFarben('dunkelgruen')
		],
		font_size: [16],
		line_height: [1],
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
