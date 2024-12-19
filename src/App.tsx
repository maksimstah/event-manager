import 'react-toastify/dist/ReactToastify.css';
import { lazy } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SharedLayout from './shared/SharedLayout';

const HomePage = lazy(() => import('./pages/Home'));
const AddEventPage = lazy(() => import('./pages/AddEventPage'));
const EventPage = lazy(() => import('./pages/EventPage'));
const NotFound = lazy(() => import('./pages/NotFound'));

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index path="/" element={<HomePage />} />
          <Route path="events/:eventID" element={<EventPage />} />
          <Route path="/create-event" element={<AddEventPage />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
