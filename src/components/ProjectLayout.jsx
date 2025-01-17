import { Container } from '@mui/material';
import { useLocation, Outlet } from 'react-router-dom';
import RelatedProjects from './RelatedProjects';

export default function ProjectLayout() {
  const location = useLocation();
  const projectRoute = location.pathname.split('/projects/')[1];
  
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Outlet />
      <RelatedProjects projectRoute={projectRoute} />
    </Container>
  );
}
