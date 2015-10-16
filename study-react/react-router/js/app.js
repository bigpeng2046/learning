'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _history = require('history');

var _reactRouter = require('react-router');

var _data = require('./data');

var _data2 = _interopRequireDefault(_data);

var history = (0, _history.useBasename)(_history.createHistory)({
  basename: '/sidebar'
});

var Category = (function (_React$Component) {
  _inherits(Category, _React$Component);

  function Category() {
    _classCallCheck(this, Category);

    _get(Object.getPrototypeOf(Category.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(Category, [{
    key: 'render',
    value: function render() {
      var category = _data2['default'].lookupCategory(this.props.params.category);

      return _react2['default'].createElement(
        'div',
        null,
        _react2['default'].createElement(
          'h1',
          null,
          category.name
        ),
        this.props.children || _react2['default'].createElement(
          'p',
          null,
          category.description
        )
      );
    }
  }]);

  return Category;
})(_react2['default'].Component);

var CategorySidebar = (function (_React$Component2) {
  _inherits(CategorySidebar, _React$Component2);

  function CategorySidebar() {
    _classCallCheck(this, CategorySidebar);

    _get(Object.getPrototypeOf(CategorySidebar.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(CategorySidebar, [{
    key: 'render',
    value: function render() {
      var category = _data2['default'].lookupCategory(this.props.params.category);

      return _react2['default'].createElement(
        'div',
        null,
        _react2['default'].createElement(
          _reactRouter.Link,
          { to: '/' },
          '◀︎ Back'
        ),
        _react2['default'].createElement(
          'h2',
          null,
          category.name,
          ' Items'
        ),
        _react2['default'].createElement(
          'ul',
          null,
          category.items.map(function (item, index) {
            return _react2['default'].createElement(
              'li',
              { key: index },
              _react2['default'].createElement(
                _reactRouter.Link,
                { to: '/category/' + category.name + '/' + item.name },
                item.name
              )
            );
          })
        )
      );
    }
  }]);

  return CategorySidebar;
})(_react2['default'].Component);

var Item = (function (_React$Component3) {
  _inherits(Item, _React$Component3);

  function Item() {
    _classCallCheck(this, Item);

    _get(Object.getPrototypeOf(Item.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(Item, [{
    key: 'render',
    value: function render() {
      var _props$params = this.props.params;
      var category = _props$params.category;
      var item = _props$params.item;

      var menuItem = _data2['default'].lookupItem(category, item);

      return _react2['default'].createElement(
        'div',
        null,
        _react2['default'].createElement(
          'h1',
          null,
          menuItem.name
        ),
        _react2['default'].createElement(
          'p',
          null,
          '$',
          menuItem.price
        )
      );
    }
  }]);

  return Item;
})(_react2['default'].Component);

var Index = (function (_React$Component4) {
  _inherits(Index, _React$Component4);

  function Index() {
    _classCallCheck(this, Index);

    _get(Object.getPrototypeOf(Index.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(Index, [{
    key: 'render',
    value: function render() {
      return _react2['default'].createElement(
        'div',
        null,
        _react2['default'].createElement(
          'h1',
          null,
          'Sidebar'
        ),
        _react2['default'].createElement(
          'p',
          null,
          'Routes can have multiple components, so that all portions of your UI can participate in the routing.'
        )
      );
    }
  }]);

  return Index;
})(_react2['default'].Component);

var IndexSidebar = (function (_React$Component5) {
  _inherits(IndexSidebar, _React$Component5);

  function IndexSidebar() {
    _classCallCheck(this, IndexSidebar);

    _get(Object.getPrototypeOf(IndexSidebar.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(IndexSidebar, [{
    key: 'render',
    value: function render() {
      return _react2['default'].createElement(
        'div',
        null,
        _react2['default'].createElement(
          'h2',
          null,
          'Categories'
        ),
        _react2['default'].createElement(
          'ul',
          null,
          _data2['default'].getAll().map(function (category, index) {
            return _react2['default'].createElement(
              'li',
              { key: index },
              _react2['default'].createElement(
                _reactRouter.Link,
                { to: '/category/' + category.name },
                category.name
              )
            );
          })
        )
      );
    }
  }]);

  return IndexSidebar;
})(_react2['default'].Component);

var App = (function (_React$Component6) {
  _inherits(App, _React$Component6);

  function App() {
    _classCallCheck(this, App);

    _get(Object.getPrototypeOf(App.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(App, [{
    key: 'render',
    value: function render() {
      var children = this.props.children;

      return _react2['default'].createElement(
        'div',
        null,
        _react2['default'].createElement(
          'div',
          { className: 'Sidebar' },
          children ? children.sidebar : _react2['default'].createElement(IndexSidebar, null)
        ),
        _react2['default'].createElement(
          'div',
          { className: 'Content' },
          children ? children.content : _react2['default'].createElement(Index, null)
        )
      );
    }
  }]);

  return App;
})(_react2['default'].Component);

_react2['default'].render(_react2['default'].createElement(
  _reactRouter.Router,
  { history: history },
  _react2['default'].createElement(
    _reactRouter.Route,
    { path: '/', component: App },
    _react2['default'].createElement(
      _reactRouter.Route,
      { path: 'category/:category', components: { content: Category, sidebar: CategorySidebar } },
      _react2['default'].createElement(_reactRouter.Route, { path: ':item', component: Item })
    )
  )
), document.getElementById('example'));