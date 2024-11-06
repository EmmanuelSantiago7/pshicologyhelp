// src/components/Resources.js
import React from 'react';
import { FaBook, FaVideo, FaRegFileAlt } from 'react-icons/fa';

const resources = [
  { type: 'Artículo', title: 'Manejo del Estrés para Jóvenes', link: 'https://example.com/stress-management', icon: <FaBook /> },
  { type: 'Video', title: 'Técnicas de Respiración', link: 'https://example.com/breathing-techniques', icon: <FaVideo /> },
  { type: 'Guía', title: 'Mindfulness para Principiantes', link: 'https://example.com/mindfulness-guide', icon: <FaRegFileAlt /> },
  // Agrega más recursos aquí
];

function Resources() {
  return (
    <div className="p-8 bg-gradient-to-b from-blue-500 to-blue-300 min-h-screen">
      <h1 className="text-3xl font-extrabold text-white text-center mb-8">Recursos de Bienestar</h1>
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        {resources.map((resource, index) => (
          <a
            key={index}
            href={resource.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block p-6 bg-white rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-200"
          >
            <div className="flex items-center mb-4 text-blue-500">
              <div className="text-2xl mr-3">{resource.icon}</div>
              <p className="text-lg font-semibold">{resource.type}</p>
            </div>
            <p className="text-gray-700">{resource.title}</p>
          </a>
        ))}
      </div>
    </div>
  );
}

export default Resources;
