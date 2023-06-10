import { type AppType } from "next/app";
import { api } from "@/utils/api";
import "@/styles/globals.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Layout from "@/components/layout";

const queryClient = new QueryClient()

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
  <QueryClientProvider client={queryClient}>
    <Layout>
    <Component {...pageProps} />
    </Layout>
  </QueryClientProvider>)
};

export default api.withTRPC(MyApp);
