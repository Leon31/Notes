import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native';
import { addFav, navigate, deleteNote } from '../../actions';
import s from './styles';
import moment from 'moment';
import Swipeout from 'react-native-swipeout';
import star from '../../assets/icons/g_star.png';
import trash from '../../assets/icons/g_delete.png';

class SwipeButton extends Component {
  constructor(props){
    super(props);
  }
  render(){
    return (
      <View style={s.button_container}>
        <View style={[s.button, this.props.buttonSide]}>
          <Image
            style={s.button_icon}
            source={this.props.icon}
          />
        </View>
      </View>
    );
  }
}

class Notes extends Component {
  constructor(props){
    super(props);
  }

  renderRow = ({item, index}) => {
    const swipeSettings = {
      autoClose: true,
      backgroundColor: 'white',
      onOpen: (sectionID, rowId, direction: string) => this.setState({activeRowKey: null}),
      onClose: (sectionID, rowId, direction: string) => this.setState({activeRowKey: index}),
      sectionID: 1,
      sensitivity: 1,
      rowId: index,
      right: [
        {
          backgroundColor: 'white',
          component: <SwipeButton icon={trash} buttonSide={s.button_right}/>,
          onPress: () => {
            this.props.deleteNote(index);
          },
        }
      ],
      left: [
        {
          backgroundColor: 'white',
          component: <SwipeButton icon={star} buttonSide={s.button_left} item={item} />,
          onPress: () => {
            this.props.addFav(item);
          },
        }
      ],
    };

    return (
      <Swipeout key={index}  {...swipeSettings}>
        <View style={s.list_row}>
          <Text style={s.list_row_content}>{item}</Text>
        </View>
      </Swipeout>
    );
  }

  render() {
    return(
      <View style={s.list_container}>
        { this.props.notes.length > 0  ? (
          <FlatList
            style={s.list}
            data={this.props.showFav === true ? this.props.favNotes : this.props.notes}
            keyExtractor={(item, index) => item.id}
            renderItem={this.renderRow}
          />
        ) :
          <View>
            <Text style={s.list_empty}>Add new Notes</Text>
          </View>
        }
      </View>
    );
  }
}
const mapStateToProps = (state) => ({
  notes: state.notes.notes,
  favNotes: state.notes.favNotes,
  showFav: state.notes.showFav,
});

const mapDispatchToProps = (dispatch) => ({
  addFav: (note) => dispatch(addFav(note)),
  deleteNote: (note) => dispatch(deleteNote(note)),
  navigate: screen => dispatch(navigate(screen)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Notes);
