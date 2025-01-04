{
    'name': 'View Inheritance',
    'version': '17.0.1.0.0',
    'category': 'web',
    'summary': 'View Inheritance by Owl',
    'description': """View Inheritance by Owl""",
    'depends': ['base','web'],
    'data': [
        'views/res_partner.xml',
    ],
    'assets': {
        'web.assets_backend': [
            "view_inheritance_odoo/static/src/components/*/*.js",
            "view_inheritance_odoo/static/src/components/*/*.scss",
            "view_inheritance_odoo/static/src/components/*/*.xml"
        ]
    },
    'installable': True,
    'auto_install': False,  
    'application': False,
}