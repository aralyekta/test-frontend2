# Sample ReadTheDocs Project

This is a sample documentation project using Sphinx and ReadTheDocs.

## Setup

1. Create a Python virtual environment:
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

2. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```

3. Build the documentation:
   ```bash
   cd docs
   make html
   ```

The documentation will be built in `docs/_build/html/`.

## Project Structure

- `docs/`: Contains the documentation source files
- `docs/conf.py`: Sphinx configuration file
- `docs/index.rst`: Documentation homepage
- `requirements.txt`: Project dependencies 