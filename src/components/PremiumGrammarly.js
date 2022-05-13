import React from "react";
import {
  Box,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography
} from "@mui/material";
import { Check } from "@mui/icons-material";
import { styled } from "@mui/material/styles";

const ColorButton = styled(Button)(({ theme }) => ({
  color: "#ffffff",
  backgroundColor: "#11a683",
  "&:hover": {
    backgroundColor: "#15c39a"
  }
}));

const PremiumGrammarly = () => {
  return (
    <>
      <Box className="priceBoxGrammarly">
        <Box className="priceHead">
          <Typography variant="body2" color="secondary.main">
            For Work or School
          </Typography>
          <Typography variant="h3" color="primary.main">
            Premium
          </Typography>
          <Typography variant="body1" color="primary.main">
            Style, tone, and clarity improvements for writing at work and
            school.
          </Typography>
        </Box>
        <Box className="priceButton">
          <ColorButton variant="contained" className="button">
            Upgrade to Grammarly Premium
          </ColorButton>
        </Box>
        <Box className="priceListBox">
          <List className="listItem">
            <ListItem>
              <ListItemIcon>
                <Check />
              </ListItemIcon>
              <ListItemText>Everything in Free</ListItemText>
            </ListItem>

            <ListItem>
              <ListItemIcon>
                <Check />
              </ListItemIcon>
              <ListItemText>Clarity-focused sentence rewrites</ListItemText>
            </ListItem>

            <ListItem>
              <ListItemIcon>
                <Check />
              </ListItemIcon>
              <ListItemText>Tone adjustments</ListItemText>
            </ListItem>

            <ListItem>
              <ListItemIcon>
                <Check />
              </ListItemIcon>
              <ListItemText>Plagiarism detection</ListItemText>
            </ListItem>

            <ListItem>
              <ListItemIcon>
                <Check />
              </ListItemIcon>
              <ListItemText>Word choice</ListItemText>
            </ListItem>

            <ListItem>
              <ListItemIcon>
                <Check />
              </ListItemIcon>
              <ListItemText>Formality level</ListItemText>
            </ListItem>

            <ListItem>
              <ListItemIcon>
                <Check />
              </ListItemIcon>
              <ListItemText>Fluency</ListItemText>
            </ListItem>

            <ListItem>
              <ListItemIcon>
                <Check />
              </ListItemIcon>
              <ListItemText>Additional advanced suggestions</ListItemText>
            </ListItem>
          </List>
        </Box>
      </Box>
    </>
  );
};

export default PremiumGrammarly;
