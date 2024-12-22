import React, { useEffect, useState } from 'react';
import { Table, TableBody, TableCell, TableHead, TableRow, Paper, Container, Pagination, Typography, CircularProgress } from '@mui/material';
import api from '../services/api';

const UserList = () => {
    const [users, setUsers] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchUsers = async () => {
            setLoading(true);
            setError('');
            try {
                const token = localStorage.getItem('auth_token');
                if (!token) {
                    window.location.href = '/login';
                    return;
                }
                const response = await api.get(`/users?page=${currentPage}`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                setUsers(response.data.data);
                setTotalPages(response.data.meta.last_page);
            } catch (error) {
                setError('Failed to fetch users');
            } finally {
                setLoading(false);
            }
        };

        fetchUsers();
    }, [currentPage]);

    const handlePageChange = (event, value) => {
        setCurrentPage(value);
    };

    return (
        <Container>
            <Paper>
                {loading && <CircularProgress />}
                {error && <Typography color="error">{error}</Typography>}
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell>Name</TableCell>
                            <TableCell>Email</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {users.map((user) => (
                            <TableRow key={user.id}>
                                <TableCell>{user.id}</TableCell>
                                <TableCell>{user.name}</TableCell>
                                <TableCell>{user.email}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Paper>
            <Pagination
                count={totalPages}
                page={currentPage}
                onChange={handlePageChange}
                color="primary"
                style={{ marginTop: '20px', display: 'flex', justifyContent: 'center' }}
            />
        </Container>
    );
};

export default UserList;
