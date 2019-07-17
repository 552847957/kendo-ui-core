---
title: Scrolling
page_title: Scrolling | Telerik UI Grid HtmlHelper for ASP.NET Core
description: "Learn how to enable the scrolling functionality of the Telerik UI Grid for ASP.NET Core."
slug: htmlhelpers_grid_aspnetcore_scrolling
position: 10
---

# Scrolling

By default, the scrolling functionality of the Telerik UI Grid for ASP.NET Core is disabled.

## Getting Started

To control scrolling in the Grid, use the `Scrollable` property.

```
@(Html.Kendo().Grid<Kendo.Mvc.Examples.Models.Customer>()
    .Name("grid")
    .HtmlAttributes(new { style = "height: 380px;" })
    .Scrollable()
    ...
```

## Scroll Modes

The Grid supports the following scroll modes and implementations:
* [Virtual scrolling of remote data (demo)](https://demos.telerik.com/aspnet-core/grid/virtualization-remote-data)
* [Endless scrolling (demo)](https://demos.telerik.com/aspnet-core/grid/endless-scrolling-remote)
* [Scrolling of frozen columns (demo)](https://demos.telerik.com/aspnet-core/grid/frozen-columns)

The `Virtual` scrolling always displays a single page of data. Scrolling only changes the data which is currently displayed. The `Endless` scrolling mode appends new pages of data to the already rendered records.

```
@(Html.Kendo().Grid<Kendo.Mvc.Examples.Models.OrderViewModel>()
    .Name("grid")
    .Scrollable(scrollable => scrollable.Virtual(true))
    .HtmlAttributes(new { style = "height:430px;" })
    .DataSource(dataSource => dataSource
        .Ajax()
        .PageSize(100)
		...
)
```

The `Endless` scrolling is suitable for limited number of records, because after some point the browser will start to freeze (due to the amount of DOM elements on the page). For huge amount of records it is recommended to use `Virtual` scrolling or standard paging.

## See Also

* [Virtual Scrolling by the Grid HtmlHelper for ASP.NET Core (Demo)](https://demos.telerik.com/aspnet-core/grid/virtualization-remote-data)
* [Endless Scrolling by the Grid HtmlHelper for ASP.NET Core (Demo)](https://demos.telerik.com/aspnet-core/grid/endless-scrolling-remote)
* [Scrolling of Frozen Columns in the Grid HtmlHelper for ASP.NET Core (Demo)](https://demos.telerik.com/aspnet-core/grid/frozen-columns)
* [JavaScript API Reference of the Grid HtmlHelper for ASP.NET Core](/api/grid)
