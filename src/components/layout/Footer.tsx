
import { Link } from "react-router-dom";
import { WechatIcon } from "../ui/icons";

export function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-100 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4 text-gray-800">智绕 AI</h3>
            <p className="text-gray-600 text-sm">
              智能绕过AI检测，让您的内容顺利通过各类检测系统
            </p>
            <div className="mt-4 flex items-center">
              <WechatIcon className="h-6 w-6 text-wechat" />
              <span className="ml-2 text-sm text-gray-500">关注公众号: 智绕AI</span>
            </div>
          </div>
          
          <div>
            <h3 className="font-medium mb-4 text-gray-800">产品</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/features" className="text-gray-600 hover:text-brand-500">功能介绍</Link></li>
              <li><Link to="/pricing" className="text-gray-600 hover:text-brand-500">价格方案</Link></li>
              <li><Link to="/api" className="text-gray-600 hover:text-brand-500">API文档</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium mb-4 text-gray-800">支持</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/faq" className="text-gray-600 hover:text-brand-500">常见问题</Link></li>
              <li><Link to="/contact" className="text-gray-600 hover:text-brand-500">联系我们</Link></li>
              <li><Link to="/guide" className="text-gray-600 hover:text-brand-500">使用指南</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium mb-4 text-gray-800">法律</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/terms" className="text-gray-600 hover:text-brand-500">服务条款</Link></li>
              <li><Link to="/privacy" className="text-gray-600 hover:text-brand-500">隐私政策</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-8 pt-8 flex flex-col md:flex-row justify-between text-sm text-gray-500">
          <p>© 2025 智绕 AI. 保留所有权利</p>
          <div className="mt-4 md:mt-0 flex space-x-4">
            <Link to="/terms" className="hover:text-brand-500">服务条款</Link>
            <Link to="/privacy" className="hover:text-brand-500">隐私政策</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
