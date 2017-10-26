import React from 'react';
import { Editor, EditorState } from 'draft-js';


class SessionEditorComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { editorState: EditorState.createEmpty() };
    this.onChange = editorState => this.setState({ editorState });
  }
  render() {
    return (
      <div className="session-editor notification">
        <Editor editorState={this.state.editorState} onChange={this.onChange} />
      </div>
    );
  }
}

export default SessionEditorComponent;
