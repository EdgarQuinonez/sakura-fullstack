#!/bin/sh

python manage.py migrate --noinput

gunicorn sakura_django.wsgi:application -n backend -b 0.0.0.0:8000