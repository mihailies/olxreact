import type { CSSProperties, PropsWithChildren } from "react";

type PageSectionProps = {
  bgColor?: string;  
  style?: CSSProperties;
};

export const PageSection = (props: PropsWithChildren<PageSectionProps>) => {
  return (
    <div className="pageSection" style={{...props.style, backgroundColor: "#" + props.bgColor || "ffffff" }}>
      <div className="contentMaxWidht">{props.children}</div>
    </div>
  );
};
