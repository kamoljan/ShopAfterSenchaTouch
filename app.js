/*
    This file is generated and updated by Sencha Cmd. You can edit this file as
    needed for your application, but these edits will have to be merged by
    Sencha Cmd when it performs code generation tasks such as generating new
    models, controllers or views and when running "sencha app upgrade".

    Ideally changes to this file would be limited and most work would be done
    in other places (such as Controllers). If Sencha Cmd cannot merge your
    changes and its generated code, it will produce a "merge conflict" that you
    will need to resolve manually.
*/

Ext.ns('Ext.util'); // Fix for 2.1
//<debug>
Ext.Loader.setPath({
    'Ext': 'touch/src'
});
//</debug>

Ext.require([
    'Ext.field.Text',
    // Insert Ad
    'Ext.MessageBox',
    'Ext.data.JsonP',
    'Ext.data.Errors',
    'Ext.device.Camera'
]);


Ext.application({
    name: 'ShopAfter',

    profiles: [
        'Phone',
        'Tablet'
    ],

    models: [
        'Ad'
    ],

    stores: [
        'Ads',
        'Search',
        'Activity',
        'InsertAdForms'
    ],

    views: [
        'LoggedOut',
        'Main',
        'Activity',
        'ad.List',
        'Dialog',
        'ad.Picture'
    ],

    controllers: [
        'Facebook',
        'AdsViewings',
        'YouTube'
    ],

    icon: {
        '57': 'resources/icons/Icon.png',
        '72': 'resources/icons/Icon~ipad.png',
        '114': 'resources/icons/Icon@2x.png',
        '144': 'resources/icons/Icon~ipad@2x.png'
    },

    isIconPrecomposed: true,

    startupImage: {
        '320x460': 'resources/startup/320x460.jpg',
        '640x920': 'resources/startup/640x920.png',
        '768x1004': 'resources/startup/768x1004.png',
        '748x1024': 'resources/startup/748x1024.png',
        '1536x2008': 'resources/startup/1536x2008.png',
        '1496x2048': 'resources/startup/1496x2048.png'
    },

    viewport: {
        autoMaximize: true // Causes the URL bar to be hidden once the application loads.
    },

    // This function will be run once the application is ready to be launched.
    launch: function () {
        console.log('application launch');
        // Initialize Facebook with our app ID
        ShopAfter.Facebook.initialize('723097297716821');
        if (window.localStorage && window.localStorage.WL) {
            var parsed = JSON.parse(window.localStorage.WL);
            this.fireEvent('localStorageData', parsed);
            console.log('app.launch parsed = %j', parsed);
        }
        // This is a convenience script which auto-reloads the CSS every second.
        // Combined with `compass watch`, this is useful during theme development as the page doesn't need to be reloaded.
        // setInterval(function(){
        //     Ext.DomQuery.select('link')[0].href = "resources/css/movies.css?" + Math.ceil(Math.random() * 100000000)
        // }, 1000);
    },

    onUpdated: function() {
        Ext.Msg.confirm(
            "Application Update",
            "This application has just successfully been updated to the latest version. Reload now?",
            function(buttonId) {
                if (buttonId === 'yes') {
                    window.location.reload();
                }
            }
        );
    }
});
