
import "./App.css";

function App() {

  const handleAddUserInMongoDB = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const user = { name, email };
    console.log(user);
    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if(data?.insertedId){
          form.reset();
        }
      });
  };
  return (
    <>
      <h1>Simple Crud</h1>

      <form onSubmit={handleAddUserInMongoDB}>
        <input type="text" name="name" />
        <br />
        <br />
        <input type="email" name="email" id="" />
        <br />
        <br />
        <input type="submit" value="Add User in Mongodb" />
      </form>

    </>
  );
}

export default App;
