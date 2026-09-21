import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { JournalPage } from './pages/JournalPage';
import { ContactPage } from './pages/ContactPage';

import { ServiceDetailModal } from './components/ServiceDetailModal';
import { ProjectDetailModal } from './components/ProjectDetailModal';
import { ArticleDetailModal } from './components/ArticleDetailModal';
import { ProjectInquiryModal } from './components/ProjectInquiryModal';

import type { Service, Project, Article } from './data/studioData';

export function App() {
  const [activePage, setActivePage] = useState<string>('home');

  // Modals state
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [isInquiryOpen, setIsInquiryOpen] = useState<boolean>(false);
  const [inquiryServiceTitle, setInquiryServiceTitle] = useState<string>('');

  const handleOpenInquiry = (serviceTitle: string = '') => {
    setInquiryServiceTitle(serviceTitle);
    setIsInquiryOpen(true);
  };

  const renderCurrentPage = () => {
    switch (activePage) {
      case 'home':
        return (
          <HomePage
            setActivePage={setActivePage}
            onSelectService={setSelectedService}
            onSelectProject={setSelectedProject}
            onSelectArticle={setSelectedArticle}
            onOpenInquiry={() => handleOpenInquiry()}
          />
        );
      case 'about':
        return (
          <AboutPage
            onOpenInquiry={() => handleOpenInquiry()}
          />
        );
      case 'services':
        return (
          <ServicesPage
            onSelectService={setSelectedService}
            onOpenInquiry={() => handleOpenInquiry()}
          />
        );
      case 'projects':
        return (
          <ProjectsPage
            onSelectProject={setSelectedProject}
            onOpenInquiry={() => handleOpenInquiry()}
          />
        );
      case 'journal':
        return (
          <JournalPage
            onSelectArticle={setSelectedArticle}
          />
        );
      case 'contact':
        return <ContactPage />;
      default:
        return (
          <HomePage
            setActivePage={setActivePage}
            onSelectService={setSelectedService}
            onSelectProject={setSelectedProject}
            onSelectArticle={setSelectedArticle}
            onOpenInquiry={() => handleOpenInquiry()}
          />
        );
    }
  };

  return (
    <div className="bg-white min-h-screen text-[#181818] flex flex-col justify-between selection:bg-[#1468a2] selection:text-white">
      {/* Global Navigation Header */}
      <Navbar
        activePage={activePage}
        setActivePage={setActivePage}
        onOpenInquiry={() => handleOpenInquiry()}
      />

      {/* Main Page View */}
      <main className="flex-grow">
        {renderCurrentPage()}
      </main>

      {/* Global Footer */}
      <Footer
        setActivePage={setActivePage}
        onOpenInquiry={() => handleOpenInquiry()}
      />

      {/* Floating WhatsApp Action Button */}
      <FloatingWhatsApp />

      {/* Global Interactive Modals */}
      <ServiceDetailModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onOpenInquiryForService={(title) => handleOpenInquiry(title)}
      />

      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onOpenInquiry={() => handleOpenInquiry()}
      />

      <ArticleDetailModal
        article={selectedArticle}
        onClose={() => setSelectedArticle(null)}
        onOpenInquiry={() => handleOpenInquiry()}
      />

      <ProjectInquiryModal
        isOpen={isInquiryOpen}
        onClose={() => setIsInquiryOpen(false)}
        preselectedService={inquiryServiceTitle}
      />
    </div>
  );
}

export default App;
