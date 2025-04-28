import { lazy } from "solid-js";
import { h1 } from "./App.css";
import { ToastProvider } from "@/components/toast/ToastContext/ToastContext";

const ButtonDemo = lazy(async () => {
  return import("./components/button");
});

const App = () => {
  return (
    <ToastProvider>
      <h1 class={h1}>Fluent Solid</h1>

      <ButtonDemo />
    </ToastProvider>
  );
};

export default App;
