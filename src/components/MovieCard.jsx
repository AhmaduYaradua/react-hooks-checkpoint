import { Card } from "antd";
import { DETAILS } from "../movieDetails";

const { Meta } = Card;
const MovieCard = (props) => {
  return (
    <Card
      hoverable
      cover={
        <img
          className="w-[600px] h-[300px] object-cover"
          alt="example"
          src={props.photo}
        />
      }
    >
      <Meta title={props.titles} description={props.descriptions} />
      <p>Rating: {props.ratings}</p>
    </Card>
  );
};
export default MovieCard;
