import React, { useState } from "react";
import Button from "../Atoms/Button";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Chart from "./Chart";
import { CombineReducerType } from "../../Redux/reducer";
import FormControl from "@material-ui/core/FormControl";
import { GraphActions } from "../../Redux/Graph/action";
import imgLoading from "../../Assets/loading.gif";
import InputLabel from "@material-ui/core/InputLabel";
import { messages } from "../../Constants/Strings";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import { sp } from "../../media";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";


const useStyles = makeStyles((theme: Theme) => 
  createStyles({
    formControl: {
      minWidth: 200,
    },
    selectEmpty: {
    },
  }),
);

const DisplayRecharts: React.FC = () => {
  const dispatch = useDispatch();
  const [country, setCountry] = useState<string>('');
  const selectedModel = useSelector((state: CombineReducerType) => state.country.selectedCountryData)
  const isLoading = useSelector((state: CombineReducerType) => state.country.isLoading)
 
  const changeHandler = (e: any) => {
    setCountry(e.target.value)
    dispatch(GraphActions.SelectCountry(e.target.value))
  }

  const submitHandler = () => {
    if (country !== "") {
      dispatch(GraphActions.AddCountry(country))
    } else {
      alert("地域を選択して下さい");
      return;
    }
  };

  const classes = useStyles();

  return (
    <div className="App">
        <FormControl className={classes.formControl}>
          <InputLabel
            style={{fontSize: "16px"}}
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
            <MenuItem value="Japan">Japan</MenuItem>
            <MenuItem value="China">China</MenuItem>
            <MenuItem value="Italy">Italy</MenuItem>
          </Select>
          
          <LayoutChart>
            {isLoading ? <img src={imgLoading} alt="loading"/>
                  : <Chart model={selectedModel} />
            }          
          </LayoutChart>

          <Button clickHandler={submitHandler}>
            <span>グラフを一覧へ追加</span>
          </Button>
        </FormControl>
    </div>
  )
}

const LayoutChart = styled.div`
  ${sp`
    width: 450px;
    box-sizing: boder-box;
  `}
`;

export default DisplayRecharts;