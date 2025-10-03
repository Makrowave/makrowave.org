import { Avatar, IconButton, type StepIconProps } from '@mui/material';
import { conicStepBackground } from '../../styles/colors';

const StepImage = (props: StepIconProps) => {
  const isNumber = typeof props.icon === 'number';
  return (
    <IconButton
      component="div"
      sx={{
        width: 50,
        height: 50,
        borderRadius: '50%',
        background: props.active ? conicStepBackground : 'gray',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      onClick={props.onClick}
    >
      {!isNumber && (
        <Avatar sx={{ width: 45, height: 45 }} src={String(props.icon)} />
      )}
    </IconButton>
  );
};
export default StepImage;
