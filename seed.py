# seed_languages_mongo.py
from pymongo import MongoClient

# MongoDB connection string
MONGO_URI = "mongodb://root:example@localhost:27017/great?authSource=admin"

# Connect to MongoDB
client = MongoClient(MONGO_URI)
db = client["great"]

# Languages collection including French
languages = list(
    db.languages.find({"code": {"$in": ["en", "es", "fr", "ru-RU", "zh-CN"]}})
)
language_ids = [lang["_id"] for lang in languages]
page_doc = {
    "title": {
        "en": "Transform Your Business with",
        "es": "Transforma Tu Negocio con",
        "fr": "Transformez Votre Entreprise avec",
        "ru-RU": "Преобразуйте свой бизнес с помощью",
        "zh-CN": "用...改变您的业务",
    },
    "slug": {
        "en": "home",
        "es": "home",
        "fr": "home",
        "zh-CN": "home",
        "ru-RU": "home",
    },
    "layout": {
        "ru-RU": [
            {
                "blockType": "cta",
                "badge": "Нам доверяют более 10 000 компаний",
                "heading": "Готовы преобразовать ваш бизнес?",
                "subheading": "Присоединяйтесь к тысячам успешных компаний, уже использующих нашу платформу. Начните бесплатный пробный период сегодня.",
                "benefits": [
                    {"text": "14-дневный бесплатный период"},
                    {"text": "Без банковской карты"},
                    {"text": "Отмена в любое время"},
                ],
                "primaryCta": {"text": "Начать бесплатно", "link": "/signup"},
                "secondaryCta": {"text": "Запланировать демо", "link": "/demo"},
                "trustBadge": "К нам уже присоединились 10 000+ компаний",
            },
            {
                "blockType": "hero",
                "badge": "Нам доверяют 10 000+ клиентов",
                "heading": "Преобразуйте ваш бизнес с",
                "title": "Преобразуйте свой бизнес с помощью",
                "highlight": "умными решениями",
                "subheading": "Оптимизируйте рабочие процессы, повышайте продуктивность и достигайте выдающихся результатов с нашей передовой платформой для современных компаний.",
                "primaryCta": {"text": "Начать бесплатно", "link": "/signup"},
                "secondaryCta": {"text": "Смотреть демо", "link": "/demo"},
                "stats": [
                    {"value": "99,9%", "label": "Аптайм"},
                    {"value": "50M+", "label": "Обработанных запросов"},
                    {"value": "24/7", "label": "Поддержка"},
                ],
            },
            {
                "blockType": "featureList",
                "heading": "Все, что нужно для успеха",
                "subheading": "Мощные функции, помогающие работать умнее, а не усерднее. Подходит для команд любого размера.",
                "features": [
                    {
                        "icon": "zap",
                        "title": "Молниеносная скорость",
                        "description": "Ощутите сверхбыструю работу благодаря оптимизированной инфраструктуре и передовым технологиям.",
                    },
                    {
                        "icon": "shield",
                        "title": "Безопасность уровня Enterprise",
                        "description": "Банковская безопасность и сквозное шифрование — ваши данные всегда под защитой.",
                    },
                    {
                        "icon": "users",
                        "title": "Командная работа",
                        "description": "Легко сотрудничайте с коллегами в реальном времени, где бы вы ни находились.",
                    },
                    {
                        "icon": "barChart3",
                        "title": "Продвинутая аналитика",
                        "description": "Получайте глубокие бизнес- инсайты с помощью комплексной аналитики и отчетности.",
                    },
                    {
                        "icon": "lock",
                        "title": "Приоритет конфиденциальности",
                        "description": "Мы не делимся вашими данными и строго соблюдаем политику конфиденциальности.",
                    },
                    {
                        "icon": "smartphone",
                        "title": "Готово для мобильных",
                        "description": "Доступ к рабочему пространству из любой точки через полностью оптимизированную мобильную платформу.",
                    },
                ],
            },
            {
                "blockType": "testimonial",
                "heading": "Нас рекомендуют лидеры отрасли",
                "subheading": "Присоединяйтесь к тысячам довольных клиентов, преобразивших бизнес с нашей платформой.",
                "testimonials": [
                    {
                        "name": "Sarah John",
                        "role": "CEO, TechStart",
                        "avatar": "/professional-woman-ceo.png",
                        "content": "Платформа полностью изменила нашу операционную деятельность. Эффективность впечатляет, а продуктивность команды выросла на 300%.",
                        "rating": 5,
                    },
                    {
                        "name": "Michael Chen",
                        "role": "CTO, InnovateCorp",
                        "avatar": "/professional-man-cto.png",
                        "content": "Безопасность и надежность на высшем уровне. С момента перехода у нас не было простоев, а поддержка реагирует молниеносно.",
                        "rating": 5,
                    },
                    {
                        "name": "Emily Guez",
                        "role": "Product Manager, GrowthLab",
                        "avatar": "/professional-woman-product-manager.png",
                        "content": "Аналитика и инсайты радикально улучшили наш процесс принятия решений. Теперь мы уверенно опираемся на данные.",
                        "rating": 5,
                    },
                ],
                "trustedBy": [
                    {"company": "TechStart"},
                    {"company": "InnovateCorp"},
                    {"company": "GrowthLab"},
                    {"company": "NextGen"},
                    {"company": "FutureTech"},
                ],
            },
            {
                "blockType": "footer",
                "companyLinks": [
                    {"label": "О нас", "url": "/about-us"},
                    {"label": "Карьера", "url": "/careers"},
                    {"label": "Пресса", "url": "/press"},
                    {"label": "Блог", "url": "/blog"},
                ],
                "productLinks": [
                    {"label": "Возможности", "url": "/features"},
                    {"label": "Цены", "url": "/pricing"},
                    {"label": "API", "url": "/api"},
                    {"label": "Документация", "url": "/docs"},
                ],
                "supportLinks": [
                    {"label": "Справочный центр", "url": "/help-center"},
                    {"label": "Связаться с нами", "url": "/contact"},
                    {"label": "Статус", "url": "/status"},
                    {"label": "Сообщество", "url": "/community"},
                ],
                "legalLinks": [
                    {"label": "Политика конфиденциальности", "url": "/privacy-policy"},
                    {"label": "Условия использования", "url": "/terms"},
                    {"label": "Политика Cookie", "url": "/cookies"},
                ],
                "socialLinks": [{"platform": "LinkedIn", "url": "/linkedin"}],
                "copyright": "© 2024 Ваша компания. Все права защищены.",
            },
        ],
        "zh-CN": [
            {
                "blockType": "cta",
                "badge": "获超10,000家企业信赖",
                "heading": "准备好变革您的业务了吗？",
                "subheading": "加入数千家已在使用我们平台的成功企业。立即开始您的免费试用。",
                "benefits": [
                    {"text": "14天免费试用"},
                    {"text": "无需信用卡"},
                    {"text": "随时可取消"},
                ],
                "primaryCta": {"text": "开始免费试用", "link": "/signup"},
                "secondaryCta": {"text": "预约演示", "link": "/demo"},
                "trustBadge": "已有10,000+家企业与我们共同成长",
            },
            {
                "blockType": "hero",
                "badge": "赢得10,000+客户信赖",
                "title": "用...改变您的业务",
                "heading": "用",
                "highlight": "智慧解决方案",
                "subheading": "通过我们为现代企业打造的尖端平台，精简工作流程、提升生产力并达成卓越成果。",
                "primaryCta": {"text": "免费开始使用", "link": "/signup"},
                "secondaryCta": {"text": "观看演示", "link": "/demo"},
                "stats": [
                    {"value": "99.9%", "label": "正常运行时间"},
                    {"value": "50M+", "label": "已处理请求"},
                    {"value": "24/7", "label": "支持"},
                ],
            },
            {
                "blockType": "featureList",
                "heading": "成功所需的一切",
                "subheading": "强大功能助您更聪明地工作而非更辛苦。适用于各种规模的团队。",
                "features": [
                    {
                        "icon": "zap",
                        "title": "极速性能",
                        "description": "借助我们优化的基础设施与前沿技术，体验超快性能。",
                    },
                    {
                        "icon": "shield",
                        "title": "企业级安全",
                        "description": "银行级安全与端到端加密，始终保护您的数据。",
                    },
                    {
                        "icon": "users",
                        "title": "团队协作",
                        "description": "无论身在何处，均可与团队成员实时协作。",
                    },
                    {
                        "icon": "barChart3",
                        "title": "高级分析",
                        "description": "借助全面的分析与报表工具，深入洞察您的业务。",
                    },
                    {
                        "icon": "lock",
                        "title": "隐私优先",
                        "description": "我们重视您的隐私。绝不共享您的数据，并严格遵循隐私政策。",
                    },
                    {
                        "icon": "smartphone",
                        "title": "移动优先",
                        "description": "通过全面移动端优化的平台，随时随地访问您的工作空间。",
                    },
                ],
            },
            {
                "blockType": "testimonial",
                "heading": "深受行业领袖喜爱",
                "subheading": "加入数千名满意客户，与我们的平台一起实现业务转型。",
                "testimonials": [
                    {
                        "name": "Sarah John",
                        "role": "CEO，TechStart",
                        "avatar": "/professional-woman-ceo.png",
                        "content": "这个平台彻底改变了我们的运营方式。效率显著提升，我们团队的生产力提高了300%。",
                        "rating": 5,
                    },
                    {
                        "name": "Michael Chen",
                        "role": "CTO，InnovateCorp",
                        "avatar": "/professional-man-cto.png",
                        "content": "安全性和可靠性出类拔萃。自从切换以来我们零停机，支持团队也极其响应迅速。",
                        "rating": 5,
                    },
                    {
                        "name": "Emily Guez",
                        "role": "产品经理，GrowthLab",
                        "avatar": "/professional-woman-product-manager.png",
                        "content": "分析与洞察对我们的决策过程产生了颠覆性影响。我们现在能自信地做出数据驱动的决策。",
                        "rating": 5,
                    },
                ],
                "trustedBy": [
                    {"company": "TechStart"},
                    {"company": "InnovateCorp"},
                    {"company": "GrowthLab"},
                    {"company": "NextGen"},
                    {"company": "FutureTech"},
                ],
            },
            {
                "blockType": "footer",
                "companyLinks": [
                    {"label": "关于我们", "url": "/about-us"},
                    {"label": "加入我们", "url": "/careers"},
                    {"label": "媒体报道", "url": "/press"},
                    {"label": "博客", "url": "/blog"},
                ],
                "productLinks": [
                    {"label": "功能", "url": "/features"},
                    {"label": "定价", "url": "/pricing"},
                    {"label": "API", "url": "/api"},
                    {"label": "文档", "url": "/docs"},
                ],
                "supportLinks": [
                    {"label": "帮助中心", "url": "/help-center"},
                    {"label": "联系客户支持", "url": "/contact"},
                    {"label": "服务状态", "url": "/status"},
                    {"label": "社区", "url": "/community"},
                ],
                "legalLinks": [
                    {"label": "隐私政策", "url": "/privacy-policy"},
                    {"label": "服务条款", "url": "/terms"},
                    {"label": "Cookie 政策", "url": "/cookies"},
                ],
                "socialLinks": [{"platform": "LinkedIn", "url": "/linkedin"}],
                "copyright": "© 2024 您的公司。保留所有权利。",
            },
        ],
        "es": [
            {
                "blockType": "cta",
                "badge": "Confiado por más de 10,000 clientes",
                "heading": "¿Listo para Transformar Tu Negocio?",
                "subheading": "Únete a miles de empresas exitosas que ya usan nuestra plataforma. Comienza tu prueba gratuita hoy.",
                "benefits": [
                    {"text": "Prueba gratuita de 14 días"},
                    {"text": "No se requiere tarjeta de crédito"},
                    {"text": "Cancela en cualquier momento"},
                ],
                "primaryCta": {"text": "Comenzar Gratis", "link": "/signup"},
                "secondaryCta": {"text": "Ver Demostración", "link": "/demo"},
                "trustBadge": "Únete a más de 10,000 empresas que ya están creciendo con nosotros",
            },
            {
                "blockType": "hero",
                "badge": "Confiado por más de 10,000 clientes",
                "title": "Transforma Tu Negocio con",
                "heading": "Transforma Tu Negocio con",
                "highlight": "Soluciones Inteligentes",
                "subheading": "Optimiza tu flujo de trabajo, aumenta la productividad y logra resultados extraordinarios con nuestra plataforma avanzada diseñada para negocios modernos.",
                "primaryCta": {"text": "Comenzar Gratis", "link": "/signup"},
                "secondaryCta": {"text": "Ver Demostración", "link": "/demo"},
                "stats": [
                    {"value": "99.9%", "label": "Tiempo Activo"},
                    {"value": "50M+", "label": "Solicitudes Procesadas"},
                    {"value": "24/7", "label": "Soporte"},
                ],
            },
            {
                "blockType": "featureList",
                "heading": "Todo lo que Necesitas para Tener Éxito",
                "subheading": "Funciones potentes diseñadas para ayudarte a trabajar de manera más inteligente. Construido para equipos de todos los tamaños.",
                "features": [
                    {
                        "icon": "zap",
                        "title": "Rápido como un Rayo",
                        "description": "Experimenta un rendimiento ultrarrápido con nuestra infraestructura optimizada y tecnología de vanguardia.",
                    },
                    {
                        "icon": "shield",
                        "title": "Seguridad Empresarial",
                        "description": "Seguridad a nivel bancario con cifrado de extremo a extremo, asegurando que tus datos siempre estén protegidos.",
                    },
                    {
                        "icon": "users",
                        "title": "Colaboración en Equipo",
                        "description": "Colabora sin esfuerzo con los miembros de tu equipo en tiempo real, sin importar dónde se encuentren.",
                    },
                    {
                        "icon": "barChart3",
                        "title": "Analíticas Avanzadas",
                        "description": "Obtén información profunda sobre tu negocio con herramientas completas de análisis e informes.",
                    },
                    {
                        "icon": "lock",
                        "title": "Privacidad Primero",
                        "description": "Tu privacidad es nuestra prioridad. Nunca compartimos tus datos y seguimos estrictas políticas de privacidad.",
                    },
                    {
                        "icon": "smartphone",
                        "title": "Compatible con Móviles",
                        "description": "Accede a tu espacio de trabajo desde cualquier lugar con nuestra plataforma totalmente optimizada para móviles.",
                    },
                ],
            },
            {
                "blockType": "testimonial",
                "heading": "Amado por Líderes de la Industria",
                "subheading": "Únete a miles de clientes satisfechos que han transformado sus negocios con nuestra plataforma.",
                "testimonials": [
                    {
                        "name": "Sarah John",
                        "role": "CEO, TechStart",
                        "avatar": "/professional-woman-ceo.png",
                        "content": "Esta plataforma ha transformado completamente la forma en que operamos. Las ganancias de eficiencia son notables y la productividad de nuestro equipo ha aumentado en un 300%.",
                        "rating": 5,
                    },
                    {
                        "name": "Michael Chen",
                        "role": "CTO, InnovateCorp",
                        "avatar": "/professional-man-cto.png",
                        "content": "Las funciones de seguridad y la fiabilidad son excepcionales. No hemos tenido tiempo de inactividad desde el cambio y el equipo de soporte es increíblemente receptivo.",
                        "rating": 5,
                    },
                    {
                        "name": "Emily Guez",
                        "role": "Gerente de Producto, GrowthLab",
                        "avatar": "/professional-woman-product-manager.png",
                        "content": "Los análisis e insights han sido un cambio total para nuestro proceso de toma de decisiones. Ahora podemos tomar decisiones basadas en datos con confianza.",
                        "rating": 5,
                    },
                ],
                "trustedBy": [
                    {"company": "TechStart"},
                    {"company": "InnovateCorp"},
                    {"company": "GrowthLab"},
                    {"company": "NextGen"},
                    {"company": "FutureTech"},
                ],
            },
            {
                "blockType": "footer",
                "companyLinks": [
                    {"label": "Sobre Nosotros", "url": "/about-us"},
                    {"label": "Carreras", "url": "/careers"},
                    {"label": "Prensa", "url": "/press"},
                    {"label": "Blog", "url": "/blog"},
                ],
                "productLinks": [
                    {"label": "Características", "url": "/features"},
                    {"label": "Precios", "url": "/pricing"},
                    {"label": "API", "url": "/api"},
                    {"label": "Documentación", "url": "/docs"},
                ],
                "supportLinks": [
                    {"label": "Centro de Ayuda", "url": "/help-center"},
                    {"label": "Contáctanos", "url": "/contact"},
                    {"label": "Estado", "url": "/status"},
                    {"label": "Comunidad", "url": "/community"},
                ],
                "legalLinks": [
                    {"label": "Política de Privacidad", "url": "/privacy-policy"},
                    {"label": "Términos de Servicio", "url": "/terms"},
                    {"label": "Política de Cookies", "url": "/cookies"},
                ],
                "socialLinks": [{"platform": "LinkedIn", "url": "/linkedin"}],
                "copyright": "© 2024 Tu Empresa. Todos los derechos reservados.",
            },
        ],
        "fr": [
            {
                "blockType": "cta",
                "badge": "Fait confiance à plus de 10 000 entreprises",
                "heading": "Prêt à Transformer Votre Entreprise ?",
                "subheading": "Rejoignez des milliers d'entreprises prospères utilisant déjà notre plateforme. Commencez votre essai gratuit dès aujourd'hui.",
                "benefits": [
                    {"text": "Essai gratuit de 14 jours"},
                    {"text": "Pas de carte de crédit requise"},
                    {"text": "Annulez à tout moment"},
                ],
                "primaryCta": {"text": "Commencer Gratuitement", "link": "/signup"},
                "secondaryCta": {"text": "Voir la Démonstration", "link": "/demo"},
                "trustBadge": "Rejoignez plus de 10 000 entreprises qui se développent déjà avec nous",
            },
            {
                "blockType": "hero",
                "badge": "Fiable par plus de 10 000 clients",
                "title": "Transforma Tu Negocio con",
                "heading": "Transformez Votre Entreprise avec",
                "highlight": "Solutions Intelligentes",
                "subheading": "Optimisez votre flux de travail, augmentez la productivité et obtenez des résultats remarquables grâce à notre plateforme de pointe conçue pour les entreprises modernes.",
                "primaryCta": {"text": "Commencer Gratuitement", "link": "/signup"},
                "secondaryCta": {"text": "Voir la Démo", "link": "/demo"},
                "stats": [
                    {"value": "99.9%", "label": "Disponibilité"},
                    {"value": "50M+", "label": "Requêtes Traitées"},
                    {"value": "24/7", "label": "Assistance"},
                ],
            },
            {
                "blockType": "featureList",
                "heading": "Tout ce Dont Vous Avez Besoin pour Réussir",
                "subheading": "Des fonctionnalités puissantes conçues pour vous aider à travailler plus intelligemment, pas plus dur. Conçu pour des équipes de toutes tailles.",
                "features": [
                    {
                        "icon": "zap",
                        "title": "Rapide comme l'Éclair",
                        "description": "Découvrez des performances ultra-rapides grâce à notre infrastructure optimisée et à notre technologie de pointe.",
                    },
                    {
                        "icon": "shield",
                        "title": "Sécurité Entreprise",
                        "description": "Sécurité de niveau bancaire avec cryptage de bout en bout, garantissant que vos données sont toujours protégées.",
                    },
                    {
                        "icon": "users",
                        "title": "Collaboration d'Équipe",
                        "description": "Collaborez facilement avec les membres de votre équipe en temps réel, où qu'ils soient.",
                    },
                    {
                        "icon": "barChart3",
                        "title": "Analytique Avancée",
                        "description": "Obtenez des insights approfondis sur votre entreprise avec des outils complets d'analyse et de reporting.",
                    },
                    {
                        "icon": "lock",
                        "title": "Priorité à la Confidentialité",
                        "description": "Votre confidentialité est notre priorité. Nous ne partageons jamais vos données et suivons des politiques strictes de confidentialité.",
                    },
                    {
                        "icon": "smartphone",
                        "title": "Optimisé pour Mobile",
                        "description": "Accédez à votre espace de travail depuis n'importe où grâce à notre plateforme entièrement optimisée pour les mobiles.",
                    },
                ],
            },
            {
                "blockType": "testimonial",
                "heading": "Approuvé par les Leaders de l'Industrie",
                "subheading": "Rejoignez des milliers de clients satisfaits qui ont transformé leur entreprise grâce à notre plateforme.",
                "testimonials": [
                    {
                        "name": "Sarah John",
                        "role": "CEO, TechStart",
                        "avatar": "/professional-woman-ceo.png",
                        "content": "Cette plateforme a complètement transformé notre façon de travailler. Les gains d'efficacité sont remarquables et la productivité de notre équipe a augmenté de 300%.",
                        "rating": 5,
                    },
                    {
                        "name": "Michael Chen",
                        "role": "CTO, InnovateCorp",
                        "avatar": "/professional-man-cto.png",
                        "content": "Les fonctionnalités de sécurité et la fiabilité sont exceptionnelles. Nous n'avons eu aucune interruption depuis le changement et l'équipe de support est extrêmement réactive.",
                        "rating": 5,
                    },
                    {
                        "name": "Emily Guez",
                        "role": "Chef de Produit, GrowthLab",
                        "avatar": "/professional-woman-product-manager.png",
                        "content": "Les analyses et les insights ont été révolutionnaires pour notre processus de prise de décision. Nous pouvons désormais prendre des décisions basées sur les données en toute confiance.",
                        "rating": 5,
                    },
                ],
                "trustedBy": [
                    {"company": "TechStart"},
                    {"company": "InnovateCorp"},
                    {"company": "GrowthLab"},
                    {"company": "NextGen"},
                    {"company": "FutureTech"},
                ],
            },
            {
                "blockType": "footer",
                "companyLinks": [
                    {"label": "À Propos", "url": "/about-us"},
                    {"label": "Carrières", "url": "/careers"},
                    {"label": "Presse", "url": "/press"},
                    {"label": "Blog", "url": "/blog"},
                ],
                "productLinks": [
                    {"label": "Fonctionnalités", "url": "/features"},
                    {"label": "Tarifs", "url": "/pricing"},
                    {"label": "API", "url": "/api"},
                    {"label": "Documentation", "url": "/docs"},
                ],
                "supportLinks": [
                    {"label": "Centre d’Aide", "url": "/help-center"},
                    {"label": "Contactez-nous", "url": "/contact"},
                    {"label": "Statut", "url": "/status"},
                    {"label": "Communauté", "url": "/community"},
                ],
                "legalLinks": [
                    {"label": "Politique de Confidentialité", "url": "/privacy-policy"},
                    {"label": "Conditions d’Utilisation", "url": "/terms"},
                    {"label": "Politique de Cookies", "url": "/cookies"},
                ],
                "socialLinks": [{"platform": "LinkedIn", "url": "/linkedin"}],
                "copyright": "© 2024 Votre Entreprise. Tous droits réservés.",
            },
        ],
        "en": [
            {
                "blockType": "cta",
                "badge": "Trusted by over 10,000 businesses",
                "heading": "Ready to Transform Your Business?",
                "subheading": "Join thousands of successful businesses already using our platform. Start your free trial today.",
                "benefits": [
                    {"text": "14-day free trial"},
                    {"text": "No credit card required"},
                    {"text": "Cancel anytime"},
                ],
                "primaryCta": {"text": "Start Free Trial", "link": "/signup"},
                "secondaryCta": {"text": "Schedule Demo", "link": "/demo"},
                "trustBadge": "Join 10,000+ businesses already growing with us",
            },
            {
                "blockType": "hero",
                "badge": "Trusted by 10,000+ customers",
                "heading": "Transform Your Business with",
                "highlight": "Smart Solutions",
                "subheading": "Streamline your workflow, boost productivity, and achieve remarkable results with our cutting-edge platform designed for modern businesses.",
                "primaryCta": {"text": "Get Started Free", "link": "/signup"},
                "secondaryCta": {"text": "Watch Demo", "link": "/demo"},
                "stats": [
                    {"value": "99.9%", "label": "Uptime"},
                    {"value": "50M+", "label": "Requests Processed"},
                    {"value": "24/7", "label": "Support"},
                ],
            },
            {
                "blockType": "featureList",
                "heading": "Everything You Need to Succeed",
                "subheading": "Powerful features designed to help you work smarter, not harder. Built for teams of all sizes.",
                "features": [
                    {
                        "icon": "zap",
                        "title": "Lightning Fast",
                        "description": "Experience ultra-fast performance with our optimized infrastructure and cutting-edge technology.",
                    },
                    {
                        "icon": "shield",
                        "title": "Enterprise Security",
                        "description": "Bank-level security with end-to-end encryption, ensuring your data is always protected.",
                    },
                    {
                        "icon": "users",
                        "title": "Team Collaboration",
                        "description": "Effortlessly collaborate with your team members in real time, no matter where they are.",
                    },
                    {
                        "icon": "barChart3",
                        "title": "Advanced Analytics",
                        "description": "Gain deep insights into your business with comprehensive analytics and reporting tools.",
                    },
                    {
                        "icon": "lock",
                        "title": "Privacy First",
                        "description": "Your privacy is our priority. We never share your data and follow strict privacy policies.",
                    },
                    {
                        "icon": "smartphone",
                        "title": "Mobile Ready",
                        "description": "Access your workspace from anywhere with our fully mobile-optimized platform.",
                    },
                ],
            },
            {
                "blockType": "testimonial",
                "heading": "Loved by Industry Leaders",
                "subheading": "Join thousands of satisfied customers who have transformed their businesses with our platform.",
                "testimonials": [
                    {
                        "name": "Sarah John",
                        "role": "CEO, TechStart",
                        "avatar": "/professional-woman-ceo.png",
                        "content": "This platform has completely transformed how we operate. The efficiency gains are remarkable, and our team productivity has increased by 300%.",
                        "rating": 5,
                    },
                    {
                        "name": "Michael Chen",
                        "role": "CTO, InnovateCorp",
                        "avatar": "/professional-man-cto.png",
                        "content": "The security features and reliability are outstanding. We've had zero downtime since switching, and the support team is incredibly responsive.",
                        "rating": 5,
                    },
                    {
                        "name": "Emily Guez",
                        "role": "Product Manager, GrowthLab",
                        "avatar": "/professional-woman-product-manager.png",
                        "content": "The analytics and insights have been game-changing for our decision-making process. We can now make data-driven decisions with confidence.",
                        "rating": 5,
                    },
                ],
                "trustedBy": [
                    {"company": "TechStart"},
                    {"company": "InnovateCorp"},
                    {"company": "GrowthLab"},
                    {"company": "NextGen"},
                    {"company": "FutureTech"},
                ],
            },
            {
                "blockType": "footer",
                "companyLinks": [
                    {"label": "About Us", "url": "/about-us"},
                    {"label": "Careers", "url": "/careers"},
                    {"label": "Press", "url": "/press"},
                    {"label": "Blog", "url": "/blog"},
                ],
                "productLinks": [
                    {"label": "Features", "url": "/features"},
                    {"label": "Pricing", "url": "/pricing"},
                    {"label": "API", "url": "/api"},
                    {"label": "Documentation", "url": "/docs"},
                ],
                "supportLinks": [
                    {"label": "Help Center", "url": "/help-center"},
                    {"label": "Contact Us", "url": "/contact"},
                    {"label": "Status", "url": "/status"},
                    {"label": "Community", "url": "/community"},
                ],
                "legalLinks": [
                    {"label": "Privacy Policy", "url": "/privacy-policy"},
                    {"label": "Terms of Service", "url": "/terms"},
                    {"label": "Cookie Policy", "url": "/cookies"},
                ],
                "socialLinks": [{"platform": "LinkedIn", "url": "/linkedin"}],
                "copyright": "© 2024 Your Company. All rights reserved.",
            },
        ],
    },
    "languages": language_ids,
    "seo": {
        "title": {
            "en": "Transform Your Business with Smart Solutions | Restroworks",
            "es": "Transforma tu negocio con soluciones inteligentes | Restroworks",
            "fr": "Transformez votre entreprise avec des solutions intelligentes | Restroworks",
            "ru": "Преобразуйте свой бизнес с умными решениями | Restroworks",
            "zh-CN": "用智能解决方案改变您的业务 | Restroworks",
        },
        "description": {
            "en": "Streamline your workflow, boost productivity, and achieve remarkable results. Trusted by 10,000+ businesses worldwide. Start your free trial today.",
            "es": "Optimiza tu flujo de trabajo, aumenta la productividad y obtén resultados extraordinarios. Con la confianza de más de 10.000 empresas en todo el mundo. Empieza tu prueba gratuita hoy.",
            "fr": "Optimisez votre flux de travail, augmentez votre productivité et obtenez des résultats remarquables. Plus de 10 000 entreprises dans le monde nous font confiance. Commencez votre essai gratuit dès aujourd'hui.",
            "ru": "Оптимизируйте рабочие процессы, повысьте продуктивность и достигайте выдающихся результатов. Нам доверяют более 10 000 компаний по всему миру. Начните бесплатный пробный период уже сегодня.",
            "zh-CN": "简化工作流程，提高生产力，实现卓越成果。全球超过 10,000 家企业的信赖之选。立即开始您的免费试用。",
        },
        "canonicalURL": "https://restroworks.ritik.app",
        "ogTitle": {
            "en": "Transform Your Business with Smart Solutions | Restroworks",
            "es": "Transforma tu negocio con soluciones inteligentes | Restroworks",
            "fr": "Transformez votre entreprise avec des solutions intelligentes | Restroworks",
            "ru": "Преобразуйте свой бизнес с умными решениями | Restroworks",
            "zh-CN": "用智能解决方案改变您的业务 | Restroworks",
        },
        "ogDescription": {
            "en": "Streamline your workflow, boost productivity, and achieve remarkable results.",
            "es": "Optimiza tu flujo de trabajo, aumenta la productividad y obtén resultados extraordinarios.",
            "fr": "Optimisez votre flux de travail, augmentez votre productivité et obtenez des résultats remarquables.",
            "ru": "Оптимизируйте рабочие процессы, повысьте продуктивность и достигайте выдающихся результатов.",
            "zh-CN": "简化工作流程，提高生产力，实现卓越成果。",
        },
        "ogImage": "professional-woman-ceo.png",
        "twitterCard": "summary_large_image",
        "twitterTitle": {
            "en": "Transform Your Business with Smart Solutions | Restroworks",
            "es": "Transforma tu negocio con soluciones inteligentes | Restroworks",
            "fr": "Transformez votre entreprise avec des solutions intelligentes | Restroworks",
            "ru": "Преобразуйте свой бизнес с умными решениями | Restroworks",
            "zh-CN": "用智能解决方案改变您的业务 | Restroworks",
        },
        "twitterDescription": {
            "en": "Trusted by 10,000+ businesses worldwide. Start your free trial today.",
            "es": "Con la confianza de más de 10.000 empresas en todo el mundo. Empieza tu prueba gratuita hoy.",
            "fr": "Plus de 10 000 entreprises dans le monde nous font confiance. Commencez votre essai gratuit dès aujourd'hui.",
            "ru": "Нам доверяют более 10 000 компаний по всему миру. Начните бесплатный пробный период уже сегодня.",
            "zh-CN": "全球超过 10,000 家企业的信赖之选。立即开始您的免费试用。",
        },
        "twitterImage": "professional-man-cto.png",
    },
}


product_doc = {
    "title": {
        "en": "Transform Your Business with",
        "es": "Transforma Tu Negocio con",
        "fr": "Transformez Votre Entreprise avec",
        "ru-RU": "Преобразуйте свой бизнес с помощью",
        "zh-CN": "用...改变您的业务",
    },
    "slug": {
        "en": "products",
        "es": "products",
        "fr": "products",
        "zh-CN": "products",
        "ru-RU": "products",
    },
    "layout": {
        "ru-RU": [
            {
                "blockType": "productHero",
                "badge": "✨ Новые функции доступны",
                "title": "Создавай лучше",
                "highlight": "Продукты быстрее",
                "subheading": "Полная платформа для современного создания продуктов. Проектируйте, создавайте прототипы и запускайте с уверенностью.",
                "primaryCta": {
                    "text": "Начать бесплатный пробный период",
                    "link": "/signup",
                },
                "secondaryCta": {"text": "Смотреть демо", "link": "/demo"},
                "stats": [
                    {"value": "50K+", "label": "Активные пользователи"},
                    {"value": "99.9%", "label": "Время безотказной работы"},
                    {"value": "24/7", "label": "Поддержка"},
                ],
            },
            {
                "blockType": "productFeatures",
                "heading": "Все, что нужно для успеха",
                "subheading": "Мощные функции, созданные для оптимизации рабочего процесса и ускорения разработки продукта.",
                "features": [
                    {
                        "icon": "Zap",
                        "title": "Молниеносная скорость",
                        "description": "Создано для высокой скорости с оптимизированной производительностью и мгновенной загрузкой.",
                        "badge": "Производительность",
                    },
                    {
                        "icon": "Shield",
                        "title": "Корпоративная безопасность",
                        "description": "Банковский уровень безопасности с сквозным шифрованием и сертификатами соответствия.",
                        "badge": "Безопасность",
                    },
                    {
                        "icon": "Users",
                        "title": "Командная работа",
                        "description": "Инструменты для совместной работы в реальном времени, которые держат вашу команду в синхронизации и продуктивности.",
                        "badge": "Совместная работа",
                    },
                    {
                        "icon": "BarChart3",
                        "title": "Расширенная аналитика",
                        "description": "Глубокая аналитика и инсайты для принятия решений на основе данных.",
                        "badge": "Аналитика",
                    },
                    {
                        "icon": "Palette",
                        "title": "Индивидуальный брендинг",
                        "description": "Полностью настраиваемый интерфейс, идеально соответствующий вашей айдентике.",
                        "badge": "Дизайн",
                    },
                    {
                        "icon": "Code",
                        "title": "API для разработчиков",
                        "description": "Полноценный REST API с подробной документацией и SDK.",
                        "badge": "Интеграция",
                    },
                    {
                        "icon": "Globe",
                        "title": "Глобальный CDN",
                        "description": "Мировая сеть доставки контента для оптимальной производительности везде.",
                        "badge": "Инфраструктура",
                    },
                    {
                        "icon": "Smartphone",
                        "title": "Готово для мобильных",
                        "description": "Адаптивный дизайн, идеально работающий на всех устройствах и экранах.",
                        "badge": "Мобильность",
                    },
                    {
                        "icon": "Lock",
                        "title": "Конфиденциальность данных",
                        "description": "Соответствие GDPR с полным контролем над вашими данными и настройками конфиденциальности.",
                        "badge": "Приватность",
                    },
                ],
            },
            {
                "blockType": "productPricing",
                "heading": "Выберите свой тариф",
                "subheading": "Начните бесплатно и масштабируйтесь по мере роста. Все тарифы включают основные функции без скрытых платежей.",
                "plans": [
                    {
                        "name": "Стартовый",
                        "price": "9 $",
                        "period": "/месяц",
                        "description": "Идеально для частных лиц и небольших проектов",
                        "features": [
                            {"item": "До 3 проектов"},
                            {"item": "5 ГБ хранилища"},
                            {"item": "Базовая аналитика"},
                            {"item": "Поддержка по email"},
                            {"item": "Стандартные шаблоны"},
                        ],
                        "popular": False,
                    },
                    {
                        "name": "Профессиональный",
                        "price": "29 $",
                        "period": "/месяц",
                        "description": "Подходит для растущих команд и бизнеса",
                        "features": [
                            {"item": "Неограниченные проекты"},
                            {"item": "100 ГБ хранилища"},
                            {"item": "Расширенная аналитика"},
                            {"item": "Приоритетная поддержка"},
                            {"item": "Индивидуальный брендинг"},
                            {"item": "Командная работа"},
                            {"item": "Доступ к API"},
                        ],
                        "popular": True,
                    },
                    {
                        "name": "Корпоративный",
                        "price": "Индивидуально",
                        "period": "",
                        "description": "Для крупных организаций с особыми потребностями",
                        "features": [
                            {"item": "Все из тарифа Профессиональный"},
                            {"item": "Неограниченное хранилище"},
                            {"item": "Индивидуальные интеграции"},
                            {"item": "Выделенная поддержка"},
                            {"item": "Гарантия SLA"},
                            {"item": "Расширенная безопасность"},
                            {"item": "Индивидуальное обучение"},
                        ],
                        "popular": False,
                    },
                ],
                "bottomNote": "Все тарифы включают 14-дневный бесплатный пробный период. Банковская карта не требуется.",
            },
            {
                "blockType": "productShowcase",
                "sections": [
                    {
                        "badge": "Рабочий процесс",
                        "title": "Оптимизированный процесс разработки",
                        "description": "От идеи до развертывания — наша платформа предоставляет все инструменты для эффективного создания выдающихся продуктов.",
                        "list": [
                            {
                                "item": "Визуальное планирование проектов и дорожные карты"
                            },
                            {
                                "item": "Интегрированные инструменты дизайна и прототипирования"
                            },
                            {"item": "Автоматическое тестирование и развертывание"},
                            {"item": "Совместная работа команды в реальном времени"},
                        ],
                        "cta": {"text": "Узнать больше", "link": "/learn-more"},
                    },
                    {
                        "badge": "Совместная работа",
                        "title": "Создано для успеха команды",
                        "description": "Дайте вашей команде мощные инструменты для продуктивной и бесшовной совместной работы.",
                        "list": [
                            {"item": "Редактирование и комментарии в реальном времени"},
                            {"item": "Контроль версий и отслеживание изменений"},
                            {"item": "Ролевые разрешения и доступ"},
                            {"item": "Интегрированные инструменты коммуникации"},
                        ],
                        "cta": {
                            "text": "Начать сотрудничество",
                            "link": "/collaborate",
                        },
                    },
                ],
            },
            {
                "blockType": "footer",
                "companyLinks": [
                    {"label": "О нас", "url": "/about-us"},
                    {"label": "Карьера", "url": "/careers"},
                    {"label": "Пресса", "url": "/press"},
                    {"label": "Блог", "url": "/blog"},
                ],
                "productLinks": [
                    {"label": "Функции", "url": "/features"},
                    {"label": "Тарифы", "url": "/pricing"},
                    {"label": "API", "url": "/api"},
                    {"label": "Документация", "url": "/docs"},
                ],
                "supportLinks": [
                    {"label": "Центр поддержки", "url": "/help-center"},
                    {"label": "Связаться с нами", "url": "/contact"},
                    {"label": "Статус", "url": "/status"},
                    {"label": "Сообщество", "url": "/community"},
                ],
                "legalLinks": [
                    {"label": "Политика конфиденциальности", "url": "/privacy-policy"},
                    {"label": "Условия использования", "url": "/terms"},
                    {"label": "Политика cookies", "url": "/cookies"},
                ],
                "socialLinks": [{"platform": "LinkedIn", "url": "/linkedin"}],
                "copyright": "© 2024 Ваша компания. Все права защищены.",
            },
        ],
        "zh-CN": [
            {
                "blockType": "productHero",
                "badge": "✨ 新功能已上线",
                "title": "更好地构建",
                "highlight": "更快的产品",
                "subheading": "现代产品开发的完整平台。自信地设计、原型和发布。",
                "primaryCta": {"text": "开始免费试用", "link": "/signup"},
                "secondaryCta": {"text": "观看演示", "link": "/demo"},
                "stats": [
                    {"value": "50K+", "label": "活跃用户"},
                    {"value": "99.9%", "label": "正常运行时间"},
                    {"value": "24/7", "label": "全天候支持"},
                ],
            },
            {
                "blockType": "productFeatures",
                "heading": "成功所需的一切",
                "subheading": "强大的功能旨在简化工作流程，加速产品开发过程。",
                "features": [
                    {
                        "icon": "Zap",
                        "title": "闪电般的速度",
                        "description": "专为速度而生，优化性能，即时加载。",
                        "badge": "性能",
                    },
                    {
                        "icon": "Shield",
                        "title": "企业级安全",
                        "description": "银行级安全，端到端加密与合规认证。",
                        "badge": "安全",
                    },
                    {
                        "icon": "Users",
                        "title": "团队协作",
                        "description": "实时协作工具，让团队保持同步和高效。",
                        "badge": "协作",
                    },
                    {
                        "icon": "BarChart3",
                        "title": "高级分析",
                        "description": "深入洞察和分析，帮助您做出数据驱动的决策。",
                        "badge": "分析",
                    },
                    {
                        "icon": "Palette",
                        "title": "自定义品牌",
                        "description": "完全可定制的界面，与您的品牌形象完美契合。",
                        "badge": "设计",
                    },
                    {
                        "icon": "Code",
                        "title": "开发者 API",
                        "description": "全面的 REST API，附带丰富文档和 SDK。",
                        "badge": "集成",
                    },
                    {
                        "icon": "Globe",
                        "title": "全球 CDN",
                        "description": "全球内容分发网络，确保在任何地方都能获得最佳性能。",
                        "badge": "基础设施",
                    },
                    {
                        "icon": "Smartphone",
                        "title": "移动端就绪",
                        "description": "响应式设计，完美适配所有设备和屏幕尺寸。",
                        "badge": "移动端",
                    },
                    {
                        "icon": "Lock",
                        "title": "数据隐私",
                        "description": "符合 GDPR，完全掌控您的数据与隐私设置。",
                        "badge": "隐私",
                    },
                ],
            },
            {
                "blockType": "productPricing",
                "heading": "选择您的方案",
                "subheading": "免费开始，随业务增长扩展。所有方案都包含核心功能，无任何隐藏费用。",
                "plans": [
                    {
                        "name": "入门版",
                        "price": "¥9",
                        "period": "/月",
                        "description": "适合个人和小型项目",
                        "features": [
                            {"item": "最多 3 个项目"},
                            {"item": "5GB 存储"},
                            {"item": "基础分析"},
                            {"item": "邮件支持"},
                            {"item": "标准模板"},
                        ],
                        "popular": False,
                    },
                    {
                        "name": "专业版",
                        "price": "¥29",
                        "period": "/月",
                        "description": "适合成长中的团队和企业",
                        "features": [
                            {"item": "无限项目"},
                            {"item": "100GB 存储"},
                            {"item": "高级分析"},
                            {"item": "优先支持"},
                            {"item": "自定义品牌"},
                            {"item": "团队协作"},
                            {"item": "API 访问"},
                        ],
                        "popular": True,
                    },
                    {
                        "name": "企业版",
                        "price": "定制",
                        "period": "",
                        "description": "适合有特定需求的大型组织",
                        "features": [
                            {"item": "包含专业版的所有功能"},
                            {"item": "无限存储"},
                            {"item": "定制集成"},
                            {"item": "专属支持"},
                            {"item": "SLA 保证"},
                            {"item": "高级安全"},
                            {"item": "定制培训"},
                        ],
                        "popular": False,
                    },
                ],
                "bottomNote": "所有方案均包含 14 天免费试用，无需信用卡。",
            },
            {
                "blockType": "productShowcase",
                "sections": [
                    {
                        "badge": "工作流程",
                        "title": "精简的开发流程",
                        "description": "从创意到部署，我们的平台提供您所需的所有工具，高效打造卓越产品。",
                        "list": [
                            {"item": "可视化项目规划与路线图"},
                            {"item": "集成设计与原型工具"},
                            {"item": "自动化测试与部署"},
                            {"item": "实时团队协作"},
                        ],
                        "cta": {"text": "了解更多", "link": "/learn-more"},
                    },
                    {
                        "badge": "协作",
                        "title": "为团队成功而建",
                        "description": "赋能您的团队，利用协作工具实现无缝高效的工作方式。",
                        "list": [
                            {"item": "实时编辑与评论"},
                            {"item": "版本控制与变更追踪"},
                            {"item": "基于角色的权限与访问"},
                            {"item": "集成通信工具"},
                        ],
                        "cta": {"text": "开始协作", "link": "/collaborate"},
                    },
                ],
            },
            {
                "blockType": "footer",
                "companyLinks": [
                    {"label": "关于我们", "url": "/about-us"},
                    {"label": "招聘", "url": "/careers"},
                    {"label": "新闻", "url": "/press"},
                    {"label": "博客", "url": "/blog"},
                ],
                "productLinks": [
                    {"label": "功能", "url": "/features"},
                    {"label": "价格", "url": "/pricing"},
                    {"label": "API", "url": "/api"},
                    {"label": "文档", "url": "/docs"},
                ],
                "supportLinks": [
                    {"label": "帮助中心", "url": "/help-center"},
                    {"label": "联系我们", "url": "/contact"},
                    {"label": "系统状态", "url": "/status"},
                    {"label": "社区", "url": "/community"},
                ],
                "legalLinks": [
                    {"label": "隐私政策", "url": "/privacy-policy"},
                    {"label": "服务条款", "url": "/terms"},
                    {"label": "Cookie 政策", "url": "/cookies"},
                ],
                "socialLinks": [{"platform": "LinkedIn", "url": "/linkedin"}],
                "copyright": "© 2024 您的公司。保留所有权利。",
            },
        ],
        "es": [
            {
                "blockType": "productHero",
                "badge": "✨ Nuevas funciones disponibles",
                "title": "Construye Mejor",
                "highlight": "Productos Más Rápido",
                "subheading": "La plataforma completa para el desarrollo moderno de productos. Diseña, haz prototipos y lanza con confianza.",
                "primaryCta": {"text": "Comenzar prueba gratis", "link": "/signup"},
                "secondaryCta": {"text": "Ver demo", "link": "/demo"},
                "stats": [
                    {"value": "50K+", "label": "Usuarios activos"},
                    {"value": "99.9%", "label": "Disponibilidad"},
                    {"value": "24/7", "label": "Soporte"},
                ],
            },
            {
                "blockType": "productFeatures",
                "heading": "Todo lo que necesitas para tener éxito",
                "subheading": "Funciones potentes diseñadas para optimizar tu flujo de trabajo y acelerar tu proceso de desarrollo.",
                "features": [
                    {
                        "icon": "Zap",
                        "title": "Velocidad Relámpago",
                        "description": "Diseñado para la velocidad con un rendimiento optimizado y tiempos de carga instantáneos.",
                        "badge": "Rendimiento",
                    },
                    {
                        "icon": "Shield",
                        "title": "Seguridad Empresarial",
                        "description": "Seguridad de nivel bancario con cifrado de extremo a extremo y certificaciones de cumplimiento.",
                        "badge": "Seguridad",
                    },
                    {
                        "icon": "Users",
                        "title": "Colaboración en Equipo",
                        "description": "Herramientas de colaboración en tiempo real que mantienen a tu equipo sincronizado y productivo.",
                        "badge": "Colaboración",
                    },
                    {
                        "icon": "BarChart3",
                        "title": "Analítica Avanzada",
                        "description": "Información y análisis profundos para ayudarte a tomar decisiones basadas en datos.",
                        "badge": "Analítica",
                    },
                    {
                        "icon": "Palette",
                        "title": "Personalización de Marca",
                        "description": "Interfaz totalmente personalizable que se adapta perfectamente a la identidad de tu marca.",
                        "badge": "Diseño",
                    },
                    {
                        "icon": "Code",
                        "title": "API para Desarrolladores",
                        "description": "API REST completa con documentación extensa y SDKs.",
                        "badge": "Integración",
                    },
                    {
                        "icon": "Globe",
                        "title": "CDN Global",
                        "description": "Red mundial de distribución de contenido para un rendimiento óptimo en cualquier lugar.",
                        "badge": "Infraestructura",
                    },
                    {
                        "icon": "Smartphone",
                        "title": "Listo para Móviles",
                        "description": "Diseño responsivo que funciona perfectamente en todos los dispositivos y tamaños de pantalla.",
                        "badge": "Móvil",
                    },
                    {
                        "icon": "Lock",
                        "title": "Privacidad de Datos",
                        "description": "Cumple con el RGPD con control total sobre tus datos y configuraciones de privacidad.",
                        "badge": "Privacidad",
                    },
                ],
            },
            {
                "blockType": "productPricing",
                "heading": "Elige tu Plan",
                "subheading": "Empieza gratis y escala a medida que creces. Todos los planes incluyen nuestras funciones principales sin costos ocultos.",
                "plans": [
                    {
                        "name": "Inicial",
                        "price": "9 $",
                        "period": "/mes",
                        "description": "Perfecto para individuos y proyectos pequeños",
                        "features": [
                            {"item": "Hasta 3 proyectos"},
                            {"item": "5 GB de almacenamiento"},
                            {"item": "Analítica básica"},
                            {"item": "Soporte por correo electrónico"},
                            {"item": "Plantillas estándar"},
                        ],
                        "popular": False,
                    },
                    {
                        "name": "Profesional",
                        "price": "29 $",
                        "period": "/mes",
                        "description": "Ideal para equipos y empresas en crecimiento",
                        "features": [
                            {"item": "Proyectos ilimitados"},
                            {"item": "100 GB de almacenamiento"},
                            {"item": "Analítica avanzada"},
                            {"item": "Soporte prioritario"},
                            {"item": "Personalización de marca"},
                            {"item": "Colaboración en equipo"},
                            {"item": "Acceso a la API"},
                        ],
                        "popular": True,
                    },
                    {
                        "name": "Empresarial",
                        "price": "Personalizado",
                        "period": "",
                        "description": "Para grandes organizaciones con necesidades específicas",
                        "features": [
                            {"item": "Todo en Profesional"},
                            {"item": "Almacenamiento ilimitado"},
                            {"item": "Integraciones personalizadas"},
                            {"item": "Soporte dedicado"},
                            {"item": "Garantía SLA"},
                            {"item": "Seguridad avanzada"},
                            {"item": "Capacitación personalizada"},
                        ],
                        "popular": False,
                    },
                ],
                "bottomNote": "Todos los planes incluyen una prueba gratuita de 14 días. No se requiere tarjeta de crédito.",
            },
            {
                "blockType": "productShowcase",
                "sections": [
                    {
                        "badge": "Flujo de trabajo",
                        "title": "Proceso de Desarrollo Simplificado",
                        "description": "Desde la idea hasta el despliegue, nuestra plataforma ofrece todas las herramientas que necesitas para crear productos excepcionales de manera eficiente.",
                        "list": [
                            {
                                "item": "Planificación visual de proyectos y hojas de ruta"
                            },
                            {"item": "Herramientas integradas de diseño y prototipado"},
                            {"item": "Pruebas y despliegue automatizados"},
                            {"item": "Colaboración en equipo en tiempo real"},
                        ],
                        "cta": {"text": "Saber más", "link": "/learn-more"},
                    },
                    {
                        "badge": "Colaboración",
                        "title": "Diseñado para el Éxito del Equipo",
                        "description": "Impulsa a tu equipo con herramientas de colaboración que hacen que trabajar juntos sea sencillo y productivo.",
                        "list": [
                            {"item": "Edición y comentarios en tiempo real"},
                            {"item": "Control de versiones y seguimiento de cambios"},
                            {"item": "Permisos y accesos basados en roles"},
                            {"item": "Herramientas de comunicación integradas"},
                        ],
                        "cta": {"text": "Empezar a colaborar", "link": "/collaborate"},
                    },
                ],
            },
            {
                "blockType": "footer",
                "companyLinks": [
                    {"label": "Sobre nosotros", "url": "/about-us"},
                    {"label": "Carreras", "url": "/careers"},
                    {"label": "Prensa", "url": "/press"},
                    {"label": "Blog", "url": "/blog"},
                ],
                "productLinks": [
                    {"label": "Funciones", "url": "/features"},
                    {"label": "Precios", "url": "/pricing"},
                    {"label": "API", "url": "/api"},
                    {"label": "Documentación", "url": "/docs"},
                ],
                "supportLinks": [
                    {"label": "Centro de ayuda", "url": "/help-center"},
                    {"label": "Contáctanos", "url": "/contact"},
                    {"label": "Estado", "url": "/status"},
                    {"label": "Comunidad", "url": "/community"},
                ],
                "legalLinks": [
                    {"label": "Política de privacidad", "url": "/privacy-policy"},
                    {"label": "Términos de servicio", "url": "/terms"},
                    {"label": "Política de cookies", "url": "/cookies"},
                ],
                "socialLinks": [{"platform": "LinkedIn", "url": "/linkedin"}],
                "copyright": "© 2024 Tu Empresa. Todos los derechos reservados.",
            },
        ],
        "fr": [
            {
                "blockType": "productHero",
                "badge": "✨ Nouvelles fonctionnalités disponibles",
                "title": "Construisez Mieux",
                "highlight": "des Produits Plus Rapidement",
                "subheading": "La plateforme complète pour le développement de produits modernes. Concevez, prototypez et lancez en toute confiance.",
                "primaryCta": {"text": "Commencer l’essai gratuit", "link": "/signup"},
                "secondaryCta": {"text": "Regarder la démo", "link": "/demo"},
                "stats": [
                    {"value": "50K+", "label": "Utilisateurs actifs"},
                    {"value": "99,9%", "label": "Disponibilité"},
                    {"value": "24/7", "label": "Assistance"},
                ],
            },
            {
                "blockType": "productFeatures",
                "heading": "Tout ce dont vous avez besoin pour réussir",
                "subheading": "Des fonctionnalités puissantes conçues pour simplifier votre flux de travail et accélérer votre processus de développement.",
                "features": [
                    {
                        "icon": "Zap",
                        "title": "Ultra Rapide",
                        "description": "Conçu pour la vitesse avec des performances optimisées et des temps de chargement instantanés.",
                        "badge": "Performance",
                    },
                    {
                        "icon": "Shield",
                        "title": "Sécurité Entreprise",
                        "description": "Sécurité de niveau bancaire avec chiffrement de bout en bout et certifications de conformité.",
                        "badge": "Sécurité",
                    },
                    {
                        "icon": "Users",
                        "title": "Collaboration d’Équipe",
                        "description": "Outils de collaboration en temps réel qui gardent votre équipe synchronisée et productive.",
                        "badge": "Collaboration",
                    },
                    {
                        "icon": "BarChart3",
                        "title": "Analytique Avancée",
                        "description": "Des informations et analyses approfondies pour vous aider à prendre des décisions basées sur les données.",
                        "badge": "Analytique",
                    },
                    {
                        "icon": "Palette",
                        "title": "Personnalisation de la Marque",
                        "description": "Interface entièrement personnalisable qui correspond parfaitement à l’identité de votre marque.",
                        "badge": "Design",
                    },
                    {
                        "icon": "Code",
                        "title": "API Développeur",
                        "description": "API REST complète avec documentation détaillée et SDKs.",
                        "badge": "Intégration",
                    },
                    {
                        "icon": "Globe",
                        "title": "CDN Global",
                        "description": "Réseau mondial de diffusion de contenu pour des performances optimales partout.",
                        "badge": "Infrastructure",
                    },
                    {
                        "icon": "Smartphone",
                        "title": "Optimisé Mobile",
                        "description": "Design réactif qui fonctionne parfaitement sur tous les appareils et tailles d’écran.",
                        "badge": "Mobile",
                    },
                    {
                        "icon": "Lock",
                        "title": "Protection des Données",
                        "description": "Conforme au RGPD avec un contrôle total sur vos données et paramètres de confidentialité.",
                        "badge": "Confidentialité",
                    },
                ],
            },
            {
                "blockType": "productPricing",
                "heading": "Choisissez Votre Forfait",
                "subheading": "Commencez gratuitement et évoluez à mesure que vous grandissez. Tous les forfaits incluent nos fonctionnalités principales sans frais cachés.",
                "plans": [
                    {
                        "name": "Starter",
                        "price": "9 $",
                        "period": "/mois",
                        "description": "Parfait pour les individus et les petits projets",
                        "features": [
                            {"item": "Jusqu’à 3 projets"},
                            {"item": "5 Go de stockage"},
                            {"item": "Analytique de base"},
                            {"item": "Assistance par email"},
                            {"item": "Modèles standards"},
                        ],
                        "popular": False,
                    },
                    {
                        "name": "Professionnel",
                        "price": "29 $",
                        "period": "/mois",
                        "description": "Idéal pour les équipes et entreprises en croissance",
                        "features": [
                            {"item": "Projets illimités"},
                            {"item": "100 Go de stockage"},
                            {"item": "Analytique avancée"},
                            {"item": "Assistance prioritaire"},
                            {"item": "Personnalisation de la marque"},
                            {"item": "Collaboration d’équipe"},
                            {"item": "Accès API"},
                        ],
                        "popular": True,
                    },
                    {
                        "name": "Entreprise",
                        "price": "Sur mesure",
                        "period": "",
                        "description": "Pour les grandes organisations avec des besoins spécifiques",
                        "features": [
                            {"item": "Tout dans Professionnel"},
                            {"item": "Stockage illimité"},
                            {"item": "Intégrations personnalisées"},
                            {"item": "Support dédié"},
                            {"item": "Garantie SLA"},
                            {"item": "Sécurité avancée"},
                            {"item": "Formation personnalisée"},
                        ],
                        "popular": False,
                    },
                ],
                "bottomNote": "Tous les forfaits incluent un essai gratuit de 14 jours. Aucune carte de crédit requise.",
            },
            {
                "blockType": "productShowcase",
                "sections": [
                    {
                        "badge": "Flux de travail",
                        "title": "Processus de Développement Simplifié",
                        "description": "De l’idéation au déploiement, notre plateforme fournit tous les outils nécessaires pour créer des produits exceptionnels efficacement.",
                        "list": [
                            {
                                "item": "Planification visuelle des projets et feuilles de route"
                            },
                            {"item": "Outils intégrés de conception et de prototypage"},
                            {"item": "Tests et déploiements automatisés"},
                            {"item": "Collaboration d’équipe en temps réel"},
                        ],
                        "cta": {"text": "En savoir plus", "link": "/learn-more"},
                    },
                    {
                        "badge": "Collaboration",
                        "title": "Conçu pour la Réussite d’Équipe",
                        "description": "Donnez à votre équipe les moyens de collaborer efficacement grâce à des outils qui rendent le travail ensemble fluide et productif.",
                        "list": [
                            {"item": "Édition et commentaires en temps réel"},
                            {"item": "Contrôle de version et suivi des changements"},
                            {"item": "Autorisations et accès basés sur les rôles"},
                            {"item": "Outils de communication intégrés"},
                        ],
                        "cta": {
                            "text": "Commencer à collaborer",
                            "link": "/collaborate",
                        },
                    },
                ],
            },
            {
                "blockType": "footer",
                "companyLinks": [
                    {"label": "À propos de nous", "url": "/about-us"},
                    {"label": "Carrières", "url": "/careers"},
                    {"label": "Presse", "url": "/press"},
                    {"label": "Blog", "url": "/blog"},
                ],
                "productLinks": [
                    {"label": "Fonctionnalités", "url": "/features"},
                    {"label": "Tarifs", "url": "/pricing"},
                    {"label": "API", "url": "/api"},
                    {"label": "Documentation", "url": "/docs"},
                ],
                "supportLinks": [
                    {"label": "Centre d’aide", "url": "/help-center"},
                    {"label": "Contactez-nous", "url": "/contact"},
                    {"label": "Statut", "url": "/status"},
                    {"label": "Communauté", "url": "/community"},
                ],
                "legalLinks": [
                    {"label": "Politique de confidentialité", "url": "/privacy-policy"},
                    {"label": "Conditions d’utilisation", "url": "/terms"},
                    {"label": "Politique relative aux cookies", "url": "/cookies"},
                ],
                "socialLinks": [{"platform": "LinkedIn", "url": "/linkedin"}],
                "copyright": "© 2024 Votre Société. Tous droits réservés.",
            },
        ],
        "en": [
            {
                "blockType": "productHero",
                "badge": "✨ New Features Available",
                "title": "Build Better",
                "highlight": "Products Faster",
                "subheading": "The complete platform for modern product development. Design, prototype, and ship with confidence.",
                "primaryCta": {"text": "Start Free Trial", "link": "/signup"},
                "secondaryCta": {"text": "Watch Demo", "link": "/demo"},
                "stats": [
                    {"value": "50K+", "label": "Active Users"},
                    {"value": "99.9%", "label": "Uptime"},
                    {"value": "24/7", "label": "Support"},
                ],
            },
            {
                "blockType": "productFeatures",
                "heading": "Everything You Need to Succeed",
                "subheading": "Powerful features designed to streamline your workflow and accelerate your product development process.",
                "features": [
                    {
                        "icon": "Zap",
                        "title": "Lightning Fast",
                        "description": "Built for speed with optimized performance and instant loading times.",
                        "badge": "Performance",
                    },
                    {
                        "icon": "Shield",
                        "title": "Enterprise Security",
                        "description": "Bank-grade security with end-to-end encryption and compliance certifications.",
                        "badge": "Security",
                    },
                    {
                        "icon": "Users",
                        "title": "Team Collaboration",
                        "description": "Real-time collaboration tools that keep your team in sync and productive.",
                        "badge": "Collaboration",
                    },
                    {
                        "icon": "BarChart3",
                        "title": "Advanced Analytics",
                        "description": "Deep insights and analytics to help you make data-driven decisions.",
                        "badge": "Analytics",
                    },
                    {
                        "icon": "Palette",
                        "title": "Custom Branding",
                        "description": "Fully customizable interface that matches your brand identity perfectly.",
                        "badge": "Design",
                    },
                    {
                        "icon": "Code",
                        "title": "Developer API",
                        "description": "Comprehensive REST API with extensive documentation and SDKs.",
                        "badge": "Integration",
                    },
                    {
                        "icon": "Globe",
                        "title": "Global CDN",
                        "description": "Worldwide content delivery network for optimal performance everywhere.",
                        "badge": "Infrastructure",
                    },
                    {
                        "icon": "Smartphone",
                        "title": "Mobile Ready",
                        "description": "Responsive design that works perfectly on all devices and screen sizes.",
                        "badge": "Mobile",
                    },
                    {
                        "icon": "Lock",
                        "title": "Data Privacy",
                        "description": "GDPR compliant with complete control over your data and privacy settings.",
                        "badge": "Privacy",
                    },
                ],
            },
            {
                "blockType": "productPricing",
                "heading": "Choose Your Plan",
                "subheading": "Start free and scale as you grow. All plans include our core features with no hidden fees.",
                "plans": [
                    {
                        "name": "Starter",
                        "price": "$9",
                        "period": "/month",
                        "description": "Perfect for individuals and small projects",
                        "features": [
                            {"item": "Up to 3 projects"},
                            {"item": "5GB storage"},
                            {"item": "Basic analytics"},
                            {"item": "Email support"},
                            {"item": "Standard templates"},
                        ],
                        "popular": False,
                    },
                    {
                        "name": "Professional",
                        "price": "$29",
                        "period": "/month",
                        "description": "Ideal for growing teams and businesses",
                        "features": [
                            {"item": "Unlimited projects"},
                            {"item": "100GB storage"},
                            {"item": "Advanced analytics"},
                            {"item": "Priority support"},
                            {"item": "Custom branding"},
                            {"item": "Team collaboration"},
                            {"item": "API access"},
                        ],
                        "popular": True,
                    },
                    {
                        "name": "Enterprise",
                        "price": "Custom",
                        "period": "",
                        "description": "For large organizations with specific needs",
                        "features": [
                            {"item": "Everything in Professional"},
                            {"item": "Unlimited storage"},
                            {"item": "Custom integrations"},
                            {"item": "Dedicated support"},
                            {"item": "SLA guarantee"},
                            {"item": "Advanced security"},
                            {"item": "Custom training"},
                        ],
                        "popular": False,
                    },
                ],
                "bottomNote": "All plans include a 14-day free trial. No credit card required.",
            },
            {
                "blockType": "productShowcase",
                "sections": [
                    {
                        "badge": "Workflow",
                        "title": "Streamlined Development Process",
                        "description": "From ideation to deployment, our platform provides all the tools you need to build exceptional products efficiently.",
                        "list": [
                            {"item": "Visual project planning and roadmaps"},
                            {"item": "Integrated design and prototyping tools"},
                            {"item": "Automated testing and deployment"},
                            {"item": "Real-time team collaboration"},
                        ],
                        "cta": {"text": "Learn More", "link": "/learn-more"},
                    },
                    {
                        "badge": "Collaboration",
                        "title": "Built for Team Success",
                        "description": "Empower your team with collaborative tools that make working together seamless and productive.",
                        "list": [
                            {"item": "Real-time editing and commenting"},
                            {"item": "Version control and change tracking"},
                            {"item": "Role-based permissions and access"},
                            {"item": "Integrated communication tools"},
                        ],
                        "cta": {"text": "Start Collaborating", "link": "/collaborate"},
                    },
                ],
            },
            {
                "blockType": "footer",
                "companyLinks": [
                    {"label": "About Us", "url": "/about-us"},
                    {"label": "Careers", "url": "/careers"},
                    {"label": "Press", "url": "/press"},
                    {"label": "Blog", "url": "/blog"},
                ],
                "productLinks": [
                    {"label": "Features", "url": "/features"},
                    {"label": "Pricing", "url": "/pricing"},
                    {"label": "API", "url": "/api"},
                    {"label": "Documentation", "url": "/docs"},
                ],
                "supportLinks": [
                    {"label": "Help Center", "url": "/help-center"},
                    {"label": "Contact Us", "url": "/contact"},
                    {"label": "Status", "url": "/status"},
                    {"label": "Community", "url": "/community"},
                ],
                "legalLinks": [
                    {"label": "Privacy Policy", "url": "/privacy-policy"},
                    {"label": "Terms of Service", "url": "/terms"},
                    {"label": "Cookie Policy", "url": "/cookies"},
                ],
                "socialLinks": [{"platform": "LinkedIn", "url": "/linkedin"}],
                "copyright": "© 2024 Your Company. All rights reserved.",
            },
        ],
    },
    "languages": language_ids,
    "seo": {
        "title": {
            "en": "Transform Your Business with Smart Solutions | Restroworks",
            "es": "Transforma tu negocio con soluciones inteligentes | Restroworks",
            "fr": "Transformez votre entreprise avec des solutions intelligentes | Restroworks",
            "ru": "Преобразуйте свой бизнес с умными решениями | Restroworks",
            "zh-CN": "用智能解决方案改变您的业务 | Restroworks",
        },
        "description": {
            "en": "Streamline your workflow, boost productivity, and achieve remarkable results. Trusted by 10,000+ businesses worldwide. Start your free trial today.",
            "es": "Optimiza tu flujo de trabajo, aumenta la productividad y obtén resultados extraordinarios. Con la confianza de más de 10.000 empresas en todo el mundo. Empieza tu prueba gratuita hoy.",
            "fr": "Optimisez votre flux de travail, augmentez votre productivité et obtenez des résultats remarquables. Plus de 10 000 entreprises dans le monde nous font confiance. Commencez votre essai gratuit dès aujourd'hui.",
            "ru": "Оптимизируйте рабочие процессы, повысьте продуктивность и достигайте выдающихся результатов. Нам доверяют более 10 000 компаний по всему миру. Начните бесплатный пробный период уже сегодня.",
            "zh-CN": "简化工作流程，提高生产力，实现卓越成果。全球超过 10,000 家企业的信赖之选。立即开始您的免费试用。",
        },
        "canonicalURL": "https://restroworks.ritik.app",
        "ogTitle": {
            "en": "Transform Your Business with Smart Solutions | Restroworks",
            "es": "Transforma tu negocio con soluciones inteligentes | Restroworks",
            "fr": "Transformez votre entreprise avec des solutions intelligentes | Restroworks",
            "ru": "Преобразуйте свой бизнес с умными решениями | Restroworks",
            "zh-CN": "用智能解决方案改变您的业务 | Restroworks",
        },
        "ogDescription": {
            "en": "Streamline your workflow, boost productivity, and achieve remarkable results.",
            "es": "Optimiza tu flujo de trabajo, aumenta la productividad y obtén resultados extraordinarios.",
            "fr": "Optimisez votre flux de travail, augmentez votre productivité et obtenez des résultats remarquables.",
            "ru": "Оптимизируйте рабочие процессы, повысьте продуктивность и достигайте выдающихся результатов.",
            "zh-CN": "简化工作流程，提高生产力，实现卓越成果。",
        },
        "ogImage": "professional-woman-ceo.png",
        "twitterCard": "summary_large_image",
        "twitterTitle": {
            "en": "Transform Your Business with Smart Solutions | Restroworks",
            "es": "Transforma tu negocio con soluciones inteligentes | Restroworks",
            "fr": "Transformez votre entreprise avec des solutions intelligentes | Restroworks",
            "ru": "Преобразуйте свой бизнес с умными решениями | Restroworks",
            "zh-CN": "用智能解决方案改变您的业务 | Restroworks",
        },
        "twitterDescription": {
            "en": "Trusted by 10,000+ businesses worldwide. Start your free trial today.",
            "es": "Con la confianza de más de 10.000 empresas en todo el mundo. Empieza tu prueba gratuita hoy.",
            "fr": "Plus de 10 000 entreprises dans le monde nous font confiance. Commencez votre essai gratuit dès aujourd'hui.",
            "ru": "Нам доверяют более 10 000 компаний по всему миру. Начните бесплатный пробный период уже сегодня.",
            "zh-CN": "全球超过 10,000 家企业的信赖之选。立即开始您的免费试用。",
        },
        "twitterImage": "professional-man-cto.png",
    },
}

# Insert into pages collection
db.pages.delete_many({})
db.pages.insert_one(page_doc)
db.pages.insert_one(product_doc)


print("Page with Hero + FeatureList + Testimonial seeded successfully!")


# Reference the 'languages' collection
languages_collection = db["languages"]

# Expanded seed data
seed_data = [
    {"code": "en", "name": "English", "flag": "🇬🇧"},
    {"code": "es", "name": "Spanish", "flag": "🇪🇸"},
    {"code": "fr", "name": "French", "flag": "🇫🇷"},
    {"code": "zh-CN", "name": "Chinese (Simplified)", "flag": "🇨🇳"},
    {"code": "ru-RU", "name": "Russian", "flag": "🇷🇺"},
]


# Clear existing documents (optional)
languages_collection.delete_many({})

# Insert seed data
languages_collection.insert_many(seed_data)

print("Languages collection seeded successfully!")
