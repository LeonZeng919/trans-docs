import React from "react";
import { DocsThemeConfig, useConfig } from "nextra-theme-docs";
import { useRouter } from "next/router";

const config: DocsThemeConfig = {
  logo: (
    <span>
      <b>TransDocs</b>
    </span>
  ),
  footer: {
    text: (
      <div className="flex w-full flex-col items-center sm:items-start">
        <p className="mt-6 text-xs">
          © {new Date().getFullYear()} Trans Docs.
        </p>
      </div>
    ),
  },
  feedback: { content: null },
  editLink: {
    component: null,
  },
  head: () => {
    const { asPath, defaultLocale, locale } = useRouter();
    const { frontMatter } = useConfig();
    // const url =
    //   "https://my-app.com" +
    //   (defaultLocale === locale ? asPath : `/${locale}${asPath}`);

    return (
      <>
        {/* <meta property="og:url" content={url} /> */}
        <meta property="og:title" content={frontMatter.title || "TransDocs"} />
        <meta
          property="og:description"
          content={frontMatter.description || "TransDocs 最新最佳的翻译文档"}
        />
      </>
    );
  },
  useNextSeoProps() {
    const { asPath } = useRouter();
    console.log(asPath);
    if (asPath !== "/") {
      return {
        titleTemplate: "%s – TransDocs",
      };
    }
  },
  toc: {
    backToTop: true,
  },
};

export default config;
