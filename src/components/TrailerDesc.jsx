import { Link } from "react-router";
import { DETAILS } from "../movieDetails";

function TrailerDesc(props) {
  return (
    <div className="container ml-[440px] mt-32">
      <iframe
        width="560"
        height="315"
        src={props.trailer}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
      <h1 className="text-3xl font-bold mt-5 ml-28 text-gray-500 underline">
        {props.descriptions} trailer
      </h1>
      <Link to={"/"}>
        <button className="border border-b-2 shadow-md p-4 rounded-md mt-4 ml-52">
          Back to home
        </button>
      </Link>
    </div>
  );
}
export default TrailerDesc;
