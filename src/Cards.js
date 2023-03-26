import "./Card.css"

function Cards({id,login,avatar_url}) {
  return (
    <>
    <div className="card">
      <h2 className="gola">{id}</h2>
      <h1>Name : {login}</h1>
      <h4>avatar_url <span>{avatar_url}</span></h4>
    </div>

    </>
  );
}

export default Cards;

