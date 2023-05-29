import { useForm } from "react-hook-form";

export default function ArrayFormData() {
  const { handleSubmit, register } = useForm({});

  const onSubmit = (data) => {
    console.log("Form Data as Array", data);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
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
        <button type="submit">Get Values</button>
      </form>
    </>
  );
}
