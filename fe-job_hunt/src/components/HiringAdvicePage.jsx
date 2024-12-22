import React from 'react';
import {
    Box,
    Typography,
    Card,
    CardContent,
    Grid,
} from '@mui/material';

function HiringAdvice() {
   
    const adviceList = [
        {
            title: 'Craft a Clear Job Description',
            content:
                'A well-defined job description attracts the right candidates. Include key responsibilities, required skills, and a brief overview of your company culture.',
        },
        {
            title: 'Use Social Media for Recruitment',
            content:
                'Social media platforms like LinkedIn and Facebook can help you reach a wider audience. Leverage these tools to find talent quickly.',
        },
        {
            title: 'Streamline the Interview Process',
            content:
                'Lengthy hiring processes can deter candidates. Ensure your process is efficient while assessing the most critical skills.',
        },
        {
            title: 'Focus on Company Culture Fit',
            content:
                'Skills can be taught, but cultural fit is crucial. Look for candidates who align with your values and mission.',
        },
        {
            title: 'Invest in Employer Branding',
            content:
                'A strong employer brand attracts top talent. Showcase your company’s strengths, employee testimonials, and achievements.',
        },
    ];

    return (
        <Box sx={{ padding: 3 }}>
            <Typography variant="h4" gutterBottom>
                Hiring Advice
            </Typography>
            <Typography variant="body1" gutterBottom>
                Explore our expert tips to streamline your hiring process and find the perfect candidates for your team.
            </Typography>
            <Grid container spacing={3}>
                {adviceList.map((advice, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <Card sx={{ height: '100%' }}>
                            <CardContent>
                                <Typography variant="h6" gutterBottom>
                                    {advice.title}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {advice.content}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}

export default HiringAdvice;
