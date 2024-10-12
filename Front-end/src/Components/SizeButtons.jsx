/* eslint-disable react/prop-types */

import Button from "../ui/Button";

function SizeButtons({ size, setSize }) {
  return (
    <div className="flex gap-3 justify-start w-full  md:w-2/3">
      <Button
        onClick={() => setSize("Small")}
        type={"size"}
        active={size === "Small"}
      >
        Small
      </Button>
      <Button
        active={size === "Medium"}
        onClick={() => setSize("Medium")}
        type={"size"}
      >
        Medium
      </Button>
      <Button
        active={size === "Large"}
        type={"size"}
        onClick={() => setSize("Large")}
      >
        Large
      </Button>
      <Button
        active={size === "X-Large"}
        type={"size"}
        onClick={() => setSize("X-Large")}
      >
        X-Large
      </Button>
    </div>
  );
}

export default SizeButtons;
