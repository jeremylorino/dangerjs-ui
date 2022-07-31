import { QueryClient, QueryClientProvider } from "react-query";
import { HomePage } from "./Pages/Home/Home";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <header className="flex justify-center items-center p-2 bg-slate-100 border-b-2 border-b-slate-300">
          <h1>Danger JS</h1>
        </header>
        <nav></nav>
        <main>
          <HomePage />
        </main>
      </div>
    </QueryClientProvider>
  );
}
