import React from 'react';
import Index from "./article-list";
import articles from "../fixtures";
import 'bootstrap/dist/css/bootstrap.css'

function App() {
    return(
        <div className ="container">
            <div className="jumbotron">
                <h1 className="display-3"> App name</h1>
            </div>
           <Index articles = {articles}/>
        </div>
    )
}

export default App