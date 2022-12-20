const container = document.getElementById("react-container");
//Class component
class ReactContainer extends React.Component{
    render(){
        return (
            <div>
                Hello! Welcome to Kalvium
                <div>This is babel</div>
            </div>
        );
    }
}
ReactDOM.render(<ReactContainer />,container)