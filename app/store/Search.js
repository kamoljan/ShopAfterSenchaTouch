Ext.define('ShopAfter.store.Search', {
    extend  : 'Ext.data.Store',
    requires: [
        'ShopAfter.model.InsertAdForm'
    ],
    config: {
        model: 'ShopAfter.model.InsertAdForm',
        pageSize: 10,
        proxy: {
            type: 'ajax',
            url: '/ad',
            reader: {
                type: 'json',
                rootProperty: 'ads'
            }
        }
    }
});
