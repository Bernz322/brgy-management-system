import React, { useLayoutEffect, useRef, useState, useEffect } from 'react'
import { createStyles, Container, Group, Title, Paper } from "@mantine/core";
import { Document, Page } from "react-pdf";
import CalendarView from '../Components/CalendarView';

const useStyles = createStyles((theme) => ({
  container: {
    fontFamily: "Regular",
    width: "100%",
    height: "fit-content",
    borderRadius: `20px`,
    padding: '15px',
    background:
      theme.colorScheme === "dark"
        ? theme.colors.darktheme[5]
        : theme.colors.lighttheme[0],
    transition: "ease-in-out 500ms",
  },
}));



const Events = () => {
  const [data, setdata] = useState('');
  const { classes } = useStyles();


  return (
    <Paper className={classes.container}>
      <Title order={1} align='center' mb='md'>Barangay Events</Title>
      <CalendarView />
    </Paper>
  );
}

export default Events