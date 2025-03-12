import React from "react";
// import SignUp from "./SignUp";
import Registration from "./Registration";
import TestForm from "./TestForm";
import TestFormApi from "./TestFormApi";
import TanStackForm from "./TanStackForm";
import {QueryClient , QueryClientProvider } from "@tanstack/react-query";

const App = () => {
  // return <SignUp />;
  const queryClient = new QueryClient();
  return (
    <>
      {/* <Registration /> */}
      {/* <TestForm /> */}
      <QueryClientProvider client={queryClient}>
        <TanStackForm />
      </QueryClientProvider>
      {/* <TestFormApi /> */}
    </>
  );
};

export default App;
