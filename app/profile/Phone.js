Ext.define('ShopAfter.profile.Phone', {
    extend: 'Ext.app.Profile',
    config: {
        name: 'Phone',
        controllers: [
            'Ads'
        ],
        views: [
            'ShopAfter.view.phone.ad.List',
            'ShopAfter.view.phone.ad.Detail',
            'ShopAfter.view.ad.CapturePicture',
            'ShopAfter.view.ad.InsertAdForm'
        ]
    },
    launch: function () {
        console.log('profile.Phone launch');
        ShopAfter.view.phone.ad.List.addXtype('adList');
        ShopAfter.view.phone.ad.Detail.addXtype('adDetail');
    },
    isActive: function () {
        console.log('profile.Phone isActive');
        return Ext.os.is.Phone;
    }
});
