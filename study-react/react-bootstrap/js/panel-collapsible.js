var React = require('react')
  , Button = require('react-bootstrap').Button
  , Panel = require('react-bootstrap').Panel;

var Example = React.createClass({
  getInitialState() {
    return {
      open: true
    };
  },

  render() {
    return (
      <div>
        <Button onClick={ this.handleClick }>
          click
        </Button>
        <Panel collapsible expanded={this.state.open}>
          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.
          Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
        </Panel>
      </div>
    );
  },

  handleClick() {
    this.setState({open: !this.state.open });
  },
});

React.render(
    <Example/>,
    document.getElementById('react')
);
