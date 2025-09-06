import {
  Avatar,
  Box,
  Divider,
  Step,
  StepIndicator,
  Stepper,
  Typography,
} from '@mui/joy';

const ExperiencePage = () => {
  return (
    <Box sx={{ display: 'flex', flex: 1, m: '40px' }}>
      <Stepper
        orientation="vertical"
        sx={{ flex: 3, '--Step-gap': '80px', '--StepIndicator-size': '35px' }}
      >
        <Step
          indicator={
            <StepIndicator
              sx={{
                background: '#377dffff',
              }}
            >
              <Avatar src="/src/assets/experience/romico.png" size="sm" />
            </StepIndicator>
          }
          sx={{
            '&::after': {
              height: 2,
              borderRadius: '24px',
              background:
                'linear-gradient(180deg,rgba(78, 245, 184, 1), rgba(209, 255, 186, 1))',
            },
          }}
        >
          <Box>
            <Typography fontSize={16} sx={{ color: 'white' }}>
              ROMICO GmbH
            </Typography>
            <Typography fontSize={14} sx={{ color: 'gray' }}>
              2025/06 - Present
            </Typography>
          </Box>
        </Step>
        <Step
          indicator={
            <StepIndicator
              sx={{
                background: 'red',
              }}
            >
              <Avatar src="/src/assets/experience/pollub.png" size="sm" />
            </StepIndicator>
          }
          sx={{
            '&::after': {
              height: 2,
              borderRadius: '24px',
              background:
                'linear-gradient(180deg,rgba(78, 245, 184, 1), rgba(255, 255, 255, 1))',
            },
          }}
        >
          <Box>
            <Typography fontSize={16} sx={{ color: 'white' }}>
              Lublin University of Technology
            </Typography>
            <Typography fontSize={14} sx={{ color: 'gray' }}>
              2022/10 - 2026/02
            </Typography>
          </Box>
        </Step>
        <Step indicator={<StepIndicator />}>
          <Box>
            <Typography fontSize={16} sx={{ color: 'white' }}>
              AMS Bikes
            </Typography>
            <Typography fontSize={14} sx={{ color: 'gray' }}>
              06.09.2025
            </Typography>
            <Typography fontSize={14} sx={{ color: 'gray' }}>
              Project - Engineer's Thesis
            </Typography>
          </Box>
        </Step>
      </Stepper>
      <Divider orientation="vertical" sx={{ mx: 2 }} />
      <Box sx={{ flex: 5 }}>
        <Typography>Nah I will finish it later</Typography>
      </Box>
    </Box>
  );
};

export default ExperiencePage;
