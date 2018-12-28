---
title: TreeListDataSource
page_title: API Reference for Kendo UI TreeListDataSource
description: Learn more about the configuration of Kendo UI TreeListDataSource, methods and events.
res_type: api
---

# kendo.data.TreeListDataSource

The data source used by the [kendo.ui.TreeList](/api/javascript/ui/treelist) widget.
Inherits from [kendo.data.DataSource](/api/javascript/data/datasource). The TreeListDataSource contains instances of the
[kendo.data.TreeListModel](/api/javascript/data/treelistmodel) class.


## Configuration

See the [DataSource configuration](/api/javascript/data/datasource#configuration) for all inherited configuration options.

### schema `Object`

The schema configuration of the TreeListDataSource.

### schema.model `Object`

> The `Id` and `ParentId` fields of the model have to be of type `number` or `numeric string` that can be parsed to number. 
    

The model configuration of the TreeListDataSource. See [kendo.data.TreeListModel](/api/javascript/data/treelistmodel) for more info.

## Methods

See the [DataSource methods](/api/javascript/data/datasource#methods) for all inherited methods.

### load

Loads the child nodes of a model.

#### Parameters

##### model `kendo.data.TreeListModel`

The model that must be loaded.

#### Returns

`Promise` A promise that will be resolved when the child nodes have been loaded, or rejected if an HTTP error occurs.

#### Example

    <script>
      var dataSource = new kendo.data.TreeListDataSource({
        transport: {
          read: {
            url: "https://demos.telerik.com/kendo-ui/service/EmployeeDirectory",
            dataType: "jsonp"
          }
        },
        schema: {
          model: {
            id: "EmployeeId",
            fields: {
              EmployeeId: { type: "number", nullable: false },
              parentId: { field: "ReportsTo", nullable: true }
            }
          }
        }
      });

      dataSource.read().then(function() {
        // load child nodes of first root item
        var root = dataSource.at(0);
        return dataSource.load(root);
      }).then(function() {
        // log child nodes of first root
        var root = dataSource.at(0);
        var children = dataSource.childNodes(root);
        console.log(children);
      });
    </script>

### childNodes

Child nodes for model.

#### Parameters

##### model `kendo.data.TreeListModel`

The model whose children must be returned.

#### Returns

`Array` of the child items.

### rootNodes

Return all root nodes.

#### Returns

`Array` of the root items.

### parentNode

The parent of given node.

#### Parameters

##### model `kendo.data.TreeListModel`

The model whose parent must be returned.

#### Returns

`kendo.data.TreeListModel` parent of the node.

### level

The hierarchical level of the node.

#### Parameters

##### model `kendo.data.TreeListModel`

The model whose level must be calculated.

#### Returns

`Number` the hierarchy level of the node.

#### Example - get the level of an item in the TreeListDataSource
    <script>
      var dataSource = new kendo.data.TreeListDataSource({
        transport: {
          read: {
            url: "https://demos.telerik.com/kendo-ui/service/EmployeeDirectory/All",
            dataType: "jsonp"
          }
        },
        schema: {
          model: {
            id: "EmployeeID",
            parentId: "ReportsTo",
            fields: {
              ReportsTo: { field: "ReportsTo",  nullable: true },
              EmployeeID: { field: "EmployeeId", type: "number" }
            },
            expanded: true
          }
        },
        change: function(e){
          var item = dataSource.get(9);
          console.log("Employee with name " + item.FirstName + "is at level: " + dataSource.level(item));
        }
      });
      dataSource.read();
    </script>