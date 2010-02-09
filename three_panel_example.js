Ext.onReady(function() {
    var comboConfig =  {
        xtype     : 'combo',
        emptyText : 'Select one...',
        width     : 100,
        store     : ['MD', 'DC', 'VA']
    };
    var someButtons = [
        comboConfig,
        {
            xtype : 'button',
            text : 'test'
        },
        {
            text : 'test2'
        },
        '->',
       comboConfig
    ];
    var hbarConfig = {
        items : someButtons
    };

    new Ext.Panel({
        renderTo    : Ext.getBody(),
        height      : 200,
        width       : 400,
        html        : 'Some <b>HTML</b> Body',
        id          : 'panel',
        collapsible : true,
        title       : 'Panel with a non-collapsing hbar',
        frame       : false,
        style       : 'margin: 20px;',
        plugins     : [  new Ext.plugins.TDGi.PanelHeaderToolbar(hbarConfig) ]
//        tbar        : someButtons,
//        bbar        : someButtons,
//        buttons     : someButtons
    });

    new Ext.Panel({
        renderTo    : Ext.getBody(),
        height      : 200,
        width       : 400,
        html        : 'Some <b>HTML</b> Body',
        title       : 'Framed panel with a collapsing hbar',
        collapsible : true,
        frame       : true,
        style       : 'margin: 20px;',
        plugins     : [
            new Ext.plugins.TDGi.PanelHeaderToolbar(
                Ext.apply(
                    {},
                    hbarConfig,
                    {
                        showRealButtons    : true,
                        collapseWithParent : true
                    }
                )
           ) 
        ]
//        tbar        : someButtons,
//        bbar        : someButtons,
//        buttons     : someButtons
    });
    new Ext.Window({
        renderTo    : Ext.getBody(),
        height      : 200,
        width       : 400,
        html        : 'Some <b>HTML</b> Body',
        id          : 'window',
        collapsible : true,
        title       : 'Window ',
        frame       : true,
        plugins     : [
            new Ext.plugins.TDGi.PanelHeaderToolbar(
                Ext.apply(
                    {},
                    hbarConfig,
                    {
//                        showRealButtons    : true, /* Breaks with IE 7 and 8 */
                        collapseWithParent : true
                    }
                )
           )
        ],
        tbar        : someButtons
        //bbar        : someButtons,
        //buttons     : someButtons
    }).show();
});