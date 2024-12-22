// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Box, Typography, Card, CardContent, Grid, Paper } from '@mui/material';

function MarketInsights() {
    const insights = [
        {
            title: 'Market Trends in Tech',
            content: 'Learn about the latest market trends in the tech industry.',
        },
        {
            title: 'Understanding Consumer Behavior',
            content: 'Explore the shifts in consumer behavior in the digital age.',
        },
        {
            title: 'Economic Outlook for 2024',
            content: 'Get insights on what to expect in the global economy for 2024.',
        },
    ];

    return (
        <Box sx={{ padding: 3 }}>
            <Typography variant="h4" gutterBottom>
                Market Insights
            </Typography>
            <Typography variant="body1" gutterBottom>
                Stay ahead of the curve with expert market insights.
            </Typography>
            <Grid container spacing={3}>
                {insights.map((insight, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <Paper sx={{ padding: 2 }}>
                            <Card sx={{ height: '100%' }}>
                                <CardContent>
                                    <Typography variant="h6" gutterBottom>
                                        {insight.title}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {insight.content}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Paper>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}

export default MarketInsights;
