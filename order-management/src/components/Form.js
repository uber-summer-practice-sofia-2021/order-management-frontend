import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "140%",
    marginTop: theme.spacing(1),
    background: "#fafafa",
    borderRadius: 5,
    boxShadow: '0 0px 10px rgba(0,0,0,0.3)',
    color: '#777',
    height: "100%",
    padding: '20px 40px 40px 40px',
    margin:'50px',
    marginTop:'50px'
  }
}));

export const Form = ({children, ...props}) => {
  const styles = useStyles();

  return (
    <form  {...props} className={styles.root} noValidate>
      {children}
    </form>
  );
};