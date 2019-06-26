---
title: Overview
page_title: DatePicker Overview | Telerik UI for ASP.NET Core HtmlHelpers
description: "Learn the basics when working with the Kendo UI DatePicker HtmlHelper for ASP.NET Core (MVC 6 or ASP.NET Core MVC)."
previous_url: /aspnet-core/helpers/html-helpers/datepicker
slug: htmlhelpers_datepicker_aspnetcore
position: 1
---

# DatePicker HtmlHelper Overview

The DatePicker enables the user to enter or pick a date value.

The DatePicker HtmlHelper extension is a server-side wrapper for the [Kendo UI DatePicker](https://demos.telerik.com/kendo-ui/datepicker/index) widget. For more information on the DatePicker HtmlHelper for ASP.NET MVC, refer to the [UI for ASP.NET MVC documentation](https://docs.telerik.com/aspnet-mvc/helpers/datepicker/overview).

## Basic Configuration

The following example demonstrates the basic configuration for the DatePicker.

```
    @(Html.Kendo().DatePicker()
        .Name("datepicker") // The name of the DatePicker is mandatory. It specifies the "id" attribute of the widget.
        .Min(new DateTime(1900, 1, 1)) // Sets the min date of the DatePicker.
        .Max(new DateTime(2099, 12, 31)) // Sets the min date of the DatePicker.
        .Value(DateTime.Today) // Sets the value of the DatePicker.
    )
```

## Events

You can subscribe to all DatePicker [events](http://docs.telerik.com/kendo-ui/api/javascript/ui/datepicker#events). For a complete example on basic DatePicker events, refer to the [demo on using the events of the DatePicker](https://demos.telerik.com/aspnet-core/datepicker/events).

The following example demonstrates how to subscribe to events by a handler name.

```
    @(Html.Kendo().DatePicker()
      .Name("datepicker")
      .Events(e => e
            .Open("datepicker_open")
            .Close("datepicker_close")
            .Change("datepicker_change")
      )
    )
    <script>
    function datepicker_open() {
        // Handle the open event.
    }

    function datepicker_close() {
        // Handle the close event.
    }

    function datepicker_change() {
        // Handle the change event.
    }
    </script>
```

## Referencing Existing Instances

To reference an existing Kendo UI DatePicker instance, use the [`jQuery.data()`](http://api.jquery.com/jQuery.data/) method.  Once a reference has been established, use the [DatePicker API](http://docs.telerik.com/kendo-ui/api/javascript/ui/datepicker#methods) to control its behavior.

        // Place this after your Kendo UI DatePicker for ASP.NET Core declaration.
        <script>
        $(function() {
        // The Name() of the DatePicker is used to get its client-side instance.
            var datepicker = $("#datepicker").data("kendoDatePicker");
        });
        </script>

## See Also

* [Basic Usage of the DatePicker HtmlHelper for ASP.NET Core (Demo)](https://demos.telerik.com/aspnet-core/datepicker/index)
* [Using the API of the DatePicker HtmlHelper for ASP.NET Core (Demo)](https://demos.telerik.com/aspnet-core/datepicker/api)
* [JavaScript API Reference of the DatePicker](https://docs.telerik.com/kendo-ui/api/javascript/ui/datepicker)
