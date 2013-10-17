Ext.define('ShopAfter.controller.Facebook', {
    extend: 'Ext.app.Controller',

    requires: ['ShopAfter.Facebook'],

    config: {
        control: {
            '#fbLogin': {
                tap: 'onFacebookLogin'
            }
        }
    },

    init: function() {

        console.log('controller.Facebook init');

        ShopAfter.Facebook.on({
            exception: function() {
                Ext.create('ShopAfter.view.Dialog', { msg: 'The connection to Facebook has timed out' }).show();
            },
            loginStatus: function() {
                Ext.get('loading').destroy();
            }
        });
    },

    // Redirect to Facebook when the user taps the Facebook Login button
    onFacebookLogin: function() {

        console.log('controller.Facebook onFacebookLogin');

        window.top.location = ShopAfter.Facebook.redirectUrl();
    }
});
