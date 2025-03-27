

export type MenuItem = {
  id: number;
  link: string;
  title: string;  // Use 'title' here to match the property in NavbarMenu
};

export const NavbarMenu: MenuItem[] = [
  {
    id: 1, 
    title: "Home",
    link: "home"
  },
  {
    id: 2, 
    title: "Members",
    link: "members"
  },
  {
    id: 3, 
    title: "Payment",
    link: "#"
  },
  {
    id: 4, 
    title: "Plans",
    link: "#"
  },
  {
    id: 5,  
    title: "Gallery",
    link: "#"
  },
  {
    id: 6,  
    title: "Contact",
    link: "#"
  },
];



