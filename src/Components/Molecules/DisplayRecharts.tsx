import React, { useState } from "react";
import Chart from "./Chart";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { messages } from "../../Constants/Strings";
import { Button } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) => 
  createStyles({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 200,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }),
);

const DisplayRecharts: React.FC = () => {
  const [country, setCountry] = useState<string>("");

  const changeHandler = (e: any) => {
    setCountry(e.target.value)
  }

  const classes = useStyles();

  return (
    <div className="App">
      <div>
        <FormControl className={classes.formControl}>
          <InputLabel
            id="demo-simple-select-label">
            {messages.Pagetop.select}
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={country}
            onChange={changeHandler}
            name="selectlink"
          >
            <MenuItem value="">地域を選択する</MenuItem>
            <MenuItem value="Japan">Japan</MenuItem>
            <MenuItem value=" China">China</MenuItem>
          </Select>

          <Chart country={country}/>

          <button>
            <span>グラフを一覧へ追加</span>
          </button>
        </FormControl>
      </div>
    </div>
  )
}

export default DisplayRecharts;