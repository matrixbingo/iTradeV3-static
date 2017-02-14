import React, { Component ,PropTypes} from 'react';

import ReactQuill from 'react-quill';

export default class RichTextEditor extends Component {
    constructor(props) {
        super(props);
        this.emptyContent = '<div><br></div>';
    }

    onBlur() {
        this.props.onBlur && this.props.onBlur();
    }

    onChange(text) {
        if (text == this.emptyContent) {
            text = '';
        }
        this.props.onChange && this.props.onChange(text);
    }

    getToolbarConfig(toolbarConfigParam) {
        let toolbarConfig = [
            {
                label: 'Text', type: 'group', items: [
                {type: 'separator'}]
            }];
        let param = toolbarConfigParam? toolbarConfigParam : ['b', 'a'];
        let arr = param.map((e) => toolbarConfigMap[e]);
        toolbarConfig[0].items = toolbarConfig[0].items.concat(arr);
        return toolbarConfig;
    }

    render() {
        let toolbarConfigParam = this.props.toolbarConfigParam;
        let readOnly = this.props.readOnly;
        var value=this.props.value;
        if(!value){
            value = this.emptyContent
        }
        var placeholderVisibility=value==this.emptyContent;
        return (
            <div className='react-quill-component'>
              <span className={
               'placeholder '+(placeholderVisibility?'show':'')
              }>{this.props.placeholder ? this.props.placeholder : ""}</span>
                <ReactQuill
                    readOnly={readOnly?readOnly:false}
                    theme='snow'
                    value={this.props.value}
                    onChange={::this.onChange}>
                    <ReactQuill.Toolbar key="toolbar"
                                        ref="toolbar"
                                        items={this.getToolbarConfig(toolbarConfigParam)}/>
                    <div
                        onBlur={::this.onBlur}
                        ref="editor"
                        className="quill-contents"
                        />
                </ReactQuill>
            </div>
        );
    }
}

const toolbarConfigMap = {
    'a' : {type: 'link', label: 'Link'},
    'b' : {type: 'bold', label: 'Bold'}
};