
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CheckCircle, CheckIcon, HelpCircle } from "lucide-react";
import { WechatPayIcon } from "@/components/ui/icons";

const Pricing = () => {
  const plans = [
    {
      name: "基础版",
      price: "￥19.9",
      period: "月",
      description: "适合个人偶尔使用",
      features: [
        "每月10,000字处理量",
        "基础绕过模式",
        "最高85%绕过成功率",
        "5个并发请求",
        "邮件支持",
      ],
      cta: "开始使用",
      popular: false,
    },
    {
      name: "专业版",
      price: "￥49.9",
      period: "月",
      description: "适合频繁使用的个人用户",
      features: [
        "每月50,000字处理量",
        "高级绕过模式",
        "最高95%绕过成功率",
        "20个并发请求",
        "优先邮件支持",
        "API访问",
        "批量处理"
      ],
      cta: "选择专业版",
      popular: true,
    },
    {
      name: "团队版",
      price: "￥149.9",
      period: "月",
      description: "适合小型团队使用",
      features: [
        "每月200,000字处理量",
        "顶级绕过模式",
        "最高99%绕过成功率",
        "无限并发请求",
        "专属客服支持",
        "高级API功能",
        "自定义绕过策略",
        "团队成员管理",
      ],
      cta: "联系销售",
      popular: false,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Pricing Header */}
      <section className="pt-28 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-gray-900">简单透明的价格方案</h1>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            选择最适合您需求的方案，所有计划均提供核心功能
          </p>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan) => (
              <div 
                key={plan.name}
                className={`bg-white rounded-xl border ${
                  plan.popular ? 'border-brand-500 ring-2 ring-brand-500/20' : 'border-gray-200'
                } shadow-sm p-8 relative`}
              >
                {plan.popular && (
                  <div className="absolute top-0 translate-y-(-50%) left-0 right-0">
                    <span className="bg-brand-500 text-white text-xs font-medium px-3 py-1 rounded-full mx-auto block w-fit -mt-3">
                      最受欢迎
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-gray-900">{plan.name}</h3>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-gray-600 ml-2">/{plan.period}</span>
                  </div>
                  <p className="mt-3 text-sm text-gray-500">{plan.description}</p>
                </div>
                
                <div className="border-t border-gray-100 my-6 pt-6">
                  <ul className="space-y-4">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-brand-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mt-8">
                  <Button 
                    className={`w-full ${
                      plan.popular ? 'bg-brand-500 hover:bg-brand-600' : 'bg-gray-900 hover:bg-gray-800'
                    }`}
                  >
                    {plan.cta}
                  </Button>
                </div>
              </div>
            ))}
          </div>
          
          {/* Yearly Discount */}
          <div className="mt-12 bg-gray-50 rounded-lg p-6 text-center">
            <h3 className="font-semibold text-gray-900">年付方案优惠</h3>
            <p className="mt-2 text-gray-600">年付可享受8折优惠，相当于免费获得2.4个月的使用时间</p>
            <Button variant="outline" className="mt-4">
              查看年付方案
            </Button>
          </div>
        </div>
      </section>

      {/* Payment Methods */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">支持多种支付方式</h2>
          <div className="flex flex-wrap justify-center items-center gap-8">
            <div className="flex flex-col items-center">
              <WechatPayIcon className="h-12 w-12 text-wechat" />
              <span className="mt-2 text-sm text-gray-700">微信支付</span>
            </div>
            <div className="flex flex-col items-center">
              <svg className="h-12 w-12" viewBox="0 0 24 24" fill="#1677FF">
                <path d="M21.422 13.253c.067-.067 0-.067 0-.067C19.43 10.197 16.107 8 12.45 8 7.126 8 2.675 12.186 2.675 17.33c0 2.59 1.342 4.92 3.467 6.642.067.067.134.067.201.067.067 0 .134-.067.134-.134l.738-2.388c0-.067 0-.134-.067-.201-.067-.067-.134-.067-.201-.067-.87.134-1.744.268-2.613.268-1.006 0-1.677-.335-1.677-1.274 0-.134 0-.268.067-.469C3.011 16.324 7.26 13.32 12.45 13.32c3.4 0 6.485 1.408 8.3 3.595.134.134.335.134.47.067.134-.67.201-.268.201-.402v-3.327Z" />
                <path d="M7.866 19.383c0 .469.335.804.805.804.469 0 .804-.335.804-.804a.804.804 0 0 0-.804-.804c-.47 0-.805.335-.805.804Z" />
              </svg>
              <span className="mt-2 text-sm text-gray-700">支付宝</span>
            </div>
            <div className="flex flex-col items-center">
              <svg className="h-12 w-12" viewBox="0 0 24 24" fill="#FFB001">
                <path d="M22 10v9c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2v-9h20zm-7 6H9v-1h6v1zm4-3H5v-1h14v1z" />
                <path d="M15 13h4V5c0-1.1-.9-2-2-2H7c-1.1 0-2 .9-2 2v8h4V7h6v6z" />
              </svg>
              <span className="mt-2 text-sm text-gray-700">银联</span>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">常见问题</h2>
          
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="font-semibold text-lg text-gray-900 flex items-center">
                <HelpCircle className="h-5 w-5 mr-2 text-brand-500" />
                如何计算字数处理量？
              </h3>
              <p className="mt-3 text-gray-700">
                字数处理量是根据输入的原始文本字数计算的。例如，如果您输入了1000字的文本并使用我们的服务处理，那么将消耗1000字的处理量。
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="font-semibold text-lg text-gray-900 flex items-center">
                <HelpCircle className="h-5 w-5 mr-2 text-brand-500" />
                如果当月没用完字数额度，是否可以累积到下月？
              </h3>
              <p className="mt-3 text-gray-700">
                不可以。每月的字数处理量会在下月初重置。如果您需要处理更多文本，可以随时升级到更高级的方案或购买额外的字数包。
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="font-semibold text-lg text-gray-900 flex items-center">
                <HelpCircle className="h-5 w-5 mr-2 text-brand-500" />
                可以随时更换方案吗？
              </h3>
              <p className="mt-3 text-gray-700">
                是的，您可以随时升级、降级或取消您的订阅。升级时，我们会根据剩余天数按比例计算费用。降级或取消将在当前订阅期结束后生效。
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="font-semibold text-lg text-gray-900 flex items-center">
                <HelpCircle className="h-5 w-5 mr-2 text-brand-500" />
                如何获取API密钥？
              </h3>
              <p className="mt-3 text-gray-700">
                专业版和团队版用户可以在账户设置中生成API密钥。生成后，您可以使用我们提供的文档和示例代码将智绕AI集成到您的应用程序中。
              </p>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-gray-600">还有其他问题？</p>
            <Link to="/contact" className="text-brand-500 font-medium hover:text-brand-600 mt-2 inline-block">
              联系我们获取帮助
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 bg-gray-50 border-t border-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">准备好开始使用了吗？</h2>
          <p className="text-lg text-gray-600 mb-8">
            选择适合您需求的方案，开始使用智绕AI绕过检测系统
          </p>
          <Button className="bg-brand-500 hover:bg-brand-600" size="lg">
            免费注册，立即开始
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Pricing;
