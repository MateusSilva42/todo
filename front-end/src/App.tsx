import './App.css'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import HeaderBar from './components/Header'
import AddInput from './components/AddInput'
import TaskItem from './components/TaskItem'
import api from '../api'
import { useState, useEffect } from 'react'

type Task = {
  title: string,
  id: string,
  createdAt: string
}

function App() {
  const [tasks, setTasks] = useState<Task[]>([])

  const getTasks = async() => {
    try {
      const response = await api.get('/tasks')
      setTasks(response.data)
      console.log('Tarefas', response.data)
    }catch(error: unknown){
      console.error('Erro ao buscar tarefas', error)
    }
  }

  useEffect(() => {
    getTasks();
  }, []);

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
            <AddInput onTaskAdded={getTasks} />
          </Grid>
          <Grid item>
            <Box 
              sx={{backgroundColor: '#d3d3d3', borderRadius: '20px'}} 
              overflow={'auto'} 
              maxHeight={'50vh'}
            >
              {tasks.map((task) => (
              <TaskItem task={task.title} taskId={task.id} createdAt={task.createdAt} onTaskRemoved={getTasks}/>
              ))}
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  )
}

export default App