import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 60,
  },
  selectEmpty: {
    // marginTop: theme.spacing(2),
    fontSize: 14,
  },
  resize: {
    fontSize: 14,
  },
}));

export const SimpleSelect = () => {
  const classes = useStyles();

  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div>
      <FormControl className={classes.formControl} size="small">
        <Select
          value={age}
          onChange={handleChange}
          displayEmpty
          className={classes.selectEmpty}
          inputProps={{
            "aria-label": "Without label",
          }}
          disableUnderline={true}
        >
          <MenuItem value="" className={classes.resize}>
            <em>예정</em>
          </MenuItem>
          <MenuItem value={10} className={classes.resize}>
            완료
          </MenuItem>
        </Select>
        {/* <FormHelperText>Without label</FormHelperText> */}
      </FormControl>
    </div>
  );
};
