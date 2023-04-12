const React = require('react');


function Show(props){
    const {flower}=props;
   console.log(props);

    return (
    <div>
    <h1>Hello Show each flower</h1>
    <p>The {flower.name} is {flower.color} {" "}
          {flower.readyToBloom 
          ? 'its ready to bloom ':'dont touch the flower is yet to bloom'}
    </p>
    <p></p>
    </div>

    )
}

module.exports = Show;

