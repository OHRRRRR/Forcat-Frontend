import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RecoilRoot } from "recoil";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import theme from "./style/theme";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import GlobalStyle from "./style/GlobalStyle";

// QueryClient 생성
const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RecoilRoot>
      {/* QueryClientProvider로 애플리케이션을 감싸기  */}
      <QueryClientProvider client={queryClient}>
        <GlobalStyle theme={theme} />
        <RouterProvider router={router} />
      </QueryClientProvider>
    </RecoilRoot>
  </StrictMode>
);
