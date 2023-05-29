import { useForm } from "react-hook-form";

export default function ObjectFormData() {
  const { handleSubmit, register } = useForm({});

  const onSubmit = (data) => {
    console.log("Form Data as Object", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" {...register(`obj.a.input`)} />
      <input type="text" {...register(`obj.b.input`)} />
      <input type="text" {...register(`obj.c.input`)} />
      <input type="submit" />
    </form>
  );
}
