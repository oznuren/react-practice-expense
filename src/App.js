import Expenses from "./components/Expenses";
function App() {
  const expenses = [
    {
      name: "Car Insurance",
      amount: 294.67,
      date: new Date(2022, 5, 16),
    },
    {
      name: "Gas",
      amount: 100.0,
      date: new Date(2022, 5, 16),
    },
    {
      name: "Rent",
      amount: 1500.0,
      date: new Date(2022, 5, 16),
    },
  ];

  return (
    <div>
      <h2>Let's get started!</h2>
      <Expenses expenses={expenses}></Expenses>
    </div>
  );
}

export default App;
