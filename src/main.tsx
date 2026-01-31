import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@/index.css";
import App from "@/App.tsx";
import { Provider } from "react-redux";
import { store } from "@/app/store";
import ThemeProvider from "@/provider/ThemeProvider";
import ShrinkProvider from "@/provider/ShrinkProvider";

const rootElement = document.getElementById("root")!;
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Provider store={store}>
      <ThemeProvider>
        <ShrinkProvider>
          <App />
        </ShrinkProvider>
      </ThemeProvider>
    </Provider>
  </StrictMode>,
);
