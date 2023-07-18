import $ from "jquery";
import { useNavigate } from "react-router-dom";

const Opening = ({ toggle, soundPlaying }) => {
  const navigate = useNavigate();
  //   $(document).ready(function () {
  //     $('.container').mouseenter(function () {
  //         $('.card').stop().animate({
  //             top: '-90px'
  //         }, 'slow');
  //     }).mouseleave(function () {
  //         $('.card').stop().animate({
  //             top: 0
  //         }, 'slow');
  //     });
  // });
  return (
    <>
      <div className="valentines">
        <div className="envelope"></div>
        <div className="front"></div>
        <div className="card-1">
          {/* <div className="text">
            Happy
            <br /> Birthday
            <br /> Mom!
          </div> */}
          {/* <div className="heart" style={{ border: "none" }}></div> */}
          {/* <div className="hearts">
            <div className="one"></div>
            <div className="two"></div>
            <div className="three"></div>
            <div className="four"></div>
            <div className="five"></div>
          </div> */}
        </div>
        <button
          className="button-56"
          role="button"
          onClick={() => {
            if (!soundPlaying) {
              toggle();
            }
            navigate("main/home");
          }}
        >
          Click!
        </button>
      </div>
      <div className="shadow"></div>
    </>
  );
};
export default Opening;
