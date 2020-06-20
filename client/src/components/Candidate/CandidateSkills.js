import React, { Component } from "react";

export default class CandidateProfile extends Component {

    constructor() {
        super();
  
        this.displayData = [];
  
        this.state = {
          showdata : this.displayData,
          postVal : "",
          level: ""
        }
  
        this.appendData = this.appendData.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleChange2 = this.handleChange2.bind(this);
  
      };
  
    appendData() {
           this.displayData.push(<div  id="display-data"><pre>{this.state.postVal}</pre></div>,<div  id="display-data2"><pre>{this.state.level}</pre></div>);
           //this.displayData.push(<div  id="display-data"><pre>{this.state.level}</pre></div>);
           this.setState({
              showdata : this.displayData,
              postVal : "",
              level: ""
           });
        }
  
   handleChange(e) {
    let getTextAreaValue = e.target.value;
    this.setState({
      postVal :getTextAreaValue
    });
  }
  handleChange2(e) {
    let getSelectValue = e.target.value;
    this.setState({
      level :getSelectValue
    });
  }
  
    render() {
      return (
            <div className="row "id="mainContainer">
                <h1 className="text-lg border-b border-gray-500">
                 Skills
                </h1>
               <select rows="4" cols="50" 
               value={this.state.postVal} 
               onChange={this.handleChange} >
                   <option value="Javascript">Javascript</option>
                   <option value="ReactJs">React Js</option>
                   <option value="NodeJs">Node Js</option>
                   <option value="MySQL">MySQL</option>
                   <option value="MongoDB">MongoDB</option>

               </select>
               <select rows="4" cols="50" 
               value={this.state.level} 
               onChange={this.handleChange2} >
                   <option value="Beginner">Beginner</option>
                   <option value="Medium"> Medium</option>
                   <option value="Advanced">Advanced</option>

               </select>
               <div >
               <input  type="submit" className="button" onClick={this.appendData}  value="Add"/>
               </div>
               <div id="display-data-Container">
               {this.displayData}
               </div>
            </div>
        );
    }

}