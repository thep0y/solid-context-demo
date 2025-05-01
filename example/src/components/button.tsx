import { onMount } from "solid-js";

import Button from "@/components/button/Button";

import { box, field } from "~/themes/global.css";
import { useToast } from "@/components/toast/ToastContext/ToastContext";

const ButtonDemo = () => {
  const toast = useToast();

  let boxRef: HTMLDivElement | undefined;

  const handleClick = () => {
    toast.setMessage("Hello World!");
  };

  onMount(() => {
    console.log("ButtonDemo mounted");
    console.log("boxRef", boxRef);
  });

  return (
    <div ref={boxRef} class={box}>
      <div class={field}>
        <Button onClick={handleClick}>Example</Button>
      </div>
    </div>
  );
};

export default ButtonDemo;
