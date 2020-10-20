import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import useStyles from './app.style';

const schema = yup.object().shape({
  firstname: yup.string().trim().required(),
  secondname: yup.string().trim().required(),
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

  const flames = (value1, value2) => {
    let firstName = value1.trim();
    let secondName = value2.trim();
    if (!firstName && !secondName) return 'empty value found';
    firstName = firstName.split(' ').join('');
    secondName = secondName.split(' ').join('');
    if (!firstName.localeCompare(secondName)) return 'firstname and secondname are same';
    const firstNameDiffValue = firstName.split('').filter((d) => !secondName.split('').includes(d));
    const secondNameDiffValue = secondName.split('').filter((d) => !firstName.split('').includes(d));
    console.log(firstNameDiffValue);
    console.log(secondNameDiffValue);
    const diffCount = +firstNameDiffValue.length + +secondNameDiffValue.length;
    return diffCount;
  };

  useEffect(() => {
    console.log(flames('tomr', 'jerry'));
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
