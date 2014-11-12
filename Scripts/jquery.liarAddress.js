(function ($) {
    'use strict';

    if (window.liarAddr !== undefined) {
        return;
    }

    var simpAddr, CompAddr;

    function clazz(SuperClass, methods) {
        var constructor = function () { };
        constructor.prototype = new SuperClass;
        constructor.prototype.constructor = constructor;
        constructor.prototype.parent = SuperClass.prototype;
        constructor.prototype = $.extend(constructor.prototype, methods);
        return constructor;
    }

    simpAddr = clazz(Object, {

        init: function (selector) {
            var $parent = $(selector);
            this.id = "test";
            this.container = this.createContainer();

            $parent.append(this.container);

        },
        createContainer: function () {
            var container = $(document.createElement("div")).attr({
                "class": "liarAddr-container"
            }).html([
                "<select class='liaraddr-postalCode' style='width:100px'></select>",
                "   <select class='liaraddr-city' style='width:200px'></select>",
                "   <select class='liaraddr-town' style='width:200px'></select>",
                "   <input class='liaraddr-detail' type='text'  style='width:300px'/>"].join(""));
            return container;
        },
        initContainer: function () {
            var $container = $(this.container),
                $postal_Code = $container.find(".liaraddr-postalCode"),
                $city = $container.find(".liaraddr-city"),
                $town = $container.find(".liaraddr-town");

            $postal_Code.select2();
            $city.select2();
            $town.select2();
        },
        initPostalCode: function () {
            var $container = $(this.container),
                $postal_Code = $container.find(".liaraddr-postalCode:last"),
                zipMenu = !!window['zipMenu'] ? window['zipMenu'] : [],
                options = '<option></option>';

            $.each(zipMenu, function (index, val) {
                options += '<option value=' + val.CodeNo + '>' + val.CodeNo + '</option>';
            });

            $postal_Code.empty().append(options);
            $postal_Code.select2({ 'val': zipMenu[0].CodeNo,
                'placeholder': '郵遞區號'
            });

        },
        initCity: function () {
            var $container = $(this.container),
                $city = $container.find(".liaraddr-city:last"),
                zipMenu = !!window['zipToCity'] ? window['zipToCity'] : [],
                options = '<option></option>',
                zipMenu2 = [];

            zipMenu2 = $.map(zipToCity, function (obj) { return obj.City });
            var zipMenu3 = _.unique(zipMenu2);


            for (var i = 0; i < zipMenu3.length; i++) {
                var text = zipMenu3[i];
                options += '<option value=' + text + '>' + text + '</option>';
            }


            $city.empty().append(options);
            $city.select2({ 'val': zipMenu3[0].CodeName,
                'placeholder': '縣市'
            });
        }

    });


    $.fn.simpAddr = function () {

        var args = Array.prototype.slice.call(arguments, 0),
            allowedMethods = ["postal", "city", "town", "detail"],
            addr;

        addr = new simpAddr();
        addr.init(this);
        addr.initContainer();
        addr.initPostalCode();
        addr.initCity();
        return addr.container;
    };


    // exports
    window.liarAddr = {
        "class": {
            "simp": simpAddr,
            "comp": simpAddr
        }
    };


})(jQuery);
