import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PageLayout from './components/PageLayout';
import Home from './pages/Home';
import MyWork from './pages/MyWork';
import Education from './pages/Education';
import Contact from './pages/Contact';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageLayout />}>
          <Route index element={<Home />} />
          <Route path="work" element={<MyWork />} />
          <Route path="education" element={<Education />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
