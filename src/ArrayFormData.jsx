import { useForm } from "react-hook-form";

export default function ArrayFormData() {
  const { handleSubmit, register } = useForm({});

  const onSubmit = (data) => {
    console.log("Form Data as Array", data);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" {...register(`obj.0.input`)} />
        <input type="text" {...register(`obj.1.input`)} />
        <input type="text" {...register(`obj.2.input`)} />
        <input type="submit" />
      </form>
    </>
  );
}
