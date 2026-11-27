export interface Project {
  id: string;
  title: string;
  thumbnail: string;
  techStacks: string[];
  links: {
    live?: string;
    github?: string;
    blog?: string;
  };
  featured?: boolean;
}
