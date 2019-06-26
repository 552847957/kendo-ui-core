---
title: Overview
page_title: Tooltip Overview | Telerik UI for ASP.NET Core Tag Helpers
description: "Learn the basics when working with the Kendo UI Tooltip tag helper for ASP.NET Core (MVC 6 or ASP.NET Core MVC)."
previous_url: /aspnet-core/helpers/tooltip, /aspnet-core/helpers/tag-helpers/tooltip
slug: taghelpers_tooltip_aspnetcore
position: 1
---

# Tooltip Tag Helper Overview

The [Tooltip](http://docs.telerik.com/kendo-ui/controls/layout/tooltip/overview) displays a popup hint for a given html element. Its content can be defined either as static text, or loaded dynamically via AJAX.

The Tooltip tag helper extension is a server-side wrapper for the [Kendo UI Tooltip](http://demos.telerik.com/kendo-ui/tooltip/index) widget and enables you to configure the Kendo UI Tooltip widget in ASP.NET Core applications.

## Initializing the Tooltip

The following example demonstrates how to define the Tooltip by using the Tooltip tag helper.

        <kendo-tooltip name="agglomerations" filter="span"></kendo-tooltip>

## Basic Configuration

The Tooltip tag helper configuration options are passed as attributes of the tag and through nested tags.

```cshtml

        @(Html.Kendo().Tooltip()
			.For("#agglomerations")
			.Filter("span")
			.Position(TooltipPosition.Top)
			.Width(120)
			.Animation(a => a.Open(e => e.Fade(FadeDirection.In).Duration(300)))
		)
```
```tagHelper

        <kendo-tooltip name="agglomerations" filter="span" position="top" width="120">
			<popup-animation>
				<open effects="fade:in" duration="300" />
			</popup-animation>
		</kendo-tooltip>
```

## See Also

* [Basic Usage of the Tooltip Tag Helper for ASP.NET Core (Demo)](https://demos.telerik.com/aspnet-core/tooltip/index)
* [JavaScript API Reference of the Tooltip](http://docs.telerik.com/kendo-ui/api/javascript/ui/tooltip)
