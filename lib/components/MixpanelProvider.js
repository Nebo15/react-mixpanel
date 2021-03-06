'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _mixpanelShape = require('../utils/mixpanelShape');

var _mixpanelShape2 = _interopRequireDefault(_mixpanelShape);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MixpanelProvider = function (_Component) {
    _inherits(MixpanelProvider, _Component);

    function MixpanelProvider(props, context) {
        _classCallCheck(this, MixpanelProvider);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(MixpanelProvider).call(this, props, context));

        _this._mixpanel = props.mixpanel;
        return _this;
    }

    _createClass(MixpanelProvider, [{
        key: 'getChildContext',
        value: function getChildContext() {
            return { mixpanel: this._mixpanel };
        }
    }, {
        key: 'render',
        value: function render() {
            var children = this.props.children;

            return _react.Children.only(children);
        }
    }]);

    return MixpanelProvider;
}(_react.Component);

exports.default = MixpanelProvider;

MixpanelProvider.propTypes = {
    mixpanel: _mixpanelShape2.default.isRequired,
    children: _react.PropTypes.element.isRequired
};
MixpanelProvider.childContextTypes = {
    mixpanel: _mixpanelShape2.default.isRequired
};