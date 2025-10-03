import {
  stepConnectorClasses,
  styled,
  StepConnector as MuiStepConnector,
} from '@mui/material';

import { stepLine } from '../../styles/colors';
const StepConnector = styled(MuiStepConnector)(({ theme }) => ({
  width: 3,
  marginLeft: 23,
  borderRadius: 1.5,
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundImage: stepLine,
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundImage: stepLine,
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    height: '100%',
    border: 0,
    backgroundColor: 'gray',
    borderRadius: 1,
    ...theme.applyStyles('dark', {
      backgroundColor: theme.palette.grey[800],
    }),
  },
}));
export default StepConnector;
