import React from "react";
import { Layout } from "antd";
const { Footer } = Layout;
const FooterComponent = () => {
  return <Footer style={{ textAlign: "center" }}></Footer>;
};
export default React.memo(FooterComponent);
