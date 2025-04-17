
const translations = {
  // Common
  'app.name': '智绕 AI',
  'app.tagline': '智能绕过AI检测',
  'app.copyright': '© 2025 智绕 AI. 保留所有权利',
  
  // Navigation
  'nav.home': '首页',
  'nav.features': '功能',
  'nav.pricing': '价格',
  'nav.api': 'API',
  'nav.useTool': '使用工具',
  'nav.login': '登录',
  'nav.register': '注册',
  'nav.history': '历史记录',
  'nav.invite': '邀请好友',

  // Dashboard
  'dashboard.bypass': 'Bypass AI 检测',
  'dashboard.history': '历史记录',
  'dashboard.history.content': '内容',
  'dashboard.history.created': '创建日期',
  'dashboard.history.words': '生成字数',
  'dashboard.invite': '邀请好友',
  'dashboard.basic': '基础版',
  'dashboard.words': '字',
  'dashboard.upgrade': '升级',
  'dashboard.otherApps': '其他应用',

  // Homepage
  'home.hero.title': '智能绕过AI检测',
  'home.hero.subtitle': '让您的内容顺利通过各类AI检测系统，包括 Turnitin、GPTZero、ZeroGPT、Originality AI 等',
  'home.startNow': '立即开始使用',
  'home.learnMore': '了解更多',
  'home.demo.title': '快速体验',
  'home.demo.subtitle': '试试我们的AI绕过技术',
  'home.demo.input': '输入AI生成的文本',
  'home.demo.output': '处理后的文本',
  'home.demo.probability': '检测概率',
  'home.demo.button': '绕过AI检测',
  'home.demo.limit': '免费版本有字数限制，注册后解锁完整功能',
  'home.features.title': '强大功能',
  'home.features.subtitle': '为什么选择智绕AI',
  'home.features.detection': '全覆盖检测绕过',
  'home.features.detection.desc': '有效绕过所有主流AI检测工具，包括GPTZero、Originality AI、Turnitin等',
  'home.features.human': '100%人类化文本',
  'home.features.human.desc': '智能调整文本结构和用词，保持原意的同时使内容更像人类撰写',
  'home.features.speed': '高速处理',
  'home.features.speed.desc': '快速处理大量文本，支持批量操作，节省您的宝贵时间',
  'home.tech.title': '业界领先的AI绕过技术',
  'home.tech.feature1': '特殊字符插入技术，完全不可见',
  'home.tech.feature2': '词语同义替换，保持语义连贯',
  'home.tech.feature3': '句式结构重组，符合人类写作习惯',
  'home.tech.feature4': '全面支持中英文文本处理',
  'home.tech.feature5': 'API接口支持自动化处理',
  'home.tech.viewAll': '查看所有功能',
  'home.tech.api': '简单易用的API，多种编程语言支持',
  'home.community.title': '加入智绕AI社区',
  'home.community.desc': '关注我们的微信公众号获取最新技术更新、使用技巧和专属优惠',
  'home.community.qrcode': '扫码关注「智绕AI」公众号',
  'home.community.register': '免费注册，立即体验',

  // Invite
  'invite.title': '通过邀请朋友获得免费字数！',
  'invite.rewards': '奖励',
  'invite.friend.register': '如果您邀请 1 位朋友注册，',
  'invite.friend.register.reward': '您和您的朋友都将获得 300 字免费额度',
  'invite.friend.subscribe': '如果您邀请 1 位朋友订阅我们的任何付费计划，',
  'invite.friend.subscribe.reward': '您和您的朋友都将获得 1700 字免费额度',
  'invite.button': '立即邀请',
  'invite.limit': '您最多可以邀请 50 位朋友。',
  'invite.step1': '1. 发送邀请链接给您的朋友',
  'invite.step2': '2. 您的朋友通过您的链接注册或订阅',
  'invite.step3': '3. 您和您的朋友会收到奖励字数',
  'invite.status': '状态',
  'invite.registrations': '已邀请注册人数：',
  'invite.subscriptions': '已邀请订阅人数：',
  'invite.earned': '已获得字数：',

  // Login & Register
  'auth.login': '登录账号',
  'auth.email': '邮箱地址',
  'auth.password': '密码',
  'auth.remember': '记住我',
  'auth.forgot': '忘记密码?',
  'auth.loginButton': '登录',
  'auth.otherLogin': '或使用其他方式登录',
  'auth.wechatLogin': '微信登录',
  'auth.noAccount': '还没有账号?',
  'auth.registerNow': '立即注册',
  'auth.terms': '服务条款',
  'auth.privacy': '隐私政策',
  'auth.register': '创建账号',
  'auth.username': '用户名',
  'auth.passwordReq': '密码必须包含至少8个字符，包括字母和数字',
  'auth.passwordHint': '至少8个字符',
  'auth.agree': '我同意',
  'auth.and': '和',
  'auth.registerButton': '注册',
  'auth.otherRegister': '或使用其他方式注册',
  'auth.wechatRegister': '微信注册',
  'auth.hasAccount': '已有账号?',
  'auth.loginNow': '立即登录',

  // Pricing
  'pricing.title': '简单透明的价格方案',
  'pricing.subtitle': '选择最适合您需求的方案，所有计划均提供核心功能',
  'pricing.popular': '最受欢迎',
  'pricing.basic': '基础版',
  'pricing.basic.desc': '适合个人偶尔使用',
  'pricing.basic.price': '￥19.9',
  'pricing.pro': '专业版',
  'pricing.pro.desc': '适合频繁使用的个人用户',
  'pricing.pro.price': '￥49.9',
  'pricing.team': '团队版',
  'pricing.team.desc': '适合小型团队使用',
  'pricing.team.price': '￥149.9',
  'pricing.period': '月',
  'pricing.feature.words10k': '每月10,000字处理量',
  'pricing.feature.words50k': '每月50,000字处理量',
  'pricing.feature.words200k': '每月200,000字处理量',
  'pricing.feature.basicBypass': '基础绕过模式',
  'pricing.feature.advancedBypass': '高级绕过模式',
  'pricing.feature.premiumBypass': '顶级绕过模式',
  'pricing.feature.success85': '最高85%绕过成功率',
  'pricing.feature.success95': '最高95%绕过成功率',
  'pricing.feature.success99': '最高99%绕过成功率',
  'pricing.feature.concurrent5': '5个并发请求',
  'pricing.feature.concurrent20': '20个并发请求',
  'pricing.feature.concurrentUnlimited': '无限并发请求',
  'pricing.feature.emailSupport': '邮件支持',
  'pricing.feature.prioritySupport': '优先邮件支持',
  'pricing.feature.dedicatedSupport': '专属客服支持',
  'pricing.feature.api': 'API访问',
  'pricing.feature.advancedApi': '高级API功能',
  'pricing.feature.batch': '批量处理',
  'pricing.feature.custom': '自定义绕过策略',
  'pricing.feature.team': '团队成员管理',
  'pricing.cta.start': '开始使用',
  'pricing.cta.pro': '选择专业版',
  'pricing.cta.team': '联系销售',
  'pricing.yearly': '年付方案优惠',
  'pricing.yearly.desc': '年付可享受8折优惠，相当于免费获得2.4个月的使用时间',
  'pricing.yearly.button': '查看年付方案',
  'pricing.payment': '支持多种支付方式',
  'pricing.wechat': '微信支付',
  'pricing.alipay': '支付宝',
  'pricing.unionpay': '银联',
  'pricing.faq': '常见问题',
  'pricing.faq.words': '如何计算字数处理量？',
  'pricing.faq.words.answer': '字数处理量是根据输入的原始文本字数计算的。例如，如果您输入了1000字的文本并使用我们的服务处理，那么将消耗1000字的处理量。',
  'pricing.faq.rollover': '如果当月没用完字数额度，是否可以累积到下月？',
  'pricing.faq.rollover.answer': '不可以。每月的字数处理量会在下月初重置。如果您需要处理更多文本，可以随时升级到更高级的方案或购买额外的字数包。',
  'pricing.faq.change': '可以随时更换方案吗？',
  'pricing.faq.change.answer': '是的，您可以随时升级、降级或取消您的订阅。升级时，我们会根据剩余天数按比例计算费用。降级或取消将在当前订阅期结束后生效。',
  'pricing.faq.api': '如何获取API密钥？',
  'pricing.faq.api.answer': '专业版和团队版用户可以在账户设置中生成API密钥。生成后，您可以使用我们提供的文档和示例代码将智绕AI集成到您的应用程序中。',
  'pricing.questions': '还有其他问题？',
  'pricing.contact': '联系我们获取帮助',
  'pricing.ready': '准备好开始使用了吗？',
  'pricing.ready.desc': '选择适合您需求的方案，开始使用智绕AI绕过检测系统',
  'pricing.register': '免费注册，立即开始',

  // Language
  'language.switch': '切换语言',
};

export default translations;
