Ext.define('ShopAfter.profile.Tablet', {
    extend: 'Ext.app.Profile',
    config: {
        name: 'Tablet',
        controllers: [
            'Ads'
        ],
        views: [
            'Container',
            'ShopAfter.view.tablet.ad.List',
            'ShopAfter.view.tablet.ad.Detail',
            'ShopAfter.view.ad.CapturePicture',
            'ShopAfter.view.ad.InsertAdForm'
        ]
    },
    launch: function () {
        console.log('profile.Tablet launch');
        ShopAfter.view.tablet.ad.List.addXtype('adList');
        ShopAfter.view.tablet.ad.Detail.addXtype('adDetail');
    },
    isActive: function () {
        console.log('profile.Tablet isActive');
        return !Ext.os.is.Phone;
    }
});
