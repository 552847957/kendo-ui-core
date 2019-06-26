---
title: Overview
page_title: TimePicker Overview | Telerik UI for ASP.NET Core Tag Helpers
description: "Learn the basics when working with the Kendo UI TimePicker tag helper for ASP.NET Core (MVC 6 or ASP.NET Core MVC)."
previous_url: /aspnet-core/helpers/time-picker, /aspnet-core/helpers/tag-helpers/time-picker
slug: taghelpers_timepicker_aspnetcore
position: 1
---

# TimePicker Tag Helper Overview

The Kendo UI TimePicker enables users to select time values from a predefined list or enter new ones.

The TimePicker tag helper extension is a server-side wrapper for the [Kendo UI TimePicker](https://demos.telerik.com/kendo-ui/timepicker/index) widget and enables you to configure the Kendo UI TimePicker widget in ASP.NET Core applications.

## Initializing the TimePicker

The following example demonstrates how to define the TimePicker by using the TimePicker tag helper.

        <kendo-timepicker name="timepicker1"></kendo-timepicker>

## Basic Configuration

The TimePicker tag helper configuration options are passed as attributes of the tag.

```cshtml

        @(Html.Kendo().TimePicker()
                .Name("end")
                .Value("8:30 AM")
                .Min("8:00 AM")
                .Max("7:30 AM")
        )
```
```tagHelper

        <kendo-timepicker name="end" value="new DateTime(1900, 1, 1, 8, 30, 0)"
            min="new DateTime(1900, 1, 1, 8, 0, 0)" max="new DateTime(1900, 1, 1, 7, 30, 0)">
        </kendo-timepicker>
```

The `ParseFormats` option is of type `string[]` and can be assigned either by a `ViewBag` property or by a property of the model.

            @{
                ViewBag.ParseDates = new string[] { "MMMM yyyy", "MMMM" };
            }

            <kendo-timepicker name="timepicker" parse-formats="ViewBag.ParseDates"></kendo-timepicker>

## See Also

* [Basic Usage of the TimePicker Tag Helper for ASP.NET Core (Demo)](https://demos.telerik.com/aspnet-core/timepicker/tag-helper)
* [JavaScript API Reference of the TimePicker](https://docs.telerik.com/kendo-ui/api/javascript/ui/timepicker)
