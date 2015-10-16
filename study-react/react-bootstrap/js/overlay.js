var React = require('react')
  , Button = require('react-bootstrap').Button
  , Tooltip = require('react-bootstrap').Tooltip
  , Overlay = require('react-bootstrap').Overlay;
  
const Example = React.createClass({
  getInitialState() {
    return { show: true };
  },

  componentDidMount() {
    
  },
  
  toggle() {
    this.setState({ show: !this.state.show });
  },

  render() {
    var tooltip = <Tooltip>Tooltip overload!</Tooltip>;

    var sharedProps = {
      show: this.state.show,
      container: this,
      target: function() { return React.findDOMNode(this.refs.target); }
    };

    return (
      <div style={{ marginTop: '10em', height: 100, paddingLeft: 150, position: 'relative' }}>
        <Button ref="target" onClick={this.toggle}>
          Click me!
        </Button>

        <Overlay {...sharedProps} placement="left">
          { tooltip }
        </Overlay>
        <Overlay {...sharedProps} placement="top">
          { tooltip }
        </Overlay>
        <Overlay {...sharedProps} placement="right">
          { tooltip }
        </Overlay>
        <Overlay {...sharedProps} placement="bottom">
          { tooltip }
        </Overlay>
      </div>
    );
  }
});

React.render(
    <Example/>,
    document.getElementById('react')
);
