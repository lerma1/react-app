import React from 'react';
import Article from "../article";
import './style.css'



function Index({articles}) {
    const ArticleElements = articles.map((article, index) =>
        <li className="article-list__li" key = {article.id}><Article article = {article} defaultOpen = {index===0}/></li>)

    return(
        <ul>
            {ArticleElements}
        </ul>
    )
}

export default Index

