import { Button, Modal, Input, Select, message } from "antd";
import { useState } from "react";

function AddMovie(props) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();
  const [movieData, setMovieData] = useState({
    id: "",
    title: null,
    description: null,
    posterURL: null,
    rating: null,
  });

  const errorAlert = (error_msg) => {
    messageApi.open({
      type: "error",
      content: error_msg,
    });
  };

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    if (movieData.title === null) {
      return errorAlert("Please enter movie title");
    }
    if (movieData.description === null) {
      return errorAlert("Please provide movie description");
    }

    if (movieData.posterURL === null) {
      return errorAlert("Please provide movie poster url");
    }
    if (movieData.rating === null) {
      return errorAlert("Please select movie rating");
    }

    const MOVIE_INFORMATION = { ...movieData, id: Date.now() };

    props.handleAddNewMovie(MOVIE_INFORMATION);

    setMovieData({
      id: "",
      title: null,
      description: null,
      posterURL: null,
      rating: null,
    });
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };
  return (
    <>
      {contextHolder}
      <Button type="primary" onClick={showModal}>
        Add Movie
      </Button>
      <Modal
        title="Movie information"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <form className="flex flex-col gap-3">
          <Input
            onChange={(event) =>
              setMovieData({ ...movieData, title: event.target.value })
            }
            value={movieData.title}
            placeholder="Movie title"
          />
          <Input
            onChange={(event) =>
              setMovieData({ ...movieData, description: event.target.value })
            }
            value={movieData.description}
            placeholder="Movie description"
          />
          <Input
            onChange={(event) =>
              setMovieData({ ...movieData, posterURL: event.target.value })
            }
            value={movieData.posterURL}
            placeholder="Poster Url"
          />
          <Select
            onChange={(value) => setMovieData({ ...movieData, rating: value })}
            value={movieData.rating}
            defaultValue="Select rating"
            style={{
              width: "",
            }}
            options={[
              {
                value: 1,
                label: 1,
              },
              {
                value: 2,
                label: 2,
              },
              {
                value: 3,
                label: 3,
              },
              {
                value: 4,
                label: 4,
              },
              {
                value: 5,
                label: 5,
              },
              {
                value: 6,
                label: 6,
              },
              {
                value: 7,
                label: 7,
              },
              {
                value: 8,
                label: 8,
              },
              {
                value: 9,
                label: 9,
              },
              {
                value: 10,
                label: 10,
              },
            ]}
          />
        </form>
      </Modal>
    </>
  );
}
export default AddMovie;
