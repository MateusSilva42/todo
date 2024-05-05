import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { IconButton, Typography } from '@mui/material';
import Icon from '@mdi/react';
import { mdiTrashCan } from '@mdi/js';
import Divider from '@mui/material/Divider';

export default function ButtonAppBar() {
  return (
    <>
        <Box sx={{ flexGrow: 1, padding: '5px 15px' }}>
            <Grid container sx={{display: 'flex', alignItems: 'center'}}>
                <Grid item xs={11}>
                    <Typography variant="body1" component="h1" gutterBottom>
                        Tarefa marota
                    </Typography>
                </Grid>
                <Grid item xs={1}>
                    <IconButton
                        aria-label="remove task"
                        sx={{color: 'red'}}
                        onClick={() => {
                            console.log('Deletar Tarefa')
                        }}
                    >
                        <Icon path={mdiTrashCan} size={1} />
                    </IconButton>
                </Grid>
            </Grid>
        </Box>
    <Divider sx={{width:'95%', margin: 'auto'}} />
    </>
  );
}