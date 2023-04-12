
/*

Copyright: 2017, Michael Stetter

Charting Library

Name: BerlinCanvas

Version: 1.0

Former Name: Mein Canvas

Source: Bachelor thesis by Michael Stetter, submitted on June 9, 2017 at the HTW Berlin (University of Applied Sciences)

License: GNU General Public License (latest version)

Copyright notice: The attribution and mention of this entire copyright notice is mandatory.

*/

function calc_highest_sum_of_values_same_indexes(datasets)
{
	var sum_of_values = 0;
	var highest_sum_of_values = 0;

	for(var j = 0; j < datasets[0].length; j++)
	{
		for(var i = 0; i < datasets.length; i++)
		{
			if(sum_of_values < sum_of_values + datasets[i][j])
			{
				sum_of_values += parseInt(datasets[i][j]);
			}
		}

		if(sum_of_values > highest_sum_of_values)
		{
			highest_sum_of_values = sum_of_values;
		}

		sum_of_values = 0;
	}

	return highest_sum_of_values;
}

function calc_longest_dataset_length(datasets)
{
	var longest_dataset = 0;

	for(var i = 0; i < datasets.length; i++)
	{
		if(datasets[i].length > longest_dataset)
		{
			longest_dataset = datasets[i].length;
		}
	}

	return longest_dataset;
}

function calc_lowest_sum_of_values_same_indexes(datasets)
{
	var sum_of_values = 0;
	var lowest_sum_of_values = 0;

	for(var j = 0; j < datasets[0].length; j++)
	{
		for(var i = 0; i < datasets.length; i++)
		{
			if(sum_of_values > sum_of_values + datasets[i][j])
			{
				sum_of_values += parseInt(datasets[i][j]);
			}
		}

		if(sum_of_values < lowest_sum_of_values)
		{
			lowest_sum_of_values = sum_of_values;
		}

		sum_of_values = 0;
	}

	return lowest_sum_of_values;
}

function calc_max_label_height(labels, font_size, line_height)
{
	var max_label_height = 0;

	for(var i = 0; i < labels.length; i++)
	{
		max_label_height += font_size[i] * line_height[i];
	}

	return max_label_height;
}

function calc_max_label_width(ctx, labels)
{
	var max_label_width = 0;

	for(var i = 0; i < labels.length; i++)
	{
		if(Array.isArray(labels[i]) == true)
		{
			for(var j = 0; j < labels[i].length; j++)
			{
				if(ctx.measureText(labels[i][j]).width > max_label_width)
				{
					max_label_width = ctx.measureText(labels[i][j]).width;
				}
			}
		}
		else
		{
			if(ctx.measureText(labels[i]).width > max_label_width)
			{
				max_label_width = ctx.measureText(labels[i]).width;
			}
		}
	}

	return max_label_width;
}

function calc_max_value(datasets)
{
	var max_value = Math.max.apply(null, datasets[0]);

	for(var i = 1; i < datasets.length; i++)
	{
		if(Math.max.apply(null, datasets[i]) > max_value)
		{
			max_value = Math.max.apply(null, datasets[i]);
		}
	}

	return max_value;
}

function calc_max_value_width(ctx, span_max, span_min, tick_step_size)
{
	var max_value_width = ctx.measureText(span_max + Math.round(tick_step_size * 1.1)).width;
	var min_value_width = ctx.measureText(span_min).width;

	if(min_value_width > max_value_width)
	{
		max_value_width = min_value_width;
	}

	return max_value_width;
}

function calc_min_value(datasets)
{
	var min_value = Math.min.apply(null, datasets[0]);

	for(var i = 1; i < datasets.length; i++)
	{
		if(Math.min.apply(null, datasets[i]) < min_value)
		{
			min_value = Math.min.apply(null, datasets[i]);
		}
	}

	return min_value;
}

function determine_span_of_values(min_value, max_value, tick_step_size)
{
	var span_of_values;

	if(min_value >= 0 && max_value >= 0)
	{
		span_of_values = 'over 0';
	}

	if(min_value <= 0 && max_value >= 0)
	{
		span_of_values = 'under and over 0';
	}

	if(min_value <= 0 && max_value <= 0)
	{
		span_of_values = 'under 0';
	}

	if(min_value >= 0 && (min_value < 50 || min_value <= tick_step_size))
	{
		span_of_values = 'just over 0';
	}

	if(max_value <= 0 && (max_value > -50 || max_value >= (tick_step_size * -1)))
	{
		span_of_values = 'just under 0';
	}

	return span_of_values;
}

function draw_data_point(ctx, pos_x, pos_y, point_shape, point_radius)
{
	if(point_shape == 'circle')
	{
		ctx.arc(pos_x, pos_y, point_radius, 0, 2 * Math.PI);
	}
	else if(point_shape == 'cross')
	{
		ctx.moveTo(pos_x - point_radius, pos_y - point_radius);
		ctx.lineTo(pos_x + point_radius, pos_y + point_radius);
		ctx.moveTo(pos_x - point_radius, pos_y + point_radius);
		ctx.lineTo(pos_x + point_radius, pos_y - point_radius);
	}
	else if(point_shape == 'discrete horizontal')
	{
		ctx.moveTo(pos_x - (point_radius * 2), pos_y);
		ctx.lineTo(pos_x + (point_radius * 2), pos_y);
	}
	else if(point_shape == 'discrete vertical')
	{
		ctx.moveTo(pos_x, pos_y - (point_radius * 2));
		ctx.lineTo(pos_x, pos_y + (point_radius * 2));
	}
	else if(point_shape == 'plus')
	{
		ctx.moveTo(pos_x, pos_y - point_radius);
		ctx.lineTo(pos_x, pos_y + point_radius);
		ctx.moveTo(pos_x - point_radius, pos_y);
		ctx.lineTo(pos_x + point_radius, pos_y);
	}
	else if(point_shape == 'rectangle')
	{
		ctx.rect(pos_x - (point_radius / 2),
					pos_y - (point_radius / 2),
					point_radius, point_radius);
	}
	else if(point_shape == 'star')
	{
		ctx.moveTo(pos_x, pos_y - point_radius);
		ctx.lineTo(pos_x, pos_y + point_radius);
		ctx.moveTo(pos_x - point_radius, pos_y);
		ctx.lineTo(pos_x + point_radius, pos_y);
		ctx.moveTo(pos_x - (point_radius / 1.4), pos_y - (point_radius / 1.4));
		ctx.lineTo(pos_x + (point_radius / 1.4), pos_y + (point_radius / 1.4));
		ctx.moveTo(pos_x - (point_radius / 1.4), pos_y + (point_radius / 1.4));
		ctx.lineTo(pos_x + (point_radius / 1.4), pos_y - (point_radius / 1.4));
	}
	else if(point_shape == 'triangle')
	{
		ctx.moveTo(pos_x, pos_y - point_radius);
		ctx.lineTo(pos_x + (point_radius / 1.2), pos_y + (point_radius / 2.2));
		ctx.lineTo(pos_x - (point_radius / 1.2), pos_y + (point_radius / 2.2));
		ctx.lineTo(pos_x, pos_y - point_radius);
	}
}



function berlin_canvas_chart(properties)
{
	if(properties.chart.orientation == 'horizontal')
	{
		berlin_canvas_horizontal_chart(properties);
	}
	else if(properties.chart.orientation == 'vertical')
	{
		berlin_canvas_vertical_chart(properties);
	}
	else if(properties.chart.orientation == 'ring')
	{
		berlin_canvas_ring_chart(properties);
	}
}



function berlin_canvas_horizontal_chart(properties)
{
	// Speichere Properties
	var axis_labels = properties.chart.axis_labels;
	var bar_background_color = properties.bar.background_color;
	var bar_border_color = properties.bar.border_color;
	var bar_border_width = properties.bar.border_width;
	var bar_rainbow = properties.bar.rainbow;
	var bar_stacked = properties.bar.stacked;
	var barlabel_display = properties.barlabel.display;
	var barlabel_font_color = properties.barlabel.font_color;
	var barlabel_font_size = properties.barlabel.font_size;
	var barlabel_position_x = properties.barlabel.position_x;
	var canvas_document_id = properties.canvas.document_id;
	var canvas_font_family = properties.canvas.font_family;
	var canvas_height = properties.canvas.height;
	var canvas_width = properties.canvas.width;
	var chart_to_values_spacing = properties.chart.chart_to_values_spacing;
	var chart_types = properties.chart.types;
	var chart_values = properties.chart.values;
	var grid_background_color = properties.grid.background_color;
	var grid_under_over_zero_line_color = properties.grid.under_over_zero_line_color;
	var grid_x_display = properties.grid.x.display;
	var grid_x_line_color = properties.grid.x.line_color;
	var grid_x_line_width = properties.grid.x.line_width;
	var grid_y_display = properties.grid.y.display;
	var grid_y_line_color = properties.grid.y.line_color;
	var grid_y_line_width = properties.grid.y.line_width;
	var legend_display = properties.legend.display;
	var legend_font_color = properties.legend.font_color;
	var legend_font_size = properties.legend.font_size;
	var legend_labels = properties.legend.labels;
	var legend_line_height = properties.legend.line_height;
	var legend_point_to_label_spacing = properties.legend.point_to_label_spacing;
	var legend_to_chart_spacing = properties.legend.legend_to_chart_spacing;
	var legendpoint_background_color = properties.legendpoint.background_color;
	var legendpoint_border_color = properties.legendpoint.border_color;
	var legendpoint_border_width = properties.legendpoint.border_width;
	var legendpoint_position_y = properties.legendpoint.position_y;
	var legendpoint_radius = properties.legendpoint.radius;
	var legendpoint_shape = properties.legendpoint.shape;
	var line_color = properties.line.color;
	var line_display = properties.line.display;
	var line_width = properties.line.width;
	var linearea_color = properties.linearea.color;
	var linearea_display = properties.linearea.display;
	var linearea_fill_to = properties.linearea.fill_to;
	var linepoint_background_color = properties.linepoint.background_color;
	var linepoint_border_color = properties.linepoint.border_color;
	var linepoint_border_width = properties.linepoint.border_width;
	var linepoint_display = properties.linepoint.display;
	var linepoint_radius = properties.linepoint.radius;
	var linepoint_rainbow = properties.linepoint.rainbow;
	var linepoint_shape = properties.linepoint.shape;
	var linepointlabel_display = properties.linepointlabel.display;
	var linepointlabel_font_color = properties.linepointlabel.font_color;
	var linepointlabel_font_size = properties.linepointlabel.font_size;
	var linepointlabel_position_x = properties.linepointlabel.position_x;
	var x_axis_font_color = properties.xaxis.font_color;
	var x_axis_font_size = properties.xaxis.font_size;
	var x_axis_tick_color = properties.xaxis.tick_color;
	var x_axis_tick_length = properties.xaxis.tick_length;
	var x_axis_tick_step_size = properties.xaxis.tick_step_size;
	var x_axis_tick_to_label_spacing = properties.xaxis.tick_to_label_spacing;
	var x_axis_tick_width = properties.xaxis.tick_width;
	var y_axis_font_color = properties.yaxis.font_color;
	var y_axis_font_size = properties.yaxis.font_size;
	var y_axis_tick_color = properties.yaxis.tick_color;
	var y_axis_tick_length = properties.yaxis.tick_length;
	var y_axis_tick_to_label_spacing = properties.yaxis.tick_to_label_spacing;
	var y_axis_tick_width = properties.yaxis.tick_width;

	// Deklariere Variablen
	var all_bar_spacings_between_gridlines_width;
	var all_bars_between_gridlines_width;
	var bar_height;
	var bar_spacing;
	var bar_values;
	var bar_width;
	var chart_height;
	var chart_width;
	var ctx;
	var extra_gridline_margin;
	var font_family;
	var horizontal_gridline_margin;
	var i;
	var j;
	var k;
	var legendpoint_width;
	var legend_width;
	var line_values;
	var max_bar_stacked_value;
	var max_value;
	var max_values_length;
	var min_bar_stacked_value;
	var min_value;
	var negative_bar_compensation;
	var number_ticks;
	var pos_x;
	var pos_x_2;
	var pos_y;
	var pos_y_2;
	var pos_y_series;
	var scale_width;
	var span;
	var span_max;
	var span_min;
	var span_of_values;
	var text_align_x;
	var text_align_y;
	var text_metrics;
	var vertical_chart_margin;
	var x_axis_height;
	var x_axis_tick_label;
	var x_axis_tick_label_height;
	var x_axis_tick_label_width;
	var x_axis_zero_position;
	var y_axis_tick_label_width;
	var y_axis_width;

	// Initialisiere den Canvas und setze dessen Maße
	ctx = canvas_document_id.getContext('2d');
	ctx.canvas.height = canvas_height;
	ctx.canvas.width = canvas_width;

	// Speichere die Datasets (bar_values und line_values)
	bar_values = [];
	line_values = [];

	for(i = 0; i < chart_types.length; i++)
	{
		if(chart_types[i] == 'bar')
		{
			bar_values.push(chart_values[i]);
		}
		else if(chart_types[i] == 'line')
		{
			line_values.push(chart_values[i]);
		}
	}

	// Berechne den kleinsten und größten Wert der Datasets
	min_value = calc_min_value(chart_values);
	max_value = calc_max_value(chart_values);

	// Berechne den kleinsten und größten Wert der bar_values im Fall von stacked bars
	if(bar_stacked == 'yes')
	{
		min_bar_stacked_value = calc_lowest_sum_of_values_same_indexes(bar_values);
		max_bar_stacked_value = calc_highest_sum_of_values_same_indexes(bar_values);

		if(min_bar_stacked_value < min_value)
		{
			min_value = min_bar_stacked_value;
		}

		if(max_bar_stacked_value > max_value)
		{
			max_value = max_bar_stacked_value;
		}
	}

	// Berechne die Spanne der Werte auf der X-Achse
	span_of_values = determine_span_of_values(min_value, max_value, x_axis_tick_step_size);

	if(chart_to_values_spacing == 'yes')
	{
		extra_gridline_margin = x_axis_tick_step_size;
	}
	else
	{
		extra_gridline_margin = 0;
	}

	if(span_of_values == 'under 0' || span_of_values == 'over 0')
	{
		span_max = Math.round(min_value / 10 - 10) * 10;

		while(span_max < (max_value + extra_gridline_margin))
		{
			span_max += x_axis_tick_step_size;
		}

		span_min = span_max;

		while(span_min > (min_value - extra_gridline_margin))
		{
			span_min -= x_axis_tick_step_size;
		}
	}

	if(span_of_values == 'under and over 0')
	{
		span_min = 0;
		span_max = 0;

		while(span_min > (min_value - extra_gridline_margin))
		{
			span_min -= x_axis_tick_step_size;
		}

		while(span_max < (max_value + extra_gridline_margin))
		{
			span_max += x_axis_tick_step_size;
		}
	}

	if(span_of_values == 'just under 0' || (span_max > 0 && max_value <= 0))
	{
		span_min = 0;
		span_max = 0;

		while(span_min > (min_value - extra_gridline_margin))
		{
			span_min -= x_axis_tick_step_size;
		}
	}

	if(span_of_values == 'just over 0' || (span_min < 0 && min_value >= 0))
	{
		span_min = 0;
		span_max = 0;

		while(span_max < (max_value + extra_gridline_margin))
		{
			span_max += x_axis_tick_step_size;
		}
	}

	// Speichere Schriftart
	font_family = 'px ' + canvas_font_family;

	// Berechne die Länge des längsten Datasets
	max_values_length = calc_longest_dataset_length(chart_values);

	// Berechne die Höhe des oberen Abstands zum Chart
	vertical_chart_margin = grid_y_line_width / 2;

	// Berechne die Höhe der x Axis Tick Labels
	x_axis_tick_label_height = x_axis_font_size;

	// Berechne die Breite des breitesten x Axis Tick Labels
	ctx.font = x_axis_font_size + font_family;
	x_axis_tick_label_width = calc_max_value_width(ctx, span_max, span_min, x_axis_tick_step_size);

	// Berechne die Breite des breitesten y Axis Tick Labels
	ctx.font = y_axis_font_size + font_family;
	y_axis_tick_label_width = calc_max_label_width(ctx, axis_labels);

	// Berechne die Höhe der x Axis
	x_axis_height = x_axis_tick_length
					+ x_axis_tick_to_label_spacing
					+ x_axis_tick_label_height;

	// Berechne die Breite der y Axis
	y_axis_width = y_axis_tick_label_width
						+ y_axis_tick_to_label_spacing
						+ y_axis_tick_length;

	// Berechne die Breite der Legend
	ctx.font = legend_font_size + font_family;
	legend_width = x_axis_tick_label_width / 2;
	legendpoint_width = 0;

	if(legend_display == 'yes')
	{
		legendpoint_width = (Math.max.apply(null, legendpoint_radius) / 2)
							+ (Math.max.apply(null, legendpoint_border_width) * 2);
		legend_width = legend_to_chart_spacing
						+ legendpoint_width
						+ legend_point_to_label_spacing
						+ calc_max_label_width(ctx, legend_labels);
	}

	// Berechne die Maße vom Chart
	chart_height = canvas_height - vertical_chart_margin - x_axis_height;
	chart_width = canvas_width - y_axis_width - legend_width;

	// Berechne die Skalierung für die Datasets
	span = span_max - span_min;
	scale_width = chart_width / span;

	// Berechne die Anzahl der Ticks auf der X-Achse
	number_ticks = Math.round(chart_width / (x_axis_tick_step_size * scale_width)) + 1;

	// Zeichne Chart-Hintergrund
	ctx.beginPath();
	ctx.fillStyle = grid_background_color;
	ctx.fillRect(y_axis_width, vertical_chart_margin, chart_width, chart_height);
	ctx.closePath();

	// Zeichne x Axis Gridlines
	pos_x = y_axis_width;
	pos_y = 0;
	pos_y_2 = vertical_chart_margin + chart_height;
	ctx.beginPath();

	for(i = 0; i < number_ticks; i++)
	{
		ctx.moveTo(pos_x, pos_y);
		ctx.lineWidth = grid_x_line_width;
		ctx.strokeStyle = grid_x_line_color;

		if(i == 0 || i == number_ticks - 1 || grid_x_display == 'yes')
		{
			ctx.lineTo(pos_x, pos_y_2);
			ctx.stroke();
		}

		pos_x += x_axis_tick_step_size * scale_width;
	}

	ctx.closePath();

	// Zeichne y Axis Gridlines
	horizontal_gridline_margin = chart_height / max_values_length;
	pos_x = y_axis_width;
	pos_x_2 = y_axis_width + chart_width;
	pos_y = vertical_chart_margin;
	ctx.beginPath();

	for(i = 0; i < max_values_length + 1; i++)
	{
		ctx.moveTo(pos_x, pos_y);
		ctx.lineWidth = grid_y_line_width;
		ctx.strokeStyle = grid_y_line_color;

		if(i == 0 || i == max_values_length || grid_y_display == 'yes')
		{
			ctx.lineTo(pos_x_2, pos_y);
			ctx.stroke();
		}

		pos_y += horizontal_gridline_margin;
	}

	ctx.closePath();

	// Zeichne x Axis Ticks
	pos_x = y_axis_width;
	pos_y = vertical_chart_margin + chart_height;
	pos_y_2 = vertical_chart_margin + chart_height + x_axis_tick_length;
	ctx.beginPath();

	for(i = 0; i < number_ticks; i++)
	{
		ctx.moveTo(pos_x, pos_y);
		ctx.lineWidth = x_axis_tick_width;
		ctx.lineTo(pos_x, pos_y_2);
		ctx.strokeStyle = x_axis_tick_color;
		ctx.stroke();

		pos_x += x_axis_tick_step_size * scale_width;
	}

	ctx.closePath();

	// Zeichne y Axis Ticks
	pos_x = y_axis_width - x_axis_tick_length;
	pos_x_2 = y_axis_width;
	pos_y = vertical_chart_margin;
	ctx.beginPath();

	for(i = 0; i < max_values_length + 1; i++)
	{
		ctx.moveTo(pos_x, pos_y);
		ctx.lineWidth = y_axis_tick_width;
		ctx.lineTo(pos_x_2, pos_y);
		ctx.strokeStyle = y_axis_tick_color;
		ctx.stroke();

		pos_y += horizontal_gridline_margin;
	}

	ctx.closePath();

	// Zeichne x Axis Tick Labels
	x_axis_tick_label = span_min;
	pos_x = y_axis_width;
	pos_y = vertical_chart_margin
			+ chart_height
			+ x_axis_tick_length
			+ x_axis_tick_to_label_spacing;
	ctx.beginPath();

	for(i = 0; i < number_ticks; i++)
	{
		ctx.fillStyle = x_axis_font_color;
		ctx.font = x_axis_font_size + font_family;
		ctx.textBaseline = 'top';
		text_metrics = ctx.measureText(x_axis_tick_label).width;
		text_align_x = text_metrics / 2;
		ctx.fillText(x_axis_tick_label, pos_x - text_align_x, pos_y);

		x_axis_tick_label += x_axis_tick_step_size;
		pos_x += x_axis_tick_step_size * scale_width;

		if(x_axis_tick_label == 0)
		{
			x_axis_zero_position = pos_x;
		}
	}

	ctx.closePath();

	// Zeichne y Axis Tick Labels
	pos_x = 0;

	if(axis_labels.length > 1)
	{
		pos_y = vertical_chart_margin
				+ (horizontal_gridline_margin / (axis_labels.length * 1.25))
				+ (axis_labels.length)
				- (y_axis_font_size / 1.25);
	}
	else
	{
		pos_y = vertical_chart_margin
				+ (horizontal_gridline_margin / 2) - (y_axis_font_size / 2);
	}

	pos_y_series = pos_y;
	ctx.beginPath();

	for(i = 0; i < axis_labels.length; i++)
	{
		ctx.fillStyle = y_axis_font_color[i];
		ctx.font = y_axis_font_size + font_family;
		ctx.textBaseline = 'top';

		for(j = 0; j < axis_labels[i].length; j++)
		{
			text_metrics = ctx.measureText(axis_labels[i][j]).width;
			text_align_x = y_axis_tick_label_width - text_metrics;
			ctx.fillText(axis_labels[i][j], pos_x + text_align_x, pos_y);

			pos_y += horizontal_gridline_margin;
		}

		pos_y_series += horizontal_gridline_margin / (axis_labels.length * 1.25);
		pos_y = pos_y_series;
	}

	ctx.closePath();

	// Zeichne 0-Linie für Charts mit Werten unter und über 0
	if(span_of_values == 'under and over 0')
	{
		pos_y = 0;
		pos_y_2 = vertical_chart_margin + chart_height + x_axis_tick_length;

		ctx.beginPath();
		ctx.moveTo(x_axis_zero_position, pos_y);
		ctx.lineTo(x_axis_zero_position, pos_y_2);
		ctx.lineWidth = grid_x_line_width;
		ctx.strokeStyle = grid_under_over_zero_line_color;
		ctx.stroke();
		ctx.closePath();
	}

	// Zeichne Legend
	if(legend_display == 'yes')
	{
		pos_x = y_axis_width + chart_width + legend_to_chart_spacing;
		pos_y = legendpoint_radius[0];

		for(i = 0; i < legend_labels.length; i++)
		{
			ctx.beginPath();
			draw_data_point(ctx,
								pos_x,
								pos_y + legendpoint_position_y[i],
								legendpoint_shape[i],
								legendpoint_radius[i]);
			ctx.fillStyle = legendpoint_background_color[i];
			ctx.fill();
			ctx.lineWidth = legendpoint_border_width[i];
			ctx.strokeStyle = legendpoint_border_color[i];

			if(legendpoint_border_width[i] != 0)
			{
				ctx.stroke();
			}

			ctx.closePath();

			ctx.beginPath();
			ctx.fillStyle = legend_font_color;
			ctx.font = legend_font_size + font_family;
			ctx.textBaseline = 'top';
			ctx.fillText(legend_labels[i],
						pos_x + legendpoint_width + legend_point_to_label_spacing,
						pos_y);
			ctx.closePath();

			pos_y += legend_font_size * legend_line_height;
		}
	}

	// Zeichne Line Area
	for(i = 0; i < line_values.length; i++)
	{
		if(linearea_display[i] == 'yes')
		{
			pos_y = vertical_chart_margin
					+ horizontal_gridline_margin / 2;
			ctx.beginPath();

			for(j = 0; j < line_values[i].length; j++)
			{
				pos_x = y_axis_width
						- (span_min * scale_width)
						+ (line_values[i][j] * scale_width);
				ctx.lineTo(pos_x, pos_y);

				pos_y += horizontal_gridline_margin;
			}

			if(linearea_fill_to[i] == 'bottom')
			{
				pos_y -= horizontal_gridline_margin / 2;
				ctx.lineTo(pos_x, pos_y);
				pos_x = y_axis_width;
				ctx.lineTo(pos_x, pos_y);
				pos_y = vertical_chart_margin;
				ctx.lineTo(pos_x, pos_y);
				pos_x = y_axis_width
						- (span_min * scale_width)
						+ (line_values[i][0] * scale_width);
				ctx.lineTo(pos_x, pos_y);
			}
			if(linearea_fill_to[i] == 'line')
			{
				if(x_axis_zero_position != undefined)
				{
					pos_x = x_axis_zero_position;
					pos_y -= horizontal_gridline_margin;
					ctx.lineTo(pos_x, pos_y);
					pos_y = vertical_chart_margin
							+ horizontal_gridline_margin / 2;
					ctx.lineTo(pos_x, pos_y);
				}
			}
			else if(linearea_fill_to[i] == 'top')
			{
				pos_y -= horizontal_gridline_margin / 2;
				ctx.lineTo(pos_x, pos_y);
				pos_x = y_axis_width + chart_width;
				ctx.lineTo(pos_x, pos_y);
				pos_y = vertical_chart_margin;
				ctx.lineTo(pos_x, pos_y);
				pos_x = y_axis_width
						- (span_min * scale_width)
						+ (line_values[i][0] * scale_width);
				ctx.lineTo(pos_x, pos_y);
			}

			ctx.fillStyle = linearea_color[i];
			ctx.fill();
			ctx.closePath();
		}
	}

	// Zeichne Bars
	all_bars_between_gridlines_width = horizontal_gridline_margin / 1.7;
	all_bar_spacings_between_gridlines_width = horizontal_gridline_margin - all_bars_between_gridlines_width;
	bar_width = all_bars_between_gridlines_width / bar_values.length;
	bar_spacing = all_bar_spacings_between_gridlines_width / bar_values.length;

	pos_y = vertical_chart_margin + bar_spacing / 4 * (bar_values.length + 1);

	if(bar_stacked == 'yes')
	{
		bar_width = horizontal_gridline_margin / 1.7;
		bar_spacing = horizontal_gridline_margin - bar_width;
		pos_y = vertical_chart_margin + bar_spacing / 2;
	}

	pos_y_series = pos_y;

	for(i = 0; i < bar_values.length; i++)
	{
		for(j = 0; j < bar_values[i].length; j++)
		{
			bar_height = bar_values[i][j] * scale_width;
			pos_x = y_axis_width + chart_width - (span_max * scale_width);

			if(span_of_values == 'over 0')
			{
				bar_height = (bar_values[i][j] - span_min) * scale_width;
				pos_x = y_axis_width;
			}

			if(span_of_values == 'under 0')
			{
				bar_height = (bar_values[i][j] - span_max) * scale_width;
				pos_x = y_axis_width + chart_width;
			}

			if(bar_stacked == 'yes')
			{
				if(i > 0)
				{
					for(k = 0; k < i; k++)
					{
						if(bar_values[i][j] < 0)
						{
							if(bar_values[k][j] < 0)
							{
								pos_x += bar_values[k][j] * scale_width;
							}
						}
						else if(bar_values[i][j] > 0)
						{
							if(bar_values[k][j] > 0)
							{
								pos_x += bar_values[k][j] * scale_width;
							}
						}
					}
				}
			}

			ctx.beginPath();
			ctx.rect(pos_x, pos_y, bar_height, bar_width);

			if(bar_rainbow == 'yes')
			{
				ctx.fillStyle = bar_background_color[j];
			}
			else
			{
				ctx.fillStyle = bar_background_color[i];
			}

			ctx.fill();
			ctx.lineWidth = bar_border_width;
			ctx.strokeStyle = bar_border_color;

			if(bar_border_width != 0)
			{
				if(bar_height != 0)
				{
					ctx.stroke();
				}
			}

			ctx.closePath();

			pos_y += horizontal_gridline_margin;
		}

		if(bar_stacked == 'no')
		{
			pos_y_series += bar_width + (bar_spacing / 2);
		}

		pos_y = pos_y_series;
	}

	// Zeichne Bar Labels
	pos_y = vertical_chart_margin + bar_spacing / 4 * (bar_values.length + 1);

	if(bar_stacked == 'yes')
	{
		bar_width = horizontal_gridline_margin / 1.7;
		bar_spacing = horizontal_gridline_margin - bar_width;
		pos_y = vertical_chart_margin + bar_spacing / 2;
	}

	pos_y_series = pos_y;

	for(i = 0; i < bar_values.length; i++)
	{
		ctx.beginPath();

		for(j = 0; j < bar_values[i].length; j++)
		{
			bar_height = bar_values[i][j] * scale_width;
			ctx.fillStyle = barlabel_font_color[i];
			ctx.font = barlabel_font_size[i] + font_family;
			ctx.textBaseline = 'top';
			text_align_x = ctx.measureText(bar_values[i][j]).width;
			text_align_y = (bar_width / 2) - (barlabel_font_size[i] / 2 - 0.5);

			if(bar_values[i][j] < 0)
			{
				negative_bar_compensation = text_align_x - barlabel_position_x[i] * 2;
			}
			else
			{
				negative_bar_compensation = 0;
			}

			pos_x = y_axis_width
					- (span_min * scale_width)
					+ bar_height
					+ barlabel_position_x[i]
					+ negative_bar_compensation;

			if(bar_stacked == 'yes')
			{
				if(i > 0)
				{
					for(k = 0; k < i; k++)
					{
						if(bar_values[i][j] < 0)
						{
							if(bar_values[k][j] < 0)
							{
								pos_x += bar_values[k][j] * scale_width;
							}
						}
						else if(bar_values[i][j] > 0)
						{
							if(bar_values[k][j] > 0)
							{
								pos_x += bar_values[k][j] * scale_width;
							}
						}
					}
				}
			}

			if(barlabel_display[i] == 'yes')
			{
				if(bar_values[i][j] != 0)
				{
					if(Math.abs(bar_height) > (text_align_x + 3))
					{
						if(barlabel_position_x[i] < 0)
						{
							ctx.fillText(bar_values[i][j],
											pos_x - text_align_x,
											pos_y + text_align_y);
						}
						else
						{
							ctx.fillText(bar_values[i][j], pos_x, pos_y + text_align_y);
						}
					}
				}
			}

			pos_y += horizontal_gridline_margin;
		}

		ctx.closePath();

		if(bar_stacked == 'no')
		{
			pos_y_series += bar_width + (bar_spacing / 2);
		}

		pos_y = pos_y_series;
	}

	// Zeichne Lines
	for(i = 0; i < line_values.length; i++)
	{
		if(line_display[i] == 'yes')
		{
			pos_y = vertical_chart_margin + horizontal_gridline_margin / 2;
			ctx.beginPath();

			for(j = 0; j < line_values[i].length; j++)
			{
				pos_x = y_axis_width
						- (span_min * scale_width)
						+ (line_values[i][j] * scale_width);
				ctx.lineTo(pos_x, pos_y);

				pos_y += horizontal_gridline_margin;
			}

			ctx.lineWidth = line_width[i];
			ctx.strokeStyle = line_color[i];
			ctx.stroke();
			ctx.closePath();
		}
	}

	// Zeichne Line Points
	for(i = 0; i < line_values.length; i++)
	{
		if(linepoint_display[i] == 'yes')
		{
			pos_y = vertical_chart_margin + horizontal_gridline_margin / 2;

			for(j = 0; j < line_values[i].length; j++)
			{
				pos_x = y_axis_width
						- (span_min * scale_width)
						+ (line_values[i][j] * scale_width);
				ctx.beginPath();

				if(linepoint_shape[i] == 'range')
				{
					ctx.rect(pos_x,
							pos_y - (linepoint_radius[i] / 2),
							(line_values[i + 1][j] - line_values[i][j]) * scale_width,
							linepoint_radius[i]);
				}
				else
				{
					draw_data_point(ctx, pos_x, pos_y, linepoint_shape[i], linepoint_radius[i]);
				}

				if(linepoint_rainbow == 'yes')
				{
					if(linepoint_shape[i] == 'circle' ||
						linepoint_shape[i] == 'rectangle' ||
						linepoint_shape[i] == 'triangle')
					{
						ctx.fillStyle = linepoint_background_color[j];
						ctx.strokeStyle = linepoint_border_color[i];
					}
					else
					{
						ctx.fillStyle = linepoint_background_color[i];
						ctx.strokeStyle = linepoint_border_color[j];
					}
				}
				else
				{
					ctx.fillStyle = linepoint_background_color[i];
					ctx.strokeStyle = linepoint_border_color[i];
				}

				ctx.fill();
				ctx.lineWidth = linepoint_border_width[i];

				if(linepoint_border_width[i] != 0)
				{
					ctx.stroke();
				}

				ctx.closePath();

				pos_y += horizontal_gridline_margin;
			}
		}
	}

	// Zeichne Line Point Labels
	for(i = 0; i < line_values.length; i++)
	{
		pos_y = vertical_chart_margin + horizontal_gridline_margin / 2;
		ctx.beginPath();

		for(j = 0; j < line_values[i].length; j++)
		{
			pos_x = y_axis_width
					- (span_min * scale_width)
					+ (line_values[i][j] * scale_width)
					+ linepointlabel_position_x[i];
			ctx.fillStyle = linepointlabel_font_color[i];
			ctx.font = linepointlabel_font_size[i] + font_family;
			ctx.textBaseline = 'top';
			text_align_x = ctx.measureText(line_values[i][j]).width;
			text_align_y = linepointlabel_font_size[i] / 2 - 0.5;

			if(linepointlabel_display[i] == 'yes')
			{
				if(linepointlabel_position_x[i] < 0)
				{
					ctx.fillText(line_values[i][j],
								pos_x - text_align_x,
								pos_y - text_align_y);
				}
				else if(linepointlabel_position_x[i] == 0)
				{
					ctx.fillText(line_values[i][j],
								pos_x - (text_align_x / 2),
								pos_y - text_align_y);
				}
				else if(linepointlabel_position_x[i] > 0)
				{
					ctx.fillText(line_values[i][j],
								pos_x,
								pos_y - text_align_y);
				}
			}

			pos_y += horizontal_gridline_margin;
		}

		ctx.closePath();
	}
}



function berlin_canvas_vertical_chart(properties)
{
	// Speichere Properties
	var axis_labels = properties.chart.axis_labels;
	var bar_background_color = properties.bar.background_color;
	var bar_border_color = properties.bar.border_color;
	var bar_border_width = properties.bar.border_width;
	var bar_rainbow = properties.bar.rainbow;
	var bar_stacked = properties.bar.stacked;
	var barlabel_display = properties.barlabel.display;
	var barlabel_font_color = properties.barlabel.font_color;
	var barlabel_font_size = properties.barlabel.font_size;
	var barlabel_position_y = properties.barlabel.position_y;
	var canvas_document_id = properties.canvas.document_id;
	var canvas_font_family = properties.canvas.font_family;
	var canvas_height = properties.canvas.height;
	var canvas_width = properties.canvas.width;
	var chart_to_values_spacing = properties.chart.chart_to_values_spacing;
	var chart_types = properties.chart.types;
	var chart_values = properties.chart.values;
	var grid_background_color = properties.grid.background_color;
	var grid_under_over_zero_line_color = properties.grid.under_over_zero_line_color;
	var grid_x_display = properties.grid.x.display;
	var grid_x_line_color = properties.grid.x.line_color;
	var grid_x_line_width = properties.grid.x.line_width;
	var grid_y_display = properties.grid.y.display;
	var grid_y_line_color = properties.grid.y.line_color;
	var grid_y_line_width = properties.grid.y.line_width;
	var legend_display = properties.legend.display;
	var legend_font_color = properties.legend.font_color;
	var legend_font_size = properties.legend.font_size;
	var legend_labels = properties.legend.labels;
	var legend_line_height = properties.legend.line_height;
	var legend_point_to_label_spacing = properties.legend.point_to_label_spacing;
	var legend_to_chart_spacing = properties.legend.legend_to_chart_spacing;
	var legendpoint_background_color = properties.legendpoint.background_color;
	var legendpoint_border_color = properties.legendpoint.border_color;
	var legendpoint_border_width = properties.legendpoint.border_width;
	var legendpoint_position_y = properties.legendpoint.position_y;
	var legendpoint_radius = properties.legendpoint.radius;
	var legendpoint_shape = properties.legendpoint.shape;
	var line_color = properties.line.color;
	var line_display = properties.line.display;
	var line_width = properties.line.width;
	var linearea_color = properties.linearea.color;
	var linearea_display = properties.linearea.display;
	var linearea_fill_to = properties.linearea.fill_to;
	var linepoint_background_color = properties.linepoint.background_color;
	var linepoint_border_color = properties.linepoint.border_color;
	var linepoint_border_width = properties.linepoint.border_width;
	var linepoint_display = properties.linepoint.display;
	var linepoint_radius = properties.linepoint.radius;
	var linepoint_rainbow = properties.linepoint.rainbow;
	var linepoint_shape = properties.linepoint.shape;
	var linepointlabel_display = properties.linepointlabel.display;
	var linepointlabel_font_color = properties.linepointlabel.font_color;
	var linepointlabel_font_size = properties.linepointlabel.font_size;
	var linepointlabel_position_y = properties.linepointlabel.position_y;
	var x_axis_font_color = properties.xaxis.font_color;
	var x_axis_font_size = properties.xaxis.font_size;
	var x_axis_line_height = properties.xaxis.line_height;
	var x_axis_tick_color = properties.xaxis.tick_color;
	var x_axis_tick_length = properties.xaxis.tick_length;
	var x_axis_tick_to_label_spacing = properties.xaxis.tick_to_label_spacing;
	var x_axis_tick_width = properties.xaxis.tick_width;
	var y_axis_font_color = properties.yaxis.font_color;
	var y_axis_font_size = properties.yaxis.font_size;
	var y_axis_tick_color = properties.yaxis.tick_color;
	var y_axis_tick_length = properties.yaxis.tick_length;
	var y_axis_tick_step_size = properties.yaxis.tick_step_size;
	var y_axis_tick_to_label_spacing = properties.yaxis.tick_to_label_spacing;
	var y_axis_tick_width = properties.yaxis.tick_width;

	// Deklariere Variablen
	var all_bar_spacings_between_gridlines_width;
	var all_bars_between_gridlines_width;
	var bar_height;
	var bar_spacing;
	var bar_values;
	var bar_width;
	var chart_height;
	var chart_width;
	var ctx;
	var extra_gridline_margin;
	var font_family;
	var i;
	var j;
	var k;
	var legendpoint_width;
	var legend_width;
	var line_values;
	var max_bar_stacked_value;
	var max_value;
	var max_values_length;
	var min_bar_stacked_value;
	var min_value;
	var number_ticks;
	var negative_bar_compensation;
	var pos_x;
	var pos_x_2;
	var pos_x_series;
	var pos_y;
	var pos_y_2;
	var scale_height;
	var span;
	var span_max;
	var span_min;
	var span_of_values;
	var text_align_x;
	var text_align_y;
	var text_metrics;
	var vertical_chart_margin;
	var vertical_gridline_margin;
	var x_axis_height;
	var x_axis_tick_label_height;
	var y_axis_tick_label;
	var y_axis_tick_label_width;
	var y_axis_width;
	var y_axis_zero_position;

	// Initialisiere den Canvas und setze dessen Maße
	ctx = canvas_document_id.getContext('2d');
	ctx.canvas.height = canvas_height;
	ctx.canvas.width = canvas_width;

	// Speichere die Datasets (bar_values und line_values)
	bar_values = [];
	line_values = [];

	for(i = 0; i < chart_types.length; i++)
	{
		if(chart_types[i] == 'bar')
		{
			bar_values.push(chart_values[i]);
		}
		else if(chart_types[i] == 'line')
		{
			line_values.push(chart_values[i]);
		}
	}

	// Berechne den kleinsten und größten Wert der Datasets
	min_value = calc_min_value(chart_values);
	max_value = calc_max_value(chart_values);

	// Berechne den kleinsten und größten Wert der bar_values im Fall von stacked bars
	if(bar_stacked == 'yes')
	{
		min_bar_stacked_value = calc_lowest_sum_of_values_same_indexes(bar_values);
		max_bar_stacked_value = calc_highest_sum_of_values_same_indexes(bar_values);

		if(min_bar_stacked_value < min_value)
		{
			min_value = min_bar_stacked_value;
		}

		if(max_bar_stacked_value > max_value)
		{
			max_value = max_bar_stacked_value;
		}
	}

	// Berechne die Spanne der Werte auf der Y-Achse
	span_of_values = determine_span_of_values(min_value, max_value, y_axis_tick_step_size);

	if(chart_to_values_spacing == 'yes')
	{
		extra_gridline_margin = y_axis_tick_step_size;
	}
	else
	{
		extra_gridline_margin = 0;
	}

	if(span_of_values == 'under 0' || span_of_values == 'over 0')
	{
		span_max = Math.round(min_value / 10 - 10) * 10;

		while(span_max < (max_value + extra_gridline_margin))
		{
			span_max += y_axis_tick_step_size;
		}

		span_min = span_max;

		while(span_min > (min_value - extra_gridline_margin))
		{
			span_min -= y_axis_tick_step_size;
		}
	}

	if(span_of_values == 'under and over 0')
	{
		span_min = 0;
		span_max = 0;

		while(span_min > (min_value - extra_gridline_margin))
		{
			span_min -= y_axis_tick_step_size;
		}

		while(span_max < (max_value + extra_gridline_margin))
		{
			span_max += y_axis_tick_step_size;
		}
	}

	if(span_of_values == 'just under 0' || (span_max > 0 && max_value <= 0))
	{
		span_min = 0;
		span_max = 0;

		while(span_min > (min_value - extra_gridline_margin))
		{
			span_min -= y_axis_tick_step_size;
		}
	}

	if(span_of_values == 'just over 0' || (span_min < 0 && min_value >= 0))
	{
		span_min = 0;
		span_max = 0;

		while(span_max < (max_value + extra_gridline_margin))
		{
			span_max += y_axis_tick_step_size;
		}
	}

	// Speichere Schriftart
	font_family = 'px ' + canvas_font_family;

	// Berechne die Länge des längsten Datasets
	max_values_length = calc_longest_dataset_length(chart_values);

	// Berechne die Höhe des oberen Abstands zum Chart
	vertical_chart_margin = y_axis_font_size / 2;

	// Berechne die Höhe des höchsten x Axis Tick Labels
	x_axis_tick_label_height = calc_max_label_height(axis_labels, x_axis_font_size, x_axis_line_height);

	// Berechne die Breite des breitesten y Axis Tick Labels
	ctx.font = y_axis_font_size + font_family;
	y_axis_tick_label_width = calc_max_value_width(ctx, span_max, span_min, y_axis_tick_step_size);

	// Berechne die Höhe der x Axis
	x_axis_height = x_axis_tick_length
					+ x_axis_tick_to_label_spacing
					+ x_axis_tick_label_height;

	// Berechne die Breite der y Axis
	y_axis_width = y_axis_tick_label_width
					+ y_axis_tick_to_label_spacing
					+ y_axis_tick_length;

	// Berechne die Breite der Legend
	ctx.font = legend_font_size + font_family;
	legend_width = 0;
	legendpoint_width = 0;

	if(legend_display == 'yes')
	{
		legendpoint_width = (Math.max.apply(null, legendpoint_radius) / 2)
							+ (Math.max.apply(null, legendpoint_border_width) * 2);
		legend_width = legend_to_chart_spacing
						+ legendpoint_width
						+ legend_point_to_label_spacing
						+ calc_max_label_width(ctx, legend_labels);
	}

	// Berechne die Maße vom Chart
	chart_height = canvas_height - vertical_chart_margin - x_axis_height;
	chart_width = canvas_width - y_axis_width - grid_x_line_width - legend_width;

	// Berechne die Skalierung für die Datasets
	span = span_max - span_min;
	scale_height = chart_height / span;

	// Berechne die Anzahl der Ticks auf der Y-Achse
	number_ticks = Math.round(chart_height / (y_axis_tick_step_size * scale_height)) + 1;

	// Zeichne Chart-Hintergrund
	ctx.beginPath();
	ctx.fillStyle = grid_background_color;
	ctx.fillRect(y_axis_width, vertical_chart_margin, chart_width, chart_height);
	ctx.closePath();

	// Zeichne x Axis Gridlines
	vertical_gridline_margin = chart_width / max_values_length;
	pos_x = y_axis_width;
	pos_y = vertical_chart_margin - (grid_y_line_width / 2);
	pos_y_2 = vertical_chart_margin + chart_height;
	ctx.beginPath();

	for(i = 0; i < max_values_length + 1; i++)
	{
		ctx.moveTo(pos_x, pos_y);
		ctx.lineWidth = grid_x_line_width;
		ctx.strokeStyle = grid_x_line_color;

		if(i == 0 || i == max_values_length || grid_x_display == 'yes')
		{
			ctx.lineTo(pos_x, pos_y_2);
			ctx.stroke();
		}

		pos_x += vertical_gridline_margin;
	}

	ctx.closePath();

	// Zeichne y Axis Gridlines
	pos_x = y_axis_width;
	pos_x_2 = y_axis_width + chart_width + 0.5;
	pos_y = vertical_chart_margin;
	ctx.beginPath();

	for(i = 0; i < number_ticks; i++)
	{
		ctx.moveTo(pos_x, pos_y);
		ctx.lineWidth = grid_y_line_width;
		ctx.strokeStyle = grid_y_line_color;

		if(i == 0 || i == number_ticks - 1 || grid_y_display == 'yes')
		{
			ctx.lineTo(pos_x_2, pos_y);
			ctx.stroke();
		}

		pos_y += y_axis_tick_step_size * scale_height;
	}

	ctx.closePath();

	// Zeichne x Axis Ticks
	pos_x = y_axis_width;
	pos_y = vertical_chart_margin + chart_height;
	pos_y_2 = vertical_chart_margin + chart_height + x_axis_tick_length;
	ctx.beginPath();

	for(i = 0; i < max_values_length + 1; i++)
	{
		ctx.moveTo(pos_x, pos_y);
		ctx.lineWidth = x_axis_tick_width;
		ctx.lineTo(pos_x, pos_y_2);
		ctx.strokeStyle = x_axis_tick_color;
		ctx.stroke();

		pos_x += vertical_gridline_margin;
	}

	ctx.closePath();

	// Zeichne y Axis Ticks
	pos_x = y_axis_width - x_axis_tick_length;
	pos_x_2 = y_axis_width;
	pos_y = vertical_chart_margin;
	ctx.beginPath();

	for(i = 0; i < number_ticks; i++)
	{
		ctx.moveTo(pos_x, pos_y);
		ctx.lineWidth = y_axis_tick_width;
		ctx.lineTo(pos_x_2, pos_y);
		ctx.strokeStyle = y_axis_tick_color;
		ctx.stroke();

		pos_y += y_axis_tick_step_size * scale_height;
	}

	ctx.closePath();

	// Zeichne x Axis Tick Labels
	pos_y = vertical_chart_margin
			+ chart_height
			+ x_axis_tick_length
			+ x_axis_tick_to_label_spacing;
	ctx.beginPath();

	for(i = 0; i < axis_labels.length; i++)
	{
		pos_x = y_axis_width + vertical_gridline_margin / 2;
		ctx.fillStyle = x_axis_font_color[i];
		ctx.font = x_axis_font_size[i] + font_family;
		ctx.textBaseline = 'top';

		for(j = 0; j < axis_labels[i].length; j++)
		{
			text_metrics = ctx.measureText(axis_labels[i][j]).width;
			text_align_x = text_metrics / 2;
			ctx.fillText(axis_labels[i][j], pos_x - text_align_x, pos_y);

			pos_x += vertical_gridline_margin;
		}

		pos_y += x_axis_font_size[i] * x_axis_line_height[i];
	}

	ctx.closePath();

	// Zeichne y Axis Tick Labels
	y_axis_tick_label = span_min;
	pos_x = 0;
	pos_y = vertical_chart_margin + chart_height - (y_axis_font_size / 2);
	ctx.beginPath();

	for(i = 0; i < number_ticks; i++)
	{
		ctx.fillStyle = y_axis_font_color;
		ctx.font = y_axis_font_size + font_family;
		ctx.textBaseline = 'top';
		text_metrics = ctx.measureText(y_axis_tick_label).width;
		text_align_x = y_axis_tick_label_width - text_metrics;
		ctx.fillText(y_axis_tick_label, pos_x + text_align_x, pos_y + 0.5);

		y_axis_tick_label += y_axis_tick_step_size;
		pos_y -= y_axis_tick_step_size * scale_height;

		if(y_axis_tick_label == 0)
		{
			y_axis_zero_position = pos_y + (y_axis_font_size / 2);
		}
	}

	ctx.closePath();

	// Zeichne 0-Linie für Charts mit Werten unter und über 0
	if(span_of_values == 'under and over 0')
	{
		pos_x = y_axis_width - y_axis_tick_length;
		pos_x_2 = y_axis_width + chart_width + (grid_x_line_width / 2);

		ctx.beginPath();
		ctx.moveTo(pos_x, y_axis_zero_position);
		ctx.lineTo(pos_x_2, y_axis_zero_position);
		ctx.lineWidth = grid_y_line_width;
		ctx.strokeStyle = grid_under_over_zero_line_color;
		ctx.stroke();
		ctx.closePath();
	}

	// Zeichne Legend
	if(legend_display == 'yes')
	{
		pos_x = y_axis_width + chart_width + legend_to_chart_spacing;
		pos_y = legendpoint_radius[0];

		for(i = 0; i < legend_labels.length; i++)
		{
			ctx.beginPath();
			draw_data_point(ctx,
							pos_x,
							pos_y + legendpoint_position_y[i],
							legendpoint_shape[i],
							legendpoint_radius[i]);
			ctx.fillStyle = legendpoint_background_color[i];
			ctx.fill();
			ctx.lineWidth = legendpoint_border_width[i];
			ctx.strokeStyle = legendpoint_border_color[i];

			if(legendpoint_border_width[i] != 0)
			{
				ctx.stroke();
			}

			ctx.closePath();

			ctx.beginPath();
			ctx.fillStyle = legend_font_color;
			ctx.font = legend_font_size + font_family;
			ctx.textBaseline = 'top';
			ctx.fillText(legend_labels[i],
						pos_x + legendpoint_width + legend_point_to_label_spacing,
						pos_y);
			ctx.closePath();

			pos_y += legend_font_size * legend_line_height;
		}
	}

	// Zeichne Line Area
	for(i = 0; i < line_values.length; i++)
	{
		if(linearea_display[i] == 'yes')
		{
			pos_x = y_axis_width + vertical_gridline_margin / 2;
			ctx.beginPath();

			for(j = 0; j < line_values[i].length; j++)
			{
				pos_y = vertical_chart_margin
						+ (span_max * scale_height)
						- (line_values[i][j] * scale_height);
				ctx.lineTo(pos_x, pos_y);

				pos_x += vertical_gridline_margin;
			}

			if(linearea_fill_to[i] == 'bottom')
			{
				pos_x -= vertical_gridline_margin / 2;
				ctx.lineTo(pos_x, pos_y);
				pos_y = vertical_chart_margin + chart_height;
				ctx.lineTo(pos_x, pos_y);
				pos_x = y_axis_width;
				ctx.lineTo(pos_x, pos_y);
				pos_y = vertical_chart_margin
						+ (span_max * scale_height)
						- (line_values[i][0] * scale_height);
				ctx.lineTo(pos_x, pos_y);
			}
			if(linearea_fill_to[i] == 'line')
			{
				if(y_axis_zero_position != undefined)
				{
					pos_x -= vertical_gridline_margin;
					pos_y = y_axis_zero_position;
					ctx.lineTo(pos_x, pos_y);
					pos_x = y_axis_width + vertical_gridline_margin / 2;
					ctx.lineTo(pos_x, pos_y);
				}
			}
			else if(linearea_fill_to[i] == 'top')
			{
				pos_x -= vertical_gridline_margin / 2;
				ctx.lineTo(pos_x, pos_y);
				pos_y = vertical_chart_margin;
				ctx.lineTo(pos_x, pos_y);
				pos_x = y_axis_width;
				ctx.lineTo(pos_x, pos_y);
				pos_y = vertical_chart_margin
						+ (span_max * scale_height)
						- (line_values[i][0] * scale_height);
				ctx.lineTo(pos_x, pos_y);
			}

			ctx.fillStyle = linearea_color[i];
			ctx.fill();
			ctx.closePath();
		}
	}

	// Zeichne Bars
	all_bars_between_gridlines_width = vertical_gridline_margin / 1.7;
	all_bar_spacings_between_gridlines_width = vertical_gridline_margin - all_bars_between_gridlines_width;
	bar_width = all_bars_between_gridlines_width / bar_values.length;
	bar_spacing = all_bar_spacings_between_gridlines_width / bar_values.length;

	pos_x = y_axis_width + bar_spacing / 4 * (bar_values.length + 1);

	if(bar_stacked == 'yes')
	{
		bar_width = vertical_gridline_margin / 1.7;
		bar_spacing = vertical_gridline_margin - bar_width;
		pos_x = y_axis_width + bar_spacing / 2;
	}

	pos_x_series = pos_x;

	for(i = 0; i < bar_values.length; i++)
	{
		for(j = 0; j < bar_values[i].length; j++)
		{
			bar_height = bar_values[i][j] * scale_height;
			pos_y = vertical_chart_margin + (span_max * scale_height) - bar_height;

			if(span_of_values == 'over 0')
			{
				bar_height = (bar_values[i][j] - span_min) * scale_height;
				pos_y = vertical_chart_margin + chart_height - bar_height;
			}

			if(span_of_values == 'under 0')
			{
				bar_height = ((bar_values[i][j] - span_max) * scale_height) * -1;
				pos_y = vertical_chart_margin;
			}

			if(bar_stacked == 'yes')
			{
				if(i > 0)
				{
					for(k = 0; k < i; k++)
					{
						if(bar_values[i][j] < 0)
						{
							if(bar_values[k][j] < 0)
							{
								pos_y -= bar_values[k][j] * scale_height;
							}
						}
						else if(bar_values[i][j] > 0)
						{
							if(bar_values[k][j] > 0)
							{
								pos_y -= bar_values[k][j] * scale_height;
							}
						}
					}
				}
			}

			ctx.beginPath();
			ctx.rect(pos_x, pos_y, bar_width, bar_height);

			if(bar_rainbow == 'yes')
			{
				ctx.fillStyle = bar_background_color[j];
			}
			else
			{
				ctx.fillStyle = bar_background_color[i];
			}

			ctx.fill();
			ctx.lineWidth = bar_border_width;
			ctx.strokeStyle = bar_border_color;

			if(bar_border_width != 0)
			{
				if(bar_height != 0)
				{
					ctx.stroke();
				}
			}

			ctx.closePath();

			pos_x += vertical_gridline_margin;
		}

		if(bar_stacked == 'no')
		{
			pos_x_series += bar_width + (bar_spacing / 2);
		}

		pos_x = pos_x_series;
	}

	// Zeichne Bar Labels
	pos_x = y_axis_width + bar_spacing / 4 * (bar_values.length + 1);

	if(bar_stacked == 'yes')
	{
		bar_width = vertical_gridline_margin / 1.7;
		bar_spacing = vertical_gridline_margin - bar_width;
		pos_x = y_axis_width + bar_spacing / 2;
	}

	pos_x_series = pos_x;

	for(i = 0; i < bar_values.length; i++)
	{
		ctx.beginPath();

		for(j = 0; j < bar_values[i].length; j++)
		{
			bar_height = bar_values[i][j] * scale_height;
			ctx.fillStyle = barlabel_font_color[i];
			ctx.font = barlabel_font_size[i] + font_family;
			ctx.textBaseline = 'top';
			text_metrics = ctx.measureText(bar_values[i][j]).width;
			text_align_x = (bar_width / 2) - (text_metrics / 2);

			if(bar_values[i][j] < 0)
			{
				negative_bar_compensation = barlabel_font_size[i]
											+ barlabel_position_y[i] * 2
											- 2;
			}
			else
			{
				negative_bar_compensation = 0;
			}

			pos_y = vertical_chart_margin
					+ (span_max * scale_height)
					- bar_height
					+ barlabel_position_y[i]
					- negative_bar_compensation;

			if(bar_stacked == 'yes')
			{
				if(i > 0)
				{
					for(k = 0; k < i; k++)
					{
						if(bar_values[i][j] < 0)
						{
							if(bar_values[k][j] < 0)
							{
								pos_y -= bar_values[k][j] * scale_height;
							}
						}
						else if(bar_values[i][j] > 0)
						{
							if(bar_values[k][j] > 0)
							{
								pos_y -= bar_values[k][j] * scale_height;
							}
						}
					}
				}
			}

			if(barlabel_display[i] == 'yes')
			{
				if(bar_values[i][j] != 0)
				{
					if(Math.abs(bar_height) > barlabel_font_size[i])
					{
						ctx.fillText(bar_values[i][j], pos_x + text_align_x, pos_y);
					}
				}
			}

			pos_x += vertical_gridline_margin;
		}

		ctx.closePath();

		if(bar_stacked == 'no')
		{
			pos_x_series += bar_width + (bar_spacing / 2);
		}

		pos_x = pos_x_series;
	}

	// Zeichne Lines
	for(i = 0; i < line_values.length; i++)
	{
		if(line_display[i] == 'yes')
		{
			pos_x = y_axis_width + vertical_gridline_margin / 2;
			ctx.beginPath();

			for(j = 0; j < line_values[i].length; j++)
			{
				pos_y = vertical_chart_margin
						+ (span_max * scale_height)
						- (line_values[i][j] * scale_height);
				ctx.lineTo(pos_x, pos_y);

				pos_x += vertical_gridline_margin;
			}

			ctx.lineWidth = line_width[i];
			ctx.strokeStyle = line_color[i];
			ctx.stroke();
			ctx.closePath();
		}
	}

	// Zeichne Line Points
	for(i = 0; i < line_values.length; i++)
	{
		if(linepoint_display[i] == 'yes')
		{
			pos_x = y_axis_width + vertical_gridline_margin / 2;

			for(j = 0; j < line_values[i].length; j++)
			{
				pos_y = vertical_chart_margin
						+ (span_max * scale_height)
						- (line_values[i][j] * scale_height);
				ctx.beginPath();

				if(linepoint_shape[i] == 'range')
				{
					ctx.rect(pos_x - (linepoint_radius[i] / 2),
							pos_y,
							linepoint_radius[i],
							(line_values[i][j] - line_values[i + 1][j]) * scale_height);
				}
				else
				{
					draw_data_point(ctx, pos_x, pos_y, linepoint_shape[i], linepoint_radius[i]);
				}

				if(linepoint_rainbow == 'yes')
				{
					if(linepoint_shape[i] == 'circle' ||
						linepoint_shape[i] == 'rectangle' ||
						linepoint_shape[i] == 'triangle')
					{
						ctx.fillStyle = linepoint_background_color[j];
						ctx.strokeStyle = linepoint_border_color[i];
					}
					else
					{
						ctx.fillStyle = linepoint_background_color[i];
						ctx.strokeStyle = linepoint_border_color[j];
					}
				}
				else
				{
					ctx.fillStyle = linepoint_background_color[i];
					ctx.strokeStyle = linepoint_border_color[i];
				}

				ctx.fill();
				ctx.lineWidth = linepoint_border_width[i];

				if(linepoint_border_width[i] != 0)
				{
					ctx.stroke();
				}

				ctx.closePath();

				pos_x += vertical_gridline_margin;
			}
		}
	}

	// Zeichne Line Point Labels
	for(i = 0; i < line_values.length; i++)
	{
		pos_x = y_axis_width + vertical_gridline_margin / 2;
		ctx.beginPath();

		for(j = 0; j < line_values[i].length; j++)
		{
			pos_y = vertical_chart_margin
					+ (span_max * scale_height)
					- (line_values[i][j] * scale_height);
			ctx.fillStyle = linepointlabel_font_color[i];
			ctx.font = linepointlabel_font_size[i] + font_family;
			ctx.textBaseline = 'top';
			text_metrics = ctx.measureText(line_values[i][j]).width;
			text_align_x = text_metrics / 2;
			text_align_y = linepointlabel_font_size[i] / 2;

			if(linepointlabel_display[i] == 'yes')
			{
				ctx.fillText(line_values[i][j],
								pos_x - text_align_x,
								pos_y - text_align_y + linepointlabel_position_y[i]);
			}

			pos_x += vertical_gridline_margin;
		}

		ctx.closePath();
	}
}



function berlin_canvas_ring_chart(properties)
{
	// Speichere Properties
	var arc_background_color = properties.arc.background_color;
	var arc_width = properties.arc.width;
	var arclabel_display = properties.arclabel.display;
	var arclabel_font_color = properties.arclabel.font_color;
	var arclabel_font_size = properties.arclabel.font_size;
	var arclabel_position = properties.arclabel.position;
	var canvas_document_id = properties.canvas.document_id;
	var canvas_font_family = properties.canvas.font_family;
	var canvas_height = properties.canvas.height;
	var canvas_width = properties.canvas.width;
	var chart_diameter = properties.chart.diameter;
	var chart_type = properties.chart.type;
	var chart_values = properties.chart.values;
	var legend_display = properties.legend.display;
	var legend_font_color = properties.legend.font_color;
	var legend_font_size = properties.legend.font_size;
	var legend_labels = properties.legend.labels;
	var legend_line_height = properties.legend.line_height;
	var legend_point_to_label_spacing = properties.legend.point_to_label_spacing;
	var legend_to_chart_spacing = properties.legend.legend_to_chart_spacing;
	var legendpoint_background_color = properties.legendpoint.background_color;
	var legendpoint_border_color = properties.legendpoint.border_color;
	var legendpoint_border_width = properties.legendpoint.border_width;
	var legendpoint_position_y = properties.legendpoint.position_y;
	var legendpoint_radius = properties.legendpoint.radius;
	var legendpoint_shape = properties.legendpoint.shape;

	// Deklariere Variablen
	var arc;
	var arc_x;
	var arc_y;
	var chart_height;
	var chart_measure;
	var chart_width;
	var ctx;
	var end_angle;
	var font_family;
	var half_arc;
	var i;
	var legendpoint_width;
	var legend_width;
	var pos_x;
	var pos_y;
	var radius;
	var start_angle;
	var sum_of_chart_values;
	var text_align_x;
	var text_align_y;

	// Initialisiere den Canvas und setze dessen Maße
	ctx = canvas_document_id.getContext('2d');
	ctx.canvas.height = canvas_height;
	ctx.canvas.width = canvas_width;

	// Speichere Schriftart
	font_family = 'px ' + canvas_font_family;

	// Berechne die Breite der Legend
	ctx.font = legend_font_size + font_family;
	legend_width = 0;
	legendpoint_width = 0;

	if(legend_display == 'yes')
	{
		legendpoint_width = legendpoint_radius / 2
								+ (legendpoint_border_width * 2);
		legend_width = legend_to_chart_spacing
						+ legendpoint_width
						+ legend_point_to_label_spacing
						+ calc_max_label_width(ctx, legend_labels);
	}

	// Berechne Maße vom Chart
	chart_height = canvas_height;
	chart_width = canvas_width - legend_width;

	// Berechne Ring-Maße
	sum_of_chart_values = 0;

	for(i = 0; i < chart_values.length; i++)
	{
		sum_of_chart_values += parseInt(chart_values[i]);
	}

	start_angle = 1.5 * Math.PI;
	pos_x = chart_width / 2;
	pos_y = chart_height / 2;

	if(chart_height < chart_width)
	{
		chart_measure = chart_height;
	}
	else
	{
		chart_measure = chart_width;
	}

	if(chart_type == 'doughnut')
	{
		radius = (chart_measure - arc_width) / 2 / 100 * chart_diameter;
	}
	else if(chart_type == 'pie')
	{
		radius = chart_measure / 2 / 100 * chart_diameter;
	}

	// Zeichne Ring-Bögen
	for(i = 0; i < chart_values.length; i++)
	{
		arc = chart_values[i] / sum_of_chart_values * 2 * Math.PI;
		end_angle = start_angle + arc;

		ctx.beginPath();

		if(chart_type == 'doughnut')
		{
			ctx.arc(pos_x, pos_y, radius, start_angle, end_angle);
			ctx.lineWidth = arc_width;
			ctx.strokeStyle = arc_background_color[i];
			ctx.stroke();
		}
		else if(chart_type == 'pie')
		{
			ctx.moveTo(pos_x, pos_y);
			ctx.arc(pos_x, pos_y, radius, start_angle, end_angle);
			ctx.fillStyle = arc_background_color[i];
			ctx.fill();
		}

		ctx.closePath();

		// Zeichne Ring-Bögen Labels
		if(arclabel_display == 'yes')
		{
			half_arc = start_angle + (chart_values[i] / sum_of_chart_values * Math.PI);

			if(chart_type == 'doughnut')
			{
				arc_x = pos_x + Math.cos(half_arc) * (radius + arclabel_position);
				arc_y = pos_y + Math.sin(half_arc) * (radius + arclabel_position) + 1;
			}
			else if(chart_type == 'pie')
			{
				arc_x = pos_x + Math.cos(half_arc) * (radius / 1.7 + arclabel_position);
				arc_y = pos_y + Math.sin(half_arc) * (radius / 1.7 + arclabel_position) + 1;
			}

			ctx.fillStyle = arclabel_font_color;
			ctx.font = arclabel_font_size + font_family;
			ctx.textBaseline = 'top';
			text_metrics = ctx.measureText(chart_values[i]).width;
			text_align_x = text_metrics / 2;
			text_align_y = arclabel_font_size / 2;
			ctx.fillText(chart_values[i], arc_x - text_align_x, arc_y - text_align_y);
		}

		start_angle = end_angle;
	}

	// Zeichne Legend
	if(legend_display == 'yes')
	{
		pos_x = chart_width + legend_to_chart_spacing;
		pos_y = legendpoint_radius;

		for(i = 0; i < legend_labels.length; i++)
		{
			ctx.beginPath();
			draw_data_point(ctx,
							pos_x,
							pos_y + legendpoint_position_y,
							legendpoint_shape,
							legendpoint_radius);
			ctx.fillStyle = legendpoint_background_color[i];
			ctx.fill();
			ctx.lineWidth = legendpoint_border_width;
			ctx.strokeStyle = legendpoint_border_color[i];

			if(legendpoint_border_width != 0)
			{
				ctx.stroke();
			}

			ctx.closePath();

			ctx.beginPath();
			ctx.fillStyle = legend_font_color;
			ctx.font = legend_font_size + font_family;
			ctx.textBaseline = 'top';
			ctx.fillText(legend_labels[i],
						pos_x + legendpoint_width + legend_point_to_label_spacing,
						pos_y);
			ctx.closePath();

			pos_y += legend_font_size * legend_line_height;
		}
	}
}
