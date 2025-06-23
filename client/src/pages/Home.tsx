import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Stack
} from '@mui/material';
import {
  CalendarMonth as CalendarIcon,
  People as PeopleIcon,
  Notifications as NotificationsIcon,
  MusicNote as MusicNoteIcon
} from '@mui/icons-material';

const Home: React.FC = () => {
  return (
    <Container maxWidth="lg">
      {/* Hero Section */}
      <Box 
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: 'center',
          justifyContent: 'space-between',
          my: 8,
          gap: 4
        }}
      >
        <Box sx={{ maxWidth: { md: '50%' } }}>
          <Typography
            variant="h2"
            component="h1"
            fontWeight="bold"
            gutterBottom
          >
            Simplify Your Band Rehearsals
          </Typography>
          <Typography
            variant="h5"
            color="text.secondary"
            paragraph
            sx={{ mb: 4 }}
          >
            Coordinate schedules, track attendance, and optimize your practice time with our easy-to-use rehearsal management platform.
          </Typography>
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={2}
          >
            <Button
              variant="contained"
              color="primary"
              size="large"
              component={RouterLink}
              to="/register"
            >
              Get Started
            </Button>
            <Button
              variant="outlined"
              color="primary"
              size="large"
              component={RouterLink}
              to="/login"
            >
              Sign In
            </Button>
          </Stack>
        </Box>
        <Box
          sx={{
            maxWidth: { xs: '100%', md: '50%' },
            height: 'auto'
          }}
        >
          <img
            src="https://via.placeholder.com/600x400/4F46E5/FFFFFF?text=Rehearsal+Scheduler"
            alt="Rehearsal Scheduler App"
            style={{ width: '100%', borderRadius: '12px', boxShadow: '0 10px 25px rgba(0,0,0,0.1)' }}
          />
        </Box>
      </Box>

      {/* Features Section */}
      <Box sx={{ my: 8 }}>
        <Typography
          variant="h3"
          component="h2"
          align="center"
          fontWeight="bold"
          gutterBottom
          sx={{ mb: 6 }}
        >
          Key Features
        </Typography>
        
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={3}>
            <Card sx={{ height: '100%', borderRadius: 4, boxShadow: 2 }}>
              <Box sx={{ p: 2, display: 'flex', justifyContent: 'center' }}>
                <CalendarIcon sx={{ fontSize: 60, color: 'primary.main' }} />
              </Box>
              <CardContent>
                <Typography gutterBottom variant="h5" component="h3" align="center">
                  Smart Scheduling
                </Typography>
                <Typography align="center">
                  Automatically find optimal rehearsal times based on everyone's availability.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          
          <Grid item xs={12} sm={6} md={3}>
            <Card sx={{ height: '100%', borderRadius: 4, boxShadow: 2 }}>
              <Box sx={{ p: 2, display: 'flex', justifyContent: 'center' }}>
                <PeopleIcon sx={{ fontSize: 60, color: 'primary.main' }} />
              </Box>
              <CardContent>
                <Typography gutterBottom variant="h5" component="h3" align="center">
                  Attendance Tracking
                </Typography>
                <Typography align="center">
                  Keep track of who's coming to rehearsals with simple RSVP functionality.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          
          <Grid item xs={12} sm={6} md={3}>
            <Card sx={{ height: '100%', borderRadius: 4, boxShadow: 2 }}>
              <Box sx={{ p: 2, display: 'flex', justifyContent: 'center' }}>
                <NotificationsIcon sx={{ fontSize: 60, color: 'primary.main' }} />
              </Box>
              <CardContent>
                <Typography gutterBottom variant="h5" component="h3" align="center">
                  Automated Reminders
                </Typography>
                <Typography align="center">
                  Never miss a rehearsal with timely notifications and email reminders.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          
          <Grid item xs={12} sm={6} md={3}>
            <Card sx={{ height: '100%', borderRadius: 4, boxShadow: 2 }}>
              <Box sx={{ p: 2, display: 'flex', justifyContent: 'center' }}>
                <MusicNoteIcon sx={{ fontSize: 60, color: 'primary.main' }} />
              </Box>
              <CardContent>
                <Typography gutterBottom variant="h5" component="h3" align="center">
                  Resource Sharing
                </Typography>
                <Typography align="center">
                  Share sheet music, recordings, and setlists with all band members.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>

      {/* Call to Action */}
      <Box
        sx={{
          backgroundColor: 'primary.main',
          borderRadius: 4,
          p: 6,
          my: 8,
          color: 'white',
          textAlign: 'center',
          boxShadow: 3
        }}
      >
        <Typography variant="h4" component="h2" gutterBottom>
          Ready to streamline your rehearsals?
        </Typography>
        <Typography variant="h6" paragraph>
          Join thousands of musicians who are saving time and improving their practice sessions.
        </Typography>
        <Button
          variant="contained"
          color="secondary"
          size="large"
          component={RouterLink}
          to="/register"
          sx={{ mt: 2 }}
        >
          Sign Up for Free
        </Button>
      </Box>
    </Container>
  );
};

export default Home;