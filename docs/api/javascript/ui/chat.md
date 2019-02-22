---
title: Chat
description: Configuration, methods and events of the Kendo UI Chat
res_type: api
component: chat
---

# kendo.ui.Chat

Represents the Kendo UI Chat widget. Inherits from [Widget](/api/javascript/ui/widget).

## Configuration

### messages `Object`

Allows localization of the strings that are used in the widget.

#### Example

    <div id="chat"></div>
    <script>
    $("#chat").kendoChat({
        messages: {
            placeholder: "Type here..."
        }
    }).data("kendoChat");
    </script>

### messages.placeholder `String` *(default: "Type a message...")*

The hint displayed in the input textbox of the widget.

#### Example

    <div id="chat"></div>
    <script>
    $("#chat").kendoChat({
        messages: {
            placeholder: "Type here..."
        }
    }).data("kendoChat");
    </script>

### user `Object`

Configures the Kendo UI Chat user information.

### user.iconUrl `String` *(default: "")*

If set, sets the image url to be used for the user avatar icon.

#### Example

    <div id="chat"></div>
    <script>
    $("#chat").kendoChat({
        user: {
            iconUrl: "https://demos.telerik.com/kendo-ui/content/web/chat/avatar.png"
        }
    }).data("kendoChat");
    </script>

### user.name `String` *(default: "User")*

Sets the name of the chat user.

#### Example

    <div id="chat"></div>
    <script>
    $("#chat").kendoChat({
        user: {
            name: "Chat User"
        }
    }).data("kendoChat");
    </script>

### toolbar `Object`

Configures the Kendo UI Chat toolbar.

#### Example

    <div id="chat"></div>
    <script>
    $("#chat").kendoChat({
        toolbar: {
            buttons: [
                { name: "ButtonA", iconClass: "k-icon k-i-gear" },
                { name: "ButtonA", iconClass: "k-icon k-i-gear" }
            ]
        }
    });
    </script>

### toolbar.animation `Boolean|Object`

Configures the toolbar toggle animation. If disabled animation will not play.

#### Example

    <div id="chat"></div>
    <script>
    $("#chat").kendoChat({
        toolbar: {
            animation: false,
            buttons: [
                { name: "ButtonA", iconClass: "k-icon k-i-gear" },
                { name: "ButtonA", iconClass: "k-icon k-i-gear" }
            ]
        }
    });
    </script>

#### Example

    <div id="chat"></div>
    <script>
    $("#chat").kendoChat({
        toolbar: {
            animation: {
                collapse: {
                    effects: "expandVertical fadeIn",
                    duration: 500
                },
                expand: {
                    effects: "expandVertical fadeIn",
                    duration: 500
                }
            },
            toggleable: true,
            buttons: [
                { name: "ButtonA", iconClass: "k-icon k-i-gear" },
                { name: "ButtonA", iconClass: "k-icon k-i-gear" }
            ]
        }
    });
    </script>

### toolbar.animation.collapse `Object`

Configures the toolbar collapse animation.

#### Example

    <div id="chat"></div>
    <script>
    $("#chat").kendoChat({
        toolbar: {
            animation: {
                collapse: {
                    effects: "expandVertical fadeIn",
                    duration: 500
                }
            },
            toggleable: true,
            buttons: [
                { name: "ButtonA", iconClass: "k-icon k-i-gear" },
                { name: "ButtonA", iconClass: "k-icon k-i-gear" }
            ]
        }
    });
    </script>

### toolbar.animation.collapse.effects `String`

Configures the effects of the toolbar collapse animation.

#### Example

    <div id="chat"></div>
    <script>
    $("#chat").kendoChat({
        toolbar: {
            animation: {
                collapse: {
                    effects: "expandVertical fadeIn"
                }
            },
            toggleable: true,
            buttons: [
                { name: "ButtonA", iconClass: "k-icon k-i-gear" },
                { name: "ButtonA", iconClass: "k-icon k-i-gear" }
            ]
        }
    });
    </script>

### toolbar.animation.collapse.duration `Number`

Configures the duration (in miliseconds) of the toolbar collapse animation.

#### Example

    <div id="chat"></div>
    <script>
    $("#chat").kendoChat({
        toolbar: {
            animation: {
                collapse: {
                    duration: 500
                }
            },
            toggleable: true,
            buttons: [
                { name: "ButtonA", iconClass: "k-icon k-i-gear" },
                { name: "ButtonA", iconClass: "k-icon k-i-gear" }
            ]
        }
    });
    </script>

### toolbar.animation.expand `Object`

Configures the expand animation of the toolbar;

#### Example

    <div id="chat"></div>
    <script>
    $("#chat").kendoChat({
        toolbar: {
            animation: {
                expand: {
                    effects: "expandVertical fadeIn",
                    duration: 500
                }
            },
            toggleable: true,
            buttons: [
                { name: "ButtonA", iconClass: "k-icon k-i-gear" },
                { name: "ButtonA", iconClass: "k-icon k-i-gear" }
            ]
        }
    });
    </script>

### toolbar.animation.expand.effects `String`

Configures the effects of the expand animation.

#### Example

    <div id="chat"></div>
    <script>
    $("#chat").kendoChat({
        toolbar: {
            animation: {
                expand: {
                    effects: "expandVertical fadeIn"
                }
            },
            toggleable: true,
            buttons: [
                { name: "ButtonA", iconClass: "k-icon k-i-gear" },
                { name: "ButtonA", iconClass: "k-icon k-i-gear" }
            ]
        }
    });
    </script>

### toolbar.animation.expand.duration `Number`

Configures the duration of the expand animation.

#### Example

    <div id="chat"></div>
    <script>
    $("#chat").kendoChat({
        toolbar: {
            animation: {
                expand: {
                    duration: 500
                }
            },
            toggleable: true,
            buttons: [
                { name: "ButtonA", iconClass: "k-icon k-i-gear" },
                { name: "ButtonA", iconClass: "k-icon k-i-gear" }
            ]
        }
    });
    </script>

### toolbar.buttons `Array`

Defines the collection of buttons to be rendered. When using only an array of strings, the string added will define the **name** option of the button.

#### Example

    <div id="chat"></div>
    <script>
    $("#chat").kendoChat({
        toolbar: {
            buttons: [
                { name: "ButtonA", iconClass: "k-icon k-i-gear" },
                { name: "ButtonB", iconClass: "k-icon k-i-gear" }
            ]
        }
    });
    </script>

#### Example

    <div id="chat"></div>
    <script>
    $("#chat").kendoChat({
        toolbar: {
            buttons: [ "ButtonA", "ButtonB" ]
        }
    });
    </script>

### toolbar.buttons.name `String`

Defines the name of the button.

#### Example

    <div id="chat"></div>
    <script>
    $("#chat").kendoChat({
        toolbar: {
            buttons: [
                { name: "ButtonA", iconClass: "k-icon k-i-gear" },
                { name: "ButtonB", iconClass: "k-icon k-i-gear" }
            ]
        }
    });
    </script>

### toolbar.buttons.text `String`

Defines the text to be rendered in the button.

#### Example

    <div id="chat"></div>
    <script>
    $("#chat").kendoChat({
        toolbar: {
            buttons: [
                { name: "ButtonA", text: "ButtonA" },
                { name: "ButtonB", text: "ButtonB" }
            ]
        }
    });
    </script>

### toolbar.buttons.iconClass `String`

Defines the icon classes of the span rendered in the button.

#### Example

    <div id="chat"></div>
    <script>
    $("#chat").kendoChat({
        toolbar: {
            buttons: [
                { name: "ButtonA", iconClass: "k-icon k-i-gear" },
                { name: "ButtonB", iconClass: "k-icon k-i-gear" }
            ]
        }
    });
    </script>

### toolbar.buttons.attr `Object`

Defines an object that is applied to the button element as attributes.

#### Example

    <div id="chat"></div>
    <script>
    $("#chat").kendoChat({
        toolbar: {
            buttons: [
                { name: "ButtonA", attr: { "class": "myClass" } },
                { name: "ButtonB", attr: { "class": "myClass" } }
            ]
        }
    });
    </script>

### toolbar.scrollable `Boolean` *(default: true)*

Enables or disables the scrollable behavior of the toolbar.

#### Example

    <div id="chat"></div>
    <script>
    $("#chat").kendoChat({
        toolbar: {
            scrollable: true,
            buttons: [
                { name: "ButtonA", attr: { "class": "myClass" } },
                { name: "ButtonB", attr: { "class": "myClass" } }
            ]
        }
    });
    </script>

### toolbar.toggleable `Boolean` *(default: false)*

Enables or disables the toggleable behavior of the toolbar.

#### Example

    <div id="chat"></div>
    <script>
    $("#chat").kendoChat({
        toolbar: {
            toggleable: true,
            buttons: [
                { name: "ButtonA", attr: { "class": "myClass" } },
                { name: "ButtonB", attr: { "class": "myClass" } }
            ]
        }
    });
    </script>

## Methods

### getUser

Gets the user info associated with the chat instance

#### Returns

`Object` the object with the user info. Contains the auto-generated id, name and iconUrl.

#### Example

    <div id="chat"></div>
    <script>
        $("#chat").kendoChat();

        var chat = $("#chat").data("kendoChat");

        console.log(chat.getUser().name);
    </script>

### postMessage

Triggers the post event with the message, and also renders it inside the widget.

#### Parameters

##### message `String`

The text to send and render.

#### Example

    <div id="chat"></div>
    <script>
        $("#chat").kendoChat();

        var chat = $("#chat").data("kendoChat");

        chat.postMessage("Hello!");
    </script>

### renderAttachments

Renders an attachment inside the chat. The attachments are rendered through a predefined or custom template, registered with the Chat widget.

#### Parameters

##### options `Object`

The configuration options for the attachment.

##### options.attachments `Object`

An array of attachment objects.

##### options.attachments.content `Object`

The attachment properties, passed to the template to be rendered inside the chat bubble.

##### options.attachments.contentType `String`

The attachment type. This is used to determine which template is used when rendering the attachment inside the chat.

##### options.attachmentLayout `String`

The layout to be used in rendering the attachments. Supported values are `list` and `carousel`.

##### sender `Object`

The configuration object containg information about the sender of the message bubble. This determines where the message is rendered.

##### sender.id `Object`

The unique identifier, used to distinguish between different users in the chat.

##### sender.name `String`

The string representing the name of the sender, which is rendered before the message bubble.

##### sender.iconUrl `String`

The url used to show the sender avatar.

#### Example - Render attachment

    <div id="chat"></div>
    <script>
        $("#chat").kendoChat();

        var chat = $("#chat").data("kendoChat");

        chat.renderAttachments({
            attachments: [{
                contentType: "heroCard",
                content: {
                    title: "Attachment Title",
                    subtitle: "Attachment Subtitle",
                    text: "Sample text"
                }
            }],
            attachmentLayout: "carousel"
        }, chat.getUser());
    </script>

### renderMessage

Renders a message bubble inside the chat.

#### Parameters

##### message `Object`

The configuration options for the message.

##### message.type `String`

The type of the message bubble to render. Can be either `text` or `typing`.

##### message.text `String`

The text of the message bubble. When the type is set to `typing`, this is ignored.

##### sender `Object`

The configuration object containg information about the sender of the message buggle. This determines where the message is rendered.

##### sender.id `Object`

The unique identifier, used to distinguish between different users in the chat.

##### sender.name `String`

The string representing the name of the sender, which is rendered before the message bubble.

##### sender.iconUrl `String`

The url used to show the sender avatar.

#### Example - Render message

    <div id="chat"></div>
    <script>
        $("#chat").kendoChat();

        var chat = $("#chat").data("kendoChat");

        chat.renderMessage({
            type: "text",
            text: "Hello Kendo Chat"
        }, {
            id: kendo.guid(),
            name: "Sample User",
            iconUrl: "https://demos.telerik.com/kendo-ui/content/web/chat/avatar.png"
        });
    </script>

#### Example - Render message from chat user

    <div id="chat"></div>
    <script>
        $("#chat").kendoChat();

        var chat = $("#chat").data("kendoChat");

        chat.renderMessage({
            type: "text",
            text: "Hello Kendo Chat"
        }, chat.getUser());
    </script>

#### Example - Render typing indicator

    <div id="chat"></div>
    <script>
        $("#chat").kendoChat();

        var chat = $("#chat").data("kendoChat");

        chat.renderMessage({
            type: "typing"
        }, chat.getUser());
    </script>

### renderSuggestedActions

Renders an array of suggested actions inside the chat.

#### Parameters

##### suggestedActions `Object`

An array of suggestedAction objects.

##### suggestedActions.title `String`

The text which is rendered inside the suggested action bubble.

##### suggestedActions.value `String`

The value of the suggested action. This is the value used as input when a suggested action is clicked.

#### Example

    <div id="chat"></div>
    <script>
        $("#chat").kendoChat();

        var chat = $("#chat").data("kendoChat");

        chat.renderSuggestedActions([{
            title: "Option 1",
            value: "Value 1"
        }, {
            title: "Option 2",
            value: "Value 2"
        }]);
    </script>

### renderUserTypingIndicator

Renders typing indicator for the specified user inside the chat. If a chat indicator is already rendered, this will add the user to the typing list.

#### Parameters

##### sender `Object`

The configuration object containing information about the sender of the typing indicator bubble.

##### sender.id `Object`

The unique identifier, used to distinguish between different users for the typing indicator bubble.

##### sender.name `String`

#### Example

    <div id="chat"></div>
    <script>
        $("#chat").kendoChat();

        var chat = $("#chat").data("kendoChat");

        chat.renderUserTypingIndicator(chat.getUser())
    </script>

### clearUserTypingIndicator

Clears typing indicator for the specified user inside the chat. If a typing indicator is rendered for multiple users, this will remove the name of the specified user from the typing list.

#### Parameters

##### sender `Object`

The configuration object containing information about the sender of the typing indicator bubble.

##### sender.id `Object`

The unique identifier, used to distinguish between different users for the typing indicator bubble.

##### sender.name `String`

#### Example

    <div id="chat"></div>
    <script>
        $("#chat").kendoChat();

        var chat = $("#chat").data("kendoChat");

        chat.renderUserTypingIndicator(chat.getUser())
        chat.clearUserTypingIndicator(chat.getUser())
    </script>

### removeTypingIndicator

Removes typing indicator bubble from the chat. If a typing indicator is rendered for multiple users, this will remove the entire bubble.

#### Example

    <div id="chat"></div>
    <script>
        $("#chat").kendoChat();

        var chat = $("#chat").data("kendoChat");

        chat.renderUserTypingIndicator({ id: "user-1", name: "User 1" });
        chat.renderUserTypingIndicator({ id: "user-2", name: "User 2" });
        chat.removeTypingIndicator(chat.getUser());
    </script>

### toggleToolbar

Toggles the Chat toolbar.

#### Parameters

##### skipEffects `Boolean`

If true, animation will not play.

#### Example

    <div id="chat"></div>
    <script>
        $("#chat").kendoChat({
            toolbar: {
                buttons: [
                    { name: "ButtonA", iconClass: "k-icon k-i-gear" },
                    { name: "ButtonA", iconClass: "k-icon k-i-gear" }
                ]
            }
        });

        var chat = $("#chat").data("kendoChat");

        chat.toggleToolbar(true);
        chat.toggleToolbar();
    </script>

## Events

### actionClick

Fired when an action button is clicked inside an attachment template, or when a suggestedAction is clicked.

#### Event Data

##### e.sender `kendo.ui.Chat`

The widget instance which fired the event.

##### e.text `String`

The text value of the clicked action button

#### Example - subscribe to the "actionClick" event during initialization

    <p>Click on one of the buttons to see the value</p>
    <div id="chat"></div>
    <script>
    $("#chat").kendoChat({
        actionClick: function(e) {
            console.log("Action Clicked: " + e.text);
        }
    });

    var chat = $("#chat").data("kendoChat");

    chat.renderAttachments({
        attachments: [{
            contentType: "heroCard",
            content: {
                title: "Attachment Title",
                subtitle: "Attachment Subtitle",
                buttons: [{
                    title: "button 1",
                    value: "value 1",
                }, {
                    title: "button 2",
                    value: "value 2",
                }]
            }
        }],
        attachmentLayout: "carousel"
    }, chat.getUser());
    </script>

#### Example - subscribe to the "actionClick" event after initialization

    <p>Click on one of the buttons to see the value</p>
    <div id="chat"></div>
    <script>
    function chat_actionClick(e) {
        console.log("Action Clicked: " + e.text);
    }
    $("#chat").kendoChat();

    var chat = $("#chat").data("kendoChat");
    chat.bind("actionClick", chat_actionClick);

    chat.renderAttachments({
        attachments: [{
            contentType: "heroCard",
            content: {
                title: "Attachment Title",
                subtitle: "Attachment Subtitle",
                buttons: [{
                    title: "button 1",
                    value: "value 1",
                }, {
                    title: "button 2",
                    value: "value 2",
                }]
            }
        }],
        attachmentLayout: "carousel"
    }, chat.getUser());
    </script>

#### Example - "actionClick" event triggered by suggestedAction click

    <p>Click on one of the buttons to see the value</p>
    <div id="chat"></div>
    <script>
    $("#chat").kendoChat({
        actionClick: function(e) {
            console.log("Action Clicked: " + e.text);
        }
    });

    var chat = $("#chat").data("kendoChat");

    chat.renderSuggestedActions([{
        title: "Option 1",
        value: "Value 1"
    }, {
        title: "Option 2",
        value: "Value 2"
    }]);
    </script>

### post

Fired when a message is posted to the chat widget. This can be either through the message box, or an action button click.

#### Event Data

##### e.sender `kendo.ui.Chat`

The widget instance which fired the event

##### e.text `String`

The text value that was posted

##### e.timestamp `Date`

The current time of posting the message

##### e.from `Object`

The current chat user info. This contains the `id`, `name` and `iconUrl` set to the chat instance.

#### Example - subscribe to the "post" event during initialization

    <div id="chat"></div>
    <script>
    $("#chat").kendoChat({
        post: function(e) {
            console.log("Post: " + e.text);
        }
    });
    </script>

#### Example - subscribe to the "post" event after initialization

    <div id="chat"></div>
    <script>
    function chat_post(e) {
        console.log("Post: " + e.text);
    }
    $("#chat").kendoChat();

    var chat = $("#chat").data("kendoChat");
    chat.bind("post", chat_post);
    </script>

### sendMessage

Fired when a message is posted through the chat message box.

#### Event Data

##### e.sender `kendo.ui.Chat`

The widget instance which fired the event

##### e.text `String`

The text value that was entered in the message box

#### Example - subscribe to the "sendMessage" event during initialization

    <div id="chat"></div>
    <script>
    $("#chat").kendoChat({
        sendMessage: function(e) {
            console.log("Message sent: " + e.text);
        }
    });
    </script>

#### Example - subscribe to the "sendMessage" event after initialization

    <div id="chat"></div>
    <script>
    function chat_sendMessage(e) {
        console.log("Message sent: " + e.text);
    }
    $("#chat").kendoChat();

    var chat = $("#chat").data("kendoChat");
    chat.bind("sendMessage", chat_sendMessage);
    </script>

### typingEnd

Fired when the user clears the chat message box, signaling that he stopped typing. The event is also triggered when the user submits the currenlty typed in message.

#### Event Data

##### e.sender `kendo.ui.Chat`

The widget instance which fired the event.

#### Example - subscribe to the "typingEnd" event during initialization

    <div id="chat"></div>
    <script>
    $("#chat").kendoChat({
        typingEnd: function(e) {
            console.log("End typing");
        }
    });
    </script>

#### Example - subscribe to the "typingEnd" event after initialization

    <div id="chat"></div>
    <script>
    function chat_typingEnd(e) {
        console.log("End typing");
    }
    $("#chat").kendoChat();

    var chat = $("#chat").data("kendoChat");
    chat.bind("typingEnd", chat_typingEnd);
    </script>

### typingStart

Fired when the user starts typing in the chat message box. The event is fired only once, and not upon each keystroke.

#### Event Data

##### e.sender `kendo.ui.Chat`

The widget instance which fired the event.

#### Example - subscribe to the "typingStart" event during initialization

    <div id="chat"></div>
    <script>
    $("#chat").kendoChat({
        typingStart: function(e) {
            console.log("Started typing");
        }
    });
    </script>

#### Example - subscribe to the "typingStart" event after initialization

    <div id="chat"></div>
    <script>
    function chat_typingStart(e) {
        console.log("Started typing");
    }
    $("#chat").kendoChat();

    var chat = $("#chat").data("kendoChat");
    chat.bind("typingStart", chat_typingStart);
    </script>

### toolClick

Fired when a button from the toolbar is clicked.

#### Event Data

##### e.sender `kendo.ui.Chat`

The widget instance which fired the event.

##### e.name `String`

The name of the button clicked.

##### e.button `Element`

The DOM elemement of the button clicked.

##### e.messageBox `Element`

The input element of the messageBox.

#### Example

    <div id="chat"></div>
    <script>
    $("#chat").kendoChat({
        toolClick: function(ev){
        switch (ev.name) {
            case "Hello":
                ev.sender.postMessage("Hello (sent from button)");
                break;
            case "Smile":
                var input = $(ev.messageBox);
                input.val(input.val() + " :)");
                break;
        }
        },
        toolbar: {
            buttons: [
                { name: "Hello", text: "Hello" },
                { name: "Smile", text: "Smile" }
            ]
        }
    });
    </script>


