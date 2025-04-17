
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { AIDetectionIcon, ShieldIcon, SpeedIcon } from "@/components/ui/icons";
import { ArrowRight, CheckIcon, CodeIcon, FileText, Globe, Lock, Server, Sliders } from "lucide-react";

const Features = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Features Header */}
      <section className="pt-28 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-gray-900">智绕 AI 功能详解</h1>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            探索我们如何帮助您的内容顺利通过各种AI检测系统
          </p>
        </div>
      </section>

      {/* Main Features Grid */}
      <section className="pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-brand-100 text-brand-500 mb-4">
                <AIDetectionIcon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3">多平台检测绕过</h3>
              <p className="text-gray-600 mb-4">
                智能分析各大AI检测系统的算法特点，针对性优化内容以有效绕过检测
              </p>
              <ul className="space-y-2 mt-4">
                <li className="flex items-center text-sm text-gray-700">
                  <CheckIcon className="h-4 w-4 text-brand-500 mr-2" />
                  <span>GPTZero 检测绕过</span>
                </li>
                <li className="flex items-center text-sm text-gray-700">
                  <CheckIcon className="h-4 w-4 text-brand-500 mr-2" />
                  <span>Turnitin 检测绕过</span>
                </li>
                <li className="flex items-center text-sm text-gray-700">
                  <CheckIcon className="h-4 w-4 text-brand-500 mr-2" />
                  <span>Originality.ai 检测绕过</span>
                </li>
                <li className="flex items-center text-sm text-gray-700">
                  <CheckIcon className="h-4 w-4 text-brand-500 mr-2" />
                  <span>ZeroGPT 检测绕过</span>
                </li>
                <li className="flex items-center text-sm text-gray-700">
                  <CheckIcon className="h-4 w-4 text-brand-500 mr-2" />
                  <span>AI Text Classifier 检测绕过</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-brand-100 text-brand-500 mb-4">
                <Sliders className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3">可调节处理强度</h3>
              <p className="text-gray-600 mb-4">
                根据不同需求调整处理强度，在文本自然度和检测绕过成功率之间找到最佳平衡点
              </p>
              <ul className="space-y-2 mt-4">
                <li className="flex items-center text-sm text-gray-700">
                  <CheckIcon className="h-4 w-4 text-brand-500 mr-2" />
                  <span>温和模式：轻微调整，保持高度自然</span>
                </li>
                <li className="flex items-center text-sm text-gray-700">
                  <CheckIcon className="h-4 w-4 text-brand-500 mr-2" />
                  <span>标准模式：平衡调整，适合大多数情况</span>
                </li>
                <li className="flex items-center text-sm text-gray-700">
                  <CheckIcon className="h-4 w-4 text-brand-500 mr-2" />
                  <span>强力模式：最大程度绕过检测</span>
                </li>
                <li className="flex items-center text-sm text-gray-700">
                  <CheckIcon className="h-4 w-4 text-brand-500 mr-2" />
                  <span>自定义强度微调（专业版）</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-brand-100 text-brand-500 mb-4">
                <Globe className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3">多语言支持</h3>
              <p className="text-gray-600 mb-4">
                支持多种语言的AI内容检测绕过，确保全球用户都能使用我们的服务
              </p>
              <ul className="space-y-2 mt-4">
                <li className="flex items-center text-sm text-gray-700">
                  <CheckIcon className="h-4 w-4 text-brand-500 mr-2" />
                  <span>中文（简体与繁体）</span>
                </li>
                <li className="flex items-center text-sm text-gray-700">
                  <CheckIcon className="h-4 w-4 text-brand-500 mr-2" />
                  <span>英文</span>
                </li>
                <li className="flex items-center text-sm text-gray-700">
                  <CheckIcon className="h-4 w-4 text-brand-500 mr-2" />
                  <span>日语</span>
                </li>
                <li className="flex items-center text-sm text-gray-700">
                  <CheckIcon className="h-4 w-4 text-brand-500 mr-2" />
                  <span>韩语</span>
                </li>
                <li className="flex items-center text-sm text-gray-700">
                  <CheckIcon className="h-4 w-4 text-brand-500 mr-2" />
                  <span>其他20+种语言</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Features */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">技术亮点</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <Lock className="h-5 w-5 mr-2 text-brand-500" />
                隐形字符插入技术
              </h3>
              <p className="text-gray-700">
                我们开发的专利隐形字符插入技术可在不改变文本外观的情况下，有效扰乱AI检测系统的分析算法。这些字符对人眼完全不可见，但能显著降低AI检测概率。
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <FileText className="h-5 w-5 mr-2 text-brand-500" />
                智能语义重构
              </h3>
              <p className="text-gray-700">
                通过深度学习模型分析文本结构和语义，智能调整句式、用词和表达方式，使AI生成的内容更符合人类写作习惯，同时保持原意不变。
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <Server className="h-5 w-5 mr-2 text-brand-500" />
                高性能处理引擎
              </h3>
              <p className="text-gray-700">
                我们的处理引擎采用分布式架构设计，能够快速处理大规模文本，即使在高并发情况下也能保持稳定性能和低延迟响应。
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <CodeIcon className="h-5 w-5 mr-2 text-brand-500" />
                灵活的API接口
              </h3>
              <p className="text-gray-700">
                提供功能丰富的REST API，便于开发者将我们的服务集成到自己的应用程序中。支持批量处理、自定义参数和回调通知等高级功能。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">应用场景</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12 text-center">
            智绕AI可以应用于多种需要绕过AI检测的场景，帮助用户在不同环境下顺利使用AI生成内容
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="font-semibold text-lg mb-3">学术论文润色</h3>
              <p className="text-gray-700">
                帮助学生和研究人员使用AI辅助工具润色学术论文，同时确保能通过学校的AI检测系统审核。
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="font-semibold text-lg mb-3">内容创作平台</h3>
              <p className="text-gray-700">
                为内容创作者提供工具，使用AI生成的内容能够顺利通过各大平台的AI检测系统，避免内容被标记或限流。
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="font-semibold text-lg mb-3">市场营销文案</h3>
              <p className="text-gray-700">
                营销团队使用AI生成营销文案后，通过我们的处理确保内容在各平台发布时不会被识别为AI生成。
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="font-semibold text-lg mb-3">企业文档处理</h3>
              <p className="text-gray-700">
                企业可以安全使用AI工具提升内部文档效率，同时确保敏感文件不会被识别为AI生成内容。
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="font-semibold text-lg mb-3">电子商务产品描述</h3>
              <p className="text-gray-700">
                电商平台可以批量生成产品描述，并通过我们的服务确保这些内容不会被识别为AI生成，提高独特性和质量感。
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="font-semibold text-lg mb-3">SEO内容优化</h3>
              <p className="text-gray-700">
                SEO团队可以使用AI辅助内容创作，然后通过我们的工具确保内容不会因被识别为AI生成而影响搜索引擎排名。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 bg-brand-500 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">立即开始使用智绕AI</h2>
          <p className="text-xl mb-8 opacity-90">
            注册账号，体验业界领先的AI检测绕过技术
          </p>
          <Button className="bg-white text-brand-500 hover:bg-gray-100" size="lg">
            免费注册 <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Features;
