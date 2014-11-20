/// <reference path="underscore-1.4.1.js" />

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
            var $parent = $(selector),
                $postalDrop,
                $cityDrop,
                $townDrop;

            //this.id = "test";
            this.container = this.createContainer();
            $parent.data('simp', this);
            $parent.append(this.container);

            $postalDrop = $parent.find(".liaraddr-postalCode");
            $cityDrop = $parent.find(".liaraddr-city");
            $townDrop = $parent.find(".liaraddr-town");


            $postalDrop.on('change', function (e) {
                var val = $(this).select2('val');

                if (val !== '') {
                    $townDrop.select2('enable');
                    var matchObj = _.filter(zipMenu, function (obj) { return obj.CodeNo === val });
                    $cityDrop.select2('val', matchObj[0].CodeName.slice(0, 3));
                    $townDrop.select2('val', matchObj[0].CodeName.slice(3, 6));
                } else {
                    $townDrop.select2('disable');
                    $cityDrop.select2('val', '');
                    $townDrop.select2('val', '');
                }
            });

            $cityDrop.on('change', function (e) {
                var val = $(this).select2('val');

                if (val === '') {
                    $postalDrop.select2('val', '');
                    $townDrop.select2('val', '');
                    $townDrop.select2('disable');
                } else {
                    $townDrop.select2('enable');
                }
            });

            $townDrop.on('change', function (e) {
                var val = $(this).select2('val');
                var has_postal_code = $postalDrop.select2('val') === '' ? false : true;

                if (val === '') {
                    $postalDrop.select2('val', '');
                    if (!has_postal_code) { $townDrop.select2('disable'); }

                } else {

                    var matchObj = _.filter(zipMenu, function (obj) { return obj.CodeName.slice(3, 6) === val });
                    $postalDrop.select2('val', matchObj[0].CodeNo);
                }
            });


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
                'placeholder': '郵遞區號',
                'allowClear': true
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
                'placeholder': '縣市',
                'allowClear': true
            });
        },
        initTown: function () {
            var $container = $(this.container),
                $town = $container.find(".liaraddr-town:last"),
                zipMenu = !!window['zipMenu'] ? window['zipMenu'] : [],
                options = '';

            for (var i = 0; i < zipMenu.length; i++) {
                var text = zipMenu[i].CodeName.slice(3, 6);
                options += '<option value=' + text + '>' + text + '</option>';
            }

            $town.empty().append('<option></option>').append(options).select2({
                'placeholder': "鄉鎮",
                'allowClear': true
            }).select2('disable');

        },
        postalVal: function () {
            var $container = $(this).find(".liarAddr-container"),
                $postal_Code = $container.find(".liaraddr-postalCode:last"),
                val = arguments[0];


            return $postal_Code.select2('val');

        },
        cityVal: function () {
            var $container = $(this).find(".liarAddr-container"),
                $city = $container.find(".liaraddr-city:last"),
                val = arguments[0];

            return $city.select2('val');
        },
        townVal: function () {
            var $container = $(this).find(".liarAddr-container"),
                $town = $container.find(".liaraddr-town:last"),
                val = arguments[0];

            return $town.select2('val');
        },
        detailVal: function () {
            var $container = $(this).find(".liarAddr-container"),
                $detail = $container.find(".liaraddr-detail"),
                val = arguments[0];

            return $detail.val();
        },
        destroy: function () {
            var addr = this.data("simp");

            addr.container.remove();
        },
        getAddressVal: function () {
            var resultAddress = [],
                $container = $(this).find(".liarAddr-container"),
                $postal_Code = $container.find(".liaraddr-postalCode:last"),
                $city = $container.find(".liaraddr-city:last"),
                $town = $container.find(".liaraddr-town:last"),
                $detail = $container.find(".liaraddr-detail");

            var postalC_Code_val = $postal_Code.select2('val');
            var city_val = $city.select2('val');
            var town_val = $posttownal_Code.select2('val');
            var detail_val = $detail.select2('val');

            reusltAddress.push(postalC_Code_val);
            reusltAddress.push(city_val);
            reusltAddress.push(town_val);
            reusltAddress.push(detail_val);

        }

    });


    $.fn.simpAddr = function () {

        var args = Array.prototype.slice.call(arguments, 0),
            allowedMethods = ["postalVal", "cityVal", "townVal", "detailVal", 'destroy', 'getAddressVal'],
            addr, method, value,
            $container = $(this);




        if (args.length === 0) {

            addr = $(this).data("simp");
            
            if (addr === undefined) {
                addr = new simpAddr();
                addr.init(this);
                addr.initContainer();
                addr.initPostalCode();
                addr.initCity();
                addr.initTown();
            };
            
        }
        else if (typeof (args[0]) === "string") {

            addr = $(this).data("simp");
            if (addr === undefined) return;

            method = args[0];

            if ($.inArray(args[0], allowedMethods) < 0) {
                throw "Unknown method: " + args[0];
            }


            if (method.length > 0) {
                value = addr[method].apply(this, args.slice(1));
            } else {
                value = addr;
            }


        }

        return value;
    };


    // exports
    window.simpAddr = new simpAddr();


})(jQuery);
