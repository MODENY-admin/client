import React from "react";
import * as dateFns from "date-fns";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
  },
  textField: {
    // marginLeft: theme.spacing(1),
    // marginRight: theme.spacing(1),
    width: 132,
  },
  resize: {
    fontSize: 14,
  },
}));

const today = dateFns.format(new Date(), "yyyy-MM-dd");
console.log("today", today);

export const DatePicker = () => {
  const classes = useStyles();

  return (
    <form className={classes.container} noValidate>
      <TextField
        id="date"
        // label="Birthday"
        type="date"
        defaultValue={today}
        className={classes.textField}
        InputProps={{
          classes: {
            input: classes.resize,
          },
          disableUnderline: true,
        }}
        // InputLabelProps={{
        //   shrink: false,
        // }}
      />
    </form>
  );
};
