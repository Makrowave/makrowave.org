import { Chip } from '@mui/material';
import { useMemo } from 'react';
import { generateGradient } from '../blogHelper';
import ToggleTransitionOverlay from '../../common/components/ToggleTransitionOverlay';

type Props = {
  tag: string;
  active: boolean;
  onClick?: () => void;
};

const Tag = ({ tag, active, onClick }: Props) => {
  const gradient = useMemo(() => generateGradient(tag), [tag]);

  return (
    <ToggleTransitionOverlay
      offBackground="gray"
      onBackground={gradient}
      trigger={active}
      duration="0.4s"
    >
      <Chip
        label={tag}
        sx={{
          m: 0.25,
          fontSize: '20px',
          color: 'white',
          display: 'flex',
          bgcolor: 'black',
        }}
        onClick={onClick}
      />
    </ToggleTransitionOverlay>
  );
};

export default Tag;
