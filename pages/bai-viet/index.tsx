import { useState } from "react";
import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { trimText } from "../../utils/helper";
import styles from "../../styles/blog.module.css";

import DefaultLayout from "../../components/layout/DefaultLayout";
import PaginatedPosts from "../../components/common/PaginatedPosts";
import BlogStats from "../../components/common/BlogStats";

import { formatPosts, readPostsFromDb } from "../../lib/utils";
import { PostDetail } from "../../utils/types";

type MetaData = {
  title: string;
  description: string;
  keywords: string;
  author: string;
  robots: string;
  canonical: string;
  og: {
    title: string;
    description: string;
    type: string;
    image: string;
    imageWidth: string;
    imageHeight: string;
    url: string;
    siteName: string;
  };
  twitter: {
    card: string;
    title: string;
    description: string;
    image: string;
  };
};

type Props = {
  posts: PostDetail[];
  meta: MetaData;
};

const Blogs: NextPage<Props> = ({ posts, meta }) => {
  const postsPerPage = 12;

  // Structured data for Blog page
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Bài viết về Font chữ - Eco Bắc Giang",
    url: "https://ecobacgiang.vn/bai-viet",
    publisher: {
      "@type": "Organization",
      name: "Eco Bắc Giang",
      url: "https://ecobacgiang.vn",
      logo: {
        "@type": "ImageObject",
        url: "https://ecobacgiang.vn/logo.png",
        width: "200",
        height: "60",
      },
    },

  };

  const formatDate = (date: string): string =>
    new Date(date).toLocaleDateString("vi-VN", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });

  return (
    <DefaultLayout>
     
      <div className="min-h-screen bg-gradient-to-br from-pink-50 via-pink-100 to-pink-200">
        {/* Hero Section */}
        <div className="relative bg-gradient-to-r from-pink-600 to-pink-700 text-white py-16">
          <div className="absolute inset-0 bg-black opacity-20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-3xl md:text-5xl font-bold mb-6">
                Bài viết - Tin tức
              </h1>
              <p className="text-xl md:text-2xl text-pink-100 max-w-3xl mx-auto">
                Khám phá kiến thức, mẹo sử dụng và các bộ sưu tập font chữ Việt hóa đẹp cho thiết kế thiệp cưới, backdrop, và decor.
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Breadcrumb */}
          <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-8">
            <Link href="/" className="hover:text-pink-600 transition-colors">
              Trang chủ
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-pink-600 font-medium">Bài viết Font chữ</span>
          </nav>

          {/* All Posts Section */}
          <section>
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold text-gray-900">
                Tất Cả Bài Viết
              </h2>
              <div className="text-sm text-gray-600">
                {posts.length} bài viết
              </div>
            </div>
            <PaginatedPosts posts={posts} postsPerPage={postsPerPage} />
          </section>
        </div>
      </div>
    </DefaultLayout>
  );
};

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  try {
    const limit = 50;
    const posts = await readPostsFromDb(limit, 0);
    const formattedPosts = formatPosts(posts);

    const meta: MetaData = {
      title: "Bài viết Font chữ Việt hóa - Thiết kế Thiệp cưới & Decor | Eco Bắc Giang",
      description:
        "Khám phá bộ sưu tập font chữ Việt hóa đẹp, mẹo sử dụng font cho thiệp cưới, backdrop, và decor. Tìm hiểu cách chọn font chữ phù hợp để thiết kế chuyên nghiệp, sáng tạo, và miễn phí.",
      keywords:
        "font chữ Việt hóa, font thiệp cưới, font wedding, font chữ đẹp, font backdrop, font decor, mẹo thiết kế font, font chữ miễn phí, typography Việt hóa, Eco Bắc Giang",
      author: "Eco Bắc Giang",
      robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
      canonical: "https://ecobacgiang.vn/bai-viet",
      og: {
        title: "Font chữ Việt hóa - Bài viết Thiết kế Thiệp cưới & Decor",
        description:
          "Tìm hiểu mẹo sử dụng font chữ Việt hóa cho thiệp cưới, backdrop, và decor. Xem các bài viết về typography sáng tạo và tải font miễn phí tại Eco Bắc Giang.",
        type: "website",
        image: "https://ecobacgiang.vn/images/og-font-blog.jpg",
        imageWidth: "1200",
        imageHeight: "630",
        url: "https://ecobacgiang.vn/bai-viet",
        siteName: "Eco Bắc Giang",
      },
      twitter: {
        card: "summary_large_image",
        title: "Font chữ Việt hóa - Bài viết Thiết kế Thiệp cưới & Decor",
        description:
          "Khám phá bài viết về font chữ Việt hóa cho thiệp cưới, backdrop, và decor. Tải font miễn phí và mẹo thiết kế tại Eco Bắc Giang.",
        image: "https://ecobacgiang.vn/images/og-font-blog.jpg",
      },
    };

    return {
      props: {
        posts: formattedPosts,
        meta,
      },
    };
  } catch (error) {
    console.error(error);
    return { notFound: true };
  }
};

export default Blogs;