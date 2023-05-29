import ArrayFormData from "./ArrayFormData";
import ObjectFormData from "./ObjectFormData";
import Headers from "./Header";

let renderCount = 0;

function App() {
  renderCount++;

  return (
    <>
      <Headers
        renderCount={renderCount}
        description="Performant, flexible and extensible forms with easy-to-use validation."
      />
      {/* Converts Form Data to Array */}
      <h2>Data as Object</h2>
      <ObjectFormData />
      {/* Converts Form Data to Array */}
      <h2>Data as Array</h2>
      <ArrayFormData />
    </>
  );
}

export default App;
