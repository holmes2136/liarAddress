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

        init: function () {

            this.id = "test";
            this.container = this.createContainer();

        },
        createContainer: function () {
            var container = $(document.createElement("div")).attr({
                "class": "liarAddr-container"
            }).html([
                "<select class='liaraddr-postalCode' style='width:100px'></select>",
                "   <select class='liaraddr-city' style='width:200px'></select>",
                "   <select class='liaraddr-town' style='width:200px'></select>",
                "<input class='liaraddr-detail' type='text'  style='width:300px'/>"].join(""));
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
        }

    });


    $.fn.simpAddr = function () {

        var args = Array.prototype.slice.call(arguments, 0),
            allowedMethods = ["postal", "city", "town", "detail"],
            addr;

        addr = new simpAddr();
        addr.init();
        addr.initContainer();

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
