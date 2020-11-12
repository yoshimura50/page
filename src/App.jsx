import React from 'react';
import ReactDOM from 'react-dom';
import {Splitter, SplitterSide, SplitterContent, Page, Button}
from 'react-onsenui';


//css読み込み
import './style.css';
import Page1 from "Page1.jsx";
import Page2 from "Page2.jsx";
import Page3 from "Page3.jsx";
import Page4 from "Page4.jsx";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
      selectMenu: 1,
    };

    this.show = this.show.bind(this);
    this.hide = this.hide.bind(this);
    this.onClickMenu1 = this.onClickMenu1.bind(this);
    this.onClickMenu2 = this.onClickMenu2.bind(this);
    this.onClickMenu3 = this.onClickMenu3.bind(this);
    this.onClickMenu4 = this.onClickMenu4.bind(this);
  }

  show() {
    this.setState({
      isOpen: true,
      selectMenu: this.state.selectMenu
    });
  }

  hide() {
    this.setState({
      isOpen: false,
      selectMenu: this.state.selectMenu
    });
  }


  onClickMenu1() {
    // isOpenをfalseにしてメニューを閉じる。メニュー１を選択状態にする
   this.setState({ isOpen: false, selectMenu: 1 });
  }
  onClickMenu2() {
    // isOpenをfalseにしてメニューを閉じる。メニュー2を選択状態にする
   this.setState({ isOpen: false, selectMenu: 2 });
  }
  onClickMenu3() {
    // isOpenをfalseにしてメニューを閉じる。メニュー3を選択状態にする
   this.setState({ isOpen: false, selectMenu: 3 });
  }
  onClickMenu4() {
    // isOpenをfalseにしてメニューを閉じる。メニュー4を選択状態にする
   this.setState({ isOpen: false, selectMenu: 4 });
  }

  render() {
    var PageContent;
    var menuItemClass1 = "item";
    var menuItemClass2 = "item";
    var menuItemClass3 = "item";
    var menuItemClass4 = "item";

    if(this.state.selectMenu == 1) {
      menuItemClass1 = "item-selected";
      PageContent = <Page1 show={this.show} />;
    }
    if(this.state.selectMenu == 2) {
      menuItemClass2 = "item-selected";
      PageContent = <Page2 show={this.show} />;
    }
    if(this.state.selectMenu == 3) {
      menuItemClass3 = "item-selected";
      PageContent = <Page3 show={this.show} />;
    }
    if(this.state.selectMenu == 4) {
      menuItemClass4 = "item-selected";
      PageContent = <Page4 show={this.show} />;
    }
   
    return (
      <Splitter>
        <SplitterSide
          side="left"
          collapse={true}
          isOpen={this.state.isOpen}
          onClose={this.hide.bind(this)}
          swipeable={true}
        >
        <Page>
          <ul className="menu">
            <li className={menuItemClass1} onClick={this.onClickMenu1}>
              メニュー１
            </li>
            <li className={menuItemClass2} onClick={this.onClickMenu2}>
              メニュー2
            </li>
            <li className={menuItemClass3} onClick={this.onClickMenu3}>
              メニュー3
            </li>
            <li className={menuItemClass4} onClick={this.onClickMenu4}>
              メニュー4
            </li>
           
          </ul>
        </Page>
      </SplitterSide>
      <SplitterContent>
        {PageContent}
      </SplitterContent>
    </Splitter>
    );
  }
}