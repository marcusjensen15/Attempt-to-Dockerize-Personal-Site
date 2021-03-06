import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';


export default function NewPostForm(props){

  let _title = null;
  let _date = null;
  let _topic = null;
  let _content = null;

  const textCenter = {
    textAlign: 'center'
  }

  const newBeerHeader = {
  marginBottom: '4vh'
  }

const formWrap = {
  backgroundColor: '#DCD0C0',
  border: 'thick solid #373737',
  borderRadius: '2%',
  boxShadow: '-2px 1% 2% #40403F',
  color: 'black',
  marginLeft: '20%',
  marginRight: '20%',
  marginTop: '6%',
  marginBottom: '5%'
}

const listStyle = {
  listStyle: 'none'
}

const submitButtonStyle = {

  marginTop: '4%',
  border: 'none',
  textAlign: 'center',
  fontSize: '2vh',
  marginBottom: '2%'

}

const buttonSize = {
  fontSize: '3vh',
  fontFamily: 'Ariel'
}
const inputPadding = {
  marginBottom: '60px'

}
const input = {
  width: '60%',
  marginTop: '2.5%'
}

const textareainput = {
  width: '60%',
  marginTop: '2.5%',
  height: '50vh'

}

function handleNewPostFormSubmission(event) {
  event.preventDefault();
  props.onPostCreation({title: _title.value, date: _date.value, topic: _topic.value, content: _content.value, postid: v4()});
  _title.value = '';
  _date.value = '';
  _topic.value = '';
  _content.value = '';
}



  return(
    <div style={textCenter}>
          <div style={formWrap}>
            <h2>Add New Post </h2>

            <form onSubmit={handleNewPostFormSubmission}>
              <input style={input}
                type='text'
                id='title'
                placeholder='Post Title'
                ref={(input) => {_title = input;}}/>
              <input style={input}
                type='text'
                id='date'
                placeholder='Date'
                ref={(input) => {_date = input;}}/>
              <input style={input}
                type='text'
                id='topic'
                placeholder='topic'
                ref={(input) => {_topic = input;}}/>


              <textarea style={textareainput}
                id='content'
                type='text'
                placeholder="content area"
                ref={(input) => {_content = input;}}/>




              <div  style={submitButtonStyle}>  <button style={buttonSize} type='submit'>Add Post</button> </div>
            </form>

          </div>
        </div>
  );
}

NewPostForm.propTypes = {
  onPostCreation: PropTypes.func
};
