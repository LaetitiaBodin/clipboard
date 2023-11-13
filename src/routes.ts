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