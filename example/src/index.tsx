/* @refresh reload */
import { render } from "solid-js/web";
import App from "./App.tsx";
import "@/themes/styles/var.css";
import "@/themes/styles/theme.css";

const root = document.getElementById("root");

render(() => <App />, root!);
