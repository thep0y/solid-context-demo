import { lazy } from "solid-js";
import { ToastProvider } from "@/components/toast/ToastContext/ToastContext";

const ButtonDemo = lazy(async () => {
  return import("./components/button");
});

const App = () => {
  return (
    <ToastProvider>
      <ButtonDemo />
    </ToastProvider>
  );
};

export default App;
