import React, { useState } from "react";
import { TextField, Button, FormControlLabel, Switch } from "@material-ui/core";

function FormularioCadastro({aoEnviar, validarCpf}) {
  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('')
  const [cpf, setCpf] = useState('')
  const [promocoes, setPromocoes] = useState(true)
  const [novidades, setNovidades] = useState(false)
  const [erros, setErros] = useState({cpf:{valido:true, texto:''}})

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        aoEnviar({nome, sobrenome, cpf, promocoes, novidades});
      }}
    >
      <TextField
        value={nome}
        onChange={(event) => {       
          setNome(event.target.value);
        }}
        id="nome"
        label="Nome"
        variant="outlined"
        fullWidth
        margin="normal"
      />

      <TextField
        value={sobrenome}
        onChange={(event) => {
          setSobrenome(event.target.value)
        }}
        id="Sobrenome"
        label="Sobrenome"
        variant="outlined"
        fullWidth
        margin="normal"
      />

      <TextField
        onBlur={(e) => {
          const ehvalido = validarCpf(e.target.value)
          setErros({cpf:ehvalido})

        }}
        helperText={erros.cpf.texto}
        error={!erros.cpf.valido}
        value={cpf}
        onChange={(event) => {
          setCpf(event.target.value)
        }}
        id="CPF"
        label="CPF"
        variant="outlined"
        fullWidth
        margin="normal"
      />

      <FormControlLabel
        label="Promoções"
        control={
          <Switch
            checked={promocoes}
            onChange={(event) => {
              setPromocoes(event.target.checked)
            }}
            name="promocoes"
            color="primary"
          />}
      />

      <FormControlLabel
        label="Novidades"
        control={
          <Switch
            name="novidades"
            checked={novidades}
            onChange={(event) => {
              setNovidades(event.target.checked)
            }}
            color="primary"
          />}
      />

      <Button type="submit" variant="contained" color="primary">
        Cadastrar
      </Button>
    </form>
  );
}

export default FormularioCadastro
