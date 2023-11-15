export type routeType = {
    url  : any,
    text : string
  }
  
export const dlRoutes : routeType[] = [
  {
    text : "Download for iOS",
    url  : process.env.PUBLIC_URL
  },
  {
    text : "Download for Mac",
    url  : process.env.PUBLIC_URL
  }
]

export const navRoutes : routeType[] = [
  {
    text : "FAQs",
    url  : process.env.PUBLIC_URL
  },
  {
    text : "Contact Us",
    url  : process.env.PUBLIC_URL
  },
  {
    text : "Privacy Policy",
    url  : process.env.PUBLIC_URL
  },
  {
    text : "Press Kit",
    url  : process.env.PUBLIC_URL
  },
  {
    text : "Install Guide",
    url  : process.env.PUBLIC_URL
  }
]

export const socialRoutes : routeType[] = [
  {
    text : "facebook",
    url  : process.env.PUBLIC_URL
  },
  {
    text : "twitter",
    url  : process.env.PUBLIC_URL
  },
  {
    text : "instagram",
    url  : process.env.PUBLIC_URL
  }
]