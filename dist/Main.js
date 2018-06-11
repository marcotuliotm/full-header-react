Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var FullHeader = function FullHeader(_ref) {
    var name = _ref.name;
    return _react2['default'].createElement(
        'h1',
        null,
        'Hello ',
        name,
        '!'
    );
};

FullHeader.propTypes = {
    name: _propTypes2['default'].string.isRequired
};

exports['default'] = FullHeader;