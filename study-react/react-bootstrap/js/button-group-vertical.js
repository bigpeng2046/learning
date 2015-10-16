var React = require('react')
  , Button = require('react-bootstrap').Button
  , ButtonGroup = require('react-bootstrap').ButtonGroup
  , DropdownButton = require('react-bootstrap').DropdownButton
  , MenuItem = require('react-bootstrap').MenuItem;
  
var buttonGroupInstance = (
  <ButtonGroup vertical>
    <Button>Button</Button>
    <Button>Button</Button>
    <DropdownButton title="Dropdown" id="bg-vertical-dropdown-1">
      <MenuItem eventKey="1">Dropdown link</MenuItem>
      <MenuItem eventKey="2">Dropdown link</MenuItem>
    </DropdownButton>
    <Button>Button</Button>
    <Button>Button</Button>
    <DropdownButton title="Dropdown" id="bg-vertical-dropdown-2">
      <MenuItem eventKey="1">Dropdown link</MenuItem>
      <MenuItem eventKey="2">Dropdown link</MenuItem>
    </DropdownButton>
    <DropdownButton title="Dropdown" id="bg-vertical-dropdown-3">
      <MenuItem eventKey="1">Dropdown link</MenuItem>
      <MenuItem eventKey="2">Dropdown link</MenuItem>
    </DropdownButton>
  </ButtonGroup>
);

React.render(
    buttonGroupInstance,
    document.getElementById('react')
);
