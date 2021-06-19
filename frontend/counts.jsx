import React from 'react';

// const Counts = ({previousCounts}) => (
//   <ul>
//   {
//     previousCounts.map((count, idx) => <li key={idx}>{count}</li>)
//   }
//   </ul>
// );

// convert to functional component since Counts don't keep track of state

class Counts extends React.Component {
    componentDidMount() { debugger }


  render() {
    return (
      <ul>
        {
          this.props.previousCounts.map((count,idx) =>  <li key={idx}>{count}</li>)
        }
      </ul>
    );
  }
}

export default Counts;