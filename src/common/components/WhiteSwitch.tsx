import styled from '@emotion/styled';
import { alpha, Switch } from '@mui/material';

//eslint-disable-next-line
const WhiteSwitch = styled(Switch)(({ theme }) => ({
  '& .MuiSwitch-switchBase.Mui-checked': {
    color: '#FFFFFF',
    '&:hover': {
      backgroundColor: alpha(
        '#FFFFFF',
        0.2 /*theme.palette.action.hoverOpacity*/,
      ),
    },
  },
  '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
    backgroundColor: '#FFFFFF',
  },
}));

export default WhiteSwitch;
