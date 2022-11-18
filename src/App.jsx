import Header from "./components/Header";
import Entry from "./components/Entry";
import data from "./assets/data";

function App() {
  const entryList = data.map((entry) => {
    return <Entry key={entry.id} {...entry} />;
  });

  return (
    <div className="App">
      <Header />
      <main className="entry-list">{entryList}</main>
    </div>
  );
}

export default App;
