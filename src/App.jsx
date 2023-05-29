import { useForm } from "react-hook-form";

function App() {
  const { handleSubmit, register } = useForm({});

  const onSubmit = (data) => {
    console.log(data);
  };
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <div>
          <input type="text" {...register(`obj.0.input1`)} />
          <input type="text" {...register(`obj.0.input2`)} />
          <input type="text" {...register(`obj.0.input3`)} />
        </div>
        <div>
          <input type="text" {...register(`obj.1.input1`)} />
          <input type="text" {...register(`obj.1.input2`)} />
          <input type="text" {...register(`obj.1.input3`)} />
        </div>
      </div>

      <button type="submit">Get Values</button>
    </form>
  );
}

export default App;
