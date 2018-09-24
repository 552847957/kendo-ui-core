(function() {
    module("kendo.ui.notification events popup", {
        teardown: teardown
    });

    test("show method triggers show event with popup element as argument", 2, function() {
        var triggered = false;
        var args = {};

        createNotification({
            show: function(e) {
                triggered = true;
                args = e;
            }
        });

        notification.show("foo");

        ok(triggered);
        ok(args.element && args.element.length && args.element.length == 1);
    });

    test("notification hide triggers hide event with popup element as argument", 2, function() {
        var triggered = false;
        var args = {};

        createNotification({
            hide: function(e) {
                triggered = true;
                args = e;
            }
        });

        notification.show("foo");

        notification.hide();

        ok(triggered);
        ok(args.element && args.element.length && args.element.length == 1);
    });

    module("kendo.ui.notification events static", {
        teardown: teardown
    });

    test("show method triggers show event with static element as argument", 2, function() {
        var triggered = false;
        var args = {};

        createNotification({
            appendTo: QUnit.fixture,
            show: function(e) {
                triggered = true;
                args = e;
            }
        });

        notification.show("foo");

        ok(triggered);
        ok(args.element && args.element.length && args.element.length == 1);
    });

    test("notification hide triggers hide event with static element as argument", 2, function() {
        var triggered = false;
        var args = {};

        createNotification({
            appendTo: QUnit.fixture,
            hide: function(e) {
                triggered = true;
                args = e;
            }
        });

        notification.show("foo");

        notification.hide();

        ok(triggered);
        ok(args.element && args.element.length && args.element.length == 1);
    });
})();