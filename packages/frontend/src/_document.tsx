import { useState } from "react";
import { Outlet, Link } from "@tanstack/react-router";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Button, Avatar } from "@nextui-org/react";
import { Sun } from "tabler-icons-react";
import { useAuthn } from "./lib/provider/authn/useAuthn";

// 外枠のコンポーネント
export const Document = () => {
  // 認証しているかを取得
  const { isAuthenticated } = useAuthn();

  // ダークモードの設定
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`${darkMode ? "dark" : ""} text-foreground bg-background`}>
      <div className="h-screen flex flex-col">
        {/* ここで全画面の高さを設定 */}
        <Navbar className="flex-shrink-0 bg-slate-300">
          {/* ナビゲーションバーの高さを固定 */}
          <NavbarBrand>
            <p className="font-bold text-inherit">callstack</p>
          </NavbarBrand>
          <NavbarContent className="hidden sm:flex gap-4" justify="start">
            <NavbarItem>
              <Link to="/">Features</Link>
            </NavbarItem>
            <NavbarItem isActive>
              <Link to="/">Customers</Link>
            </NavbarItem>
            <NavbarItem>
              <Link to="/">Integrations</Link>
            </NavbarItem>
          </NavbarContent>
          <NavbarContent justify="end">
            <Button color="secondary" variant="flat" onClick={toggleDarkMode}>
              <Sun size={20} />
            </Button>
            <NavbarItem>
              {isAuthenticated ? (
                <Avatar
                  isBordered
                  as="button"
                  className="transition-transform"
                  color="secondary"
                  name="Jason Hughes"
                  size="sm"
                  src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                />
              ) : (
                <Button color="primary" variant="flat">
                  <Link to="/">Login</Link>
                </Button>
              )}
            </NavbarItem>
          </NavbarContent>
        </Navbar>
        <div className="flex-grow overflow-auto">
          {" "}
          {/* ここで内側のコンポーネントを伸縮させる */}
          <Outlet />
        </div>
      </div>
    </div>
  );
};
