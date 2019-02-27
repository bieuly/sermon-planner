import React, { Component } from "react";
import { Form } from "semantic-ui-react";
import ReactQuill from "react-quill";

interface Props {
  onChange: any;
}

class BasicSlideForm extends Component<Props> {

  public render() {
    return (
      <Form.Field>
        <ReactQuill modules={this.modules} formats={this.formats} onChange={this.handleOnChange}>
          <div className="text-edit-area" />
        </ReactQuill>
      </Form.Field>
    );
  }

  private handleOnChange = (content:any, delta:any, source:any, editor:any) => {
    this.props.onChange(editor.getHTML());
  }
  private modules = {
    toolbar: [
      [{ 'header': [1, 2, false] }],
      ['bold', 'italic', 'underline'],
      [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}, {'align': ['', 'right', 'center']}],
      ['image'],
    ],
  };
  
  private formats = [
    'header',
    'bold', 'italic', 'underline',
    'list', 'bullet', 'indent',
    'image', 'align'
  ];
}

export default BasicSlideForm;