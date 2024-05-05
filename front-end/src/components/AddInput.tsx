import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

export default function ButtonAppBar() {
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
                    onClick={() => {
                        console.log('Adicionar tarefa')
                    }}
                >
                    ADD
                </Button>
            </Grid>
        </Grid>
    </Box>
  );
}