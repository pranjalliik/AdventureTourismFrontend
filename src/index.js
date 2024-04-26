import React from "react";
import ReactDOM from "react-dom";
import {App} from "./App.jsx"
import {Provider} from 'react-redux'
import {store,persistor} from "./store.js";
import { PersistGate } from 'redux-persist/integration/react';
import { createRoot } from "react-dom/client";

const container = document.getElementById("root"); 
const root = createRoot(container);


function RootComponent() {
return(<>
<Provider store={store}>
<PersistGate loading={null} persistor={persistor}>
<App></App>
</PersistGate>
</Provider> 
</>
);
}
root.render(<RootComponent />);
