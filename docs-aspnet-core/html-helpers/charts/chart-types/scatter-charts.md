---
title: Scatter Charts
page_title: Scatter Charts | Telerik UI Chart HtmlHelper for ASP.NET Core
description: "Learn the basics when working with the scatter charts in the Telerik UI for ASP.NET Core suite."
slug: htmlhelpers_scattercharts_aspnetcore
position: 3
---

# Scatter Charts

Scatter charts are suitable for displaying and comparing different sets of numerical values.

## Setting the Primary Axes

XY Charts, such as the [Scatter](https://demos.telerik.com/aspnet-core/scatter-charts/index) and [Scatter Line](https://demos.telerik.com/aspnet-core/scatter-charts/scatter-line) Charts, use one or more X and Y axes which are configured through the `XAxis` and the `YAxis` properties.

```
    @(Html.Kendo().Chart()
        .Name("chart")
        .Series(series => {
            series.Scatter(new double[][] { new[] { 16.4, 5.4 }, new[] { 21.7, 2 }, new[] { 25.4, 3 }, new[] { 19.0, 2.0 } });
        })
        .XAxis(x => x
            .Numeric()
            .Max(35)
        )
        .YAxis(y => y
            .Numeric()
            .Min(-5)
            .Max(25)
        )
    )
```

## Positioning the Label

The X and Y axes provide options for displaying their labels either next to the axis or at the outer edges of the plot area. By default, the labels are positioned next to the axis.

To change the label position, set the [`Position`](/api//Kendo.Mvc.UI.Fluent/ChartXAxisLabelsSettingsBuilder#positionkendomvcuichartaxislabelsposition) option of the axis labels which provides the following available options:

* (Default) When `Position` is set to `"ChartAxisLabelsPosition.OnAxis"`, the labels are positioned next to the axis.
* When `Position` is set to `"ChartAxisLabelsPosition.End"`, the labels are placed at the end of the crossing axis. Typically, this configuration positions the labels at the top or right end of the Chart unless the crossing axis was reversed.
* When `Position` is set to `"ChartAxisLabelsPosition.Start"`, the labels are placed at the start of the crossing axis. Typically, this configuration positions the labels at the left or bottom end of the Chart unless the crossing axis was reversed.

```
    @(Html.Kendo().Chart()
        .Name("chart")
        .Series(series => {
            series.Scatter(new double[][] { new[] { 16.4, 5.4 }, new[] { 21.7, 2 }, new[] { 25.4, 3 }, new[] { 19.0, 2.0 } });
        })
        .XAxis(x => x
            .Labels(s=>s.Position(ChartAxisLabelsPosition.Start))
        )
    )
```

## Setting Multiple Axes

You can define more X and Y axes in addition to the primary axes. The additional axes must have unique names. Series are associated to a X and Y axes by specifying their name.

> Do not specify a name for the primary X and Y axes.

```
    @(Html.Kendo().Chart(Model)
        .Name("chart")
        .Series(series => {
            series.ScatterLine(model => model.RPM, model => model.Power)
                .Name("Power")
                .Tooltip(tooltip => tooltip.Format("{1} bhp @ {0:N0} rpm"));

            series.ScatterLine(model => model.RPM, model => model.Torque)
                .Name("Torque")
                .YAxis("torque")
                .Tooltip(tooltip => tooltip.Format("{1} lb-ft @ {0:N0} rpm"));
        })
        .XAxis(x => x
            .Numeric()
            .Title(title => title.Text("Engine rpm"))

            // Align torque axis to the right by specifying
            // a crossing value greater than or equal to the axis maximum.
            .AxisCrossingValue(0, 10000)
            .Labels(labels => labels.Format("{0:N0}"))
        )
        .YAxis(y => y
            .Numeric()
            .Title(title => title.Text("Power (bhp)"))
        )
        .YAxis(y => y
            .Numeric("torque")
            .Title(title => title.Text("Torque (lb-ft)"))
        )
    )
```

Because no axis is specified, the first series is associated with the default Y axis. The `torque` series are plotted on the `torque` Y axis.

![A Scatter Chart with multiple axes](images/chart-scatter-line-multiple-axes.png)

## Arranging the Axes

You can also control the arrangement of the X and Y axes by specifying the values at which they cross the primary axes.

```
    .XAxis(x => x
        .Numeric()
        .AxisCrossingValue(0, 2500)
    )
```

The primary Y axis crosses the X axis at point 0 (leftmost). The second, `torque` Y axis crosses the X axis at the 2500 mark or at its right end, whichever comes first.

![A Scatter Line Chart with customized axis crossing value](images/chart-scatter-line-axis-crossing-value.png)

## See Also

* [Using the API of the Chart HtmlHelper for ASP.NET Core (Demo)](https://demos.telerik.com/aspnet-core/chart-api/index)
* [Basic Usage of the Bar Chart HtmlHelper for ASP.NET Core (Demo)](https://demos.telerik.com/aspnet-core/bar-charts/index)
* [Basic Usage of the Line Chart HtmlHelper for ASP.NET Core (Demo)](https://demos.telerik.com/aspnet-core/line-charts/index)
* [Server-Side API](/api/chart)
