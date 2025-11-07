export type TeamMember = {
  name: string;
  role: string;
  bio?: string;
  avatar: string;
};

export const team: TeamMember[] = [
  {
    name: "Jaydeep Prajapati",
    role: "Product Manager",
    bio: "Aligns agent roadmaps with strategic milestones and measurable product impact.",
    avatar: "https://api.dicebear.com/7.x/identicon/svg?seed=Jaydeep%20Prajapati"
  },
  {
    name: "Tanay Anand",
    role: "Machine Learning Engineer",
    bio: "Designs adaptive models that power autonomous decision loops.",
    avatar: "https://api.dicebear.com/7.x/identicon/svg?seed=Tanay%20Anand"
  },
  {
    name: "Devang Shrivastav",
    role: "Machine Learning Engineer",
    bio: "Builds resilient learning systems tuned for production-grade performance.",
    avatar: "https://api.dicebear.com/7.x/identicon/svg?seed=Devang%20Shrivastav"
  },
  {
    name: "Dev Agarwal",
    role: "Machine Learning Engineer",
    bio: "Architects inference pipelines that connect research breakthroughs to enterprise deployments.",
    avatar: "https://api.dicebear.com/7.x/identicon/svg?seed=Dev%20Agarwal"
  },
  {
    name: "Aditya Narayan",
    role: "Agentic Workflows Developer",
    bio: "Fuses agents with operational automation to orchestrate measurable workflows.",
    avatar: "https://api.dicebear.com/7.x/identicon/svg?seed=Aditya%20Narayan"
  }
];
