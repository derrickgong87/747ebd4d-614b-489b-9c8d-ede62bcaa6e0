
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { AIDetectionIcon, ShieldIcon, SpeedIcon } from "@/components/ui/icons";
import { ArrowRight, CheckCircle, MessageSquare, Terminal, Zap } from "lucide-react";
import { useState } from "react";

const Index = () => {
  const [inputText, setInputText] = useState("");
  const [outputText, setOutputText] = useState("");
  
  const handleBypass = () => {
    // This would be connected to a real backend in production
    // Mock response for demonstration
    setOutputText(
      inputText
        .split("")
        .map((char, i) => (i % 10 === 0 ? char + "\u200B" : char))
        .join("")
    );
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-28 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              智能绕过<span className="text-brand-500">AI检测</span>
            </h1>
            <p className="mt-6 text-xl max-w-2xl mx-auto text-gray-600">
              让您的内容顺利通过各类AI检测系统，包括 Turnitin、GPTZero、ZeroGPT、Originality AI 等
            </p>
            <div className="mt-10">
              <Link to="/register">
                <Button size="lg" className="bg-brand-500 hover:bg-brand-600">
                  立即开始使用 <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link to="/features" className="ml-4">
                <Button size="lg" variant="outline">
                  了解更多
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900">快速体验</h2>
            <p className="mt-4 text-lg text-gray-600">试试我们的AI绕过技术</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  输入AI生成的文本
                </label>
                <textarea
                  className="w-full h-64 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent"
                  placeholder="请输入您想要处理的文本..."
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                ></textarea>
              </div>
              
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="block text-sm font-medium text-gray-700">
                    处理后的文本
                  </label>
                  <span className="text-xs text-gray-500">0% 检测概率</span>
                </div>
                <textarea
                  className="w-full h-64 p-3 border border-gray-300 rounded-md bg-gray-50 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent"
                  readOnly
                  value={outputText}
                  placeholder="处理后的文本将显示在这里..."
                ></textarea>
              </div>
            </div>
            
            <div className="mt-6 text-center">
              <Button 
                size="lg" 
                className="bg-brand-500 hover:bg-brand-600"
                onClick={handleBypass}
                disabled={!inputText}
              >
                绕过AI检测 <Zap className="ml-2 h-4 w-4" />
              </Button>
              <p className="mt-4 text-sm text-gray-500">
                免费版本有字数限制，注册后解锁完整功能
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">强大功能</h2>
            <p className="mt-4 text-lg text-gray-600">为什么选择智绕AI</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center">
              <div className="mx-auto w-12 h-12 flex items-center justify-center rounded-full bg-brand-100 text-brand-500 mb-4">
                <AIDetectionIcon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3">全覆盖检测绕过</h3>
              <p className="text-gray-600">
                有效绕过所有主流AI检测工具，包括GPTZero、Originality AI、Turnitin等
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center">
              <div className="mx-auto w-12 h-12 flex items-center justify-center rounded-full bg-brand-100 text-brand-500 mb-4">
                <ShieldIcon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3">100%人类化文本</h3>
              <p className="text-gray-600">
                智能调整文本结构和用词，保持原意的同时使内容更像人类撰写
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center">
              <div className="mx-auto w-12 h-12 flex items-center justify-center rounded-full bg-brand-100 text-brand-500 mb-4">
                <SpeedIcon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3">高速处理</h3>
              <p className="text-gray-600">
                快速处理大量文本，支持批量操作，节省您的宝贵时间
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Advanced Features */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">业界领先的AI绕过技术</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-brand-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">特殊字符插入技术，完全不可见</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-brand-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">词语同义替换，保持语义连贯</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-brand-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">句式结构重组，符合人类写作习惯</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-brand-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">全面支持中英文文本处理</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-brand-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">API接口支持自动化处理</span>
                </li>
              </ul>
              
              <div className="mt-8">
                <Link to="/features">
                  <Button className="bg-brand-500 hover:bg-brand-600">
                    查看所有功能 <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md border border-gray-200">
              <div className="rounded-lg bg-gray-800 p-4 mb-5">
                <div className="flex items-center mb-3">
                  <div className="flex space-x-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="ml-3 text-xs text-gray-400">API示例</div>
                </div>
                <pre className="text-green-400 text-sm overflow-x-auto">
                  <code>{`# Python 示例代码
import requests

url = "https://api.zhirao.ai/v1/bypass"
headers = {
  "Authorization": "Bearer YOUR_API_KEY",
  "Content-Type": "application/json"
}

data = {
  "text": "这是AI生成的文本...",
  "intensity": 0.7,
  "preserve_format": True
}

response = requests.post(url, headers=headers, json=data)
result = response.json()

print(result["bypassed_text"])`}</code>
                </pre>
              </div>
              
              <div className="flex items-center">
                <Terminal className="h-5 w-5 text-brand-500 mr-2" />
                <span className="text-sm font-medium">简单易用的API，多种编程语言支持</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action with WeChat */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">加入智绕AI社区</h2>
          <p className="text-lg text-gray-600 mb-8">
            关注我们的微信公众号获取最新技术更新、使用技巧和专属优惠
          </p>
          
          <div className="bg-gray-50 p-6 rounded-lg inline-block">
            {/* In a real app, this would be an actual QR code image */}
            <div className="w-44 h-44 bg-white border-2 border-gray-200 mx-auto mb-3 flex items-center justify-center text-gray-400">
              微信公众号二维码
            </div>
            <p className="text-sm text-gray-500">扫码关注「智绕AI」公众号</p>
          </div>
          
          <div className="mt-10">
            <Link to="/register">
              <Button className="bg-brand-500 hover:bg-brand-600">
                免费注册，立即体验 <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
