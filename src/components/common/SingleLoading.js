import React from "react";
import ContentLoader from "react-content-loader";

const SingleLoading = (props) => (
  <ContentLoader
    speed={2}
    width={400}
    height={460}
    viewBox="0 0 400 460"
    backgroundColor="#1f1e1e"
    foregroundColor="#100f0f"
    {...props}
  >
    <rect x="38" y="383" rx="5" ry="5" width="99" height="10" />
    <rect x="38" y="365" rx="5" ry="5" width="163" height="12" />
    <rect x="38" y="119" rx="5" ry="5" width="199" height="240" />
    <circle cx="587" cy="547" r="39" />
    <circle cx="595" cy="622" r="131" />
  </ContentLoader>
);

export default SingleLoading;
