export interface ROUTES_DATA {
  HOME: string;
  CONTACT_US: string;
  ABOUT: string;
  LOGIN: string;
  CLIENTS: string;
  FACEBOOK: string;
  GOOGLE: string;
  NETFLIX: string;
  NOT_FOUND: string;
}

export const ROUTES: ROUTES_DATA = {
  HOME: "/",
  CONTACT_US: "/contactUs",
  ABOUT: "/about",
  LOGIN: "/login",
  CLIENTS: "/clients",
  FACEBOOK: "/clients/facebook",
  GOOGLE: "/clients/google",
  NETFLIX: "/clients/netflix",
  NOT_FOUND: "*",
};

export enum NAVIGATION_MENU_ROUTES {
  Home = "/",
  Clients = "/clients",
  "Contact Us" = "/contactUs",
  About = "/about",
  Login = "/login",
  Homework13 = "/homework13"
}
