import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "react-query";
import { useEffect } from "react";
import { useStore } from "store/store";

const queryClient = new QueryClient();

function handleExitComplete() {
  if (typeof window !== "undefined") {
    window.scrollTo({ top: 0 });
  }
}

function MyApp({ Component, pageProps }: AppProps) {
  // windowLoaded status will be used
  // to avoid sessionStorage conflicts with NextJS
  const store = useStore();
  const router = useRouter();

  useEffect(() => {
    store.setWindowLoaded();
    const storedToken = sessionStorage.getItem("token");
    if (storedToken) {
      store.setToken(storedToken);
    }
  }, []);
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <AnimatePresence exitBeforeEnter onExitComplete={handleExitComplete}>
          {store.windowLoaded ? (
            <Component {...pageProps} key={router.route} />
          ) : (
            <p>...loading</p>
          )}
        </AnimatePresence>
        <style>
          {`
        body {
          padding: 0;
          margin: 0;
          background: #f9fbf8;
        }

        * {
          box-sizing: border-box;
          font-family: Helvetica, sans-serif;
          font-weight: 900;
          color: #222;
        }
      `}
        </style>
      </QueryClientProvider>
    </>
  );
}

export default MyApp;
