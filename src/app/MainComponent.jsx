"use client";
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import SubscriptionInfo from "../components/SubscriptionInfo";
import CompanyInfo from "../components/CompanyInfo";
import QuickActions from "../components/QuickActions";
import ProjectList from "../components/ProjectList";
import Footer from "../components/Footer";
import NewProjectComponent from "../components/NewProjectComponent";

function MainComponent() {
  const [showNewProject, setShowNewProject] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);

  const [projects, setProjects] = useState([
    {
      name: "Frontend Developer",
      position_name: "Senior React Developer",
      cv_count: 12,
      created_at: "2025-01-15T10:30:00.000Z",
      status: "completed",
    },
  ]);

  const [userInfo] = useState({
    email: "user@company.com",
    companyName: "Company Inc",
    subscription: "Pro Plan",
    nextBilling: "2025-02-01",
    projectLimit: 30,
    projectsUsed: 12,
  });

  const handleViewProject = (project) => {
    console.log("Просмотр проекта:", project.name);
  };

  const handleDownloadReport = (project) => {
    console.log("Скачивание отчета:", project.name);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar userInfo={userInfo} />

      <main className="max-w-7xl mx-auto py-6 px-4 pt-20">
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <SubscriptionInfo userInfo={userInfo} />
          <CompanyInfo userInfo={userInfo} />
          <QuickActions setShowNewProject={setShowNewProject} />
        </div>

        <ProjectList
          projects={projects}
          handleViewProject={handleViewProject}
          handleDownloadReport={handleDownloadReport}
          isDownloading={isDownloading}
        />
      </main>

      <NewProjectComponent isOpen={showNewProject} onClose={() => setShowNewProject(false)} />
      <Footer />
    </div>
  );
}

export default MainComponent;
