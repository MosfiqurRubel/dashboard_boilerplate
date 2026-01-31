import { useNavigate } from "react-router-dom";
import type { FC } from "react";

const NotFound: FC = () => {
  const navigate = useNavigate();

  return (
    <section className="h-full flex-center">
      <div className="flex flex-col items-center">
        <div className="flex items-center mb-5">
          <h1 className="text-5xl font-bold border-e border-gray-300 pe-4">
            404
          </h1>
          <span className="text-lg text-gray-500 uppercase ms-4">
            Not Found
          </span>
        </div>

        <button
          type="button"
          onClick={() => navigate("/")}
          className="bg-sky-500 text-white text-base py-2 px-5 cursor-pointer rounded-4xl"
        >
          Go Back Home
        </button>
      </div>
    </section>
  );
};

export default NotFound;
