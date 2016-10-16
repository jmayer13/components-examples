import React from 'react';
import marked from 'marked';

export default class MarkdownField extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			isEditting: false,
			markdown: "",
			text: {__html:""}
		}; 
		this._handleEdit=this._handleEdit.bind(this);
		this._handleSave=this._handleSave.bind(this);
		this._handleChange=this._handleChange.bind(this);
	}

	_handleEdit() {
		this.setState({isEditting: true});
	}
	
	_handleSave() {
		let text = { 
			__html: marked(this.state.markdown)
		};
		this.setState({
			isEditting: false,
			text: text
		});
	}
	
	_handleChange(e) {
		this.setState({markdown: e.target.value});
	}

	render() { 		
		const element = (
			<div>
				<div dangerouslySetInnerHTML={this.state.text} > 
				</div>
				<button type="button" onClick={this._handleEdit}>✎</button>	
			</div>
		); 
		
		const editor = (
				<div>
					<textarea ref="markdownField" rows="100" cols="80" onChange={this._handleChange} value={this.state.markdown}>	
					</textarea>
					<button type="button" onClick={this._handleSave}>✔</button>
				</div>
		);
		return (
			<div> 
				{this.state.isEditting ? editor: element }
			</div>
		);
	}
}