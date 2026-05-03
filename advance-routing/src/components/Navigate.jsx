import { useNavigate } from "react-router";

const NavigationBar = () => {
  let navigate = useNavigate();

  return (
    <div className="flex py-3 px-5 bg-cyan-700">
      <button
        onClick={() => {
          navigate("/");
        }}
        className="bg-blue-400 px-5 py-2 rounded m-2 cursor-pointer active:scale-95"
      >
        Return to home Page
      </button>

      <button
        onClick={() => {
          navigate(-1);
        }}
        className="bg-blue-400 px-5 py-2 rounded m-2 cursor-pointer active:scale-95"
      >
        Back
      </button>
      <button
        onClick={() => {
          navigate(+1);
        }}
        className="bg-blue-400 px-5 py-2 rounded m-2 cursor-pointer active:scale-95"
      >
        next
      </button>
    </div>
  );
};

export default NavigationBar;