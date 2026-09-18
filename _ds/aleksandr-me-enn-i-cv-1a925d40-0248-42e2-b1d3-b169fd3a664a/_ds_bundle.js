/* @ds-bundle: {"format":4,"namespace":"VersoDesignSystem_1a925d","components":[{"name":"Avatar","sourcePath":"components/core/Avatar.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Divider","sourcePath":"components/core/Divider.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"MetaText","sourcePath":"components/core/MetaText.jsx"},{"name":"PriceTag","sourcePath":"components/core/PriceTag.jsx"},{"name":"SectionLabel","sourcePath":"components/core/SectionLabel.jsx"},{"name":"Tile","sourcePath":"components/core/Tile.jsx"},{"name":"Button","sourcePath":"components/forms/Button.jsx"},{"name":"EmailCapture","sourcePath":"components/forms/EmailCapture.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"DefinitionRow","sourcePath":"components/navigation/DefinitionRow.jsx"},{"name":"FooterBar","sourcePath":"components/navigation/FooterBar.jsx"},{"name":"ListRow","sourcePath":"components/navigation/ListRow.jsx"},{"name":"NavBar","sourcePath":"components/navigation/NavBar.jsx"},{"name":"CTARow","sourcePath":"components/patterns/CTARow.jsx"},{"name":"HeroHeading","sourcePath":"components/patterns/HeroHeading.jsx"},{"name":"PaperSheet","sourcePath":"components/patterns/PaperSheet.jsx"},{"name":"ProductCard","sourcePath":"components/patterns/ProductCard.jsx"},{"name":"PromoCard","sourcePath":"components/patterns/PromoCard.jsx"},{"name":"ShowcaseCard","sourcePath":"components/patterns/ShowcaseCard.jsx"}],"sourceHashes":{"components/core/Avatar.jsx":"82c24dcd6b1f","components/core/Badge.jsx":"1b013ae515a8","components/core/Card.jsx":"09b25adc7119","components/core/Divider.jsx":"4f8dfdb67b2c","components/core/Icon.jsx":"fc1665a17b2c","components/core/MetaText.jsx":"27874945b276","components/core/PriceTag.jsx":"e32356434e4a","components/core/SectionLabel.jsx":"d84803a03152","components/core/Tile.jsx":"8e2900ac0be2","components/forms/Button.jsx":"fe6b7d89872d","components/forms/EmailCapture.jsx":"69fd190e2682","components/forms/Input.jsx":"14fb356ec61d","components/navigation/DefinitionRow.jsx":"19585dc0cbfa","components/navigation/FooterBar.jsx":"4b3e911d1951","components/navigation/ListRow.jsx":"55892634eaa2","components/navigation/NavBar.jsx":"ee554ab2995f","components/patterns/CTARow.jsx":"4d6d324fb819","components/patterns/HeroHeading.jsx":"92e8bd034b4d","components/patterns/PaperSheet.jsx":"9619ac03715f","components/patterns/ProductCard.jsx":"92e0685351ab","components/patterns/PromoCard.jsx":"276a6d8ec1a4","components/patterns/ShowcaseCard.jsx":"a6ef7c319b63","ui_kits/cv/CvSheet.jsx":"ab758cbbf4d5","ui_kits/portfolio/ContactScreen.jsx":"0352009518f8","ui_kits/portfolio/HomeScreen.jsx":"fa32d02b4016","ui_kits/portfolio/StoreScreen.jsx":"29cb131621fc"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.VersoDesignSystem_1a925d = window.VersoDesignSystem_1a925d || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Avatar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const sizes = {
  s: 24,
  m: 32,
  l: 40,
  xl: 64
};
function Avatar({
  src,
  alt = "",
  name = "",
  size = "m",
  ring = true,
  style,
  ...rest
}) {
  const px = sizes[size] || size;
  const initials = name.split(/\s+/).filter(Boolean).map(w => w[0]).slice(0, 2).join("").toUpperCase();
  return /*#__PURE__*/React.createElement("span", _extends({}, rest, {
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: px,
      height: px,
      borderRadius: "var(--radius-pill)",
      overflow: "hidden",
      background: "var(--surface-raised)",
      boxShadow: ring ? "0 0 0 1px var(--border-strong)" : "none",
      font: "var(--weight-medium) " + Math.round(px * 0.36) + "px/1 var(--font-sans)",
      color: "var(--text-secondary)",
      flex: "0 0 auto",
      ...style
    }
  }), src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: alt,
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover"
    }
  }) : initials);
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const tones = {
  neutral: {
    background: "var(--alpha-fill)",
    color: "var(--text-secondary)",
    border: "1px solid var(--border-hairline)"
  },
  solid: {
    background: "var(--surface-raised)",
    color: "var(--text-primary)",
    border: "1px solid var(--border-strong)"
  },
  accent: {
    background: "var(--accent)",
    color: "var(--chalk-0)",
    border: "1px solid transparent"
  },
  live: {
    background: "var(--accent-quiet)",
    color: "var(--text-accent)",
    border: "1px solid transparent"
  },
  paper: {
    background: "rgba(26,24,19,0.06)",
    color: "var(--text-on-paper-muted)",
    border: "1px solid var(--border-paper)"
  }
};
function Badge({
  tone = "neutral",
  mono = false,
  children,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({}, rest, {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "var(--space-2)",
      height: "20px",
      padding: "0 var(--space-4)",
      borderRadius: "var(--radius-pill)",
      font: mono ? "var(--text-meta)" : "var(--weight-medium) var(--type-caption)/1 var(--font-sans)",
      letterSpacing: mono ? "var(--track-meta)" : "var(--track-tight)",
      textTransform: mono ? "uppercase" : "none",
      whiteSpace: "nowrap",
      ...tones[tone],
      ...style
    }
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const surfaces = {
  default: {
    background: "var(--surface-card)",
    border: "1px solid var(--border-hairline)",
    boxShadow: "var(--edge-top)"
  },
  raised: {
    background: "var(--surface-raised)",
    border: "1px solid var(--border-hairline)",
    boxShadow: "var(--shadow-raised)"
  },
  quiet: {
    background: "var(--alpha-fill)",
    border: "1px solid transparent",
    boxShadow: "none"
  },
  outline: {
    background: "transparent",
    border: "1px solid var(--border-hairline)",
    boxShadow: "none"
  },
  paper: {
    background: "var(--surface-paper)",
    border: "1px solid var(--border-paper)",
    boxShadow: "var(--shadow-paper)",
    color: "var(--text-on-paper)"
  }
};
const pads = {
  none: "0",
  s: "var(--space-5)",
  m: "var(--card-pad)",
  l: "var(--card-pad-l)"
};
function Card({
  variant = "default",
  pad = "m",
  radius = "var(--radius-xl)",
  interactive = false,
  as = "div",
  style,
  children,
  ...rest
}) {
  const Tag = as;
  const [hover, setHover] = React.useState(false);
  const surface = surfaces[variant] || surfaces.default;
  return /*#__PURE__*/React.createElement(Tag, _extends({}, rest, {
    onMouseEnter: interactive ? () => setHover(true) : rest.onMouseEnter,
    onMouseLeave: interactive ? () => setHover(false) : rest.onMouseLeave,
    style: {
      position: "relative",
      borderRadius: radius,
      padding: pads[pad] ?? pad,
      transition: "var(--transition-control)",
      ...surface,
      ...(interactive && hover && variant !== "paper" ? {
        background: "var(--surface-raised)",
        borderColor: "var(--border-strong)"
      } : null),
      ...style
    }
  }), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Divider.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Divider({
  variant = "dotted",
  inset = 0,
  style,
  ...rest
}) {
  const line = {
    dotted: "1px dotted var(--border-strong)",
    hair: "1px solid var(--border-hairline)",
    solid: "1px solid var(--border-strong)",
    paper: "1px solid var(--border-paper)"
  }[variant];
  return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    role: "separator",
    style: {
      borderTop: line,
      marginLeft: inset,
      marginRight: inset,
      ...style
    }
  }));
}
Object.assign(__ds_scope, { Divider });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Divider.jsx", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const BASE = "https://cdn.jsdelivr.net/npm/lucide-static@0.454.0/icons/";
function Icon({
  name,
  size = 16,
  strokeWidth,
  color = "currentColor",
  style,
  ...rest
}) {
  const url = "url(" + BASE + name + ".svg)";
  return /*#__PURE__*/React.createElement("span", _extends({}, rest, {
    "aria-hidden": "true",
    style: {
      display: "inline-block",
      width: size,
      height: size,
      flex: "0 0 auto",
      background: color,
      WebkitMaskImage: url,
      maskImage: url,
      WebkitMaskRepeat: "no-repeat",
      maskRepeat: "no-repeat",
      WebkitMaskSize: "contain",
      maskSize: "contain",
      opacity: strokeWidth && strokeWidth < 2 ? 0.9 : 1,
      ...style
    }
  }));
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/core/MetaText.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function MetaText({
  upper = true,
  tone = "tertiary",
  size = "m",
  children,
  style,
  ...rest
}) {
  const colors = {
    primary: "var(--text-primary)",
    secondary: "var(--text-secondary)",
    tertiary: "var(--text-tertiary)",
    accent: "var(--text-accent)"
  };
  return /*#__PURE__*/React.createElement("span", _extends({}, rest, {
    style: {
      font: size === "s" ? "var(--weight-regular) var(--type-meta-s)/var(--lh-meta) var(--font-mono)" : "var(--text-meta)",
      letterSpacing: "var(--track-meta)",
      textTransform: upper ? "uppercase" : "none",
      color: colors[tone],
      ...style
    }
  }), children);
}
Object.assign(__ds_scope, { MetaText });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/MetaText.jsx", error: String((e && e.message) || e) }); }

// components/core/PriceTag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function PriceTag({
  price,
  compareAt,
  sale = false,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({}, rest, {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "var(--space-4)",
      font: "var(--weight-medium) var(--type-body-s)/1 var(--font-sans)",
      ...style
    }
  }), sale && /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      height: 18,
      padding: "0 var(--space-3)",
      borderRadius: "var(--radius-xs)",
      background: "var(--accent)",
      color: "var(--chalk-0)",
      font: "var(--weight-semibold) 10.5px/1 var(--font-sans)",
      letterSpacing: "0.04em"
    }
  }, "SALE"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--text-primary)"
    }
  }, price), compareAt && /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--text-tertiary)",
      textDecoration: "line-through"
    }
  }, compareAt));
}
Object.assign(__ds_scope, { PriceTag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/PriceTag.jsx", error: String((e && e.message) || e) }); }

// components/core/SectionLabel.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function SectionLabel({
  as = "h2",
  size = "m",
  children,
  style,
  ...rest
}) {
  const Tag = as;
  const sizes = {
    s: {
      font: "var(--weight-medium) var(--type-body)/1.2 var(--font-display)"
    },
    m: {
      font: "var(--text-section)"
    },
    l: {
      font: "var(--text-display-m)"
    }
  };
  return /*#__PURE__*/React.createElement(Tag, _extends({}, rest, {
    style: {
      margin: 0,
      color: "var(--text-primary)",
      letterSpacing: "var(--track-display)",
      ...sizes[size],
      ...style
    }
  }), children);
}
Object.assign(__ds_scope, { SectionLabel });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/SectionLabel.jsx", error: String((e && e.message) || e) }); }

// components/core/Tile.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Tile({
  size = 96,
  glyph,
  src,
  alt = "",
  background = "var(--surface-raised)",
  radius = "var(--radius-l)",
  fill = false,
  style,
  children,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: fill ? "100%" : size,
      height: fill ? "100%" : size,
      minHeight: fill ? size : undefined,
      borderRadius: radius,
      background,
      border: "1px solid var(--border-hairline)",
      boxShadow: "var(--edge-top)",
      overflow: "hidden",
      flex: "0 0 auto",
      ...style
    }
  }), src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: alt,
    style: {
      width: "46%",
      height: "46%",
      objectFit: "contain",
      opacity: 0.9
    }
  }) : glyph || children);
}
Object.assign(__ds_scope, { Tile });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tile.jsx", error: String((e && e.message) || e) }); }

// components/forms/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const variants = {
  light: {
    background: "var(--surface-inverse)",
    color: "var(--text-inverse)",
    border: "1px solid transparent",
    boxShadow: "var(--shadow-light-control)"
  },
  dark: {
    background: "var(--surface-raised)",
    color: "var(--text-primary)",
    border: "1px solid var(--border-hairline)",
    boxShadow: "var(--edge-top)"
  },
  ghost: {
    background: "transparent",
    color: "var(--text-secondary)",
    border: "1px solid transparent",
    boxShadow: "none"
  },
  accent: {
    background: "var(--accent)",
    color: "var(--chalk-0)",
    border: "1px solid transparent",
    boxShadow: "var(--shadow-card)"
  },
  paper: {
    background: "var(--paper-ink-0)",
    color: "var(--paper-0)",
    border: "1px solid transparent",
    boxShadow: "none"
  }
};
const hovers = {
  light: {
    background: "#ffffff"
  },
  dark: {
    background: "var(--ink-4)",
    borderColor: "var(--border-strong)"
  },
  ghost: {
    color: "var(--text-primary)",
    background: "var(--alpha-fill)"
  },
  accent: {
    background: "var(--accent-press)"
  },
  paper: {
    background: "var(--paper-ink-1)"
  }
};
const sizes = {
  s: {
    height: "var(--control-h-s)",
    padding: "0 var(--space-5)",
    font: "var(--weight-medium) var(--type-body-s)/1 var(--font-sans)",
    borderRadius: "var(--radius-s)"
  },
  m: {
    height: "var(--control-h)",
    padding: "0 var(--space-5)",
    font: "var(--weight-medium) var(--type-body-s)/1 var(--font-sans)",
    borderRadius: "var(--radius-m)"
  },
  l: {
    height: "42px",
    padding: "0 var(--space-7)",
    font: "var(--weight-medium) var(--type-body)/1 var(--font-sans)",
    borderRadius: "var(--radius-m)"
  }
};
function Button({
  variant = "light",
  size = "m",
  pill = false,
  iconLeft,
  iconRight,
  disabled = false,
  as = "button",
  style,
  children,
  ...rest
}) {
  const Tag = as;
  const [hover, setHover] = React.useState(false);
  const [down, setDown] = React.useState(false);
  return /*#__PURE__*/React.createElement(Tag, _extends({}, rest, {
    disabled: Tag === "button" ? disabled : undefined,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setDown(false);
    },
    onMouseDown: () => setDown(true),
    onMouseUp: () => setDown(false),
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "var(--space-3)",
      whiteSpace: "nowrap",
      cursor: disabled ? "not-allowed" : "pointer",
      letterSpacing: "var(--track-tight)",
      transition: "var(--transition-control)",
      ...sizes[size],
      ...variants[variant],
      ...(pill ? {
        borderRadius: "var(--radius-pill)"
      } : null),
      ...(hover && !disabled ? hovers[variant] : null),
      ...(down && !disabled ? {
        transform: "scale(var(--press-scale))"
      } : null),
      ...(disabled ? {
        opacity: 0.4,
        boxShadow: "none"
      } : null),
      ...style
    }
  }), iconLeft, children, iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Button.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Input({
  size = "m",
  invalid = false,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  return /*#__PURE__*/React.createElement("input", _extends({}, rest, {
    onFocus: e => {
      setFocus(true);
      rest.onFocus && rest.onFocus(e);
    },
    onBlur: e => {
      setFocus(false);
      rest.onBlur && rest.onBlur(e);
    },
    style: {
      height: size === "s" ? "var(--control-h-s)" : "var(--control-h)",
      width: "100%",
      minWidth: 0,
      padding: "0 var(--space-5)",
      borderRadius: "var(--radius-m)",
      background: "var(--alpha-fill)",
      border: "1px solid " + (invalid ? "var(--accent)" : focus ? "var(--border-strong)" : "var(--border-hairline)"),
      color: "var(--text-primary)",
      font: "var(--weight-regular) var(--type-body-s)/1 var(--font-sans)",
      letterSpacing: "var(--track-tight)",
      outline: "none",
      transition: "var(--transition-control)",
      ...style
    }
  }));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/EmailCapture.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function EmailCapture({
  placeholder = "your@email.com",
  cta = "Join 4k+ Readers",
  onSubmit,
  style,
  ...rest
}) {
  const [value, setValue] = React.useState("");
  return /*#__PURE__*/React.createElement("form", _extends({}, rest, {
    onSubmit: e => {
      e.preventDefault();
      onSubmit && onSubmit(value);
    },
    style: {
      display: "flex",
      gap: "var(--space-4)",
      alignItems: "center",
      width: "100%",
      ...style
    }
  }), /*#__PURE__*/React.createElement(__ds_scope.Input, {
    placeholder: placeholder,
    type: "email",
    value: value,
    onChange: e => setValue(e.target.value),
    style: {
      flex: "1 1 auto"
    }
  }), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    type: "submit"
  }, cta));
}
Object.assign(__ds_scope, { EmailCapture });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/EmailCapture.jsx", error: String((e && e.message) || e) }); }

// components/navigation/DefinitionRow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function DefinitionRow({
  label,
  children,
  labelWidth = 220,
  divider = false,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    style: {
      display: "flex",
      gap: "var(--space-8)",
      alignItems: "baseline",
      padding: "var(--space-5) 0",
      borderBottom: divider ? "1px dotted var(--border-strong)" : "none",
      ...style
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: "0 0 auto",
      width: labelWidth,
      font: "var(--weight-regular) var(--type-body-l)/1.3 var(--font-sans)",
      color: "var(--text-tertiary)"
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--weight-regular) var(--type-body-l)/1.3 var(--font-sans)",
      color: "var(--text-primary)"
    }
  }, children));
}
Object.assign(__ds_scope, { DefinitionRow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/DefinitionRow.jsx", error: String((e && e.message) || e) }); }

// components/navigation/FooterBar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function FooterBar({
  stamp,
  links = [],
  right,
  width = "var(--measure-wide)",
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("footer", _extends({}, rest, {
    style: {
      width: "100%",
      display: "flex",
      justifyContent: "center",
      padding: "var(--space-12) var(--page-gutter) var(--space-10)",
      ...style
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      width: "100%",
      maxWidth: width,
      display: "flex",
      alignItems: "center",
      gap: "var(--space-7)",
      flexWrap: "wrap"
    }
  }, stamp && /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      height: 22,
      padding: "0 var(--space-4)",
      borderRadius: "var(--radius-pill)",
      background: "var(--alpha-fill)",
      border: "1px solid var(--border-hairline)"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.MetaText, {
    upper: false,
    tone: "secondary",
    size: "s"
  }, stamp)), links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l.label,
    href: l.href || "#",
    style: {
      font: "var(--weight-regular) var(--type-body-s)/1 var(--font-sans)",
      color: "var(--text-secondary)"
    }
  }, l.label)), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: "1 1 auto"
    }
  }), right));
}
Object.assign(__ds_scope, { FooterBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/FooterBar.jsx", error: String((e && e.message) || e) }); }

// components/navigation/ListRow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function ListRow({
  title,
  meta,
  href = "#",
  onClick,
  divider = true,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("a", _extends({}, rest, {
    href: href,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: "flex",
      alignItems: "baseline",
      justifyContent: "space-between",
      gap: "var(--space-7)",
      padding: "var(--space-5) 0",
      borderBottom: divider ? "1px dotted var(--border-strong)" : "none",
      ...style
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--weight-medium) var(--type-body-s)/1.3 var(--font-sans)",
      color: hover ? "var(--text-secondary)" : "var(--text-primary)",
      transition: "var(--transition-control)"
    }
  }, title), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--weight-regular) var(--type-body-s)/1.3 var(--font-sans)",
      color: "var(--text-tertiary)",
      whiteSpace: "nowrap"
    }
  }, meta));
}
Object.assign(__ds_scope, { ListRow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/ListRow.jsx", error: String((e && e.message) || e) }); }

// components/navigation/NavBar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function NavBar({
  avatarSrc,
  name = "",
  items = [],
  active,
  onNavigate,
  width = "var(--measure-wide)",
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("nav", _extends({}, rest, {
    style: {
      width: "100%",
      display: "flex",
      justifyContent: "center",
      padding: "var(--space-8) var(--page-gutter)",
      ...style
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      width: "100%",
      maxWidth: width,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: "var(--space-8)"
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNavigate && onNavigate(items[0] && items[0].id);
    },
    style: {
      display: "inline-flex"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Avatar, {
    src: avatarSrc,
    name: name,
    size: "l"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-7)"
    }
  }, items.map(item => {
    const on = item.id === active;
    return /*#__PURE__*/React.createElement("a", {
      key: item.id,
      href: item.href || "#",
      onClick: e => {
        if (!item.external) {
          e.preventDefault();
          onNavigate && onNavigate(item.id);
        }
      },
      style: {
        display: "inline-flex",
        alignItems: "center",
        gap: "var(--space-2)",
        font: "var(--weight-medium) var(--type-body-s)/1 var(--font-sans)",
        color: on ? "var(--text-primary)" : "var(--text-secondary)"
      }
    }, item.label, item.external && /*#__PURE__*/React.createElement("span", {
      style: {
        font: "var(--type-meta-s)/1 var(--font-sans)",
        opacity: 0.7
      }
    }, "\u2197"));
  }))));
}
Object.assign(__ds_scope, { NavBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/NavBar.jsx", error: String((e && e.message) || e) }); }

// components/patterns/CTARow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function CTARow({
  title,
  action,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement(__ds_scope.Card, _extends({
    pad: "l",
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: "var(--space-8)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.SectionLabel, {
    as: "h3"
  }, title), action);
}
Object.assign(__ds_scope, { CTARow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/patterns/CTARow.jsx", error: String((e && e.message) || e) }); }

// components/patterns/HeroHeading.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function HeroHeading({
  lead,
  trail,
  lede,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("header", _extends({}, rest, {
    style: {
      display: "grid",
      gap: "var(--space-7)",
      ...style
    }
  }), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      font: "var(--text-display-l)",
      letterSpacing: "var(--track-display)",
      lineHeight: 1.12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--text-primary)"
    }
  }, lead), trail && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--text-tertiary)"
    }
  }, trail))), lede && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      maxWidth: "46ch",
      font: "var(--text-body)",
      color: "var(--text-secondary)"
    }
  }, lede));
}
Object.assign(__ds_scope, { HeroHeading });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/patterns/HeroHeading.jsx", error: String((e && e.message) || e) }); }

// components/patterns/PaperSheet.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function PaperSheet({
  title,
  date,
  signature,
  rotate = -0.6,
  width = 600,
  children,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("article", _extends({}, rest, {
    style: {
      width: "100%",
      maxWidth: width,
      background: "var(--surface-paper)",
      color: "var(--text-on-paper)",
      borderRadius: "var(--radius-paper)",
      boxShadow: "var(--shadow-paper)",
      padding: "clamp(28px,6%,56px)",
      transform: "rotate(" + rotate + "deg)",
      font: "var(--weight-regular) 15px/1.55 var(--font-display)",
      ...style
    }
  }), (title || date) && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "var(--space-9)",
      marginBottom: "var(--space-9)"
    }
  }, title && /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      font: "var(--weight-regular) 26px/1.2 var(--font-display)",
      color: "var(--text-on-paper)"
    }
  }, title), date && /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "right",
      font: "var(--weight-regular) 13.5px/1.2 var(--font-display)",
      color: "var(--text-on-paper-muted)"
    }
  }, date)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "var(--space-6)"
    }
  }, children), signature && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "var(--space-11)",
      font: "var(--weight-regular) 22px/1 var(--font-display)",
      fontStyle: "italic",
      color: "var(--text-on-paper)"
    }
  }, signature));
}
Object.assign(__ds_scope, { PaperSheet });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/patterns/PaperSheet.jsx", error: String((e && e.message) || e) }); }

// components/patterns/ProductCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function ProductCard({
  title,
  description,
  price,
  compareAt,
  sale = false,
  badge,
  previewSrc,
  layout = "stacked",
  primaryLabel = "Buy now",
  secondaryLabel = "Learn more",
  onPrimary,
  onSecondary,
  style,
  ...rest
}) {
  const copy = /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "var(--space-4)",
      alignContent: "space-between",
      padding: "var(--space-6)",
      minHeight: layout === "split" ? 240 : undefined
    }
  }, /*#__PURE__*/React.createElement("div", null, badge && /*#__PURE__*/React.createElement(__ds_scope.Badge, null, badge)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "var(--space-3)"
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      font: "var(--weight-semibold) var(--type-body)/1.2 var(--font-sans)",
      letterSpacing: "var(--track-tight)"
    }
  }, title), description && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      font: "var(--text-body-s)",
      color: "var(--text-secondary)"
    }
  }, description), price && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "var(--space-2)"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.PriceTag, {
    price: price,
    compareAt: compareAt,
    sale: sale
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-4)",
      marginTop: "var(--space-4)"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Button, {
    onClick: onPrimary
  }, primaryLabel), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "dark",
    onClick: onSecondary
  }, secondaryLabel))));
  const preview = previewSrc ? /*#__PURE__*/React.createElement("div", {
    style: {
      overflow: "hidden",
      background: "var(--surface-sunken)",
      borderRadius: layout === "split" ? "0 var(--radius-xl) var(--radius-xl) 0" : "var(--radius-l) var(--radius-l) 0 0",
      minHeight: 150
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: previewSrc,
    alt: "",
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      objectPosition: "left top"
    }
  })) : null;
  return /*#__PURE__*/React.createElement(__ds_scope.Card, _extends({
    pad: "none",
    style: {
      overflow: "hidden",
      display: "grid",
      gridTemplateColumns: layout === "split" ? "1fr 1fr" : "1fr",
      ...style
    }
  }, rest), layout === "split" ? /*#__PURE__*/React.createElement(React.Fragment, null, copy, preview) : /*#__PURE__*/React.createElement(React.Fragment, null, preview, copy));
}
Object.assign(__ds_scope, { ProductCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/patterns/ProductCard.jsx", error: String((e && e.message) || e) }); }

// components/patterns/PromoCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function PromoCard({
  title,
  titleMuted,
  body,
  media,
  mediaSrc,
  footer,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement(__ds_scope.Card, _extends({
    pad: "s",
    style: {
      display: "grid",
      gridTemplateColumns: "minmax(140px,180px) 1fr",
      gap: "var(--space-6)",
      alignItems: "stretch",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.Tile, {
    fill: true,
    size: 128,
    src: mediaSrc,
    glyph: media,
    background: "var(--surface-raised)"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "var(--space-4)",
      alignContent: "start",
      padding: "var(--space-4) var(--space-4) var(--space-4) 0"
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      font: "var(--weight-semibold) var(--type-body)/1.2 var(--font-sans)",
      letterSpacing: "var(--track-tight)"
    }
  }, title, " ", titleMuted && /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--text-tertiary)",
      fontWeight: "var(--weight-regular)"
    }
  }, titleMuted)), body && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      font: "var(--text-body-s)",
      color: "var(--text-secondary)",
      maxWidth: "48ch"
    }
  }, body), footer && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "var(--space-4)"
    }
  }, footer)));
}
Object.assign(__ds_scope, { PromoCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/patterns/PromoCard.jsx", error: String((e && e.message) || e) }); }

// components/patterns/ShowcaseCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function ShowcaseCard({
  title,
  badge,
  description,
  mark,
  markSrc,
  backdrop = "var(--surface-raised)",
  dark = false,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement(__ds_scope.Card, _extends({
    interactive: true,
    pad: "none",
    style: {
      overflow: "hidden",
      display: "grid",
      gridTemplateRows: "1fr auto",
      minHeight: 200,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "var(--space-9) 0",
      background: backdrop
    }
  }, markSrc ? /*#__PURE__*/React.createElement("img", {
    src: markSrc,
    alt: "",
    style: {
      width: 68,
      height: 68,
      borderRadius: "var(--radius-l)"
    }
  }) : mark), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "var(--space-2)",
      padding: "var(--space-5) var(--space-6) var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-4)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--weight-semibold) var(--type-body)/1.2 var(--font-sans)",
      color: dark ? "var(--text-on-paper)" : "var(--text-primary)"
    }
  }, title), badge && /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    tone: dark ? "paper" : "solid"
  }, badge)), description && /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--text-body-s)",
      color: dark ? "var(--text-on-paper-muted)" : "var(--text-secondary)"
    }
  }, description)));
}
Object.assign(__ds_scope, { ShowcaseCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/patterns/ShowcaseCard.jsx", error: String((e && e.message) || e) }); }

// ui_kits/cv/CvSheet.jsx
try { (() => {
const {
  MetaText,
  Divider,
  Badge
} = window.VersoDesignSystem_1a925d;
const rule = {
  borderTop: "1px solid var(--border-paper)"
};
const h2 = {
  margin: 0,
  font: "var(--weight-regular) 12px/1 var(--font-mono)",
  letterSpacing: "var(--track-meta-wide)",
  textTransform: "uppercase",
  color: "var(--text-on-paper-muted)"
};
const roleTitle = {
  font: "var(--weight-regular) 17px/1.3 var(--font-display)",
  color: "var(--text-on-paper)"
};
const roleMeta = {
  font: "var(--weight-regular) 11.5px/1.3 var(--font-mono)",
  color: "var(--text-on-paper-muted)",
  whiteSpace: "nowrap"
};
const body = {
  margin: 0,
  font: "var(--weight-regular) 13.5px/1.55 var(--font-display)",
  color: "var(--text-on-paper-muted)"
};
function Section({
  label,
  children
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      display: "grid",
      gridTemplateColumns: "120px 1fr",
      gap: "var(--space-8)",
      padding: "var(--space-8) 0",
      ...rule
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: h2
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "var(--space-6)"
    }
  }, children));
}
function Role({
  title,
  org,
  when,
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "var(--space-2)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "baseline",
      gap: "var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: roleTitle
  }, title, " ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--text-on-paper-muted)"
    }
  }, "\u2014 ", org)), /*#__PURE__*/React.createElement("span", {
    style: roleMeta
  }, when)), children && /*#__PURE__*/React.createElement("p", {
    style: body
  }, children));
}
function CvSheet({
  flat = false
}) {
  return /*#__PURE__*/React.createElement("article", {
    style: {
      width: "100%",
      maxWidth: 720,
      background: "var(--surface-paper)",
      color: "var(--text-on-paper)",
      borderRadius: "var(--radius-paper)",
      boxShadow: flat ? "none" : "var(--shadow-paper)",
      transform: flat ? "none" : "rotate(-0.35deg)",
      padding: "clamp(32px,6%,64px)"
    }
  }, /*#__PURE__*/React.createElement("header", {
    style: {
      display: "grid",
      gap: "var(--space-6)",
      paddingBottom: "var(--space-9)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-end",
      gap: "var(--space-8)"
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      font: "var(--weight-regular) 40px/1 var(--font-display)",
      letterSpacing: "var(--track-display)",
      color: "var(--text-on-paper)"
    }
  }, "Vera Kessler"), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--weight-regular) 11.5px/1.5 var(--font-mono)",
      letterSpacing: "var(--track-meta)",
      textTransform: "uppercase",
      color: "var(--text-on-paper-muted)",
      textAlign: "right"
    }
  }, "Graphic Designer", /*#__PURE__*/React.createElement("br", null), "Lisbon \xB7 Remote")), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      maxWidth: "62ch",
      font: "var(--weight-regular) 14.5px/1.6 var(--font-display)",
      color: "var(--text-on-paper)"
    }
  }, "Identity, editorial systems and type design for people who still print things. Fifteen years between studio and independent practice; I set the grid, draw the letters, and stay on press.")), /*#__PURE__*/React.createElement(Section, {
    label: "Experience"
  }, /*#__PURE__*/React.createElement(Role, {
    title: "Principal",
    org: "Kessler Type",
    when: "2019 \u2014 present"
  }, "Independent studio. Identity and print systems for museums, mills and small publishers. Selected: Halcyon Mill (identity, paper system), P\xF3rtico Editorial (twelve-title series), Bica Coffee (packaging)."), /*#__PURE__*/React.createElement(Role, {
    title: "Senior Designer",
    org: "Est\xFAdio Norte",
    when: "2015 \u2014 2019"
  }, "Led editorial work for two national magazines; rebuilt both grids and commissioned type. Ran press checks for a 90k-copy monthly."), /*#__PURE__*/React.createElement(Role, {
    title: "Designer",
    org: "Werkraum Berlin",
    when: "2011 \u2014 2015"
  }, "Exhibition graphics, signage and catalogues for cultural clients.")), /*#__PURE__*/React.createElement(Section, {
    label: "Type"
  }, /*#__PURE__*/React.createElement(Role, {
    title: "Verso",
    org: "transitional serif, six weights",
    when: "2021 \u2014 2024"
  }, "Drawn in the evenings over three years; now used across the studio's editorial work and licensed by two publishers.")), /*#__PURE__*/React.createElement(Section, {
    label: "Recognition"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "var(--space-4)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      gap: "var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: roleTitle
  }, "Type Directors Club \u2014 Certificate of Excellence"), /*#__PURE__*/React.createElement("span", {
    style: roleMeta
  }, "2024")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      gap: "var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: roleTitle
  }, "European Design Awards \u2014 Silver, Editorial"), /*#__PURE__*/React.createElement("span", {
    style: roleMeta
  }, "2022")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      gap: "var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: roleTitle
  }, "Tokyo TDC \u2014 Annual selection"), /*#__PURE__*/React.createElement("span", {
    style: roleMeta
  }, "2020")))), /*#__PURE__*/React.createElement(Section, {
    label: "Skills"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: "var(--space-3)"
    }
  }, ["Identity", "Editorial design", "Type design", "Print production", "Packaging", "Signage", "InDesign", "Glyphs", "Figma", "Letterpress"].map(s => /*#__PURE__*/React.createElement("span", {
    key: s,
    style: {
      display: "inline-flex",
      alignItems: "center",
      height: 22,
      padding: "0 10px",
      borderRadius: "var(--radius-pill)",
      border: "1px solid var(--border-paper)",
      background: "rgba(26,24,19,0.04)",
      font: "var(--weight-regular) 12px/1 var(--font-sans)",
      color: "var(--text-on-paper-muted)"
    }
  }, s)))), /*#__PURE__*/React.createElement(Section, {
    label: "Education"
  }, /*#__PURE__*/React.createElement(Role, {
    title: "MA Type & Media",
    org: "KABK, The Hague",
    when: "2010 \u2014 2011"
  }), /*#__PURE__*/React.createElement(Role, {
    title: "BA Graphic Design",
    org: "ESAD Porto",
    when: "2006 \u2014 2010"
  })), /*#__PURE__*/React.createElement("footer", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      gap: "var(--space-6)",
      paddingTop: "var(--space-8)",
      ...rule
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--weight-regular) 11.5px/1.4 var(--font-mono)",
      color: "var(--text-on-paper-muted)"
    }
  }, "hello@verakessler.co"), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--weight-regular) 11.5px/1.4 var(--font-mono)",
      color: "var(--text-on-paper-muted)"
    }
  }, "verakessler.co"), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--weight-regular) 11.5px/1.4 var(--font-mono)",
      color: "var(--text-on-paper-muted)"
    }
  }, "References on request")));
}
Object.assign(window, {
  CvSheet
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/cv/CvSheet.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/ContactScreen.jsx
try { (() => {
const {
  PaperSheet,
  DefinitionRow,
  Divider,
  MetaText
} = window.VersoDesignSystem_1a925d;
function ContactScreen() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "var(--space-14)",
      width: "100%",
      maxWidth: "var(--measure-wide)",
      margin: "0 auto",
      padding: "0 var(--page-gutter)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "center",
      paddingTop: "var(--space-9)"
    }
  }, /*#__PURE__*/React.createElement(PaperSheet, {
    width: 600,
    title: "The Art of Reinvention",
    date: "March 5, 2026",
    signature: "Vera"
  }, /*#__PURE__*/React.createElement("p", null, "Have you ever felt like you weren't living up to your full potential?"), /*#__PURE__*/React.createElement("p", null, "For a long time, I did."), /*#__PURE__*/React.createElement("p", null, "I spent nine years setting other people's layouts. Careful work, invisible work. There was always a quieter voice telling me I could push myself significantly further than I had been."), /*#__PURE__*/React.createElement("p", null, "The cycle broke when I stopped waiting for the right brief and set my own: a typeface, drawn in the evenings, for nobody. It took two years. It taught me more than the nine."), /*#__PURE__*/React.createElement("p", null, "That work, and everything it led to, is available on request."), /*#__PURE__*/React.createElement("p", null, "You're trying to do the best work of your career, and so am I."), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: "var(--space-6)"
    }
  }, "Warmly,"))), /*#__PURE__*/React.createElement("section", {
    style: {
      display: "grid",
      gap: "var(--space-8)"
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      font: "var(--weight-bold) clamp(44px,8vw,86px)/0.95 var(--font-sans)",
      letterSpacing: "-0.035em"
    }
  }, "Say hello"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "var(--space-6)",
      maxWidth: "52ch"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--weight-medium) var(--type-body-l)/1.45 var(--font-sans)"
    }
  }, "I'm currently open to freelance engagements, and for the first time in years, full-time roles at studios building thoughtful, printed, craft-driven things. I work from Lisbon."), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--weight-medium) var(--type-body-l)/1.45 var(--font-sans)"
    }
  }, "Please get in touch to see my latest work and discuss a project or role you have in mind.")), /*#__PURE__*/React.createElement(Divider, {
    variant: "hair",
    style: {
      margin: "var(--space-8) 0"
    }
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(DefinitionRow, {
    label: "Write"
  }, "hello@verakessler.co"), /*#__PURE__*/React.createElement(DefinitionRow, {
    label: "Follow"
  }, "Instagram"), /*#__PURE__*/React.createElement(DefinitionRow, {
    label: ""
  }, "LinkedIn"), /*#__PURE__*/React.createElement(DefinitionRow, {
    label: "R\xE9sum\xE9"
  }, "Download PDF")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-9)",
      paddingTop: "var(--space-9)"
    }
  }, /*#__PURE__*/React.createElement(MetaText, null, "\xA9 2026 Kessler Type"), /*#__PURE__*/React.createElement(MetaText, null, "11:10 AM WEST"))));
}
Object.assign(window, {
  ContactScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/ContactScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/HomeScreen.jsx
try { (() => {
const {
  NavBar,
  FooterBar,
  HeroHeading,
  PromoCard,
  EmailCapture,
  SectionLabel,
  ShowcaseCard,
  ProductCard,
  ListRow,
  CTARow,
  Card,
  Tile,
  Button,
  Icon,
  MetaText,
  Divider
} = window.VersoDesignSystem_1a925d;
function HomeScreen({
  onNavigate
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "var(--space-13)",
      width: "100%",
      maxWidth: "var(--measure-wide)",
      margin: "0 auto",
      padding: "0 var(--page-gutter)"
    }
  }, /*#__PURE__*/React.createElement(HeroHeading, {
    lead: "Ayo! I'm Vera \u2014",
    trail: "Designer, typesetter, printmaker.",
    lede: /*#__PURE__*/React.createElement(React.Fragment, null, "I design identities and the printed matter that carries them. Fifteen years, mostly for people who still care about paper. Studio work under ", /*#__PURE__*/React.createElement("strong", {
      style: {
        color: "var(--text-primary)",
        fontWeight: "var(--weight-medium)"
      }
    }, "Kessler\xA0Type"), ", plus editorial systems, packaging, and the occasional typeface.")
  }), /*#__PURE__*/React.createElement(PromoCard, {
    title: "Signal",
    titleMuted: "Newsletter",
    media: /*#__PURE__*/React.createElement(Icon, {
      name: "mail",
      size: 30,
      style: {
        color: "var(--text-secondary)"
      }
    }),
    body: "Notes on type, print production, and running a one-person studio. Sent when there is something worth sending.",
    footer: /*#__PURE__*/React.createElement(EmailCapture, {
      cta: "Join 2k+ Readers"
    })
  }), /*#__PURE__*/React.createElement("section", {
    style: {
      display: "grid",
      gap: "var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement(SectionLabel, null, "Selected Work"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "var(--space-5)"
    }
  }, /*#__PURE__*/React.createElement(ShowcaseCard, {
    title: "Halcyon Mill",
    badge: "Identity",
    description: "Wordmark and paper system for a 90-year-old mill.",
    backdrop: "linear-gradient(180deg,#9cc6e8,#dcecf7)",
    dark: true,
    mark: /*#__PURE__*/React.createElement(Tile, {
      size: 68,
      background: "rgba(255,255,255,0.78)",
      glyph: /*#__PURE__*/React.createElement("span", {
        style: {
          font: "var(--weight-regular) 30px/1 var(--font-display)",
          color: "#1a1813"
        }
      }, "H")
    }),
    onClick: () => onNavigate("work")
  }), /*#__PURE__*/React.createElement(ShowcaseCard, {
    title: "Verso",
    badge: "Typeface",
    description: "A transitional serif in six weights.",
    mark: /*#__PURE__*/React.createElement(Tile, {
      size: 68,
      glyph: /*#__PURE__*/React.createElement("span", {
        style: {
          font: "var(--weight-regular) 30px/1 var(--font-display)"
        }
      }, "Vv")
    }),
    onClick: () => onNavigate("work")
  }))), /*#__PURE__*/React.createElement("section", {
    style: {
      display: "grid",
      gap: "var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement(SectionLabel, null, "Store"), /*#__PURE__*/React.createElement(ProductCard, {
    layout: "split",
    badge: "New",
    title: "Grid Systems Workbook",
    description: "A 96-page workbook on editorial grids, printed in two colours.",
    sale: true,
    price: "$99",
    compareAt: "$129",
    previewSrc: "../../assets/reference/ref-store.png",
    onPrimary: () => onNavigate("store"),
    onSecondary: () => onNavigate("store")
  })), /*#__PURE__*/React.createElement("section", {
    style: {
      display: "grid",
      gap: "var(--space-4)"
    }
  }, /*#__PURE__*/React.createElement(SectionLabel, null, "Writing"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(ListRow, {
    title: "A year in",
    meta: "3 months ago",
    onClick: e => e.preventDefault()
  }), /*#__PURE__*/React.createElement(ListRow, {
    title: "Why I stopped designing in the browser",
    meta: "4 months ago",
    onClick: e => e.preventDefault()
  }), /*#__PURE__*/React.createElement(ListRow, {
    title: "How I set up every new identity project (from scratch)",
    meta: "7 months ago",
    onClick: e => e.preventDefault()
  }), /*#__PURE__*/React.createElement(ListRow, {
    title: "View more",
    meta: "",
    divider: false,
    onClick: e => e.preventDefault()
  }))), /*#__PURE__*/React.createElement("section", {
    style: {
      display: "grid",
      gap: "var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement(SectionLabel, null, "Currently"), /*#__PURE__*/React.createElement(Card, {
    pad: "l",
    style: {
      display: "grid",
      gap: "var(--space-5)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-4)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: "50%",
      background: "var(--accent)"
    }
  }), /*#__PURE__*/React.createElement(MetaText, {
    tone: "secondary"
  }, "Open to freelance \u2014 Q4 2026")), /*#__PURE__*/React.createElement(Divider, {
    variant: "hair"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      gap: "var(--space-8)",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--text-body-s)",
      color: "var(--text-secondary)",
      maxWidth: "46ch"
    }
  }, "Two identity slots left this year, and I am reading full-time roles at studios that print things."), /*#__PURE__*/React.createElement(Button, {
    onClick: () => onNavigate("contact")
  }, "Get in touch")))), /*#__PURE__*/React.createElement(CTARow, {
    title: "There is more",
    action: /*#__PURE__*/React.createElement(Button, {
      variant: "dark",
      onClick: () => onNavigate("work")
    }, "Visit the archive")
  }));
}
Object.assign(window, {
  HomeScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/HomeScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/StoreScreen.jsx
try { (() => {
const {
  SectionLabel,
  ProductCard,
  CTARow,
  PromoCard,
  EmailCapture,
  Button,
  Icon
} = window.VersoDesignSystem_1a925d;
function StoreScreen() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "var(--space-11)",
      width: "100%",
      maxWidth: "var(--measure-wide)",
      margin: "0 auto",
      padding: "0 var(--page-gutter)"
    }
  }, /*#__PURE__*/React.createElement(SectionLabel, {
    size: "l",
    as: "h1",
    style: {
      font: "var(--text-display-l)"
    }
  }, "Digital Products"), /*#__PURE__*/React.createElement(ProductCard, {
    layout: "split",
    badge: "New",
    title: "Grid Systems Workbook",
    description: "A 96-page workbook on editorial grids, printed in two colours.",
    sale: true,
    price: "$99",
    compareAt: "$129",
    previewSrc: "../../assets/reference/ref-store.png"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "var(--space-5)"
    }
  }, /*#__PURE__*/React.createElement(ProductCard, {
    title: "Specimen Kit",
    description: "Twelve InDesign specimen layouts.",
    price: "$49",
    previewSrc: "../../assets/reference/ref-portfolio-home.png"
  }), /*#__PURE__*/React.createElement(ProductCard, {
    title: "Verso Type Family",
    description: "Six weights, two italics, full Latin.",
    price: "$149",
    previewSrc: "../../assets/reference/ref-letter-contact.png"
  })), /*#__PURE__*/React.createElement(CTARow, {
    title: "There is more",
    action: /*#__PURE__*/React.createElement(Button, {
      variant: "dark"
    }, "Visit the shop")
  }), /*#__PURE__*/React.createElement(PromoCard, {
    title: "Signal",
    titleMuted: "Newsletter",
    media: /*#__PURE__*/React.createElement(Icon, {
      name: "mail",
      size: 30,
      style: {
        color: "var(--text-secondary)"
      }
    }),
    body: "Notes on type, print production, and running a one-person studio.",
    footer: /*#__PURE__*/React.createElement(EmailCapture, {
      cta: "Join 2k+ Readers"
    })
  }));
}
Object.assign(window, {
  StoreScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/StoreScreen.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Divider = __ds_scope.Divider;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.MetaText = __ds_scope.MetaText;

__ds_ns.PriceTag = __ds_scope.PriceTag;

__ds_ns.SectionLabel = __ds_scope.SectionLabel;

__ds_ns.Tile = __ds_scope.Tile;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.EmailCapture = __ds_scope.EmailCapture;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.DefinitionRow = __ds_scope.DefinitionRow;

__ds_ns.FooterBar = __ds_scope.FooterBar;

__ds_ns.ListRow = __ds_scope.ListRow;

__ds_ns.NavBar = __ds_scope.NavBar;

__ds_ns.CTARow = __ds_scope.CTARow;

__ds_ns.HeroHeading = __ds_scope.HeroHeading;

__ds_ns.PaperSheet = __ds_scope.PaperSheet;

__ds_ns.ProductCard = __ds_scope.ProductCard;

__ds_ns.PromoCard = __ds_scope.PromoCard;

__ds_ns.ShowcaseCard = __ds_scope.ShowcaseCard;

})();
