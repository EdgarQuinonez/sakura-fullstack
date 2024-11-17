from .base import *

DEBUG = False

ALLOWED_HOSTS = ['localhost', '127.0.0.1']

# Database setup (customized in environment-specific settings files)
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': env('SQL_DATABASE_NAME'),
        'USER': env('SQL_USER'),
        'PASSWORD': env('SQL_PASSWORD'),
        'HOST': 'db',
        'PORT': env('SQL_PORT'),        
    }
}