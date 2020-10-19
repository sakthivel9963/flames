import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import useStyles from './app.style';

const schema = yup.object().shape({
  firstname: yup.string().required(),
  secondname: yup.string().required(),
});

const App = () => {
  const [formValue, setFormValue] = useState({});
  const [output, setOutput] = useState();
  const {
    register, handleSubmit, errors,
  } = useForm({
    resolver: yupResolver(schema),
  });
  const classes = useStyles();

  const flames = (firstName, secondName) => {
  };

  useEffect(() => {
    flames('sakthivel', 'prabhu');
  }, []);

  const onSubmit = (data) => { console.log(data); setFormValue(data); };

  return (
    <>
      <h1 className={classes.title}>Flames</h1>
      <Container className={classes.continer}>
        <form onSubmit={handleSubmit(onSubmit)} noValidate autoComplete="on" className={classes.form}>
          <TextField id="firstname" className={classes.input} fullWidth label="name-1" name="firstname" inputRef={register} />
          <TextField id="secondname" className={classes.input} fullWidth label="name-2" name="secondname" inputRef={register} />
          <Button type="submit" variant="contained" color="primary">
            submit
          </Button>
        </form>
      </Container>
      <Container className={classes.continer}>
        <div>
          <h2>Output</h2>
          <br />
          {output}
        </div>
      </Container>
    </>
  );
};

export default App;
