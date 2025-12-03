export interface BlogPost {
  slug: string;
  title: string;
  author: string;
  date: string;
  image: string;
  excerpt: string;
  content: {
    type: 'paragraph' | 'heading' | 'list';
    text: string | string[];
  }[];
}

export const blogPosts = [
    {
      slug: "beyond-china-plus-one-why-india-is-the-new-foreign-investment-hotspot",
      title: "blog2Title",
      author: "Shri Rahul Mishra",
      date: "2025-11-25T00:00:00.000Z",
      image: "blog-post-2",
      excerpt: "blog2Excerpt",
      content: [
        {
          type: 'paragraph',
          text: 'blog2Para1'
        },
        {
          type: 'heading',
          text: 'blog2Heading1'
        },
        {
          type: 'paragraph',
          text: 'blog2Para2'
        },
        {
          type: 'heading',
          text: 'blog2Heading2'
        },
        {
          type: 'list',
          text: ['blog2List1', 'blog2List2', 'blog2List3']
        },
        {
          type: 'heading',
          text: 'blog2Heading3'
        },
        {
          type: 'paragraph',
          text: 'blog2Para3'
        }
      ]
    },
    {
      slug: "navigating-the-indian-market-a-guide-for-investors",
      title: "blog1Title",
      author: "Shri Rahul Mishra",
      date: "2025-11-25T00:00:00.000Z",
      image: "blog-post-1",
      excerpt: "blog1Excerpt",
      content: [
          {
            type: 'paragraph',
            text: 'blog1Para1'
          },
          {
            type: 'heading',
            text: 'blog1Heading1'
          },
          {
            type: 'paragraph',
            text: 'blog1Para2'
          },
          {
            type: 'heading',
            text: 'blog1Heading2'
          },
          {
            type: 'paragraph',
            text: 'blog1Para3'
          },
          {
            type: 'list',
            text: [ "blog1List1", "blog1List2", "blog1List3"]
          },
          {
            type: 'heading',
            text: 'blog1Heading3'
          },
          {
            type: 'paragraph',
            text: 'blog1Para4'
          }
        ]
    }
  ];
  
