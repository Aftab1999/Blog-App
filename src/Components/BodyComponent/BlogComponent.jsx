import {
  Box,
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  Avatar,
  CardHeader,
  IconButton,
  CardMedia,
  CardActionArea,
  Grid,
} from "@material-ui/core";
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";
import axios from "axios";

import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";

// const useStyles = makeStyles((theme) =>
//   createStyles({
//     root: {

//       display: 'block',
//       width: '30vw',
//       transitionDuration: '0.3s',
//       height: '45vw'
//       // flexGrow: '1',
      

//     },
//   })
// );

const useStyles = makeStyles(theme => ({
  root: {
      flexGrow: 1,
      padding: theme.spacing(5)
  }
}))

function BlogComponent() {
  // const navigate = useNavigate();
  const classes = useStyles();
  let API_KEY = "8196190b08906dda0ebf6e6f5d";
  const [blog, setBlog] = useState([]);

  const ghostBlog = async () => {
    const resp = await axios.get(
      `https://ghost-blog.ipxp.in/ghost/api/v3/content/posts/?key=${API_KEY}`
    );
    setBlog(resp.data.posts);
    console.log("res",resp.data.posts); 
  };

  useEffect(() => {
    ghostBlog();
  }, [])

  return (
    <>
     {/* <Grid item xs={12} sm={6} md={3}> */}
   

      <div className={classes.root}>
      <Grid
                container
                spacing={5}
                direction="row"
                justify="flex-start"
                alignItems="flex-start"
            >
               
        {blog?.map(data => {

    return  <Grid item xs={12} sm={6} md={3} key={data?.id}>

           <Card>

            <CardActionArea>
              <CardHeader
                title={data?.title}                               // Card Header
                subheader={data?.slug}
              />

              <CardMedia />
               
              <CardContent>
                <Typography > </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button variant="outlined" color="inherit">Read more</Button>
            </CardActions>
          </Card>
          </Grid>
        })}
         </Grid>
      </div>
     
    </>
  );
}

export default BlogComponent;
