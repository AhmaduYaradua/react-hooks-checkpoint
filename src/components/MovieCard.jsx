import { Card } from "antd";
import { Link } from "react-router";

const { Meta } = Card;
const MovieCard = ({ id, titles, descriptions, ratings, photo }) => {
  return (
    <Link to={`/movie/${id}`}>
      <Card
        hoverable
        cover={
          <img
            className="w-[600px] h-[300px] object-cover"
            alt="example"
            src={photo}
          />
        }
      >
        <Meta title={titles} description={descriptions} />
        <p>Rating: {ratings}</p>
      </Card>
    </Link>
  );
};
export default MovieCard;
