import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, Platform } from 'react-native';
import { Header } from 'react-native-elements';
import { connect } from 'react-redux';

import { navigateBack, navigate, showFav } from '../../actions';

import navNew from '../../assets/icons/nav_new.png';
import navStar from '../../assets/icons/g_star.png';
import navStarGrey from '../../assets/icons/g_star_grey.png';
import navBack from '../../assets/icons/nav_back.png';
import s from './styles.js';

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {screen: this.props.screen};
  }

  handleNavBack = () => {
    this.props.navigateBack();
  }
  handleCreate = () => {
    this.props.navigate('New');
  }
  handleShowFav = () => {
    this.props.showFav();
  }


  renderButton = (button) => {
    return (
      <TouchableOpacity
        onPress={button.onPress}
      >
        <Image
          style={[s.nav_icon, button.style]}
          source={button.icon}
        />
      </TouchableOpacity>
    );
  }

  render () {
    const allButtons = {
      back: {
        onPress:this.handleNavBack,
        icon: navBack,
        style: s.nav_icon__back,
      },
      create: {
        onPress:this.handleCreate,
        icon: navNew,
        style: s.nav_icon__create,
      },
      showFav: {
        onPress:this.handleShowFav,
        icon: this.props.fav === true ? navStar : navStarGrey,
        style: s.nav_icon__showFav,
      },
    };

    const buttons = {};
    if (this.state.screen === 'New') {
      buttons.left = null;
      buttons.right = this.renderButton(allButtons.back);
    } else if (this.state.screen === 'Notes') {
      buttons.left = this.renderButton(allButtons.showFav);
      buttons.right = this.renderButton(allButtons.create);
    } else {
      buttons.left = null;
      buttons.right = null;
    }

    return (
      <View style={s.nav_container}>
        <Text style={s.nav_title}>{this.state.screen}</Text>
        <View style={s.nav_buttons}>
          <View>{buttons.left}</View>
          <View>{buttons.right}</View>
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  nav:state.nav,
  fav: state.notes.showFav,
  screen:state.pages.currentScreen,
});

const mapDispatchToProps = dispatch => ({
  showFav: () => dispatch(showFav()),
  navigate: screen => dispatch(navigate(screen)),
  navigateBack: () => dispatch(navigateBack()),
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
