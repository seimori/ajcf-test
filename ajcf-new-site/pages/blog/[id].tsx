import { GetStaticPaths, GetStaticProps } from "next";
import React from "react";
import { ArticleContainer } from "../../components/Blog/BlogListComponents/ArticleContainer";
import { graphqlClient } from "../../lib/graphql/graphqlClient";
import { ArticlePreviewFragment, ArticlePageFragment } from "../../types/types";

type ArticleProps = {
  article?: ArticlePageFragment | null;
  articles: ArticlePreviewFragment[];
};

export default function Article({ article, articles }: ArticleProps) {
  if (!article) throw new Error("article not found");
  return <ArticleContainer article={article} articles={articles} />;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const articlesMetaResult = await graphqlClient.articlesMetaQuery();
  return {
    paths: articlesMetaResult.articles.map((article) => ({ params: { id: article.id } })) || [],
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<ArticleProps, { id: string }> = async ({ params }) => {
  const articlePageResult = await graphqlClient.articlePageQuery({ id: params?.id || "" });
  const articlesResult = await graphqlClient.articlesPreviewQuery();
  return {
    props: {
      article: articlePageResult.article,
      articles: articlesResult.articles,
    },
  };
};
