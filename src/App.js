import { useEffect, useState } from "react";
import { NotificationsProvider } from "@mantine/notifications";
import {
  MantineProvider,
  ColorSchemeProvider,
  AppShell,
  Group,
} from "@mantine/core";
import { useHotkeys, useLocalStorage, useViewportSize } from "@mantine/hooks";
import { Routes, Route, useLocation } from "react-router-dom";
import { NavbarContainer, HeaderContainer } from "./Components";
import { useSelector } from "react-redux";
import Masterlist from "./Pages/Masterlist";
import {
  Auth,
  Events,
  Home,
  Documents,
} from "./Pages";
import {
  Abroad,
  BarangayAcceptance,
  BIRpattern,
  BuildingPermit,
  BurialAssistanceRelatives,
  BusinessClosure,
  BusinessClosurePSA,
  FourPsTransfery,
  TravelCertificate,
  WaterConnection,
} from "./BrgyFiles";

function App() {
  const [User, setUser] = useState(true);
  const { width } = useViewportSize();
  const show = useSelector((state) => state.navbar.show);

  const [colorScheme, setColorScheme] = useLocalStorage({
    key: "color-scheme",
    defaultValue: "dark",
  });

  const toggleColorScheme = () =>
    setColorScheme((current) => (current === "dark" ? "light" : "dark"));

  useHotkeys([["mod+J", () => toggleColorScheme()]]);

  function ScrollToTop() {
    const { pathname } = useLocation();
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

    return null;
  }

  const theme = {
    colorScheme,
    spacing: { xxs: 4, xs: 8, sm: 12, md: 16, lg: 24, xl: 32, xxl: 64 },
    colors: {
      darktheme: [
        "#00897B",
        "#05181C",
        "#0E1B23",
        "#060D12",
        "#78919C",
        "#14252F",
        "#587583",
        "#314792",
        "#B64834",
      ],
      lighttheme: [
        "#FFFFFF",
        "#E0F2F1",
        "#ECEFF1",
        "#607D8B",
        "#212121",
        "#6D81C1",
        "#CF8071",
      ],
    },
  };

  const RoutesNavigation = [
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "events",
      element: <Events />,
    },
    {
      path: "transactions",
      element: <Documents />,
    },
    {
      path: "masterlist",
      element: <Masterlist colorScheme={colorScheme} />,
    },
   
    {
      path: "4PsTransfery",
      element: <FourPsTransfery />,
    },
    {
      path: "BrgyAcceptance",
      element: <BarangayAcceptance />,
    },
    {
      path: "BusinessClosure",
      element: <BusinessClosure />,
    },
    {
      path: "BusinessClosurePSA",
      element: <BusinessClosurePSA />,
    },
    {
      path: "BurialAssistanceRelatives",
      element: <BurialAssistanceRelatives />,
    },
    {
      path: "BuildingPermit",
      element: <BuildingPermit />,
    },
    {
      path: "TravelCertificate",
      element: <TravelCertificate />,
    },
    {
      path: "CertificateAbroad",
      element: <Abroad/>,
    },
    {
      path: "CertificateBirPattern",
      element: <BIRpattern/>,
    },
    {
      path: "CertificateWaterConnection",
      element: <WaterConnection/>,
    },
  ];

  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider theme={theme} withGlobalStyles withNormalizeCSS>
        <NotificationsProvider position="bottom-left">
          {User ? (
            <AppShell
              styles={{
                main: {
                  background:
                    theme.colorScheme === "dark"
                      ? theme.colors.darktheme[2]
                      : theme.colors.lighttheme[1],
                },
              }}
              navbarOffsetBreakpoint="sm"
              navbar={<NavbarContainer />}
              header={<HeaderContainer />}
            >
              <Group
                sx={(theme) => ({
                  background:
                    theme.colorScheme === "dark"
                      ? theme.colors.darktheme[2]
                      : theme.colors.lighttheme[2],
                  padding: `0 0.5rem`,
                  marginTop: `5.5rem`,
                  width: `${show && width > 765 ? `auto` : `100%`}`,
                  marginLeft: `${show && width > 765 ? `265px` : `none`}`,
                })}
              >
                <ScrollToTop />
                <Routes>
                  {RoutesNavigation.map(({ path, element }, index) => (
                    <Route key={index} path={path} element={element} />
                  ))}
                </Routes>
              </Group>
            </AppShell>
          ) : (
            <Auth />
          )}
        </NotificationsProvider>
      </MantineProvider>
    </ColorSchemeProvider>
  );
}

export default App;
