import { QueryClient, QueryClientProvider } from "react-query"
import { ReactQueryDevtools } from 'react-query/devtools'
import "tailwindcss/tailwind.css";

const queryClient = new QueryClient()

function MyApp({ Component, pageProps }) {
  return <QueryClientProvider client={queryClient}>
    <Component {...pageProps} />
    <ReactQueryDevtools initialIsOpen={false} />
  </QueryClientProvider>
}

export default MyApp;
