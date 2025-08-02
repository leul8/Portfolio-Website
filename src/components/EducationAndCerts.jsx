import React from "react";
import CloudBackground from "./CloudBackground";
import UniversityLogo from "../assets/aaulogo.png";
import ciscologo from "../assets/ciscologo.jpeg";
import oraclelogo from "../assets/oraclelogo.jpeg";
import CS50xlogo from "../assets/CS50xlogo.png";
import genailogo from "../assets/generativeailogo.jpeg";
import SAAlogo from "../assets/SAAlogo.jpeg";
import azurelogo from "../assets/azurelogo.jpeg";

const EducationAndCerts = () => {
  const education = [
    {
      degree: "BSc in Information Systems",
      institution: "Addis Ababa University",
      year: "Expected 2026",
      logo: UniversityLogo,
      link: "https://www.aau.edu.et",
    },
  ];

  const certifications = [
    {
      title: "AWS Certified Solutions Architect - Associate",
      issuer: "Amazon Web Services",
      year: "2025",
      logo: SAAlogo,
      link: "https://www.credly.com/badges/2667974d-2739-4a77-ac0a-1903014bb325",
    },
    {
      title: "Network Addressing and Basic Troubleshooting",
      issuer: "Cisco",
      year: "2025",
      logo: ciscologo,
      link: "https://www.credly.com/badges/198313bb-54a0-4295-9bd8-13f6db11c158",
    },
    {
      title: "Oracle Cloud Infrastructure Foundations 2021 Certified Associate",
      issuer: "Oracle University",
      year: "2025",
      logo: oraclelogo,
      link: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=85129A2AB799D2FC960F5FA9E3E2F5E6AEB1B4FBDB11A38BFD9C9B57BFC14AFE",
    },
    {
      title: "CS50: Introduction to Computer Science",
      issuer: "Harvard University",
      year: "2025",
      logo: CS50xlogo,
      link: "https://certificates.cs50.io/dee1fa1f-e44a-4e84-ae57-71e6a83bbcad.png?size=letter",
    },
    {
      title: "Career Essentials in Generative AI by Microsoft and LinkedIn",
      issuer: "Microsoft",
      year: "2024",
      logo: genailogo,
      link: "https://www.linkedin.com/learning/certificates/f85f0883474c6c968e08b035d18674db882d1292b6a9a9efae5b6b9f8267abd7?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BF0j3AgAWSnOBIAOQR4ZW3g%3D%3D",
    },
    {
      title: "Microsoft Certified: Azure Fundamentals",
      issuer: "Microsoft",
      year: "2024",
      logo: azurelogo,
      link: "https://skillsoft.digitalbadges.skillsoft.com/e5733b20-ad76-4e92-b67c-86c13f045421",
    },
  ];

  return (
    <section
      id="education"
      className="relative overflow-hidden bg-white dark:bg-gray-900 py-20 px-5 md:px-20"
    >

      <div className="relative z-10 container mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white text-center mb-12">
          Education & Certifications
        </h2>

        {/* Education */}
        <div className="mb-12">
          <h3 className="text-3xl font-semibold text-gray-800 dark:text-gray-300 mb-6">
            Education
          </h3>
          <ul className="space-y-6">
            {education.map((edu, index) => (
              <li
                key={index}
                className="hover:scale-105 hover:rotate-2 transition-all transform duration-300 ease-in-out shadow-lg p-6 rounded-lg bg-gray-50 dark:bg-gray-800 hover:bg-blue-100 dark:hover:bg-blue-900 cursor-pointer"
              >
                <a
                  href={edu.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4"
                >
                  <img
                    src={edu.logo}
                    alt={`${edu.institution} logo`}
                    className="w-16 h-16 object-contain"
                  />
                  <div>
                    <p className="text-xl font-bold text-gray-900 dark:text-white">
                      {edu.degree}
                    </p>
                    <p className="text-gray-600 dark:text-gray-400">
                      {edu.institution} ({edu.year})
                    </p>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Certifications */}
        <div>
          <h3 className="text-3xl font-semibold text-gray-800 dark:text-gray-300 mb-6">
            Certifications
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="flex-shrink-0 p-6 shadow-lg rounded-lg bg-gray-50 dark:bg-gray-800 hover:bg-blue-100 dark:hover:bg-blue-900 cursor-pointer transform transition-all duration-500 ease-in-out hover:scale-105 hover:rotate-2"
              >
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4"
                >
                  <img
                    src={cert.logo}
                    alt={`${cert.issuer} logo`}
                    className="w-16 h-16 object-contain"
                  />
                  <div>
                    <p className="text-xl font-bold text-gray-900 dark:text-white">
                      {cert.title}
                    </p>
                    <p className="text-gray-600 dark:text-gray-400">
                      {cert.issuer} ({cert.year})
                    </p>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationAndCerts;
