import { Button, TextField } from "@mui/material";
import { styled } from "@mui/system";
import colors from "./../../../colors";

export const StyledYellowButton = styled(Button)(({ theme }) => ({
  background: colors.yellow.v2,
  color: colors.white.v1,
  "&:hover": {
    background: colors.yellow.v2,
    color: colors.white.v1,
  },
  // fontWeight: "bold",
}));

export const StyledTextField = styled(TextField)(({ theme }) => ({
  // overflow: "hidden",
  // overflow: "hidden",
  "& input": {
    padding: theme.spacing(0.7, 1),
  },
  "& .Mui-focused .MuiOutlinedInput-notchedOutline": {
    borderColor: `${colors.yellow.v1}!important`,
  },
  "& .MuiOutlinedInput-root": {
    paddingRight: theme.spacing(0.7),
  },
}));
