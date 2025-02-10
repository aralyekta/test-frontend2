Examples
========

This section provides examples of how to use the project.

Basic Usage
----------

Here's a simple example of using the calculator class:

.. code-block:: python

    from calculator import Calculator

    # Create a calculator instance
    calc = Calculator()

    # Perform some calculations
    result = calc.add(5, 3)
    print(f"5 + 3 = {result}")

Advanced Features
---------------

Code Blocks
~~~~~~~~~~

You can include code blocks with syntax highlighting:

.. code-block:: python

    def factorial(n):
        """Calculate the factorial of a number."""
        if n <= 1:
            return 1
        return n * factorial(n - 1)

    # Calculate factorial of 5
    result = factorial(5)
    print(f"Factorial of 5 is {result}")

Tables
~~~~~~

You can create tables in reStructuredText:

+------------+------------+-----------+
| Header 1   | Header 2   | Header 3  |
+============+============+===========+
| cell 1     | cell 2     | cell 3    |
+------------+------------+-----------+
| cell 4     | cell 5     | cell 6    |
+------------+------------+-----------+

Notes and Warnings
~~~~~~~~~~~~~~~~

.. note::
   This is a note box that can be used to highlight important information.

.. warning::
   This is a warning box for critical information. 