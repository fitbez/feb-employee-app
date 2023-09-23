import React, { useContext, useState } from "react";
import { styled } from "styled-components";
import { EmployeeContext } from "../../context";
import {
  Paper,
  Box,
  Avatar,
  List,
  ListItem,
  Divider,
  Typography,
  Skeleton,
} from "@mui/material";
import { Header } from "../Header/Header";

//Paper, Box, Avater, List, ListItem, Divider, Typography

function EmployeeDetail() {
  const { employeeDetail, setEmployeeDetail } = useContext(EmployeeContext);

  return (
    <Paper sx={{ width: "50%", padding: "0rem 2rem" }}>
      <Header name='Employee' />
      <Paper elevation='0' sx={{ width: "100%", border: "1px solid #f4f4f4" }}>
        <Box sx={{ display: "flex", padding: "1rem" }}>
          <Avatar
            sx={{ width: 80, height: 80 }}
            alt=''
            src={employeeDetail.imageUrl}
          />
          <List>
            <ListItem sx={{ paddingTop: "0rem", paddingBottom: "0rem" }}>
              <Typography variant='h6'>{employeeDetail.name}</Typography>
            </ListItem>
            <ListItem sx={{ paddingTop: "0rem", paddingBottom: "0rem" }}>
              <Typography variant='body1'>{employeeDetail.title}</Typography>
            </ListItem>
          </List>
        </Box>
        <Divider />
        <List>
          <ListItem sx={{ paddingTop: "0rem", paddingBottom: "0rem" }}>
            <Typography variant='h6'>Call Office:</Typography>
          </ListItem>
          <ListItem sx={{ paddingTop: "0rem", paddingBottom: "0rem" }}>
            <Typography variant='body1'>{employeeDetail.callOffice}</Typography>
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem sx={{ paddingTop: "0rem", paddingBottom: "0rem" }}>
            <Typography variant='h6'>Call Mobile:</Typography>
          </ListItem>
          <ListItem sx={{ paddingTop: "0rem", paddingBottom: "0rem" }}>
            <Typography variant='body1'>{employeeDetail.callMobile}</Typography>
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem sx={{ paddingTop: "0rem", paddingBottom: "0rem" }}>
            <Typography variant='h6'>Sms:</Typography>
          </ListItem>
          <ListItem sx={{ paddingTop: "0rem", paddingBottom: "0rem" }}>
            <Typography variant='body1'>{employeeDetail.sms}</Typography>
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem sx={{ paddingTop: "0rem", paddingBottom: "0rem" }}>
            <Typography variant='h6'>Email:</Typography>
          </ListItem>
          <ListItem sx={{ paddingTop: "0rem", paddingBottom: "0rem" }}>
            <Typography variant='body1'>{employeeDetail.email}</Typography>
          </ListItem>
        </List>
      </Paper>
    </Paper>
  );
}

export default EmployeeDetail;
