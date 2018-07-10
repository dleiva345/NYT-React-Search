var React = require("react");

var SearchForm = React.createClass({

	getInitialState: function() {
		return {
			topic: ""
		};
	},

	handleChange: function (event) {
		event.preventDefault();
		var topic = event.target.value;
		this.setState({ topic: topic })
	},

	handleSubmit: function (event) {
		event.preventDefault();
		// clear the input field
		this.setState({topic: ""})
		// pass topic to Main (parent)
		this.props.setTopic(this.state.topic);
	},

	render: function() {
	  return (
			<div className="row">
				<div className="col-sm-12">
					<div className="panel panel-primary">

						<div className="panel-heading">
							<h3 className="panel-title"><strong><i className="fa fa-list-alt"></i>Search Parameters</strong></h3>
						</div>

						<div className="panel-body">
							<form onSubmit={this.handleSubmit} role="form">
							  <div className="form-group">
							    <label htmlFor="search">Topic:</label>
							    <input onChange={this.handleChange} value={this.state.topic} type="text" className="form-control" id="searchTerm"/>
							  </div>

							  
							  <button type="submit" className="btn btn-default" id="runSearch"><i className="fa fa-search"></i>Search</button>
		  					<button type="button" className="btn btn-default" id="clearAll"><i className="fa fa-trash"></i>Clear Results</button>

							</form>
						</div>
					</div>
				</div>
			</div>
		)
	}
})

module.exports = SearchForm;
