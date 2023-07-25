import React from "react";
import { Box, Typography, Divider, Menu, MenuItem, ListItemIcon } from "@mui/material";
import { CheckCircle, KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material";
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';

const languages = [{ name: 'English', code: 'en' }, { name: 'عربى', code: 'ar' }];

export default function LanguageDropdown() {
  const { t, i18n } = useTranslation();
  const router = useRouter();
  const [selected, setSelected] = React.useState(languages[0]);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  React.useEffect(() => {
    const { locale } = router;
    const selectedLanguage = languages.find(lang => lang.code === locale);
    setSelected(selectedLanguage || languages[0]);
  }, [router]);


  const handleLanguageChange = (language) => {
    setSelected(language);

    // Get the language code based on the selected language name
    const langCode = language.code;
    router.push(router.pathname, router.asPath, { locale: langCode }).then(() => {
      // After the page reloads, reset the language in i18n
      i18n.changeLanguage(language.code);
    });

    handleClose();
  };

  return (

    <>
      <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center', cursor: "pointer" }}
        onClick={handleClick}
        aria-controls={open ? 'language-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}>

        <Typography variant='body1' sx={{ mr: 2 }}>
          {selected.name}
        </Typography>
        {open ? (<KeyboardArrowUp/>): (<KeyboardArrowDown/>)}

      </Box> 
      <Menu
        anchorEl={anchorEl}
        id="language-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
         {languages.map((language, i) => [
          i > 0 && <Divider key={`divider-${i}`} />,
          <MenuItem key={`item-${i}`} onClick={() => handleLanguageChange(language)}>
            {selected.name === language.name ? (
              <ListItemIcon>
                <CheckCircle />
              </ListItemIcon>
            ) : (
              <ListItemIcon></ListItemIcon>
            )}
            {language.name}
          </MenuItem>
        ])}
      </Menu>
    </>


  );
}
