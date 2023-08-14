export const DialogStyles = {
  dialog: {
    style: {
      background: '#282a3a',
    },
  },
  dialogTitle: {
    display: 'flex',
    justifyContent: 'end',
    alignItems: 'center',
    color: '#fff',
  },
  dialogContent: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    color: '#fff',
    fontFamily: 'Istok Web',
    fontWeight: 700,
    textTransform: 'none',
  },
  dialogContentChildren: {
    container: {
      display: 'flex',
      flexDirection: 'column',
      gap: '20px',
    },
    textField: {
        style: {
          backgroundColor: '#fff',
          borderRadius: '10px',
        },
    },
    buttonStyles: {
      padding: '8px',
      '&:hover': {
        background: '#C69749',
      },
    },
  },
};
