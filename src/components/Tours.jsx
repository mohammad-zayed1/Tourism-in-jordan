import Data from "./Data";

const Tours = () => {
  const toursCards = Data.map((item, index) => {
    return (
      <div className="card" key={index}>
        <img src={item.image} alt={item.name} />
        <h2 className="title">{item.name}</h2>
        <p className="info">
          <b>Description: </b>
          {item.info}
        </p>
      </div>
    );
  });
  return (
    <>
      <main>{toursCards}</main>
    </>
  );
};

export default Tours;
