var React = require('react')
  , Button = require('react-bootstrap').Button
  , ButtonGroup = require('react-bootstrap').ButtonGroup
  , DropdownButton = require('react-bootstrap').DropdownButton
  , MenuItem = require('react-bootstrap').MenuItem;
  

var buttonGroupInstance = (
  <ButtonGroup>
    <Button>1</Button>
    <Button>2</Button>
    <DropdownButton title="Dropdown" id="bg-nested-dropdown">
      <MenuItem eventKey="1">Dropdown link</MenuItem>
      <MenuItem eventKey="2">Dropdown link</MenuItem>
    </DropdownButton>
  </ButtonGroup>
);

React.render(
    buttonGroupInstance,
    document.getElementById('react')
);
