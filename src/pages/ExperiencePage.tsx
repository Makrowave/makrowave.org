import {
  Box,
  Divider,
  Step,
  StepLabel,
  Stepper,
  Typography,
} from '@mui/material';
import { useState, type ReactNode } from 'react';
import StepImage from '../experience/components/StepImage';
import StepConnector from '../experience/components/StepConnector';
import AmsBikes from '../experience/components/descriptions/AmsBikes.mdx';
import Pollub from '../experience/components/descriptions/Pollub.mdx';
import Romico from '../experience/components/descriptions/Romico.mdx';
import MdxWrapper from '../blog/components/MdxWrapper';

const ExperiencePage = () => {
  const [activeStep, setActiveState] = useState<number>(experience.length - 1);

  return (
    <Box sx={{ display: 'flex', flex: 1, m: '40px' }}>
      <Stepper
        orientation="vertical"
        connector={<StepConnector />}
        sx={{ flexDirection: 'column-reverse' }}
      >
        {experience.map((exp) => (
          <Step key={exp.company} active={exp.id <= activeStep}>
            <StepLabel
              StepIconComponent={StepImage}
              icon={exp.icon}
              onClick={() => setActiveState(exp.id)}
            >
              <Typography fontSize={16} sx={{ color: 'white' }}>
                {exp.company}
              </Typography>
              <Typography
                fontSize={14}
                sx={{ color: exp.id === activeStep ? 'lightgray' : 'gray' }}
              >
                {exp.start.toLocaleDateString('en-GB', {
                  month: '2-digit',
                  year: 'numeric',
                })}
                {' - '}
                {exp.finish
                  ? exp.finish.toLocaleDateString('en-GB', {
                      month: '2-digit',
                      year: 'numeric',
                    })
                  : 'Present'}
              </Typography>
              <Typography
                fontSize={14}
                sx={{ color: exp.id === activeStep ? 'lightgray' : 'gray' }}
              >
                {exp.position}
              </Typography>
            </StepLabel>
          </Step>
        ))}
      </Stepper>
      <Divider orientation="vertical" sx={{ mx: 2 }} />
      <Box sx={{ flex: 5 }}>
        <MdxWrapper>
          {experience.find((e) => e.id === activeStep)?.description ?? ''}
        </MdxWrapper>
      </Box>
    </Box>
  );
};

type Experience = {
  id: number;
  company: string;
  icon: string;
  start: Date;
  finish: Date | null;
  position: string;
  description: ReactNode;
};

const experience: Experience[] = [
  {
    id: 0,
    company: 'AMS Bikes',
    start: new Date(2025, 8, 6),
    icon: '/experience/amsbikes.png',
    finish: null,
    position: "Project - Engineer's Thesis",
    description: <AmsBikes />,
  },
  {
    id: 1,
    company: 'Lublin University of Technology',
    icon: '/experience/pollub.png',
    start: new Date(2022, 9),
    finish: new Date(2026, 1),
    position: 'Engineering degree in Computer Science',
    description: <Pollub />,
  },
  {
    id: 2,
    company: 'ROMICO GmbH',
    icon: '/experience/romico.png',
    start: new Date(2025, 5),
    finish: null,
    position: 'React frontend and iOS Developer',
    description: <Romico />,
  },
];

export default ExperiencePage;
