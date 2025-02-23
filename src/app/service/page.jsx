"use client";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import Navbar from "../../components/Navbar";
import SubscriptionInfo from "../../components/SubscriptionInfo";
import CompanyInfo from "../../components/CompanyInfo";
import QuickActions from "../../components/QuickActions";
import ProjectList from "../../components/ProjectList";
import Footer from "../../components/Footer";
import NewProjectComponent from "../../components/NewProjectComponent";
import { setProjects, startDownload, finishDownload, deleteProject } from "../../store/projectsSlice";

function MainComponent() {
    const router = useRouter();
    const dispatch = useDispatch();
    const [showNewProject, setShowNewProject] = useState(false);
    const { projects, downloadingReportId } = useSelector((state) => state.projects);

    const [userInfo] = useState({
        email: "user@company.com",
        companyName: "Company Inc",
        subscription: "Pro Plan",
        nextBilling: "2025-02-01",
        projectLimit: 30,
        projectsUsed: 12,
    });

    useEffect(() => {
        const mockProjects = [
            {
                id: "1",
                name: "Frontend Developer",
                position_name: "Senior React Developer",
                cv_count: 12,
                created_at: "2025-01-15T10:30:00.000Z",
                status: "completed",
                reports: [
                    {
                        id: "101",
                        file: "BUM_Rejected after interview_Титова Дарья.pdf",
                        overallScore: 85,
                        generalComment: "Кандидат имеет значительный опыт...",
                        fitPosition: "Подходящий",
                        relevanceExperience: 90,
                        skillsMatch: 80,
                        industryExperience: 85,
                        culturalFit: 75,
                    },
                ],
            },
            {
                id: "2",
                name: "Backend Developer",
                position_name: "Senior Node.js Developer",
                cv_count: 8,
                created_at: "2025-01-18T14:45:00.000Z",
                status: "completed",
                reports: [
                    {
                        id: "102",
                        file: "Backend_Resume_Analysis_Иванов Иван.pdf",
                        overallScore: 78,
                        generalComment: "Кандидат имеет уверенные знания в Node.js...",
                        fitPosition: "Средне подходящий",
                        relevanceExperience: 85,
                        skillsMatch: 80,
                        industryExperience: 75,
                        culturalFit: 70,
                    },
                ],
            },
        ];

        const fetchProjects = async () => {
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve(mockProjects);
                }, 500);
            });
        };

        fetchProjects().then((data) => dispatch(setProjects(data)));
    }, [dispatch]);

    const handleViewProject = (project) => {
        localStorage.setItem("selectedProject", JSON.stringify(project));
        router.push(`/report/${project.id}`);
    };

    const handleDownloadReport = (report) => {
        dispatch(startDownload());
        setTimeout(() => {
            const blob = new Blob(["Отчёт скачан"], { type: "application/pdf" });
            const link = document.createElement("a");
            link.href = URL.createObjectURL(blob);
            link.download = report.file;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            dispatch(finishDownload());
        }, 1000);
    };

    const handleDeleteReport = (project) => {
        dispatch(deleteProject(project.id));
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
                    handleDeleteReport={handleDeleteReport}
                    downloadingReportId={downloadingReportId}
                    setShowNewProject={setShowNewProject}
                />
            </main>

            <NewProjectComponent isOpen={showNewProject} onClose={() => setShowNewProject(false)} />
            <Footer />
        </div>
    );
}

export default MainComponent;
