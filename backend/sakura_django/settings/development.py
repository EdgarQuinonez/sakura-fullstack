# settings/development.py
from .base import *

environ.Env.read_env(os.path.join(BASE_DIR, '.env'), overwrite=True)
env_file_path = os.path.join(BASE_DIR, '.env')
if not os.path.exists(env_file_path):
  raise ValueError(f"{env_file_path=} does not exists")


DEBUG = env.bool('DEBUG', default=True)
SECRET_KEY = env('SECRET_KEY')


ALLOWED_HOSTS = ['localhost', '127.0.0.1']

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
