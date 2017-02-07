
var questions = [
    ["The Father of internet is???","vent cerf","alian ","khanoo","A"],
    ['In internet termonalogy the IP means???','Open Software ','integral part','Operating System','C'],
    [' Convert this binary(1101)?' ,'Flash','13','Flange','A'],
    ['the first web host E-mail is ?','Vint Cerf & Robert Kahn','Steve Case & Jeff Bezos','David Filo & Jerry Yang','C'],
    ['The most common format for a home video recorder is VHS. VHS stands for...??','Video Home System','Very high speed','Voltage house standard','A']

] ;

var  pos = 0, correct = 0 , choice ,percentage;








// var SignUp = React.createClass({
// 	render: function() {
// 		return (
// 			<div> 
// 			<figure> 
// 			<legend> Signup </legend>
// 			<form className="navbar-form" role="search"> 
// 			<div className="form-group">
// 			<label> User Name : </label>
//     <input type="text" className="form-control" placeholder="User Name"/>
//     <label> Full Name : </label>
//     <input type="text" className="form-control" placeholder="Full Name"/>
//     <label> Email ID : </label>
//     <input type="text" className="form-control" placeholder="Email@xyz.com"/>
//     <label> Password : </label>
//     <input type="password" className="form-control" placeholder="Password"/>
//     <label> Repeat PassWord : </label>
//     <input type="password" className="form-control" placeholder="RepeatPassword"/>
//   </div>
//   <button type="submit" className="btn btn-default navbar-btn">SignUp</button>
// 			</form>
// 			</figure>
// 			</div>
//     );
// 	}
// });
//  ReactDOM.render(
//    <div> 
//      <Navigation/>  <SignUp/>
//   </div>,
    
//      document.getElementById("jj")   );

// var Navigation = React.createClass({
// 	displayName: "Navigation",

// 	render: function render() {
// 		return React.createElement(
// 			"div",
// 			null,
// 			React.createElement(
// 				"header",
// 				{ className: "navbar navbar-default" },
// 				React.createElement(
// 					"nav",
// 					{ className: "navbar-header" },
// 					React.createElement(
// 						"figure",
// 						null,
// 						React.createElement(
// 							"legend",
// 							null,
// 							" SignIn "
// 						),
// 						React.createElement(
// 							"label",
// 							null,
// 							" User Name"
// 						),
// 						React.createElement("input", { type: "text", className: "form-control", placeholder: "UserName" }),
// 						React.createElement(
// 							"label",
// 							null,
// 							" Password"
// 						),
// 						React.createElement("input", { type: "password", className: "form-control", placeholder: "Password" }),
// 						React.createElement(
// 							"button",
// 							{ type: "submit", className: "btn btn-default" },
// 							"SignIn"
// 						)
// 					)
// 				)
// 			)
// 		);
// 	}
// });



var quizRender = React.createClass({
      


     getInitialState: function(){
         return{
             correct: this.props.correct,
             pos: this.props.pos,
             quesion: this.props.data[pos][0],
             opt1: this.props.data[pos][1],
             opt2: this.props.data[pos][2],
             opt3: this.props.data[pos][3],
             ans: this.props.data[pos][4],
         }
     },
  
     _checkAnswer: function(e){
          choices = document.getElementsByName('answer');
          console.log(choices);
          for (var i = 0; i < choices.length; i++) {
          if(choices[i].checked){
              choice = choices[i].value;
          }
       }
            if(choice == this.props.data[pos][4]){
                this.setState({
                    correct: correct++,
                })
                
            }
          this.setState({
            pos: ++pos,
          }) 
          if(pos < this.props.data.length){
              this.setState({
               
             quesion: this.props.data[pos][0],
             opt1: this.props.data[pos][1],
             opt2: this.props.data[pos][2],
             opt3: this.props.data[pos][3],
             ans: this.props.data[pos][4],
            
        })
          }
       
          
        

     },
     _showQuestion: function(){
           
            if(this.state.pos >= this.props.data.length){
               percentage = correct*20;
              return React.DOM.div(
                    {
                        id:'complete'
                    },
                    React.DOM.span({className:'resultBox'},
                      React.DOM.h2(null, "PERCENTAGE"),
                      React.DOM.h2(null, percentage + ' %')
                      ),
                     React.DOM.span({className:'resultBox'},
                      React.DOM.h2(null, "CORRECT ANSWER"),
                      React.DOM.h2(null, correct)
                      )
                 )
             } else {
                
                 return  React.DOM.div(
                         null,
                          React.DOM.div(
                             {
                                 id:'status'
                             },
                            React.DOM.h1(null,"QUESTION "+ (this.state.pos+1) +" OF " +this.props.data.length )
                          ),
                         React.DOM.h4(
                             {
                                 id:'question'
                             }, (this.state.pos+1) +'.  '+this.state.quesion),
                         React.DOM.div(
                             null,
                             React.DOM.input(
                                 {
                                    type: "radio",
                                    className:'optionBtn',
                                    name: 'answer',
                                    value:'A'
                                 }
                             ),
                              this.state.opt1,
                              React.DOM.br(null),
                              React.DOM.input(
                                 {
                                    type: "radio",
                                    className:'optionBtn',
                                    name: 'answer',
                                    value:'B'                          
                                 }
                             ),
                             this.state.opt2,
                             React.DOM.br(null),
                              React.DOM.input(
                                 {
                                    type: "radio",
                                    className:'optionBtn',
                                    name: 'answer',
                                    value:'C'
                                 }
                             ),
                             this.state.opt3
                         ),
                         React.DOM.button(
                                 {
                                    id:'nextBtn', 
                                    type: "button",
                                    onClick: this._checkAnswer
                                 },
                                 'NEXT'
                             )
                     );
             }
         
                 
     },
     render: function(){
         return React.DOM.div(
             null,
             React.DOM.div( 
                    {
                    id: 'header'
                    },
                    React.DOM.h1(null,"QUIZ GAME OF REACT")
             ),
             React.DOM.div(
                 null,
                
                 React.DOM.div(
                     {
                        id:'test'
                     },
                     this._showQuestion() 
                  )  
             )
         )
     }
});


ReactDOM.render(
    React.DOM.div(
       null,
       React.createElement(quizRender,{
           data: questions,
           pos: pos,
           correct: correct,
       }
       )
    ),
    document.getElementById('app')
);