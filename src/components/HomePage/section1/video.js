import "./video.css";
import adVideo from "../../../media/IntroVideo.mp4";

function Video() {
  return (
    <div className="videoContainer">
      <video className="video" src={adVideo} autoPlay loop />
    </div>
  );
}

export default Video;
