import React from "react";
import Login from "./Login";
import useLocalStorage from "../hooks/useLocalStorage";
import Dashboard from "./Dashboard";
import { ContactsProvider } from "../context/ContactsProvider";
import { Conversationsprovider } from "../context/ConversationsProvider";

function App() {
  const [id, setId] = useLocalStorage("id");

  const dashboard = (
    <ContactsProvider>
      <Conversationsprovider id={id}>
      <Dashboard id={id} />
      </Conversationsprovider>
    </ContactsProvider>
  )

  return (
    <div className="App">
      {id ? dashboard : <Login onIdSubmit={setId} />}
    </div>
  );
}

export default App;
