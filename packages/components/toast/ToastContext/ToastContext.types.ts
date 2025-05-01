import type { Setter } from "solid-js";

export interface ToastContext {
  setMessage: Setter<string>;
}
