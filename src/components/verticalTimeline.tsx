import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { StepIcon } from '@mui/material';

const steps = [
    {
        year: "2018",
        projects: [
            {
                name: 'Select campaign settings',
                description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Cras ac orci sit amet dolor ultrices imperdiet ut dignissim dolor. 
                Quisque eu risus et massa tempus tristique. Sed non elit non justo 
                vestibulum imperdiet. In hac habitasse platea dictumst. Vivamus sem 
                mauris, gravida vel interdum eu, convallis ut ante. Donec eget gravida 
                libero. Nullam et iaculis dui. Class aptent taciti sociosqu ad litora 
                torquent per conubia nostra, per inceptos himenaeos. Curabitur 
                interdum velit ac felis dictum, ac facilisis ex molestie.`,
            }
        ]
    },
    {
        year: "2019",
        projects: [
            {
                name: 'Select campaign settings',
                description: `Integer lobortis eget ipsum quis vulputate. Suspendisse libero 
                lacus, posuere eget vestibulum sed, luctus id quam. Morbi scelerisque rhoncus 
                nunc, quis consectetur turpis euismod nec. Nullam sagittis malesuada diam ut 
                cursus. Mauris sed neque vel massa hendrerit volutpat. Donec scelerisque 
                placerat fermentum. Etiam mattis nisl et erat blandit, eu interdum quam 
                pellentesque. Curabitur congue turpis tincidunt elit convallis, et efficitur 
                ante congue. Interdum et malesuada fames ac ante ipsum primis in faucibus. 
                Vivamus orci velit, convallis nec mi non, sagittis pretium lacus. Cras diam 
                lectus, euismod nec tempor nec, eleifend vitae dui. Fusce sed aliquam augue. 
                Aenean sollicitudin feugiat metus ac tincidunt. In commodo sed augue auctor cursus.`,
            }
        ]
    },
    {
        year: "2020",
        projects: [
            {
                name: 'Select campaign settings',
                description: `For each ad campaign that you create, you can control how much
                  you're willing to spend on clicks and conversions, which networks
                  and geographical locations you want your ads to show on, and more.`,
            }
        ]
    },
    {
        year: "2021",
        projects: [
            {
                name: 'Select campaign settings',
                description: `Proin ultrices a turpis eu vestibulum. Nam risus sapien, 
                consectetur non ex id, malesuada euismod elit. Nunc ut tincidunt dui. 
                Mauris dictum, mi vitae hendrerit elementum, urna leo rutrum metus, 
                id finibus ligula nulla a ipsum. Pellentesque porttitor et turpis ac 
                sodales. Sed a ex blandit, finibus turpis nec, tincidunt erat. Morbi 
                lacinia ornare urna, vitae sodales sapien vestibulum a. Integer at 
                pretium risus. Vestibulum ante ipsum primis in faucibus orci luctus 
                et ultrices posuere cubilia curae; Cras pretium lacus vitae ipsum 
                consectetur, vitae congue urna rhoncus. Maecenas in nunc a nibh mollis 
                faucibus ac sed erat. Quisque viverra tellus vel eleifend porta. Etiam 
                lobortis, nulla placerat vehicula porta, nisl metus sodales neque, id 
                laoreet diam tellus quis ligula. Nam id nisl quis erat varius mattis.`,
            }
        ]
    },
    {
        year: "2022",
        projects: [
            {
                name: 'Select campaign settings',
                description: `Phasellus eleifend vel nisl nec sodales. Fusce in elit quis 
                nunc imperdiet congue. Integer lobortis laoreet mattis. Donec ac gravida 
                nisl, eu iaculis diam. Aliquam imperdiet, ligula nec fermentum pharetra, 
                ipsum dui dapibus magna, volutpat gravida ligula dui eget tellus. Aliquam 
                vitae pulvinar lectus, a imperdiet lectus. Phasellus gravida posuere sem, 
                vel pellentesque nisl commodo quis. Donec vitae mauris pellentesque, 
                ultricies elit ut, viverra dui. Sed tincidunt tristique sodales. Nunc 
                et egestas magna, a facilisis nisi. Nulla nec massa augue. Proin et 
                nibh nulla. Suspendisse potenti. Nam sapien tellus, gravida eu mollis 
                sed, tempor sed nisl.`,
            }
        ]
    },
    {
        year: "2023",
        projects: [
            {
                name: 'Select campaign settings',
                description: `Aenean blandit efficitur quam sed ullamcorper. Morbi fringilla 
                lobortis sapien, sed faucibus lorem facilisis at. Curabitur ac sem nulla. 
                Nullam pellentesque quis enim vel tincidunt. Phasellus vitae congue lacus. 
                Vivamus non ultrices nunc. Mauris tincidunt, metus sit amet sodales interdum, 
                ipsum ipsum luctus enim, tristique luctus nunc magna ac ex. Cras consectetur, 
                mi eu dignissim vestibulum, quam felis dignissim mi, a faucibus libero libero 
                non mi. Nullam id ante varius dui porta ultrices vel eget felis`,
            }
        ]
    },
];

export default function VerticalLinearStepper() {
    const [activeStep, setActiveStep] = React.useState(0);

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    return (
        <>
            <Stepper activeStep={activeStep} orientation="vertical">
                {steps.map((step, index) => (
                    <Step key={step.year} onClick={() => setActiveStep(index)} sx={{ ":hover": { "cursor": "pointer" } }}>
                        <StepLabel
                            StepIconProps={{ icon: "" }}
                            StepIconComponent={(props) => (
                                <StepIcon
                                    {...props}
                                    icon={props.icon}
                                    active={props.active}
                                    completed={false}
                                />
                            )}  >
                            {
                                index === activeStep ?
                                    (<Typography
                                        variant="h2" sx={{
                                            fontSize: { xs: 16, sm: 28 },
                                            display: 'flex',
                                            fontFamily: 'monospace',
                                            fontWeight: 300,
                                            letterSpacing: '.025rem',
                                            color: 'white',
                                            textDecoration: 'none',
                                        }}>
                                        {step.year}
                                    </Typography>
                                    ) : (<Typography
                                        variant="h2" sx={{
                                            fontSize: { xs: 14, sm: 20 },
                                            display: 'flex',
                                            fontFamily: 'monospace',
                                            fontWeight: 300,
                                            letterSpacing: '.025rem',
                                            color: 'white',
                                            textDecoration: 'none',
                                        }}>
                                        {step.year}
                                    </Typography>

                                    )
                            }
                        </StepLabel>
                        <StepContent>
                            <Typography>{step.projects[0].description}</Typography>
                            <Box sx={{ mb: 2 }}>
                                <div>
                                    <Button
                                        variant="contained"
                                        onClick={handleNext}
                                        sx={{ mt: 1, mr: 1 }}
                                    >
                                        {index === steps.length - 1 ? 'Finish' : 'Continue'}
                                    </Button>
                                    <Button
                                        disabled={index === 0}
                                        onClick={handleBack}
                                        sx={{ mt: 1, mr: 1 }}
                                    >
                                        Back
                                    </Button>
                                </div>
                            </Box>
                        </StepContent>
                    </Step>
                ))}
            </Stepper>
        </>
    );
}