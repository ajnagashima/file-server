"""
Application setup and initialization code
"""

import os
import logging

from flask import Flask
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)

db = SQLAlchemy(app)

from .routes import api, pages

