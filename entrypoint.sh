#!/bin/sh

python manage.py migrate --noinput
python manage.py collectstatic --noinput

guincorn sakura_django.wsgi:application --bind 0.0.0.0:8000