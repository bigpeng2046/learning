var React = require('react')
  , Button = require('react-bootstrap').Button
  , ButtonToolbar = require('react-bootstrap').ButtonToolbar;

var buttonsInstance = (
  <ButtonToolbar>
    <Button href="#">Link</Button>
    <Button>Button</Button>
  </ButtonToolbar>
);

React.render(
    buttonsInstance,
    document.getElementById('react')
);
