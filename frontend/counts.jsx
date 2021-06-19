import React from 'react';

class Counts extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ul>
        {
          this.props.previousCounts.map((count) => <li>{count}</li>)
        }
      </ul>
    );
  }

}

export default Counts;