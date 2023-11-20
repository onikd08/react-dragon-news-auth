import Marquee from "react-fast-marquee";

const Slider = () => {
  return (
    <div className="p-4 flex gap-4 border">
      <button className="btn btn-secondary">Latest</button>
      <Marquee>
        Match Highlights: Germany vs Spain — as it happened ! Match Highlights:
        Germany vs Spain as...
      </Marquee>
    </div>
  );
};

export default Slider;
