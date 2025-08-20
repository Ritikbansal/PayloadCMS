# seed_languages_mongo.py
from pymongo import MongoClient

# MongoDB connection string
MONGO_URI = "mongodb://root:example@localhost:27017/my-project?authSource=admin"

# Connect to MongoDB
client = MongoClient(MONGO_URI)
db = client["my-project"]

# Languages collection including French
languages = list(db.languages.find({"code": {"$in": ["en", "es", "fr"]}}))
language_ids = [lang["_id"] for lang in languages]
page_doc = {
    "title": {
        "en": "Transform Your Business with",
        "es": "Transforma Tu Negocio con",
        "fr": "Transformez Votre Entreprise avec",
    },
    "slug": {
        "en": "home",
        "es": "home",
        "fr": "home",
    },
    "layout": {
        "es": [
            {
                "blockType": "hero",
                "badge": "Confiado por más de 10,000 clientes",
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
                        "name": "Sara John",
                        "role": "CEO, TechStart",
                        "avatar": "/professional-woman-ceo.png",
                        "content": "Esta plataforma ha transformado completamente cómo operamos. Las ganancias en eficiencia son notables y la productividad de nuestro equipo ha aumentado un 300%.",
                        "rating": 5,
                    }
                ],
                "trustedBy": [{"company": "TechStart"}, {"company": "InnovateCorp"}],
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
                "blockType": "hero",
                "badge": "Fiable par plus de 10 000 clients",
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
                        "title": "Ultra Rapide",
                        "description": "Profitez de performances ultra-rapides grâce à notre infrastructure optimisée et notre technologie de pointe.",
                    },
                    {
                        "icon": "shield",
                        "title": "Sécurité d'Entreprise",
                        "description": "Sécurité de niveau bancaire avec chiffrement de bout en bout, garantissant que vos données sont toujours protégées.",
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
                        "role": "PDG, TechStart",
                        "avatar": "/professional-woman-ceo.png",
                        "content": "Cette plateforme a complètement transformé notre fonctionnement. Les gains d'efficacité sont remarquables et la productivité de notre équipe a augmenté de 300 %.",
                        "rating": 5,
                    }
                ],
                "trustedBy": [{"company": "TechStart"}, {"company": "InnovateCorp"}],
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
                        "description": "Experience blazing-fast performance with our optimized infrastructure and cutting-edge technology.",
                    },
                    {
                        "icon": "shield",
                        "title": "Enterprise Security",
                        "description": "Bank-level security with end-to-end encryption, ensuring your data is always protected.",
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
                    }
                ],
                "trustedBy": [{"company": "TechStart"}, {"company": "InnovateCorp"}],
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
}

# Insert into pages collection
db.pages.delete_many({})
db.pages.insert_one(page_doc)

print("Page with Hero + FeatureList + Testimonial seeded successfully!")


# Reference the 'languages' collection
languages_collection = db["languages"]

# Expanded seed data
seed_data = [
    {"code": "en", "name": "English", "flag": "🇬🇧"},
    {"code": "es", "name": "Spanish", "flag": "🇪🇸"},
    {"code": "fr", "name": "French", "flag": "🇫🇷"},
]

# Clear existing documents (optional)
languages_collection.delete_many({})

# Insert seed data
languages_collection.insert_many(seed_data)

print("Languages collection seeded successfully!")
