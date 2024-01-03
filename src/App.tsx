import { RouterProvider } from "react-router-dom";
import { routers } from "./router";
import { Provider } from "react-redux";
import { ConfigProvider } from "antd";
import { store } from "./store";

function App() {
  return (
    <Provider store={store}>
      <ConfigProvider
        theme={{
          token: {
            // Seed Token，影响范围大
            colorPrimary: "#1677ff",
            borderRadius: 4,
            // 派生变量，影响范围小
            colorBgContainer: "#fff",
          },
          // components: {
          //   Button: {
          //     colorPrimary: "red",
          //     colorBgBase: "red",
          //     colorBgContainer: "red",
          //     colorPrimaryBg: "red",
          //     colorPrimaryBgHover: "red",
          //   },
          // },
        }}
      >
        <RouterProvider router={routers} />
      </ConfigProvider>
    </Provider>
  );
}

export default App;
