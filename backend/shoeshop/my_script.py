# my_script.py

import os

# Set the DJANGO_SETTINGS_MODULE environment variable
os.environ["DJANGO_SETTINGS_MODULE"] = "shoeshop.settings"

# Now import Django modules
import django
from django.core.management import execute_from_command_line

# Perform any Django-related operations
# For example, running Django management commands
# execute_from_command_line(["manage.py", "migrate"])
# execute_from_command_line(["manage.py", "runserver"])
