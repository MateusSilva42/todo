import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { IconButton, Typography } from '@mui/material';
import Icon from '@mdi/react';
import { mdiTrashCan } from '@mdi/js';
import Divider from '@mui/material/Divider';
import api from '../../api';
import Snackbar from '@mui/material/Snackbar';
import { SnackbarCloseReason } from '@mui/material/Snackbar';
import { useState } from 'react';

interface taskItemProps {
    taskId: string,
    task: string,
    createdAt: string
    onTaskRemoved: () => void;
}

export default function taskItem({task, taskId, createdAt, onTaskRemoved}: taskItemProps) {
    const [open, setOpen] = useState<boolean>(false);

    const handleClose = (_: React.SyntheticEvent | Event, reason: SnackbarCloseReason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    const deleteTask = async () => {
        try {
            const createdEncoded = encodeURIComponent(createdAt)

            const response = await api.delete(`/tasks/${taskId}/${createdEncoded}`)
            console.log('Tarefa deletada', response.data)
            setOpen(true)
            onTaskRemoved()
        } catch (error) {
            console.error('Erro ao deletar tarefa', error)
        }
    }


  return (
    <>
        <Box sx={{ flexGrow: 1, padding: '5px 15px' }}>
            <Grid container sx={{display: 'flex', alignItems: 'center'}}>
                <Grid item xs={11}>
                    <Typography variant="body1" component="h1" gutterBottom>
                        {task}
                    </Typography>
                </Grid>
                <Grid item xs={1}>
                    <IconButton
                        aria-label="remove task"
                        sx={{color: 'red'}}
                        onClick={() => {
                            deleteTask()
                        }}
                    >
                        <Icon path={mdiTrashCan} size={1} />
                    </IconButton>
                </Grid>
            </Grid>
            <Snackbar
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                open={open}
                onClose={handleClose}
                message="Tarefa removida com sucesso!"
                autoHideDuration={2500}
            />
        </Box>
    <Divider sx={{width:'95%', margin: 'auto'}} />
    </>
  );
}