import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import api from '../../api';
import Snackbar from '@mui/material/Snackbar';
import  { SnackbarCloseReason } from '@mui/material/Snackbar';

export default function ButtonAppBar() {
    const [task, setTask] = useState<string>('');
    const [open, setOpen] = useState<boolean>(false);

const createTask = async () => {
    try {
        const response = await api.post('/tasks', {
            title: task,
        });
        console.log('Tarefa criada', response.data);
        setOpen(true);
        setTask('');
    } catch (error) {
        console.error('Erro ao criar tarefa', error);
    }
};

    const handleClose = (_: React.SyntheticEvent | Event, reason: SnackbarCloseReason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };
    return (
        <Box sx={{ flexGrow: 1, margin: '5px 5px', padding: '15px' }}>
            <Grid container>
                <Grid item xs={10}>
                    <TextField
                        id="new-task"
                        label="O que precisa ser feito hoje?"
                        variant="outlined"
                        fullWidth
                        sx={{ borderRadius: '5px 0px 0px 5px'}}
                        onChange={(e) => setTask(e.target.value)}
                        value={task}
                    />
                </Grid>
                <Grid item xs={1}>
                    <Button
                        variant="contained"
                        color="primary"
                        size="large"
                        sx={{ 
                            borderRadius: '0px 5px 5px 0px', 
                            padding: '0px', 
                            height: '100%', 
                            borderTopLeftRadius: '0px', 
                            borderBottomLeftRadius: '0px' 
                        }}
                        onClick={createTask}
                    >
                        ADD
                    </Button>
                </Grid>
            </Grid>
            <Snackbar
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                open={open}
                onClose={handleClose}
                message="Tarefa criada com sucesso!"
                autoHideDuration={2500}
            />
        </Box>
    );
}