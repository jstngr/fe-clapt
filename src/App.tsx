import { Routes, Route } from 'react-router-dom'
import { AppShell, Container } from '@mantine/core'

function App() {
  return (
    <AppShell>
      <Container size="lg">
        <Routes>
          <Route path="/" element={<div>Welcome to Clapt</div>} />
        </Routes>
      </Container>
    </AppShell>
  )
}

export default App 