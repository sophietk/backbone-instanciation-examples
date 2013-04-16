$(function() {

    AppRouter = Backbone.Router.extend({
        routes: {
            'route1': 'view1',
            'route2': 'view2',
            'route3': 'view3',
            '*path': 'view1'
        },
        initialize: function () {
            $('#menu').html(new Menu().render().el);
        },
        view1: function () {
            $('#body').html(new View1().render().el);
        },
        view2: function() {
            $('#body').html(new View2().render().el);
        },
        view3: function() {
            new View3().render();
        }
    });

    Menu = Backbone.View.extend({
        render: function() {
            this.$el.append('<h3>Menu</h3>'
                + '<ul>'
                + '<li><a href="#route1">View 1</a></li>'
                + '<li><a href="#route2">View 2</a></li>'
                + '<li><a href="#route3">View 3</a></li>'
                + '</ul>'
            );
            return this;
        }
    });

    View1 = Backbone.View.extend({
        render: function() {
            this.$el.html('You are on view 1');
            return this;
        }
    });

    View2 = Backbone.View.extend({
        tagName:'ul',
        render: function() {
            this.$el.html('You are on view 2');
            return this;
        }
    });

    View3 = Backbone.View.extend({
        el: '#body',
        className: 'bouh',
        render: function() {
            this.$el.html('You are on view 3');
            return this;
        }
    });

    new AppRouter();
    Backbone.history.start();

});