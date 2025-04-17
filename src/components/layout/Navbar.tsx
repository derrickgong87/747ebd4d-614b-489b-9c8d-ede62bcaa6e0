
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white/80 backdrop-blur-md border-b border-gray-100 fixed w-full z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span className="text-brand-500 font-bold text-xl">智绕 AI</span>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <Link to="/" className="text-gray-700 hover:text-brand-500 px-3 py-2 rounded-md text-sm font-medium">
                首页
              </Link>
              <Link to="/features" className="text-gray-700 hover:text-brand-500 px-3 py-2 rounded-md text-sm font-medium">
                功能
              </Link>
              <Link to="/pricing" className="text-gray-700 hover:text-brand-500 px-3 py-2 rounded-md text-sm font-medium">
                价格
              </Link>
              <Link to="/api" className="text-gray-700 hover:text-brand-500 px-3 py-2 rounded-md text-sm font-medium">
                API
              </Link>
              <Link to="/login" className="ml-2">
                <Button variant="outline" size="sm">登录</Button>
              </Link>
              <Link to="/register" className="ml-2">
                <Button className="bg-brand-500 hover:bg-brand-600" size="sm">注册</Button>
              </Link>
            </div>
          </div>
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
            <Link to="/" className="text-gray-700 hover:text-brand-500 block px-3 py-2 rounded-md text-base font-medium">
              首页
            </Link>
            <Link to="/features" className="text-gray-700 hover:text-brand-500 block px-3 py-2 rounded-md text-base font-medium">
              功能
            </Link>
            <Link to="/pricing" className="text-gray-700 hover:text-brand-500 block px-3 py-2 rounded-md text-base font-medium">
              价格
            </Link>
            <Link to="/api" className="text-gray-700 hover:text-brand-500 block px-3 py-2 rounded-md text-base font-medium">
              API
            </Link>
            <Link to="/login" className="block w-full mt-2">
              <Button variant="outline" className="w-full">登录</Button>
            </Link>
            <Link to="/register" className="block w-full mt-2">
              <Button className="w-full bg-brand-500 hover:bg-brand-600">注册</Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
