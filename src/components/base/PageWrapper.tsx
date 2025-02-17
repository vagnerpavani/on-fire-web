import { JSX } from "react";

type PageWrapperProps = { children: JSX.Element[] | JSX.Element };

function PageWrapper({ children }: PageWrapperProps) {
  return <div className="min-h-screen ">{children}</div>;
}

export default PageWrapper;
