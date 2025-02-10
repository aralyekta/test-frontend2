Getting Started
===============

This guide will help you get started with the project.

Installation
-----------

1. First, create a Python virtual environment:

   .. code-block:: bash

      python -m venv venv
      source venv/bin/activate  # On Windows: venv\Scripts\activate

2. Install the required dependencies:

   .. code-block:: bash

      pip install -r requirements.txt

Building the Documentation
------------------------

To build the documentation locally:

1. Navigate to the docs directory:

   .. code-block:: bash

      cd docs

2. Build the HTML documentation:

   .. code-block:: bash

      make html

The built documentation will be available in ``_build/html/``. 