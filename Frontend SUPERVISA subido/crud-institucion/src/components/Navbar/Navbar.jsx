import React, { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import {
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Box,
  useMediaQuery,
  useTheme,
  ListItemIcon,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";

import AssignmentIcon from "@mui/icons-material/Assignment";
import ListAltIcon from "@mui/icons-material/ListAlt";
import BarChartIcon from "@mui/icons-material/BarChart";
import LogoutIcon from "@mui/icons-material/Logout";

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
  drawerPaper: {
    width: 240,
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: "flex-start",
  },
}));

export default function Navbar() {
  const classes = useStyles();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const location = useLocation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const navigate = useNavigate();

  // 🔹 Rutas donde NO se mostrará el navbar
  const hideNavbarRoutes = ["/", "/login"];
  if (hideNavbarRoutes.includes(location.pathname)) {
    return null;
  }

  // 🔹 Validar token al montar y en cada cambio de ruta
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login?expired=true", { replace: true });
    }

    // 🔹 Escuchar cambios de token desde otras pestañas
    const handleStorageChange = (event) => {
      if (event.key === "token" && !event.newValue) {
        navigate("/login?expired=true", { replace: true });
      }
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, [location.pathname, navigate]);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("usuario");

    // 🔹 Disparar evento manual para que otras pestañas cierren sesión
    window.dispatchEvent(
      new StorageEvent("storage", { key: "token", newValue: null })
    );

    navigate("/login?expired=true", { replace: true });
  };

  const menuItems = [
    { text: "Contratos", icon: <AssignmentIcon />, path: "/contratos" },
    { text: "Obligaciones", icon: <ListAltIcon />, path: "/obligaciones" },
    { text: "Reportes", icon: <BarChartIcon />, path: "/reportes" },
  ];

  const drawer = (
    <Box sx={{ width: 240 }} role="presentation">
      <div className={classes.drawerHeader}>
        <IconButton onClick={handleDrawerToggle}>
          <ChevronLeftIcon />
        </IconButton>
      </div>
      <List>
        {menuItems.map((item) => (
          <ListItem
            button
            component={Link}
            to={item.path}
            key={item.text}
            onClick={() => setDrawerOpen(false)}
          >
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
        <ListItem button onClick={handleLogout}>
          <ListItemIcon>
            <LogoutIcon />
          </ListItemIcon>
          <ListItemText primary="Cerrar Sesión" />
        </ListItem>
      </List>
    </Box>
  );

  return (
    <>
      <AppBar position="fixed" sx={{ zIndex: theme.zIndex.drawer + 1 }}>
        <Toolbar className={classes.toolbar}>
          <Typography variant="h6" className={classes.title}>
            Sistema de Gestión
          </Typography>

          <IconButton
            edge="end"
            color="inherit"
            aria-label="menu"
            onClick={handleDrawerToggle}
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <nav>
        <Drawer
          anchor="right"
          open={drawerOpen}
          onClose={handleDrawerToggle}
          variant={isMobile ? "temporary" : "temporary"}
          ModalProps={{
            keepMounted: true,
          }}
          classes={{ paper: classes.drawerPaper }}
        >
          {drawer}
        </Drawer>
      </nav>

      <Box component="main" sx={{ flexGrow: 1, p: 3, mt: 8 }}>
        <div className={classes.toolbar} />
      </Box>
    </>
  );
}