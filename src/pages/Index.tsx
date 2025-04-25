import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { AIDetectionIcon, ShieldIcon, SpeedIcon } from "@/components/ui/icons";
import { ArrowRight, Plus, Image as ImageIcon, Edit, MessageSquare, Terminal, Zap } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Textarea } from "@/components/ui/textarea";

const Index = () => {
  const [inputText, setInputText] = useState("");
  const [outputText, setOutputText] = useState("");
  const { t } = useLanguage();
  
  const handleBypass = () => {
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

      {/* Hero Section with Actions */}
      <section className="pt-8 pb-6 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-sm border border-gray-100">
            <div className="flex items-center gap-4 mb-6">
              <input
                type="text"
                placeholder={t('home.askPlaceholder')}
                className="flex-1 bg-transparent text-xl font-medium outline-none"
                defaultValue="Ask Lovable..."
              />
              <div className="flex items-center gap-3">
                <button className="button-modern">
                  <Plus className="w-5 h-5" />
                </button>
                <button className="button-modern">
                  <ImageIcon className="w-5 h-5" />
                  <span>Attach</span>
                </button>
                <button className="button-modern">
                  <Edit className="w-5 h-5" />
                  <span>Edit</span>
                </button>
                <button className="button-modern">
                  <MessageSquare className="w-5 h-5" />
                  <span>Chat</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Section with Beige Textboxes */}
      <section className="py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {t('home.demo.input')}
              </label>
              <Textarea
                className="textbox-beige min-h-[240px] p-4"
                placeholder={t('home.demo.inputPlaceholder')}
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
              />
            </div>
            
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="block text-sm font-medium text-gray-700">
                  {t('home.demo.output')}
                </label>
                <span className="text-xs text-gray-500">0% {t('home.demo.probability')}</span>
              </div>
              <Textarea
                className="textbox-beige min-h-[240px] p-4"
                readOnly
                value={outputText}
                placeholder={t('home.demo.outputPlaceholder')}
              />
            </div>
          </div>
          
          <div className="mt-6 text-center">
            <Button 
              size="lg" 
              className="bg-brand-500 hover:bg-brand-600"
              onClick={handleBypass}
              disabled={!inputText}
            >
              {t('home.demo.button')} <Zap className="ml-2 h-4 w-4" />
            </Button>
            <p className="mt-4 text-sm text-gray-500">
              {t('home.demo.limit')}
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">{t('home.features.title')}</h2>
            <p className="mt-4 text-lg text-gray-600">{t('home.features.subtitle')}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center">
              <div className="mx-auto w-12 h-12 flex items-center justify-center rounded-full bg-brand-100 text-brand-500 mb-4">
                <AIDetectionIcon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{t('home.features.detection')}</h3>
              <p className="text-gray-600">
                {t('home.features.detection.desc')}
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center">
              <div className="mx-auto w-12 h-12 flex items-center justify-center rounded-full bg-brand-100 text-brand-500 mb-4">
                <ShieldIcon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{t('home.features.human')}</h3>
              <p className="text-gray-600">
                {t('home.features.human.desc')}
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center">
              <div className="mx-auto w-12 h-12 flex items-center justify-center rounded-full bg-brand-100 text-brand-500 mb-4">
                <SpeedIcon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{t('home.features.speed')}</h3>
              <p className="text-gray-600">
                {t('home.features.speed.desc')}
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
              <h2 className="text-3xl font-bold text-gray-900 mb-6">{t('home.tech.title')}</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-brand-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{t('home.tech.feature1')}</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-brand-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{t('home.tech.feature2')}</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-brand-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{t('home.tech.feature3')}</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-brand-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{t('home.tech.feature4')}</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-brand-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{t('home.tech.feature5')}</span>
                </li>
              </ul>
              
              <div className="mt-8">
                <Link to="/features">
                  <Button className="bg-brand-500 hover:bg-brand-600">
                    {t('home.tech.viewAll')} <ArrowRight className="ml-2 h-4 w-4" />
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
                  <div className="ml-3 text-xs text-gray-400">{t('home.tech.api')}</div>
                </div>
                <pre className="text-green-400 text-sm overflow-x-auto">
                  <code>{`# Python ${t('home.tech.api')}
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
                <span className="text-sm font-medium">{t('home.tech.api')}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action with WeChat */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">{t('home.community.title')}</h2>
          <p className="text-lg text-gray-600 mb-8">
            {t('home.community.desc')}
          </p>
          
          <div className="bg-gray-50 p-6 rounded-lg inline-block">
            {/* In a real app, this would be an actual QR code image */}
            <div className="w-44 h-44 bg-white border-2 border-gray-200 mx-auto mb-3 flex items-center justify-center text-gray-400">
              {t('home.community.qrcode')}
            </div>
            <p className="text-sm text-gray-500">{t('home.community.qrcode')}</p>
          </div>
          
          <div className="mt-10">
            <Link to="/register">
              <Button className="bg-brand-500 hover:bg-brand-600">
                {t('home.community.register')} <ArrowRight className="ml-2 h-4 w-4" />
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
