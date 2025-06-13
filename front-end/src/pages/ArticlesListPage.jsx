import ArticlesList from "../ArticlesList";
import articles from "../article-content";

export default function HomePage(){
    return (
        <>
        <h1>Articles</h1>
        <ArticlesList articles={articles}></ArticlesList>
        </>
    );
}