// Generated by CoffeeScript 1.6.2
(function() {
  var ActionsExpression, CollectionExpression, Evaluator, _ref,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  CollectionExpression = require("./collection");

  Evaluator = (function(_super) {
    __extends(Evaluator, _super);

    function Evaluator() {
      Evaluator.__super__.constructor.apply(this, arguments);
      this.actions = this.items;
    }

    return Evaluator;

  })(CollectionExpression.Evaluator);

  ActionsExpression = (function(_super) {
    __extends(ActionsExpression, _super);

    function ActionsExpression() {
      _ref = ActionsExpression.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    ActionsExpression.prototype._type = "actions";

    /*
    */


    ActionsExpression.prototype.evaluate = function(context) {
      return new Evaluator(this, context);
    };

    return ActionsExpression;

  })(CollectionExpression);

  module.exports = ActionsExpression;

}).call(this);