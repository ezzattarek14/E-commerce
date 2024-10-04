/* eslint-disable react/prop-types */

import Button from "../ui/Button";

function SizeButtons({ size, setSize }) {
  return (
    <div className="flex gap-3 justify-start w-full  md:w-2/3">
      <Button onClick={() => setSize("s")} type={"size"} active={size === "s"}>
        Small
      </Button>
      <Button active={size === "m"} onClick={() => setSize("m")} type={"size"}>
        Medium
      </Button>
      <Button active={size === "l"} type={"size"} onClick={() => setSize("l")}>
        Large
      </Button>
      <Button
        active={size === "x-l"}
        type={"size"}
        onClick={() => setSize("x-l")}
      >
        X-Large
      </Button>
    </div>
  );
}

export default SizeButtons;
