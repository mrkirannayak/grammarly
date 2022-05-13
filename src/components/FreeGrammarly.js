import React from "react";
import {
  Box,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import { Check } from "@mui/icons-material";
import { styled } from "@mui/material/styles";

const DisabledButton = styled(Button)(({ theme }) => ({
  color: "#c6cbde",
  backgroundColor: "#f0f2fc",
  "&:hover": {
    backgroundColor: "#f0f2fc",
  },
}));

const FreeGrammarly = () => {
  return (
    <>
      <Box className="priceBoxGrammarly">
        <Box className="priceHead">
          <Typography variant="body2" color="secondary.main">
            For Casual Writing
          </Typography>
          <Typography variant="h3" color="primary.main">
            Free
          </Typography>
          <Typography variant="body1" color="primary.main">
            Basic writing suggestions.
          </Typography>
        </Box>
        <Box className="priceButton">
          <DisabledButton variant="contained" className="disabled" disabled>
            Included In Premium
          </DisabledButton>
        </Box>
        <Box className="priceListBox">
          <List className="listItem">
            <ListItem>
              <ListItemIcon>
                <Check />
              </ListItemIcon>
              <ListItemText>Spelling</ListItemText>
            </ListItem>

            <ListItem>
              <ListItemIcon>
                <Check />
              </ListItemIcon>
              <ListItemText>Grammar</ListItemText>
            </ListItem>

            <ListItem>
              <ListItemIcon>
                <Check />
              </ListItemIcon>
              <ListItemText>Punctuation</ListItemText>
            </ListItem>

            <ListItem>
              <ListItemIcon>
                <Check />
              </ListItemIcon>
              <ListItemText>Conciseness</ListItemText>
            </ListItem>
          </List>
        </Box>
      </Box>
    </>
  );
};

export default FreeGrammarly;
