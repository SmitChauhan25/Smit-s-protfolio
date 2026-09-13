import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PageLayout from './components/PageLayout';
import Home from './pages/Home';
import MyWork from './pages/MyWork';
import Education from './pages/Education';
import Experience from './pages/Experience';
import Contact from './pages/Contact';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageLayout />}>
          <Route index element={<Home />} />
          <Route path="experience" element={<Experience />} />
          <Route path="work" element={<MyWork />} />
          <Route path="education" element={<Education />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
