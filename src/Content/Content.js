import React, { Component } from "react";
import LeftContent from "./LeftContent";
import RightContent from "./RightContent";
class Content extends Component {
  render() {
    return (
      <div>
        <div id="content">
          {/* this is the content for menu */}
          <LeftContent />
          {/* this is a content for item */}
          <RightContent />
        </div>
      </div>
    );
  }
}

export default Content;
