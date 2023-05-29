import { useForm } from "react-hook-form";

export default function ObjectFormData() {
  const { handleSubmit, register } = useForm({});

  const onSubmit = (data) => {
    console.log("Form Data as Object", data);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <input type="text" {...register(`obj.a.input1`)} />
          <input type="text" {...register(`obj.a.input2`)} />
          <input type="text" {...register(`obj.a.input3`)} />
        </div>
        <div>
          <input type="text" {...register(`obj.b.input1`)} />
          <input type="text" {...register(`obj.b.input2`)} />
          <input type="text" {...register(`obj.b.input3`)} />
        </div>
        <button type="submit">Get Values</button>
      </form>
    </>
  );
}
