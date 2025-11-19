"use client";
import Link from "next/link";
import React from "react";

import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import HomeFilledIcon from "@mui/icons-material/HomeFilled";
import EmojiPeopleIcon from "@mui/icons-material/EmojiPeople";
import AdsClickIcon from "@mui/icons-material/AdsClick";
import LocalMallIcon from "@mui/icons-material/LocalMall";

const Menu = () => {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      {/* <Divider /> */}
      <List>
        {[
          { id: 1, nome: "Home", link: "home", icon: <HomeFilledIcon /> },
          {
            id: 2,
            nome: "Quem Somos",
            link: "quemsomos",
            icon: <EmojiPeopleIcon />,
          },
          {
            id: 3,
            nome: "Nossa Missão",
            link: "nossamissao",
            icon: <AdsClickIcon />,
          },
          {
            id: 4,
            nome: "Produtos",
            link: "produtos",
            icon: <LocalMallIcon />,
          },
        ].map(({ id, nome, link, icon }) => (
          <ListItem key={link} disablePadding>
            <ListItemButton>
              <ListItemIcon>{icon}</ListItemIcon>
              <ListItemText primary={nome} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <Link className="link" href="/">
        Home
      </Link>
      <Link className="link" href="#quemsomos">
        Quem Somos
      </Link>
      <Link className="link" href="#nossamissao">
        Nossa Missão
      </Link>
      <Link className="link" href="#produtos">
        Produtos
      </Link>
      <div id="button__hamburguer" className="sm:hidden fixed mr-3 mt-3">
        <Button onClick={toggleDrawer(true)}>
          <MenuIcon className="text-white" sx={{ fontSize: 40 }} />
        </Button>
      </div>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </>
  );
};

export default Menu;
