/* ************************************************************************
   Copyright: 2009 OETIKER+PARTNER AG
   License:   GPLv3 or later
   Authors:   Tobi Oetiker <tobi@oetiker.ch>
              Fritz Zaucker <fritz.zaucker@oetiker.ch?
   Utf8Check: äöü
************************************************************************ */

/* ************************************************************************
************************************************************************ */

qx.Class.define("dbtoria.ui.form.FloatField", {
    extend : qx.ui.form.TextField,
    include : [ dbtoria.ui.form.MControlSetter ],

    /**
     * Create a customized TextField.
     *
     */
    construct : function() {
        this.base(arguments);
//        this.set({});
    },

    members : {
        validator: function() {
            return function(value,control){
                        var msg = qx.locale.Manager.tr('This field must be a number.');
                        var valid = !isNaN(Number(value));
                        if (!valid){
                            control.setInvalidMessage(msg);
                            control.setValid(valid);
                        }
                        return valid;
                   };
        }
    }

});
