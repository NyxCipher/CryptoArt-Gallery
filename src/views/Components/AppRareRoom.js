import React from "react";
import ReactDOM from "react-dom";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

class AppRareRoom extends React.Component {
  render() {

    return (
    	<GridContainer justify="center">
    		<div dangerouslySetInnerHTML={{ __html: "<iframe src='https://app.rarerooms.io/924' width=1200px height=800px />"}} />
    	</GridContainer>
    	);
  }
}
export default AppRareRoom;