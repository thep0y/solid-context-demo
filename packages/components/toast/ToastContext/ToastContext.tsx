import {
  createContext,
  createEffect,
  createSignal,
  useContext,
  type JSX,
} from "solid-js";
import type { ToastContext as Context } from "./ToastContext.types";

const ToastContext = createContext<Context>();

export const ToastProvider = (props: {
  children?: JSX.Element;
  maxToasts?: number;
}) => {
  const [message, setMessage] = createSignal("");

  createEffect(() => {
    message() && alert(message());
  });

  return (
    <ToastContext.Provider
      value={{
        setMessage,
      }}
    >
      {props.children}
    </ToastContext.Provider>
  );
};

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast: cannot find a ToastContext");
  }
  return context;
};
