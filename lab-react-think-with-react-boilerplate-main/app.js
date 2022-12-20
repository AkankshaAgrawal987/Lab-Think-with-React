// part1 Rect2
const container = document.getElementById('react-container');
ReactDOM.render("Hello! Welcome to React",container);
// Part 1 React 3
const Container = () =>{
    return React.createElement(`div`,null,`Hey Kalvians! Welcome to React Learning`,
       React.createElement(`div`,null,`Let's rock and roll`)
       );
}
const containerTwo = document.getElementById('react-container');
ReactDOM.render(React.createElement(Container),containerTwo);
// part 1 React 4
class ReactContainer extends React.Component{
    render(){
        return React.createElement(`div`,null,`Hey Kalvians`,
        React.createElement(`div`,null,`Let's rock and roll with classes`)
        );       
    }
}
const containerThree=document.getElementById('react-container');
ReactDOM.render(React.createElement(ReactContainer),containerThree)
 
