import { BrowserRouter, Route, Switch } from "react-router-dom";
import ToDoList from "./ToDoList";
import ToDoComponent from "./ToDoComponent";


const App = () => {
    return (<>
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={ToDoList}></Route>
                <Route exact path="/edit-todo/:id" component={ToDoComponent}></Route>
                <Route exact path="/add-todos" component={ToDoComponent}></Route>
                <Route exact path="/todos" component={ToDoList}></Route>


            </Switch>



        </BrowserRouter>
    </>)


}
export default App;