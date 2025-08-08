import React from 'react';
import Link from 'next/link';

interface FontBreadcrumbProps {
  currentPage?: string;
  selectedFont?: string;
}

const FontBreadcrumb: React.FC<FontBreadcrumbProps> = ({ 
  currentPage = "Font Chữ Đám Cưới",
  selectedFont 
}) => {
  return (
    <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-6" aria-label="Breadcrumb">
      <Link 
        href="/" 
        className="hover:text-pink-600 transition-colors flex items-center"
        aria-label="Trang chủ"
      >
        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
        </svg>
        Trang chủ
      </Link>
      <span className="text-gray-400">/</span>
      <Link 
        href="/font-chu" 
        className="hover:text-pink-600 transition-colors"
        aria-label="Font chữ đám cưới"
      >
        Font Chữ Đám Cưới
      </Link>
      {selectedFont && (
        <>
          <span className="text-gray-400">/</span>
          <span className="text-pink-600 font-medium" aria-current="page">
            {selectedFont}
          </span>
        </>
      )}
      {currentPage !== "Font Chữ Đám Cưới" && !selectedFont && (
        <>
          <span className="text-gray-400">/</span>
          <span className="text-pink-600 font-medium" aria-current="page">
            {currentPage}
          </span>
        </>
      )}
    </nav>
  );
};

export default FontBreadcrumb; 