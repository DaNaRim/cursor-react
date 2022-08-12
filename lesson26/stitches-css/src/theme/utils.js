const utils = {
  p: (value) => ({
    padding: value
  }),
  pt: (value) => ({
    paddingTop: value
  }),
  pr: (value) => ({
    paddingRight: value
  }),
  pb: (value) => ({
    paddingBottom: value
  }),
  pl: (value) => ({
    paddingLeft: value
  }),
  px: (value) => ({
    paddingLeft: value,
    paddingRight: value
  }),
  py: (value) => ({
    paddingTop: value,
    paddingBottom: value
  }),

  m: (value) => ({
    margin: value
  }),
  mt: (value) => ({
    marginTop: value
  }),
  mr: (value) => ({
    marginRight: value
  }),
  mb: (value) => ({
    marginBottom: value
  }),
  ml: (value) => ({
    marginLeft: value
  }),
  mx: (value) => ({
    marginLeft: value,
    marginRight: value
  }),
  my: (value) => ({
    marginTop: value,
    marginBottom: value
  }),

  ta: (value) => ({textAlign: value}),

  fd: (value) => ({
    flexDirection: value
  }),
  fw: (value) => ({flexWrap: value}),

  ai: (value) => ({
    alignItems: value
  }),
  ac: (value) => ({
    alignContent: value
  }),
  jc: (value) => ({
    justifyContent: value
  }),
  as: (value) => ({alignSelf: value}),
  fg: (value) => ({flexGrow: value}),
  fs: (value) => ({
    flexShrink: value
  }),
  fb: (value) => ({flexBasis: value}),

  gta: (value) => ({
    gridTemplateAreas: value
  }),
  ga: (value) => ({gridArea: value}),
  gc: (value) => ({gridColumn: value}),
  gr: (value) => ({gridRow: value}),
  gtc: (value) => ({
    gridTemplateColumns: value
  }),
  gtr: (value) => ({
    gridTemplateRows: value
  }),
  gac: (value) => ({
    gridAutoColumns: value
  }),
  gar: (value) => ({
    gridAutoRows: value
  }),

  bc: (value) => ({
    backgroundColor: value
  }),

  br: (value) => ({
    borderRadius: value
  }),
  btrr: (value) => ({
    borderTopRightRadius: value
  }),
  bbrr: (value) => ({
    borderBottomRightRadius: value
  }),
  bblr: (value) => ({
    borderBottomLeftRadius: value
  }),
  btlr: (value) => ({
    borderTopLeftRadius: value
  }),

  bs: (value) => ({boxShadow: value}),

  lh: (value) => ({
    lineHeight: value
  }),

  ox: (value) => ({overflowX: value}),
  oy: (value) => ({overflowY: value}),

  pe: (value) => ({
    pointerEvents: value
  }),
  us: (value) => ({
    WebkitUserSelect: value,
    userSelect: value
  }),

  userSelect: (value) => ({
    WebkitUserSelect: value,
    userSelect: value
  }),

  size: (value) => ({
    width: value,
    height: value
  }),

  appearance: (value) => ({
    WebkitAppearance: value,
    appearance: value
  }),
  backgroundClip: (value) => ({
    WebkitBackgroundClip: value,
    backgroundClip: value
  })
}
export {utils}
