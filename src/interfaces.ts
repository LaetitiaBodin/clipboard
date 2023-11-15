// Data
export interface dataProps {
  details ?: {
    icon  ?: string,
    text   : string,
    title  : string
  }[],
  pics   ?: {
    alt   : string
    src   : string
  }[],
  summary ?: {
    text   : string,
    title  : string
  }
}

// DownloadLink
export interface dlProps {
  cname : string,
  text  : string,
  url   : any
}

// Images
export interface imgProps {
  alt   ?: string,
  cname  : string,
  src   ?: string
}

// Logo
export interface logoProps {
  cname : string
}

// NavLink
export interface navProps {
  text : string,
  url  : any
}

// SocialLink
export interface socialProps {
  text : string,
  url  : any
}

// SVGs
export interface svgProps {
  cname : string,
  svg   : React.ComponentType
}

// Text
export interface textProps {
  cname ?: string,
  level  : number,
  title ?: string,
  text  ?: string
}