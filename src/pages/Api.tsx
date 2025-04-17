
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Code, Copy, ExternalLink, HelpCircle, Key, Lock, Server, Terminal } from "lucide-react";
import { useState } from "react";

const Api = () => {
  const [selectedTab, setSelectedTab] = useState("overview");

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    // In a real app, you would add a toast notification here
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* API Header */}
      <section className="pt-28 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900">智绕 AI 开发者 API</h1>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl">
            集成我们的API，将AI检测绕过功能无缝整合到您的应用程序中
          </p>
          <div className="mt-6">
            <Button className="bg-gray-900 hover:bg-gray-800">
              <Key className="mr-2 h-4 w-4" />
              获取API密钥
            </Button>
            <a 
              href="#" 
              className="ml-4 inline-flex items-center text-brand-500 hover:text-brand-600"
            >
              查看完整API文档
              <ExternalLink className="ml-1 h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* API Tabs */}
      <section className="pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200">
            <div className="border-b border-gray-200">
              <div className="flex">
                <button
                  className={`py-3 px-6 text-sm font-medium ${
                    selectedTab === "overview"
                      ? "border-b-2 border-brand-500 text-brand-500"
                      : "text-gray-500 hover:text-gray-700"
                  }`}
                  onClick={() => setSelectedTab("overview")}
                >
                  概述
                </button>
                <button
                  className={`py-3 px-6 text-sm font-medium ${
                    selectedTab === "authentication"
                      ? "border-b-2 border-brand-500 text-brand-500"
                      : "text-gray-500 hover:text-gray-700"
                  }`}
                  onClick={() => setSelectedTab("authentication")}
                >
                  身份验证
                </button>
                <button
                  className={`py-3 px-6 text-sm font-medium ${
                    selectedTab === "endpoints"
                      ? "border-b-2 border-brand-500 text-brand-500"
                      : "text-gray-500 hover:text-gray-700"
                  }`}
                  onClick={() => setSelectedTab("endpoints")}
                >
                  接口端点
                </button>
                <button
                  className={`py-3 px-6 text-sm font-medium ${
                    selectedTab === "examples"
                      ? "border-b-2 border-brand-500 text-brand-500"
                      : "text-gray-500 hover:text-gray-700"
                  }`}
                  onClick={() => setSelectedTab("examples")}
                >
                  代码示例
                </button>
              </div>
            </div>
            
            <div className="p-6">
              {selectedTab === "overview" && (
                <div>
                  <h2 className="text-xl font-semibold mb-4">API 概述</h2>
                  <p className="text-gray-700 mb-4">
                    智绕AI提供了强大的RESTful API，允许开发者将我们的AI检测绕过技术集成到任何应用程序中。API设计符合RESTful原则，使用JSON进行数据交换，支持HTTPS确保数据安全。
                  </p>
                  
                  <h3 className="text-lg font-medium mt-6 mb-3">主要功能</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <Server className="h-5 w-5 text-brand-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>文本处理：将AI生成的文本转换为能绕过检测的版本</span>
                    </li>
                    <li className="flex items-start">
                      <Terminal className="h-5 w-5 text-brand-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>批量处理：一次性处理多个文本片段</span>
                    </li>
                    <li className="flex items-start">
                      <HelpCircle className="h-5 w-5 text-brand-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>检测分析：评估文本被检测为AI生成的概率</span>
                    </li>
                  </ul>
                  
                  <h3 className="text-lg font-medium mt-6 mb-3">速率限制</h3>
                  <p className="text-gray-700">
                    API请求限制取决于您的订阅计划：
                  </p>
                  <ul className="space-y-2 text-gray-700 mt-2 pl-5 list-disc">
                    <li>基础版：5次请求/分钟</li>
                    <li>专业版：20次请求/分钟</li>
                    <li>团队版：100次请求/分钟</li>
                  </ul>
                </div>
              )}
              
              {selectedTab === "authentication" && (
                <div>
                  <h2 className="text-xl font-semibold mb-4">API 身份验证</h2>
                  <p className="text-gray-700 mb-4">
                    所有API请求需要通过API密钥进行身份验证。您可以在账户设置中生成和管理您的API密钥。
                  </p>
                  
                  <h3 className="text-lg font-medium mt-6 mb-3">身份验证方式</h3>
                  <div className="bg-gray-50 p-4 rounded-md border border-gray-200 mb-4">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="font-medium text-gray-800">HTTP请求头</h4>
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        className="h-8 w-8 p-0"
                        onClick={() => copyToClipboard('Authorization: Bearer YOUR_API_KEY')}
                      >
                        <Copy className="h-4 w-4" />
                      </Button>
                    </div>
                    <pre className="bg-gray-800 text-gray-100 p-3 rounded-md text-sm overflow-x-auto">
                      <code>Authorization: Bearer YOUR_API_KEY</code>
                    </pre>
                  </div>
                  
                  <div className="bg-yellow-50 border border-yellow-200 rounded-md p-4 flex items-start mt-6">
                    <Lock className="h-5 w-5 text-yellow-500 mr-3 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-yellow-800">安全提示</h4>
                      <p className="text-sm text-yellow-700 mt-1">
                        请妥善保管您的API密钥，不要在客户端代码或公共仓库中暴露它们。如果您认为API密钥已经泄露，请立即到账户设置中重置它。
                      </p>
                    </div>
                  </div>
                </div>
              )}
              
              {selectedTab === "endpoints" && (
                <div>
                  <h2 className="text-xl font-semibold mb-4">API 端点</h2>
                  
                  <div className="bg-gray-50 p-4 rounded-md border border-gray-200 mb-6">
                    <h3 className="text-lg font-medium mb-2">处理单个文本</h3>
                    <div className="mb-3">
                      <span className="bg-green-500 text-white px-2 py-1 rounded-md text-xs font-medium mr-2">POST</span>
                      <code className="text-gray-800 font-mono">https://api.zhirao.ai/v1/bypass</code>
                    </div>
                    <p className="text-gray-700 mb-3">对单个文本进行AI检测绕过处理</p>
                    
                    <h4 className="font-medium text-gray-800 mb-2">请求参数</h4>
                    <pre className="bg-gray-800 text-gray-100 p-3 rounded-md text-sm overflow-x-auto">
                      <code>{`{
  "text": "需要处理的文本内容",
  "intensity": 0.7,         // 可选，处理强度，范围0-1
  "preserve_format": true,  // 可选，保持原始格式
  "language": "zh-CN"       // 可选，指定语言
}`}</code>
                    </pre>
                    
                    <h4 className="font-medium text-gray-800 mt-4 mb-2">响应格式</h4>
                    <pre className="bg-gray-800 text-gray-100 p-3 rounded-md text-sm overflow-x-auto">
                      <code>{`{
  "success": true,
  "bypassed_text": "处理后的文本内容",
  "original_length": 158,
  "new_length": 162,
  "detection_probability": 0.03  // 处理后被检测为AI生成的概率
}`}</code>
                    </pre>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-md border border-gray-200 mb-6">
                    <h3 className="text-lg font-medium mb-2">批量处理多个文本</h3>
                    <div className="mb-3">
                      <span className="bg-green-500 text-white px-2 py-1 rounded-md text-xs font-medium mr-2">POST</span>
                      <code className="text-gray-800 font-mono">https://api.zhirao.ai/v1/bypass/batch</code>
                    </div>
                    <p className="text-gray-700 mb-3">一次性处理多个文本片段</p>
                    
                    <h4 className="font-medium text-gray-800 mb-2">请求参数</h4>
                    <pre className="bg-gray-800 text-gray-100 p-3 rounded-md text-sm overflow-x-auto">
                      <code>{`{
  "texts": [
    "需要处理的文本1",
    "需要处理的文本2"
  ],
  "intensity": 0.7,
  "preserve_format": true,
  "language": "zh-CN"
}`}</code>
                    </pre>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-md border border-gray-200">
                    <h3 className="text-lg font-medium mb-2">分析检测概率</h3>
                    <div className="mb-3">
                      <span className="bg-green-500 text-white px-2 py-1 rounded-md text-xs font-medium mr-2">POST</span>
                      <code className="text-gray-800 font-mono">https://api.zhirao.ai/v1/analyze</code>
                    </div>
                    <p className="text-gray-700 mb-3">分析文本被AI检测系统识别的概率</p>
                    
                    <h4 className="font-medium text-gray-800 mb-2">请求参数</h4>
                    <pre className="bg-gray-800 text-gray-100 p-3 rounded-md text-sm overflow-x-auto">
                      <code>{`{
  "text": "需要分析的文本内容",
  "detector": "all"  // 可选值: "all", "gptzero", "turnitin", "originality"
}`}</code>
                    </pre>
                    
                    <h4 className="font-medium text-gray-800 mt-4 mb-2">响应格式</h4>
                    <pre className="bg-gray-800 text-gray-100 p-3 rounded-md text-sm overflow-x-auto">
                      <code>{`{
  "success": true,
  "detection_results": {
    "overall": 0.87,           // 综合概率
    "gptzero": 0.92,           // GPTZero检测概率
    "turnitin": 0.85,          // Turnitin检测概率
    "originality": 0.81,       // Originality.ai检测概率
    "zerogpt": 0.89            // ZeroGPT检测概率
  },
  "recommendation": "建议使用强度为0.8的处理以有效绕过检测"
}`}</code>
                    </pre>
                  </div>
                </div>
              )}
              
              {selectedTab === "examples" && (
                <div>
                  <h2 className="text-xl font-semibold mb-4">代码示例</h2>
                  
                  <div className="mb-8">
                    <div className="flex items-center mb-3">
                      <Code className="h-5 w-5 text-brand-500 mr-2" />
                      <h3 className="text-lg font-medium">Python 示例</h3>
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        className="ml-auto h-8 w-8 p-0"
                        onClick={() => copyToClipboard('import requests\n\nurl = "https://api.zhirao.ai/v1/bypass"\nheaders = {\n  "Authorization": "Bearer YOUR_API_KEY",\n  "Content-Type": "application/json"\n}\n\ndata = {\n  "text": "这是需要处理的AI生成文本...",\n  "intensity": 0.7,\n  "preserve_format": True\n}\n\nresponse = requests.post(url, headers=headers, json=data)\nresult = response.json()\n\nprint(result["bypassed_text"])')}
                      >
                        <Copy className="h-4 w-4" />
                      </Button>
                    </div>
                    <div className="bg-gray-800 text-gray-100 p-4 rounded-md overflow-x-auto">
                      <pre><code>{`import requests

url = "https://api.zhirao.ai/v1/bypass"
headers = {
  "Authorization": "Bearer YOUR_API_KEY",
  "Content-Type": "application/json"
}

data = {
  "text": "这是需要处理的AI生成文本...",
  "intensity": 0.7,
  "preserve_format": True
}

response = requests.post(url, headers=headers, json=data)
result = response.json()

print(result["bypassed_text"])`}</code></pre>
                    </div>
                  </div>
                  
                  <div className="mb-8">
                    <div className="flex items-center mb-3">
                      <Code className="h-5 w-5 text-brand-500 mr-2" />
                      <h3 className="text-lg font-medium">JavaScript 示例</h3>
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        className="ml-auto h-8 w-8 p-0"
                        onClick={() => copyToClipboard('async function bypassAIDetection(text) {\n  const response = await fetch("https://api.zhirao.ai/v1/bypass", {\n    method: "POST",\n    headers: {\n      "Authorization": "Bearer YOUR_API_KEY",\n      "Content-Type": "application/json"\n    },\n    body: JSON.stringify({\n      text: text,\n      intensity: 0.7,\n      preserve_format: true\n    })\n  });\n  \n  const result = await response.json();\n  return result.bypassed_text;\n}\n\n// 使用示例\nbypassAIDetection("这是需要处理的AI生成文本...")\n  .then(bypassedText => console.log(bypassedText))\n  .catch(error => console.error("处理失败:", error));')}
                      >
                        <Copy className="h-4 w-4" />
                      </Button>
                    </div>
                    <div className="bg-gray-800 text-gray-100 p-4 rounded-md overflow-x-auto">
                      <pre><code>{`async function bypassAIDetection(text) {
  const response = await fetch("https://api.zhirao.ai/v1/bypass", {
    method: "POST",
    headers: {
      "Authorization": "Bearer YOUR_API_KEY",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      text: text,
      intensity: 0.7,
      preserve_format: true
    })
  });
  
  const result = await response.json();
  return result.bypassed_text;
}

// 使用示例
bypassAIDetection("这是需要处理的AI生成文本...")
  .then(bypassedText => console.log(bypassedText))
  .catch(error => console.error("处理失败:", error));`}</code></pre>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex items-center mb-3">
                      <Code className="h-5 w-5 text-brand-500 mr-2" />
                      <h3 className="text-lg font-medium">PHP 示例</h3>
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        className="ml-auto h-8 w-8 p-0"
                        onClick={() => copyToClipboard('<?php\n$url = "https://api.zhirao.ai/v1/bypass";\n$apiKey = "YOUR_API_KEY";\n\n$data = array(\n  "text" => "这是需要处理的AI生成文本...",\n  "intensity" => 0.7,\n  "preserve_format" => true\n);\n\n$curl = curl_init($url);\ncurl_setopt($curl, CURLOPT_POST, true);\ncurl_setopt($curl, CURLOPT_POSTFIELDS, json_encode($data));\ncurl_setopt($curl, CURLOPT_RETURNTRANSFER, true);\ncurl_setopt($curl, CURLOPT_HTTPHEADER, array(\n  "Authorization: Bearer " . $apiKey,\n  "Content-Type: application/json"\n));\n\n$response = curl_exec($curl);\n$result = json_decode($response, true);\ncurl_close($curl);\n\necho $result["bypassed_text"];\n?>')}
                      >
                        <Copy className="h-4 w-4" />
                      </Button>
                    </div>
                    <div className="bg-gray-800 text-gray-100 p-4 rounded-md overflow-x-auto">
                      <pre><code>{`<?php
$url = "https://api.zhirao.ai/v1/bypass";
$apiKey = "YOUR_API_KEY";

$data = array(
  "text" => "这是需要处理的AI生成文本...",
  "intensity" => 0.7,
  "preserve_format" => true
);

$curl = curl_init($url);
curl_setopt($curl, CURLOPT_POST, true);
curl_setopt($curl, CURLOPT_POSTFIELDS, json_encode($data));
curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
curl_setopt($curl, CURLOPT_HTTPHEADER, array(
  "Authorization: Bearer " . $apiKey,
  "Content-Type: application/json"
));

$response = curl_exec($curl);
$result = json_decode($response, true);
curl_close($curl);

echo $result["bypassed_text"];
?>`}</code></pre>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
          
          {/* Documentation Links */}
          <div className="mt-12 text-center">
            <h3 className="text-xl font-semibold mb-4">完整API文档</h3>
            <p className="text-gray-700 mb-6">
              查看我们的开发者文档以获取更多详细信息和高级使用指南
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="outline">
                <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" />
                  <path d="M14 9L14 15" stroke="white" fill="none" strokeWidth="2" strokeLinecap="round" />
                  <path d="M10 9L10 15" stroke="white" fill="none" strokeWidth="2" strokeLinecap="round" />
                </svg>
                Postman 集合
              </Button>
              <Button variant="outline">
                <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2L2 7L12 12L22 7L12 2Z" />
                  <path d="M2 17L12 22L22 17" />
                  <path d="M2 12L12 17L22 12" />
                </svg>
                OpenAPI 规范
              </Button>
              <Button variant="outline">
                <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <path d="M15 3h6v6"></path>
                  <path d="m10 14 12-12"></path>
                </svg>
                SDK 下载
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 bg-gray-50 border-t border-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">准备好开始开发了吗？</h2>
          <p className="text-lg text-gray-600 mb-8">
            注册账户，获取API密钥，将智绕AI集成到您的应用程序中
          </p>
          <Button className="bg-brand-500 hover:bg-brand-600" size="lg">
            获取API密钥
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Api;
