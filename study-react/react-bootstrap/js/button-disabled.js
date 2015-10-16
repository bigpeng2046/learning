var React = require('react')
  , Button = require('react-bootstrap').Button
  , ButtonToolbar = require('react-bootstrap').ButtonToolbar;

var buttonsInstance = (
  <ButtonToolbar>
    <Button bsStyle="primary" bsSize="large" disabled>Primary button</Button>
    <Button bsSize="large" disabled>Button</Button>
  </ButtonToolbar>
);


React.render(
    buttonsInstance,
    document.getElementById('react')
);
