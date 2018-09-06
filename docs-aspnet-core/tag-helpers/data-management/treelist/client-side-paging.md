---
title: Client-side paging
page_title: Client-side paging | Telerik UI for ASP.NET Core Tag Helpers
description: "Learn how to enable the client-side paging feature to the Kendo UI TreeList Tag Helper for ASP.NET Core."
slug: client_side_paging_aspnetcore_treelist_tag_helper
position: 2
---

# Client-side paging

The TreeList supports client-side paging for large sets of data. To enable the paging functionality configure the `Pageable settings`.

> * Don't forget to set a `PageSize`. A `PageSize` can be defined in the `Pageable` settings, or in the `DataSource` settings. If an already existing datasource instance is passed to the treelist, then the `PageSize` option should be set in the dataSource's settings and not in the `Pageable` settings.

###### Example

```tab-tagHelper

    <kendo-treelist name="treelist" height="540">
        <treelist-datasource>
            <transport>
                <read url="https://demos.telerik.com/kendo-ui/service/EmployeeDirectory/All" datatype="jsonp" />
            </transport>
            <schema type="json">
                <treelist-model id="EmployeeId" parent-id="ReportsTo" expanded="true">
                    <fields>
                        <field name="ReportsTo" nullable="true"></field>
                        <field name="EmployeeId" type="number"></field>
                        <field name="Extension" type="number"></field>
                    </fields>
                </treelist-model>
            </schema>
        </treelist-datasource>

        <columns>
            <treelist-column field="FirstName" title="First Name" width="280px" template-id="photo-template"></treelist-column>
            <treelist-column field="LastName" title="Last Name" width="160px"></treelist-column>
            <treelist-column field="Position"></treelist-column>
            <treelist-column field="Phone" width="200px"></treelist-column>
            <treelist-column field="Extension" width="140px"></treelist-column>
            <treelist-column field="Address"></treelist-column>
        </columns>
        <pageable page-size="15" page-sizes="new int[] { 5,15,20}"></pageable>
    </kendo-treelist>

```
```tab-cshtml

    @(Html.Kendo().TreeList<EmployeeDirectoryModel>()
        .Name("treelist")
        .Columns(columns =>
        {
            columns.Add().Field(e => e.FirstName).Width(220).TemplateId("photo-template");
            columns.Add().Field(e => e.LastName).Width(160);
            columns.Add().Field(e => e.Position);
            columns.Add().Field(e => e.Phone).Width(200);
            columns.Add().Field(e => e.Extension).Width(140);
            columns.Add().Field(e => e.Address);
        })
        .Filterable()
        .Sortable()
        .DataSource(dataSource => dataSource
            .Read(read => read.Action("All", "EmployeeDirectory"))
            .ServerOperation(false)
            .Model(m => {
                m.Id(f => f.EmployeeId);
                m.ParentId(f => f.ReportsTo);
                m.Expanded(true);
                m.Field(f => f.FirstName);
                m.Field(f => f.LastName);
                m.Field(f => f.ReportsTo);
            })
        )
        .Height(540)
        .Pageable(p => p.PageSize(15)
                        .PageSizes(true)
        )
    )
    </script>

```

## See Also

* [JavaScript API Reference for the Kendo UI jQuery TreeList](https://docs.telerik.com/kendo-ui/api/javascript/ui/treelist)
* [UI for ASP.NET Core TreeList editing live demo](https://demos.telerik.com/aspnet-core/treelist/editing)
