import React from "react";
import { useSelector } from "react-redux";
import { Article } from "../UI/Article";
import GenderItem from "./GenderItem";
import classes from './GenderList.module.css'

const GenderList = () => {
    const genderListItems = useSelector(state => state.genderlist.list);

  return <Article className={classes.article}>
      <h2>History of consulted names</h2>
      <ul className={classes.list}>
          { genderListItems.map(item => <GenderItem key={item.id} text={item.text} id={item.id} />)}
      </ul>
  </Article>;
};

export default GenderList;
