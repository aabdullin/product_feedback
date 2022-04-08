export interface ItemType {
  name: string;
  upvotes: string;
  comments: string;
  description: string;
  tag: string;
}

let items: Array<ItemType> = [
  {
    name: "Add Tags for solutions",
    upvotes: "112",
    comments: "2",
    description: "Easier to search for solutions based on a specific stack",
    tag: "enhancement",
  },
  {
    name: "Add a dark theme option",
    upvotes: "99",
    comments: "4",
    description:
      "It would help people with light sensitivities and who prefer dark mode",
    tag: "feature",
  },
  {
    name: "Q&A within the challenge hubs",
    upvotes: "65",
    comments: "1",
    description: "Challenge specific Q&A would make for easy reference",
    tag: "feature",
  },
  {
    name: "Add image/video upload to feedback",
    upvotes: "51",
    comments: "2",
    description: "Images and screencasts can enhance comments on solutions",
    tag: "enhancement",
  },
  {
    name: "Add credentials",
    upvotes: "33",
    comments: "4",
    description: "Implement OIDC",
    tag: "bug",
  },  
  {
    name: "Add feature to connect with customer support",
    upvotes: "11",
    comments: "14",
    description: "Customer support ",
    tag: "ui",
  },
];

export { items };
