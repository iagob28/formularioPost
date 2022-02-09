import { Button, Input } from "./components";
import "./App.css";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

function App() {
  const userObject = yup.object({
    email: yup
      .string()
      .email("Utilize um e-mail válido")
      .required("E-mail precisa ser preenchido"),
    password: yup
      .string()
      .required("Senha precisa ser preenchida")
      .min(8, "Senha precisa ter no mínimo 8 caracteres"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(userObject),
  });

  const userData = (data) => {
    console.log(data.email, data.password);
  };

  return (
    <>
      <div className="background">
        <h1>Formulário</h1>
        <form onSubmit={handleSubmit(userData)} className="formulario">
          <div className="input">
            <label>E-mail</label>
            <Input type="text" {...register("email")} />
            <p className="erro">{errors.email?.message}</p>
          </div>
          <div className="input">
            <label>Senha</label>
            <Input type="password" {...register("password")} />
            <p className="erro">{errors.password?.message}</p>
          </div>
          <Button>Enviar</Button>
        </form>
      </div>
    </>
  );
}

export default App;
