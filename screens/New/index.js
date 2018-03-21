import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, TextInput } from 'react-native';
import { addNote, navigate, navigateBack } from '../../actions';
import { Button } from 'react-native-elements';
import s from './styles';

class New extends Component {
  constructor(props){
    super(props);
    this.state = {text: ''};
  }

  addNote = () => {
    if (this.state.text) {
      this.props.addNote(this.state.text);
      this.props.navigateBack();
    }
  }

  render() {
    return  (
      <View style={s.new_container}>
        <TextInput
          autoFocus = {true}
          autoGrow = {true}
          multiline = {true}
          maxLength = {140}
          style={s.new_input}
          placeholder="Type here your note"
          onChangeText={(text) => this.setState({text: text})}
        />
        <Button
          textStyle={{color:'white', fontWeight:'bold'}}
          buttonStyle={s.new_add_btn}
          onPress={this.addNote}
          title='Add note'
        />
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  notes: state.notes.notes,
});

const mapDispatchToProps = (dispatch) => ({
  addNote: (note) => dispatch(addNote(note)),
  navigateBack: () => dispatch(navigateBack()),
  navigate: screen => dispatch(navigate(screen)),
});

export default connect(mapStateToProps, mapDispatchToProps)(New);
