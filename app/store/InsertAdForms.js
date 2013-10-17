Ext.define('ShopAfter.store.InsertAdForms', {
    extend: 'Ext.data.Store',
    requires: [
        'ShopAfter.model.InsertAdForm'
    ],
    config: {
        model: 'ShopAfter.model.InsertAdForm',
        storeId: 'Ads',
        proxy: {
            type: 'ajax',
            url: 'ad'
        }

    }
});