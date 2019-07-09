export default class Accordion extends React.Component {
  state = {
    currentFocus: null,
  };
  handleClick = (e, index) => {
    e.preventDefault();
    (index == this.state.currentFocus ? this.setState({ currentFocus: null }) : this.setState({ currentFocus: index }));
  };
  createMarkUp = htmlElement => {
    return {__html: htmlElement};
  };
  render() {
    const { elements } = this.props;
    return (
      <div>
        {elements.map( (element, index) => {
          return (
          <div className={`accordion-item ${this.state.currentFocus == index ? 'open' : 'closed'}`} key={index}>
            <div
              className="accordion-item-heading" 
              onClick={() => this.handleClick(event, index)}
              dangerouslySetInnerHTML={this.createMarkUp(element.heading)}
            >
            </div>
            <div
              className="accordion-item-content"
              dangerouslySetInnerHTML={this.createMarkUp(element.content)}
            />
          </div>
        )})}
      </div>
    );
  }
}
