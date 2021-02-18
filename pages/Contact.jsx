// import { useState, useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Divider from "@material-ui/core/Divider";

import WhatsappIcon from "@material-ui/icons/WhatsApp";
import PhoneIcon from "@material-ui/icons/Phone";
import MailIcon from "@material-ui/icons/Mail";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import SendIcon from "@material-ui/icons/Send";

const useStyles = makeStyles(({ breakpoints, spacing, palette }) => ({
  contactContainer: {
    padding: spacing(18, 1),
    minHeight: "100vh",
    backgroundColor: "white",
  },
  formPaper: {
    padding: spacing(2),
  },
  formItem: {
    margin: spacing(2, 0),
  },
  title: {
    margin: spacing(4, "auto"),
    fontWeight: 600,
    [breakpoints.down("xs")]: {
      fontSize: "52px",
    },
  },
  divider: {
    margin: spacing(4),
  },
  avatar: {
    backgroundColor: palette.primary.main,
  },
}));

export default function Contact() {
  const classes = useStyles();
  const { register, handleSubmit, errors } = useForm();
  return (
    <Container className={classes.contactContainer}>
      <Typography variant="h2" align="center" className={classes.title}>
        Contact Us
      </Typography>
      <Grid container justify={"space-evenly"}>
        <Grid item xs={12} sm={6} md={7}>
          <Paper className={classes.formPaper} elevation={0}>
            <form
              noValidate
              onSubmit={handleSubmit((data) => submitHandler(data))}
            >
              <Grid container justify="space-evenly">
                <Grid item xs={11} sm={5} className={classes.formItem}>
                  <TextField
                    margin="normal"
                    id="name"
                    label="name"
                    name="name"
                    autoComplete="name"
                    color="primary"
                    InputLabelProps={{ style: { color: "#999" } }}
                    fullWidth
                    inputRef={register({
                      required: true,
                    })}
                    error={errors.name}
                    helperText={errors.name && "This field is required"}
                  />
                </Grid>
                <Grid item xs={11} sm={5} className={classes.formItem}>
                  <TextField
                    margin="normal"
                    id="email"
                    label="email"
                    name="email"
                    autoComplete="email"
                    color="primary"
                    InputLabelProps={{ style: { color: "#999" } }}
                    fullWidth
                    inputRef={register({
                      required: true,
                    })}
                    error={errors.customerName}
                    helperText={errors.customerName && "This field is required"}
                  />
                </Grid>
                <Grid item xs={11} className={classes.formItem}>
                  <TextField
                    variant="filled"
                    margin="normal"
                    id="message"
                    label="your message..."
                    name="message"
                    color="primary"
                    multiline
                    rows={5}
                    InputLabelProps={{ style: { color: "#999" } }}
                    fullWidth
                    inputRef={register({
                      required: true,
                    })}
                    error={errors.message}
                    helperText={errors.message && "Please type a message"}
                  />
                </Grid>
                <Grid item xs={12} align="center" className={classes.formItem}>
                  <Button
                    color="primary"
                    variant="outlined"
                    size="small"
                    type="submit"
                    endIcon={<SendIcon />}
                  >
                    <b>SEND</b>
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={5} md={4}>
          <Paper className={classes.formPaper} elevation={0}>
            <List className={classes.root}>
              <ListItem>
                <ListItemAvatar>
                  <Avatar className={classes.avatar}>
                    <MailIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary="info@kingshippingservices.com"
                  secondary="send us an email!"
                />
              </ListItem>
              <ListItem>
                <ListItemAvatar>
                  <Avatar className={classes.avatar}>
                    <PhoneIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary="+91 44 4013 8800 – 8829"
                  secondary="30 lines - call anyone"
                />
              </ListItem>
              <ListItem>
                <ListItemAvatar>
                  <Avatar className={classes.avatar}>
                    <WhatsappIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary="+91 95439 34422"
                  secondary="for Mobile and WhatsApp"
                />
              </ListItem>
            </List>
            <Divider className={classes.divider} />
            <Grid container justify="space-evenly">
              <Grid item>
                <FacebookIcon />
              </Grid>
              <Grid item>
                <TwitterIcon />
              </Grid>
              <Grid item>
                <WhatsappIcon />
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}
