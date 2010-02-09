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
    var headerToolbarCfg = {
        items : someButtons
    };

    new Ext.Viewport({
        layout : 'border',
        items  : [
           {
                height      : 200,
                region   : 'north',
                html        : 'Some <b>HTML</b> Body',
                title       : 'Panel with a non-collapsing hbar',
                collapsible : true,
                frame       : false,
                plugins     : [  new Ext.plugins.TDGi.PanelHeaderToolbar(headerToolbarCfg) ],
                tbar        : someButtons,
                bbar        : someButtons,
               split        : true
            },
            {
                height      : 200,
                region   : 'center',
                html        : 'Some <b>HTML</b> Body',
                title       : 'Center panel',
                frame       : false,
                plugins     : [  new Ext.plugins.TDGi.PanelHeaderToolbar(headerToolbarCfg) ],
                tbar        : someButtons,
                bbar        : someButtons
            }



        ]

    });
    new Ext.Window({
        width  : 300,
        id     : 'window',
        height  : 200,
        modal  : true,
        html    : '<a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/3.0/us/"><img alt="Creative Commons License" style="border-width:0" src="http://i.creativecommons.org/l/by-nc-sa/3.0/us/88x31.png" /></a><br /><span xmlns:dc="http://purl.org/dc/elements/1.1/" href="http://purl.org/dc/dcmitype/Text" property="dc:title" rel="dc:type">PanelHeaderToolbar Ext JS plugin</span> by <a xmlns:cc="http://creativecommons.org/ns#" href="http://tdg-i.com" property="cc:attributionName" rel="cc:attributionURL">Jesus Garcia</a> is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/3.0/us/">Creative Commons Attribution-Noncommercial-Share Alike 3.0 United States License</a>.<br />Based on a work at <a xmlns:dc="http://purl.org/dc/elements/1.1/" href="http://tdg-i.com" rel="dc:source">tdg-i.com</a>.<br />Permissions beyond the scope of this license may be available at <a xmlns:cc="http://creativecommons.org/ns#" href="http://tdg-i.com" rel="cc:morePermissions">http://tdg-i.com</a>.',
        buttons : [{text:'Close', handler:function(){Ext.getCmp('window').close()}}]
    }).show()
});