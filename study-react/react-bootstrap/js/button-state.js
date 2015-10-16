var React = require('react')
  , Button = require('react-bootstrap').Button
  , ButtonToolbar = require('react-bootstrap').ButtonToolbar
  , LoadingButton = require('./loading-button');

var buttonsInstance = (
  <ButtonToolbar>
    <Button href="#">Link</Button>
    <LoadingButton />
  </ButtonToolbar>
);

React.render(
    buttonsInstance,
    document.getElementById('react')
);
