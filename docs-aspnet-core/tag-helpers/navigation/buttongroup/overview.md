---
title: Overview
page_title: ButtonGroup Overview | Telerik UI for ASP.NET Core Tag Helpers
description: "Learn the basics when working with the Kendo UI ButtonGroup tag helper for ASP.NET Core (MVC 6 or ASP.NET Core MVC)."
previous_url: /aspnet-core/helpers/button-group, /aspnet-core/helpers/tag-helpers/button-group
slug: taghelpers_buttongroup_aspnetcore
position: 1
---

# ButtonGroup Tag Helper Overview

The Kendo UI ButtonGroup groups a series of buttons together on a single line.

The ButtonGroup tag helper extension is a server-side wrapper for the [Kendo UI ButtonGroup](https://demos.telerik.com/kendo-ui/buttongroup/index) widget and enables you to configure the Kendo UI ButtonGroup widget in ASP.NET Core applications.

## Initializing the ButtonGroup

The following example demonstrates how to define the ButtonGroup by using the ButtonGroup tag helper.

    <kendo-buttongroup name="buttonGroup">
        <buttongroup-items>
            <item text="Click here!"></item>
        </buttongroup-items>
    </kendo-buttongroup>

## Basic Configuration

The Button tag helper configuration options are passed as attributes of the tag. The buttons are specified in the `buttongroup-items` child tag collection.

```tagHelper

    <kendo-buttongroup name="player">
        <buttongroup-items>
            <item icon="play" text="Play" selected="true"></item>
            <item icon="pause" text="Pause" enabled="false"></item>
            <item icon="stop" text="Stop"></item>
        </buttongroup-items>
    </kendo-buttongroup>
```
```cshtml

    @(Html.Kendo().ButtonGroup()
       .Name("player")
       .Items(t =>
       {
           t.Add().Text("Play").Icon("play").Selected(true);
           t.Add().Text("Pause").Icon("pause").Enabled(false);
           t.Add().Text("stop").Icon("stop");
       })
    )
```

## See Also

* [Basic Usage of the ButtonGroup Tag Helper for ASP.NET Core (Demo)](https://demos.telerik.com/aspnet-core/buttongroup/tag-helper)
* [JavaScript API Reference of the ButtonGroup](http://docs.telerik.com/kendo-ui/api/javascript/ui/buttongroup)
