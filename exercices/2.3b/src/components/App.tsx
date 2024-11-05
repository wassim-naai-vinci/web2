import { User } from "../type";
import Footer from "./Footer";
import PageTitle from "./PageTitle";
import Users from "./Users";
import "../App.css";

const App = () => {
  const title = "Welcome to My App";

  const userTable : User[] = [
    {
        name : "Alice",
        age : 25,
    },
    {
        name : "Bob",
        age : 30,
    },
    {
        name : "Charlie",
        age : 35,
    },

  ];
  
  const footerText = "© 2023 My App";

  return (
    <div>
      <PageTitle title={title}/>
      <Users users={userTable}/>
      <Footer footer={footerText}/>
    </div>
  );
};

export default App;
