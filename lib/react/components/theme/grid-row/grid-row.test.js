'use strict';

require('../../../../../internals/test/helper');

var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {};

/** @test {GridRow} */

describe('GridRow component', function () {
  /** @test {GridRow#render} */
  describe('#render', function () {
    var instance = ReactTestUtils.renderIntoDocument(React.createElement(_index2.default, null));

    it('Should output a grid row', function () {
      assert.isOk(ReactTestUtils.findRenderedDOMComponentWithTag(instance, 'div'));
    });

    it('Should output a grid row with default style', function () {
      assert.isOk(ReactDOM.findDOMNode(instance).className.match(styles['row']));
    });
  });
});