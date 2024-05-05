import './App.css'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import HeaderBar from './components/Header'
import AddInput from './components/AddInput'
import TaskItem from './components/TaskItem'

function App() {
  return (
    <Box 
      display={'flex'}
      justifyContent={'center'}
      alignItems={'center'}
      height={'100vh'}
      width={'100vw'}
    >
      <Box 
        width={'30%'}
        maxWidth={'100vw'} 
        margin={'auto'} 
       >
        <Grid container direction="column" spacing={2}>
          <Grid item>
            <HeaderBar />
            <AddInput />
          </Grid>
          <Grid item>
            <Box 
              sx={{backgroundColor: '#d3d3d3', borderRadius: '20px'}} 
              overflow={'auto'} 
              maxHeight={'50vh'}
            >
              <TaskItem />
              <TaskItem />
              <TaskItem />
              <TaskItem />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  )
}

export default App