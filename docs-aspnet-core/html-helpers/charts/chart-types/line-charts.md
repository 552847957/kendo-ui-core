---
title: Line Charts
page_title: Line Charts | Kendo UI Charts HtmlHelper for ASP.NET Core
description: "Learn how to define and configure Kendo UI Line Charts."
slug: linecharts_aspnetcore_htmlhelper
---

# Line Charts

The [Kendo UI Line Chart HtmlHelper for ASP.NET Core](https://demos.telerik.com/aspnet-core/line-charts/index) is suitable for displaying quantitative data by using continuous lines passing through points defined by the values of their items. It is useful for rendering a trend over time and comparing several sets of similar data.
## Configuration

Use `Line` and `VerticalLine` in the Series configuration to create a Line series in the Chart helper.

### Axes

Axes are configured through the `CategoryAxis` and `ValueAxis` settings. Multiple value axes are supported.

###### Example

    @(Html.Kendo().Chart()
         .Name("chart")
         .Title("Internet Users")
         .Legend(legend => legend
             .Position(ChartLegendPosition.Bottom)
         )
         .Series(series =>
         {
             series.Line(new double[] { 15.7, 16.7, 20, 23.5, 26.6 }).Name("World");
             series.Line(new double[] { 67.96, 68.93, 75, 74, 78 }).Name("United States");
         })
         .CategoryAxis(axis => axis
             .Categories("2005", "2006", "2007", "2008", "2009")
             .MajorGridLines(lines => lines.Visible(false))
         )
         .ValueAxis(axis => axis
             .Numeric().Labels(labels => labels.Format("{0}%"))
         )
    )


This configuration results in the Line Chart below.

**Figure 1: A sample Line Chart**

![Line Chart](/html-helpers/charts/chart-types/chart-line.png)

### Line Styles

Kendo UI Line Charts support rendering of the lines between points using different styles. You can set the line style using the `Style` configuration in the `SeriesDefaults` common settings:

```
         .SeriesDefaults(seriesDefaults =>
             seriesDefaults.Line().Style(ChartLineStyle.Smooth)
         )
```

or for each Line series individually:

```
         .Series(series =>
         {
             series.Line(new double[] { 15.7, 26.7, 20, 23.5, 26.6 }).Name("World").Style(ChartLineStyle.Smooth);
             series.Line(new double[] { 67.96, 68.93, 75, 54, 78 }).Name("United States").Style(ChartLineStyle.Smooth);
         })
```

The supported styles are:

* Normal&mdash;This is the default style. It produces a straight line between data points.
* Step&mdash;This style renders the connection between data points through vertical and horizontal lines. It is suitable for indicating that the value is constant between the changes.
* Smooth&mdash;This style causes the Line Chart to display a fitted curve through data points. It is suitable when the data requires to be displayed with a curve, or when you wish to connect the points with smooth instead of straight lines.

**Figure 2: A step-line Line Chart**

![Step Line Chart](/html-helpers/charts/chart-types/chart-step-line.png)

**Figure 3: A smooth-line Line Chart**

![Smooth Line Chart](/html-helpers/charts/chart-types/chart-smooth-line.png)

### Types of Lines

The Chart draws Line series as a solid line by default. You can configure the line to be drawn using different dash styles using the `DashType` setting:

```
         .Series(series =>
         {
             series.Line(new double[] { 15.7, 16.7, 20, 23.5, 26.6 }).Name("World").DashType(ChartDashType.Dot);
             series.Line(new double[] { 67.96, 68.93, 75, 74, 78 }).Name("United States");
         })
```

**Figure 4: A dotted Line Series**

![Dotted Line Series](/html-helpers/charts/chart-types/chart-dotted-line.png)

### Markers

The series markers are the visuals that represent the point value in the Line series. You can customize or hide them using the `Markers` configuration.

```
             series.Line(new double[] { 15.7, 16.7, 20, 23.5, 26.6 }).Name("World")
                .Markers(m=>m
                    .Type(ChartMarkerShape.Square)
                    .Rotation(45)
                    .Background("yellow")
                );
```

**Figure 5: A Line Chart with custom markers**

![Line Chart with Custom Markers](/html-helpers/charts/chart-types/chart-line-markers.png)

You can also draw completely custom markers for the Line series through the `Visual` setting, as shown in the [Custom Visuals](https://demos.telerik.com/aspnet-core/line-charts/visuals) demo.

## See Also

Other articles on Kendo UI Charts and chart types:

* [Overview of the Kendo UI Chart Html Helper for ASP.NET Core ]({% slug htmlhelpers_charts_aspnetcore %})
* [Area Charts]({% slug areacharts_aspnetcore_htmlhelper %})
* [Bubble Charts]({% slug bubblecharts_aspnetcore_htmlhelper %})
* [BoxPlot Charts]({% slug boxplotcharts_aspnetcore_htmlhelper %})
* [Bar Charts]({% slug barcharts_aspnetcore_htmlhelper %})
* [Pie Charts]({% slug piecharts_aspnetcore_htmlhelper %})
* [Stock Charts]({% slug overview_stockcharthelper_aspnetcore %})
* [TreeMap]({% slug overview_treemaphelper_aspnetcore %})
* [Chart JavaScript API Reference](https://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/chart)
