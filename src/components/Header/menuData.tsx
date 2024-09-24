import { Menu } from "@/types/menu";
import { ABOUT, CONTACT_US, HOME, NEWS } from "@/texts";

const menuData: Menu[] = [
  {
    id: 1,
    title: HOME,
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: ABOUT,
    path: "/about",
    newTab: false,
  },
  {
    id: 33,
    title: NEWS,
    path: "/blog",
    newTab: false,
  },
  {
    id: 3,
    title: CONTACT_US,
    path: "/contact",
    newTab: false,
  },
  {
    id: 4,
    title: "Pages",
    newTab: false,
    submenu: [
      {
        id: 43,
        title: "Blog Grid Page",
        path: "/blog",
        newTab: false,
      },
      {
        id: 44,
        title: "Blog Sidebar Page",
        path: "/blog-sidebar",
        newTab: false,
      },
      {
        id: 45,
        title: "Blog Details Page",
        path: "/blog-details",
        newTab: false,
      },
    ],
  },
];
export default menuData;
