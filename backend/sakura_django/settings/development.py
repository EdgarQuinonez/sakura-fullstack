# settings/development.py
from .base import *

environ.Env.read_env(os.path.join(BASE_DIR, '.env.dev'), overwrite=True)

DEBUG = env.bool('DEBUG', default=True)
SECRET_KEY = env('SECRET_KEY')
ALLOWED_HOSTS = env("DJANGO_ALLOWED_HOSTS").split(" ")

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': env('POSTGRES_DB'),
        'USER': env('POSTGRES_USER'),
        'PASSWORD': env('POSTGRES_PASSWORD'),
        'HOST': env('POSTGRES_HOST'),
        'PORT': env('POSTGRES_PORT'),
    }
}
