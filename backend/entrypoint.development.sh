#!/bin/sh

# Apply database migrations
python manage.py flush --noinput
python manage.py migrate --noinput

python manage.py runserver 0.0.0.0:8000

# # Collect static files
# python manage.py collectstatic --noinput

# # Start the application with Gunicorn and enable access logging
# gunicorn sakura_django.wsgi:application \
#     --error-logfile /usr/local/app/error-gunicorn.log \
#     --access-logfile /usr/local/app/access-gunicorn.log \
#     --bind 0.0.0.0:8000
