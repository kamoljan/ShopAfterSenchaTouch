/**
 * The tablet specific controller for Ads
 */
Ext.define('ShopAfter.controller.tablet.Ads', {
    extend: 'ShopAfter.controller.Ads',

    config: {
        refs: {
            tabletContainer: 'tabletContainer'
        }
    },

    init: function () {
        console.log('controller.tablet.Ads init');
        this.callParent();
        ShopAfter.Facebook.on({
            connected: this.onFacebookLogin,
            logout: this.onFacebookLogout,
            unauthorized: this.onFacebookUnauthorized,
            scope: this
        });
    },

    onFacebookLogin: function () {
        console.log('controller.tablet.Ads onFacebookLogin');
        this.callParent(arguments);
        this.initContainer();
    },

    initContainer: function () {
        console.log('controller.tablet.Ads initContainer');
        if (!this.mainContainer) {
            console.log('controller.tablet.Ads !this.mainContainer');
            this.mainContainer = Ext.Viewport.add({ xtype: 'tabletContainer' });
        }
    },

    showAd: function (record) {
        console.log('controller.tablet.Ads showAd');
        ShopAfter.currentAd = record;
        if (!this.adDetailCmp) {
            this.adDetailCmp = Ext.widget('adDetail');
        }
        this.adDetailCmp.setRecord(record);
        this.getToolbar().setTitle(record.get('description'));
        this.getTabletContainer().setActiveItem(this.adDetailCmp);
    }
});
