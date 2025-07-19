import "../assets/style/Card.css";
const Card = (props) => {
  return (
    <>
      <div className="w-[250px] h-[350px] inline-block border border-gray-300 p-[10px] m-[20px] overflow-hidden">
        <img
          className="w-full h-1/2 object-cover rounded-md"
          src={props.image}
          alt="cat-img"
        />
        <div className="card-content w-full mt-10 inline">
          <h2 className="text-blue-500 font-bold"> {props.name} </h2>
          <p> {props.desc} </p>
          <button className="p-2 bg-blue-600 mt-2 border-none text-white rounded-md ">
            Know more
          </button>
        </div>
      </div>
    </>
  );
};

export default Card;
