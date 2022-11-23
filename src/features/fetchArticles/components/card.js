function Card({ article }) {
  return (
    <div className="card">
      <div className="card-header">
        <span className="tag">{article.category}</span>
        <h4>
          <a href={`/article/${article.id}`}>{article.title}</a>
        </h4>
      </div>
      <div className="card-body">
        <p>{article.abstract}</p>
      </div>
      <div className="card-footer">
        <small>{article.creationDate}</small>
      </div>
    </div>
  );
}

export default Card;
