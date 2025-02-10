import os
import sys
sys.path.insert(0, os.path.abspath('..'))

# Project information
project = 'Sample ReadTheDocs Project'
copyright = '2024, Your Name'
author = 'Your Name'
release = '0.1.0'

# General configuration
extensions = [
    'sphinx.ext.autodoc',
    'sphinx.ext.viewcode',
    'sphinx.ext.napoleon',
    'myst_parser'
]

templates_path = ['_templates']
exclude_patterns = ['_build', 'Thumbs.db', '.DS_Store']

# HTML output options
html_theme = 'sphinx_rtd_theme'
html_static_path = ['_static']

# If true, `todo` and `todoList` produce output
todo_include_todos = True 