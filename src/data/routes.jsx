import { Route } from "react-router-dom";

// Data
import config from "./config";

// Layouts
import { MainLayout, AuthLayout } from "../layouts";

// Main Views
import {
  // UI Components
  Components,
  // Main
  BasicWalletView,
  DashboardView,
  NewWalletView,
  SpecialWalletView,
  LyoView,
  LfiView,
  MobileWalletView,
  OtherWalletsView,
  SendView,
  WithdrawView,
  RedirectView,
  // Auth Views
  LoginView,
  TermsAndConditionsView,
  AuthRedirect,
  LoginCodeView,
  HistoryView,
  // Generic
  MaintenanceView,
} from "../views";

// Icons
import {
  DashboardIcon,
  WalletIcon,
  OldWalletIcon,
  SpecialWalletIcon,
  LyoIcon,
  LfiIcon,
  OurProductsIcon,
  SupportIcon,
  IconHistory,
} from "../assets/svgComponets";

const routes = {
  redirect: {
    path: "/",
    routes: {
      redirect: {
        path: "redirect",
        element: <RedirectView />,
        title: "Redirect",
        icon: null,
      },
    },
  },
  auth: {
    path: "/auth",
    element: <AuthLayout />,
    title: "Auth",
    routes: {
      login: {
        path: "/login",
        element: <LoginView />,
        title: "Login",
        icon: null,
      },
      termsAndConditions: {
        path: "/terms-and-conditions",
        element: <TermsAndConditionsView />,
        title: "2fa",
        icon: null,
      },
      loginCode: {
        path: "/login-code",
        element: <LoginCodeView />,
        title: "Login Code",
        icon: null,
      },
      authRedirect: {
        path: "/redirect",
        element: <AuthRedirect />,
        title: "Redirect",
        icon: null,
      },
    },
  },
  main: {
    path: "/",
    element: <MainLayout />,
    title: "Main",
    routes: {
      components: {
        path: "components",
        element: <Components />,
        title: "Components",
        icon: null,
        comingSoon: !config?.DEBUG_MODE,
      },
      dashboard: {
        path: "", // TODO: change it
        element: <DashboardView />,
        title: "Dashboard",
        icon: <DashboardIcon />,
      },
      newWallet: {
        path: "new-wallets",
        element: <NewWalletView />,
        title: "New Wallets",
        icon: <WalletIcon />,
      },
      oldWallet: {
        path: "old-assets",
        element: <></>,
        title: "Old Assets",
        icon: <OldWalletIcon />,
        routes: {
          basicWallet: {
            path: "/basic-wallet",
            element: <BasicWalletView />,
            title: "Basic Wallets",
            icon: null,
          },
          mobileNode: {
            path: "/mobile-node-and-splitbox",
            element: <MobileWalletView />,
            title: "Mobile node and Splitbox",
            icon: null,
          },
          otherWallets: {
            path: "/other-wallets",
            element: <OtherWalletsView />,
            title: "Other Wallets",
            icon: null,
          },
        },
      },
      specialWallet: {
        path: "special-wallets",
        element: <SpecialWalletView />,
        title: "Special Wallets",
        icon: <SpecialWalletIcon />,
      },
      send: {
        path: "send-to-new-wallet",
        element: <SendView />,
        title: "Send to new wallet",
        icon: null,
      },
      withdraw: {
        path: "withdraw",
        element: <WithdrawView />,
        title: "Withdraw",
        icon: null,
      },
      lyo: {
        path: "lyo",
        element: <LyoView />,
        title: "LYO",
        icon: <LyoIcon />,
        comingSoon: true,
      },
      lfi: {
        path: "lfi",
        element: <LfiView />,
        title: "LFI",
        icon: <LfiIcon />,
        comingSoon: true,
      },
      history: {
        path: "history",
        element: <HistoryView />,
        title: "History",
        icon: <IconHistory />,
      },
      ourProducts: {
        path: "our-products",
        element: <></>,
        title: "Our Products",
        icon: <OurProductsIcon />,
        routes: {
          farmingPools: {
            title: "Farming Pools",
            icon: null,
            normalLink: true,
            link: "",
            comingSoon: true,
          },
          phoneMinting: {
            title: "LFi Phone Minting",
            icon: null,
            normalLink: true,
            link: "",
            comingSoon: true,
          },
          cloudMinting: {
            title: "Cloud Minting",
            icon: null,
            normalLink: true,
            link: "",
            comingSoon: true,
          },
          quantwise: {
            title: "Quantwise",
            icon: null,
            normalLink: true,
            link: "",
            comingSoon: true,
          },
          travelVouchers: {
            title: "Travel Vouchers",
            icon: null,
            normalLink: true,
            link: "",
            comingSoon: true,
          },
          cryptobull: {
            title: "Cryptobull",
            icon: null,
            normalLink: true,
            link: "",
            comingSoon: true,
          },
          invoices: {
            title: "Invoices",
            icon: null,
            normalLink: true,
            link: "",
            comingSoon: true,
          },
          keyActivationLicenses: {
            title: "Key Activation Licenses",
            icon: null,
            normalLink: true,
            link: "",
            comingSoon: true,
          },
          smartstake: {
            title: "Smartstake",
            icon: null,
            normalLink: true,
            link: "",
            comingSoon: true,
          },
        },
      },
      support: {
        title: "Support",
        icon: <SupportIcon />,
        normalLink: true,
        link: config.SUPPORT_LINK,
      },
    },
  },
  generic: {
    path: "/generic",
    routes: {
      maintenance: {
        path: "/maintenance",
        element: <MaintenanceView />,
        title: "Login",
        icon: null,
      },
    },
  },
};

function generatePaths(routes, parentPath = "") {
  const paths = {};
  Object.entries(routes).forEach(([routeName, route]) => {
    if (route.routes) {
      paths[routeName] = generatePaths(route.routes, parentPath + route.path);
    } else {
      paths[routeName] = parentPath + route.path;
    }
  });
  return paths;
}

function generateRouteComponents(routes, parentPath = "") {
  if (parentPath === "") {
    return Object.keys(routes).map((routeName, index) => {
      return (
        <Route key={index} element={routes[routeName].element}>
          {generateRouteComponents(
            routes[routeName].routes,
            routes[routeName].path
          )}
        </Route>
      );
    });
  } else {
    const views = [];

    Object.keys(routes).forEach((routeName, index) => {
      if (!routes[routeName].comingSoon) {
        views.push(
          <Route
            key={index}
            path={parentPath + routes[routeName].path}
            element={routes[routeName].element}
          />
        );
      }

      if (routes[routeName].routes) {
        views.push(
          generateRouteComponents(
            routes[routeName].routes,
            parentPath + routes[routeName].path
          )
        );
      }
    });
    return views;
  }
}

const sidebarCategories = [
  {
    id: "dashboard",
    categoryTitle: "dashboard",
    showInSideBar: false,
    routes: [routes.main.routes.dashboard],
  },
  {
    id: "asset",
    categoryTitle: "My Asset",
    showInSideBar: true,
    routes: [routes.main.routes.newWallet, routes.main.routes.oldWallet],
  },
  {
    id: "rewards",
    categoryTitle: "Rewards",
    showInSideBar: true,
    routes: [routes.main.routes.specialWallet],
  },
  {
    id: "launchpad",
    categoryTitle: "Launchpad",
    showInSideBar: true,
    routes: [routes.main.routes.lyo, routes.main.routes.lfi],
  },
  {
    id: "others",
    categoryTitle: "Others",
    showInSideBar: true,
    routes: [
      routes.main.routes.history,
      routes.main.routes.ourProducts,
      routes.main.routes.support,
    ],
  },
];

function generatePathsWithCategoriesForSidebar(sidebarCategories) {
  const paths = {};
  sidebarCategories.forEach((category) => {
    paths[category.id] = {
      showInSideBar: category.showInSideBar,
      categoryTitle: category.categoryTitle,
      routes: category.routes,
    };
  });
  return paths;
}

const paths = generatePaths(routes);
const routeComponents = generateRouteComponents(routes);
const sidebarRoutes = generatePathsWithCategoriesForSidebar(sidebarCategories);
export { routes, paths, routeComponents, sidebarRoutes };
