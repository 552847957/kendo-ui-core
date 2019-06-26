---
title: Overview
page_title: DateTimePicker Overview | Telerik UI for ASP.NET Core HtmlHelpers
description: "Learn the basics when working with the Kendo UI DateTimePicker HtmlHelper for ASP.NET Core (MVC 6 or ASP.NET Core MVC)."
previous_url: /aspnet-core/helpers/html-helpers/datetimepicker
slug: htmlhelpers_datetimepicker_aspnetcore
position: 1
---

# DateTimePicker HtmlHelper Overview

The Kendo UI DateTimePicker allows the user to select a value from a calendar, a time drop-down list, or through direct input.

The DateTimePicker HtmlHelper extension is a server-side wrapper for the [Kendo UI DateTimePicker](https://demos.telerik.com/kendo-ui/datetimepicker/index) widget. For more information on the DateTimePicker HtmlHelper for ASP.NET MVC, refer to the [UI for ASP.NET MVC documentation](http://docs.telerik.com/aspnet-mvc/helpers/datetimepicker/overview).

## Basic Configuration

The following example demonstrates the basic configuration for the DateTimePicker.

```
    @(Html.Kendo().DateTimePicker()
        .Name("datetimepicker") // The name of the DateTimePicker is mandatory. It specifies the "id" attribute of the widget.
        .Min(new DateTime(2010, 1, 1, 10, 0, 0)) // Set the min time of the DateTimePicker.
        .Max(new DateTime(2010, 1, 1, 20, 0, 0)) // Set the min date of the DateTimePicker.
        .Value(DateTime.Now) // Set the value of the DateTimePicker.
    )
```

## Events

You can subscribe to all DateTimePicker [events](http://docs.telerik.com/kendo-ui/api/javascript/ui/datetimepicker#events). For a complete example on basic DateTimePicker events, refer to the [demo on using the events of the DateTimePicker](https://demos.telerik.com/aspnet-core/datetimepicker/events).

The following example demonstrates how to subscribe to events by a handler name.

```
    @(Html.Kendo().DateTimePicker()
      .Name("datetimepicker")
      .Events(e => e
            .Open("datetimepicker_open")
            .Close("datetimepicker_close")
            .Change("datetimepicker_change")
      )
    )
    <script>
    function datetimepicker_open() {
        // Handle the open event.
    }

    function datetimepicker_close() {
        // Handle the close event.
    }

    function datetimepicker_change() {
        // Handle the change event.
    }
      </script>
```

## Referencing Existing Instances

To reference an existing Kendo UI DateTimePicker instance, use the [`jQuery.data()`](http://api.jquery.com/jQuery.data/) configuration option. Once a reference is established, use the [DateTimePicker API](http://docs.telerik.com/kendo-ui/api/javascript/ui/datetimepicker#methods) to control its behavior.

The following example demonstrates how to access an existing DateTimePicker instance.

      // Place this after your Kendo UI DateTimePicker for ASP.NET Core declaration.
      <script>
      $(function() {
      // The Name() of the DateTimePicker is used to get its client-side instance.
          var datetimepicker = $("#datetimepicker").data("kendoDateTimePicker");
      });
      </script>

## See Also

* [Basic Usage of the DateTimePicker HtmlHelper for ASP.NET Core (Demo)](https://demos.telerik.com/aspnet-core/datetimepicker/index)
* [Using the API of the DateTimePicker HtmlHelper for ASP.NET Core (Demo)](https://demos.telerik.com/aspnet-core/datetimepicker/api)
* [JavaScript API Reference of the DateTimePicker](https://docs.telerik.com/kendo-ui/api/javascript/ui/datetimepicker)
