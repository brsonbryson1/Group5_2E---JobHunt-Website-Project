import React from 'react';
import {
    Box,
    TextField,
    Button,
    Checkbox,
    FormControlLabel,
    Typography,
    List,
    ListItem,
    ListItemText,
} from '@mui/material';

function JobSearchPage() {
    // Sample job data
    const jobs = [
        {
            title: 'Call Center Agent',
            company: 'TechnoDream Web Designs Inc.',
            location: 'Ayala Mall Cagayan de Oro City',
            salary: '₱18,000.00',
            type: 'Permanent',
            postedDate: '12/14/2024',
        },
        {
            title: 'Cashier',
            company: 'SuperMart Inc.',
            location: 'Gaisano Mall Cagayan de Oro City',
            salary: '₱15,000.00',
            type: 'Full-Time',
            postedDate: '12/13/2024',
        },
        {
            title: 'Software Developer',
            company: 'InnovaTech Solutions',
            location: 'Cagayan de Oro',
            salary: '₱35,000.00 - ₱50,000.00',
            type: 'Remote',
            postedDate: '12/12/2024',
        },
        {
            title: 'Accounting Assistant',
            company: 'Finance Corp.',
            location: 'Cagayan de Oro Mall',
            salary: '₱20,000.00',
            type: 'Full-Time',
            postedDate: '12/11/2024',
        },
        {
            title: 'Delivery Driver',
            company: 'Express Logistics',
            location: 'Tagoloan, Cagayan de Oro',
            salary: '₱12,000.00 + Incentives',
            type: 'Contract',
            postedDate: '12/10/2024',
        },
        {
            title: 'Nurse',
            company: 'City General Hospital',
            location: 'Cagayan de Oro',
            salary: '₱25,000.00',
            type: 'Permanent',
            postedDate: '12/09/2024',
        },
        {
            title: 'Teacher',
            company: 'Bright Future Academy',
            location: 'Tagoloan Schools',
            salary: '₱18,000.00',
            type: 'Full-Time',
            postedDate: '12/08/2024',
        },
        {
            title: 'Customer Service Representative',
            company: 'Global Solutions Ltd.',
            location: 'Cagayan de Oro',
            salary: '₱22,000.00',
            type: 'Full-Time',
            postedDate: '12/07/2024',
        },
        {
            title: 'IT Support Specialist',
            company: 'NextGen IT Services',
            location: 'Cagayan de Oro',
            salary: '₱28,000.00',
            type: 'Full-Time',
            postedDate: '12/06/2024',
        },
        {
            title: 'Marketing Assistant',
            company: 'BrandBoost Marketing',
            location: 'Cagayan de Oro',
            salary: '₱20,000.00',
            type: 'Part-Time',
            postedDate: '12/05/2024',
        },
    ];
    

    const topJobs = [
        'Call Center Agent',
        'Cashier',
        'Delivery Driver',
        'Customer Service Assistant',
        'Accounting Assistant',
        'Software Developer',
        'Nurse',
        'IT Support Specialist',
        'Marketing Assistant',
        'Teacher',
    ];

    return (
        <Box sx={{ display: 'flex', flexDirection: 'row', padding: 3, gap: 2 }}>
            {/* Left Section: Main Job Search and Listings */}
            <Box sx={{ flex: 3 }}>
                <Typography variant="h5" gutterBottom>
                    Find jobs here
                </Typography>
                <Typography variant="body2" gutterBottom>
                    You may search by position title, employer name, work location, education level, or course, etc.
                </Typography>
                {/* Search Bar */}
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, marginBottom: 2 }}>
                    <TextField
                        label="Search jobs"
                        variant="outlined"
                        fullWidth
                    />
                    <Button variant="contained" color="primary">
                        Search
                    </Button>
                </Box>
                {/* Filters */}
                <Box sx={{ display: 'flex', gap: 2, marginBottom: 3 }}>
                    <FormControlLabel control={<Checkbox />} label="PWDs" />
                    <FormControlLabel control={<Checkbox />} label="Displaced workers" />
                    <FormControlLabel control={<Checkbox />} label="High school graduates" />
                    <FormControlLabel control={<Checkbox />} label="Government jobs" />
                </Box>
                {/* Job Listings */}
                <Typography variant="h6" gutterBottom>
                    {jobs.length} Job Openings
                </Typography>
                <List>
                    {jobs.map((job, index) => (
                        <ListItem key={index} sx={{ padding: 2, border: '1px solid #ccc', borderRadius: 1, marginBottom: 2 }}>
                            <Box>
                                <Typography variant="h6" gutterBottom>
                                    {job.title}
                                </Typography>
                                <Typography variant="body2">
                                    {job.company} - {job.location}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {job.type} - Posted on {job.postedDate}
                                </Typography>
                                <Typography variant="body1" color="primary">
                                    {job.salary}
                                </Typography>
                            </Box>
                        </ListItem>
                    ))}
                </List>
            </Box>
            {/* Right Section: Sidebar */}
            <Box sx={{ flex: 1 }}>
                <Typography variant="h6" gutterBottom>
                    Top job openings
                </Typography>
                <List>
                    {topJobs.map((job, index) => (
                        <ListItem key={index}>
                            <ListItemText primary={job} />
                        </ListItem>
                    ))}
                </List>
            </Box>
        </Box>
    );
}

export default JobSearchPage;
