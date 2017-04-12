import React, { Component, PropTypes } from 'react';
import importcss from 'importcss';
import classnames from 'classnames';
import _ from 'lodash';
/**

## 1 задача - Один комментарий

Сущность комментарий:
*   userid:
*   аватарка
*   имя
*   Content
*   text
*   images / attachments (?)
*   подумать про упомянания ?
*   reply ?
*   лайк ???
*   дата
*   REPORT
*   редактирование

форма написания комментария
*   Аватарка
*   textarea + autosize
*   attachment ???

Отображение комментариия

### На что посмотреть:

*  https://dribbble.com/shots/1471366-The-Loop

 */

@importcss(require('./Comment.scss'))
export class Comment extends Component {
  
  constructor(){
    super()
    this.state = {}
  }

  static defaultProps = {
    
  }

  static propTypes = {
    userId: PropTypes.number,
    avatarSrc: PropTypes.string,
    userName: PropTypes.string,
    text: PropTypes.string,
    // ? Content
    // ? images / attachments (?)
    //  ? подумать про упомянания 
    repliesCount: PropTypes.number,
    onReplyClick: PropTypes.function,
    likesCount: PropTypes.number,
    onLikeClick: PropTypes.function,
    date: React.PropTypes.instanceOf(Date),
    // ?  REPORT
    // ? редактирование что должно происходить при onEditClick?
    onEditClick: PropTypes.function
  }

  render() { 
        <div styleName="comment"> 
            {this.props.text}
        </div>    
  }
}

@importcss(require('./Comment.scss'))
export class CommentForm extends Component {
  
  constructor(){
    super()
    this.state = {}
  }

  static defaultProps = {
    
  }

  static propTypes = {
    userId: PropTypes.number,
    avatarSrc: PropTypes.string,
    userName: PropTypes.string,
    // ? редактирование что должно происходить при onSubmit?
    onSubmit: PropTypes.function
  }

  render() { 
        <div styleName="comment-form"> 
            {this.props.text}
        </div>    
  }
}