var React = require('react')
  , Button = require('react-bootstrap').Button
  , ButtonToolbar = require('react-bootstrap').ButtonToolbar
  , Tooltip = require('react-bootstrap').Tooltip
  , OverlayTrigger = require('react-bootstrap').OverlayTrigger;
  
const tooltip = (
  <Tooltip><strong>Holy guacamole!</strong> Check this info.</Tooltip>
);

const positionerInstance = (
  <div style={{marginTop: '10em', marginLeft: '20em'}}>
  <ButtonToolbar>
    <OverlayTrigger placement="left" overlay={tooltip}>
      <Button bsStyle="default">Holy guacamole!</Button>
    </OverlayTrigger>

    <OverlayTrigger placement="top" overlay={tooltip}>
      <Button bsStyle="default">Holy guacamole!</Button>
    </OverlayTrigger>

    <OverlayTrigger placement="bottom" overlay={tooltip}>
      <Button bsStyle="default">Holy guacamole!</Button>
    </OverlayTrigger>

    <OverlayTrigger placement="right" overlay={tooltip}>
      <Button bsStyle="default">Holy guacamole!</Button>
    </OverlayTrigger>
  </ButtonToolbar>
  </div>
);

React.render(
    positionerInstance,
    document.getElementById('react')
);
