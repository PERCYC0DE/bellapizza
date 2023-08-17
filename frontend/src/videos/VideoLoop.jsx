import videoSource from "../videos/mp4/WeekendOff.mp4";
import firstAdd from "../videos/mp4/firstAdd.mp4";
import secondAdd from "../videos/mp4/SecondAdd.mp4";
import bothAdds from "../videos/mp4/BothAdds.mp4";

export function VideoLoop() {
  return (
    <video autoPlay loop muted>
      <source src={videoSource} type="video/mp4" />
    </video>
  );
}

export function FirstAdd() {
  return (
    <video autoPlay loop muted controls={false}>
      <source src={firstAdd} type="video/mp4" />
    </video>
  );
}

export function SecondAdd() {
  return (
    <video autoPlay loop muted controls={false}>
      <source src={secondAdd} type="video/mp4" />
    </video>
  );
}

export function BothAdds() {
  return (
    <video autoPlay loop muted controls={false} disablePictureInPicture>
      <source src={bothAdds} type="video/mp4" />
    </video>
  );
}

// export default function VideoContainer() {
//   const VideoLoop = VideoLoop
// }
