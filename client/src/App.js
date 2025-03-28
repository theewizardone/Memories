import React, { useEffect, useState } from "react";
import { Container, AppBar, Typography, Grow, Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useDispatch } from "react-redux";
import memories from "./images/memories.jpg";
import { getPosts } from "./actions/posts";
import Posts from "./components/Posts/Posts";
import Form from "./components/Form/Form";

// Styled Components
const StyledAppBar = styled(AppBar)(({ theme }) => ({
  borderRadius: 15,
  margin: "30px 0",
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  padding: "10px",
}));

const StyledHeading = styled(Typography)(({ theme }) => ({
  color: "rgba(0,183,255, 1)",
}));

const StyledImage = styled("img")({
  marginLeft: "15px",
});

const StyledContainer = styled(Container)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column-reverse",
  },
}));

const App = () => {
  const [currentId, setCurrentId] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  return (
    <Container maxWidth="lg">
      <StyledAppBar position="static" color="inherit">
        <StyledHeading variant="h2" align="center">
          Memories
        </StyledHeading>
        <StyledImage src={memories} alt="memories" height="60" />
      </StyledAppBar>
      <Grow in>
        {/* ✅ Using StyledContainer to fix the warning */}
        <StyledContainer>
          <Grid container justifyContent="space-between" alignItems="stretch" spacing={3}>
            <Grid item xs={12} sm={7}>
              <Posts setCurrentId={setCurrentId} />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form currentId={currentId} setCurrentId={setCurrentId} />
            </Grid>
          </Grid>
        </StyledContainer>
      </Grow>
    </Container>
  );
};

export default App;
