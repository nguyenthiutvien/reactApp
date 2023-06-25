import React, { Component } from "react";

class LeftContent extends Component {
  render() {
    return (
      <div id="left-content">
        <h1>Category</h1>
        <ul className="drop">
          <li>
            <a href="#">Menu item 1</a>
          </li>
          <li>
            <a href="#">Menu item 2</a>
          </li>
          <li>
            <a href="#">Menu item 3</a>
            <ul className="drop">
              <li>
                <a href="#">Menu item 3.1</a>
              </li>
              <li>
                <a href="#">Menu item 3.2</a>
              </li>
              <li>
                <a href="#">Menu item 3.3</a>
              </li>
              <li>
                <a href="#">Menu item 3.4</a>
                <ul className="drop">
                  <li>
                    <a href="#">Menu item 3.4.1</a>
                  </li>
                  <li>
                    <a href="#">Menu item 3.4.2</a>
                  </li>
                  <li>
                    <a href="#">Menu item 3.4.3</a>
                  </li>
                  <li>
                    <a href="#">Menu item 3.4.4</a>
                  </li>
                  <li>
                    <a href="#">Menu item 3.4.5</a>
                    <ul className="drop">
                      <li>
                        <a href="#">Menu item 3.4.5.1</a>
                      </li>
                      <li>
                        <a href="#">Menu item 3.4.5.2</a>
                      </li>
                      <li>
                        <a href="#">Menu item 3.4.5.3</a>
                      </li>
                      <li>
                        <a href="#">Menu item 3.4.5.4</a>
                        <ul className="drop">
                          <li>
                            <a href="#">Menu item 3.4.5.1.1</a>
                          </li>
                          <li>
                            <a href="#">Menu item 3.4.5.1.2</a>
                          </li>
                          <li>
                            <a href="#">Menu item 3.4.5.1.3</a>
                          </li>
                          <li>
                            <a href="#">Menu item 3.4.5.1.4</a>
                            <ul className="drop">
                              <li>
                                <a href="#">Menu item 3.4.5.1.4.1</a>
                              </li>
                              <li>
                                <a href="#">Menu item 3.4.5.1.4.2</a>
                              </li>
                              <li>
                                <a href="#">Menu item 3.4.5.1.4.3</a>
                              </li>
                              <li>
                                <a href="#">Menu item 3.4.5.1.4.4</a>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            <a href="#">Menu item 4</a>
          </li>
          <li>
            <a href="#">Menu item 5</a>
          </li>
          <li>
            <a href="#">Menu item 6</a>
          </li>
        </ul>
      </div>
    );
  }
}

export default LeftContent;
