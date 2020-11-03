import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import useStyles from './app.style';

const schema = yup.object().shape({
  firstName: yup.string().trim().required(),
  secondName: yup.string().trim().required(),
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

  const checkSameLetter = (firstNameArray, secondNameArray) => {
    let newFirstNameArray = [];
    let newSecondNameArray = [];
    for (let i = 0; i < firstNameArray.length; i += 1) {
      for (let j = 0; j < secondNameArray.length; j += 1) {
        if (firstNameArray[i] === secondNameArray[j]) {
          firstNameArray.splice(i, 1);
          secondNameArray.splice(j, 1);
          newFirstNameArray = firstNameArray;
          newSecondNameArray = secondNameArray;
        } else {
          newFirstNameArray = firstNameArray;
          newSecondNameArray = secondNameArray;
        }
      }
    }
    return {
      newFirstNameArray, newSecondNameArray,
    };
  };

  const flamesCount = (totalCount) => {
    let flamesArray = ['F', 'L', 'A', 'M', 'E', 'S'];
    let arrayIndex = 0;
    while (flamesArray.length > 1) {
      if (flamesArray.length < totalCount) {
        arrayIndex = totalCount % flamesArray.length;
      } else {
        arrayIndex = totalCount;
      }
      const removeLimit = flamesArray.length - arrayIndex;
      flamesArray.splice(arrayIndex - 1, 1);
      const remainingArray = flamesArray.splice(arrayIndex - 1 < 0 ? 0 : arrayIndex - 1, removeLimit);
      flamesArray = [...remainingArray, ...flamesArray];
    }
    return flamesArray[0];
  };

  const flames = (value1, value2) => {
    let firstName = value1.trim();
    let secondName = value2.trim();
    if (!firstName && !secondName) return 'empty value found';
    firstName = firstName.split(' ').join('');
    secondName = secondName.split(' ').join('');
    if (!firstName.localeCompare(secondName)) return 'firstname and secondname are same';
    const firstNameArray = firstName.split('');
    const secondNameArray = secondName.split('');
    const { newFirstNameArray, newSecondNameArray } = checkSameLetter(firstNameArray, secondNameArray);
    const totalCount = +newFirstNameArray.length + +newSecondNameArray.length;
    return flamesCount(totalCount);
  };

  const onSubmit = (data) => {
    setFormValue(data.firstName);
    setOutput(flames(data.firstName, data.secondName));
  };

  return (
    <>
      <h1 className={classes.title}>Flames</h1>
      <Container className={classes.continer}>
        <form onSubmit={handleSubmit(onSubmit)} noValidate autoComplete="on" className={classes.form}>
          <TextField id="firstName" className={classes.input} fullWidth label="name-1" name="firstName" inputRef={register} />
          <TextField id="secondName" className={classes.input} fullWidth label="name-2" name="secondName" inputRef={register} />
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
