import React from "react";
import "react-toastify/dist/ReactToastify.min.css";

import { CustomToastContainer } from "./styles/styles";
import GlobalStyles from "./styles/global";
import Routes from "./routes";

function App() {
  return (
    <React.Fragment>
      <React.Suspense fallback={<div>Loading...</div>}>
        <Routes />
        <GlobalStyles />
        <CustomToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={true}
        />
      </React.Suspense>
    </React.Fragment>
  );
}

export default App;
