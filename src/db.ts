
export interface AuthorType {
  name: string;
  username: string;
}

export interface CommmentType {
  author: AuthorType;
  comment: string;
}

export interface ItemType {
  id: number;
  name: string;
  upvotes: string;
  comments: CommmentType[];
  description: string;
  tag: string;
}

let items: Array<ItemType> = [
  {
    id: 1,
    name: "Add Tags for solutions",
    upvotes: "112",
    comments: [
      {
        author: {
          name: 'Elijah Wood',
          username: 'hexagon_betagon'
        },
        comment: 'Hold your ground! Hold your ground! Sons of Gondor, of Rohan, my brothers,. I see in your eyes the same fear that would take the heart'
      },
    ],
    description: "Easier to search for solutions based on a specific stack",
    tag: "enhancement",
  },
  {
    id: 2,
    name: "Add a dark theme option",
    upvotes: "99",
    comments: [
      {
        author: {
          name: 'Elon Musk',
          username: 'to_the_moon'
        },
        comment: 'When something is important enough, you do it even if the odds are not in your favor.'
      },
    ],
    description:
      "It would help people with light sensitivities and who prefer dark mode",
    tag: "feature",
  },
  {
    id: 3,
    name: "Q&A within the challenge hubs",
    upvotes: "65",
    comments: [
      {
        author: {
          name: 'Jeff Bezos',
          username: 'Amazillo'
        },
        comment: 'I think frugality drives innovation, just like other constraints do. One of the only ways to get out of a tight box is to invent your way out'
      },
    ],
    description: "Challenge specific Q&A would make for easy reference",
    tag: "feature",
  },
  {
    id: 4,
    name: "Add image/video upload to feedback",
    upvotes: "51",
    comments: [
      {
        author: {
          name: 'Eljish Moss',
          username: 'hexagon_betagon'
        },
        comment: 'Alsp,,.....'
      },
    ],    description: "Images and screencasts can enhance comments on solutions",
    tag: "enhancement",
  },
  {
    id: 5,
    name: "Add credentials",
    upvotes: "33",
    comments: [
      {
        author: {
          name: 'Eljish Moss',
          username: 'hexagon_betagon'
        },
        comment: 'Alsp,,.....'
      },
    ],    description: "Implement OIDC",
    tag: "bug",
  },  
  {
    id: 6,
    name: "Add feature to connect with customer support",
    upvotes: "11",
    comments: [
      {
        author: {
          name: 'Jeff Bezos',
          username: 'Amazillo'
        },
        comment: 'I think frugality drives innovation, just like other constraints do. One of the only ways to get out of a tight box is to invent your way out'
      },
    ],    description: "Customer support ",
    tag: "ui",
  },
];

export { items };
