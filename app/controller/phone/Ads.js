/**
 * This is a Phone specific controller for Ads.
 */
Ext.define('ShopAfter.controller.phone.Ads', {
    extend: 'ShopAfter.controller.Ads',

    config: {
        routes: {
            'home': 'onAdBack'
        },
        control: {
            '#adBackButton': {
                tap: 'doAdBack'
            }
        },
        refs: {
            toolbar: 'adDetail titlebar'
        }
    },

    init: function() {
        console.log('controller.phone.Ads init');
        this.callParent();
        ShopAfter.Facebook.on({
            connected: this.onFacebookLogin,
            logout: this.onFacebookLogout,
            unauthorized: this.onFacebookUnauthorized,
            scope: this
        });
    },

    onFacebookLogin: function() {
        console.log('controller.phone.Ads onFacebookLogin');
        this.callParent(arguments);
        this.initContainer();
    },

    initContainer: function() {
        console.log('controller.phone.Ads initContainer');
        if (!this.mainContainer) {
            this.mainContainer = Ext.Viewport.add({ xtype: 'main' });
        }
    },

    showAd: function(record) {
        console.log('controller.phone.Ads showAd');
        ShopAfter.currentAd = record;
        if (!this.adDetailCmp) {
            this.adDetailCmp = Ext.widget('adDetail');
        }
        this.getToolbar().setTitle(record.get('description'));
        Ext.Viewport.animateActiveItem(this.adDetailCmp, {
            type: 'slide',
            direction: 'left'
        });
        // This needs to be after the item is painted so we can set the content height
        this.adDetailCmp.setRecord(record);
    },

    doAdBack: function() {
        console.log('controller.phone.Ads doAdBack');
        ShopAfter.app.updateUrl('home');
        this.onAdBack();
    },

    onAdBack: function() {
        console.log('controller.phone.Ads onAdBack');
        Ext.Viewport.animateActiveItem(this.getMain(), {
            type: 'slide',
            direction: 'right'
        });
    }
});
